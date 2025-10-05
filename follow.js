// Follow Component Module - Dedicated to follow functionality
const FollowCard = {
  isFollowing: false,
  followData: {},
  
  init() {
    this.loadFollowData();
    this.updateUI();
    this.bindEvents();
    this.updateStats();
    this.setupPeriodicCheck();
  },
  
  loadFollowData() {
    // Try multiple storage methods
    const localData = localStorage.getItem('ajz-following-data');
    
    if (localData) {
      try {
        this.followData = JSON.parse(localData);
        this.isFollowing = this.followData.following === true;
      } catch (e) {
        // Fallback to simple boolean check
        this.isFollowing = localStorage.getItem('ajz-following') === 'true';
      }
    }
    
    // Verify notification permission still exists
    if (this.isFollowing && 'Notification' in window && Notification.permission === 'denied') {
      this.promptRePermission();
    }
  },
  
  saveFollowData() {
    this.followData = {
      following: this.isFollowing,
      method: this.isFollowing ? (Notification.permission === 'granted' ? 'notification' : 'bookmark') : null,
      followDate: this.isFollowing ? (this.followData.followDate || new Date().toISOString()) : null,
      lastCheck: new Date().toISOString(),
      deviceId: this.getDeviceId()
    };
    
    // Save to localStorage
    localStorage.setItem('ajz-following-data', JSON.stringify(this.followData));
    localStorage.setItem('ajz-following', this.isFollowing.toString());
  },
  
  getDeviceId() {
    let deviceId = localStorage.getItem('ajz-device-id');
    if (!deviceId) {
      deviceId = 'device-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now();
      localStorage.setItem('ajz-device-id', deviceId);
    }
    return deviceId;
  },
  
  bindEvents() {
    // Set current year
    const yearEl = document.querySelector('[data-year]');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  },
  
  toggle() {
    if (!this.isFollowing) {
      this.startFollowing();
    } else {
      this.stopFollowing();
    }
  },
  
  startFollowing() {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          this.showWelcomeNotification();
          this.setFollowing(true);
        } else if (permission === 'denied') {
          this.showPermissionDeniedMessage();
        } else {
          this.smartBookmark();
        }
        this.updateUI();
        this.updateStats();
      });
    } else {
      this.smartBookmark();
    }
  },
  
  stopFollowing() {
    this.setFollowing(false);
    this.updateUI();
    this.updateStats();
    this.showUnfollowNotification();
  },
  
  setFollowing(status) {
    this.isFollowing = status;
    this.saveFollowData();
  },
  
  showWelcomeNotification() {
    new Notification('AJZ Storybook', {
      body: "🎉 You're now following! You'll get notified of new stories and discoveries.",
      icon: 'favicon.ico',
      tag: 'follow-welcome'
    });
  },
  
  showUnfollowNotification() {
    if (Notification.permission === 'granted') {
      new Notification('AJZ Storybook', {
        body: "You've unfollowed. You can follow again anytime!",
        icon: 'favicon.ico',
        tag: 'unfollow-confirm'
      });
    }
  },
  
  showPermissionDeniedMessage() {
    const followStatus = document.getElementById('followStatus');
    if (followStatus) {
      followStatus.innerHTML = `
        <div class="permission-denied">
          ⚠️ Notifications blocked. Try the RSS feed or bookmark option instead!
        </div>
      `;
    }
  },
  
  promptRePermission() {
    const followStatus = document.getElementById('followStatus');
    if (followStatus) {
      followStatus.innerHTML = `
        <div class="permission-prompt">
          ⚠️ Notifications were disabled. 
          <button onclick="FollowCard.requestNotificationAgain()" class="retry-btn">Re-enable</button>
        </div>
      `;
    }
  },
  
  requestNotificationAgain() {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        this.showWelcomeNotification();
        this.setFollowing(true);
      }
      this.updateUI();
    });
  },
  
  smartBookmark() {
    this.setFollowing(true);
    
    // Enhanced bookmark experience
    const bookmarkMessage = `
      📖 Great choice! Here's how to stay connected:
      
      1. Press Ctrl+D (Cmd+D on Mac) to bookmark this page
      2. We'll remember you're following 
      3. Visit anytime to see what's new!
      
      Tip: Add this page to your browser's bookmarks bar for quick access.
    `;
    
    alert(bookmarkMessage);
    this.updateUI();
    this.updateStats();
  },
  
  updateUI() {
    const followBtn = document.getElementById('followBtn');
    const followIcon = document.getElementById('followIcon');
    const followText = document.getElementById('followText');
    const followStatus = document.getElementById('followStatus');
    
    if (!followBtn) return;
    
    if (this.isFollowing) {
      followIcon.textContent = '✓';
      followText.textContent = 'Following';
      followBtn.classList.add('following');
      
      const method = this.followData.method === 'notification' ? 'browser notifications' : 'smart bookmarks';
      followStatus.innerHTML = `
        <div class="follow-success">
          🎉 You're following via ${method}! 
          <button onclick="FollowCard.stopFollowing()" class="unfollow-btn">Unfollow</button>
        </div>
      `;
    } else {
      followIcon.textContent = '⭐';
      followText.textContent = 'Enable Notifications';
      followBtn.classList.remove('following');
      followStatus.textContent = '';
    }
  },
  
  updateStats() {
    const followStats = document.getElementById('followStats');
    if (!followStats) return;
    
    if (this.isFollowing && this.followData.followDate) {
      const followDate = new Date(this.followData.followDate);
      const daysSince = Math.floor((new Date() - followDate) / (1000 * 60 * 60 * 24));
      
      followStats.innerHTML = `
        <div class="stats-info">
          <h4>📊 Your Follow Status</h4>
          <p><strong>Following since:</strong> ${followDate.toLocaleDateString()}</p>
          <p><strong>Days following:</strong> ${daysSince} days</p>
          <p><strong>Method:</strong> ${this.followData.method === 'notification' ? 'Browser Notifications' : 'Smart Bookmarks'}</p>
        </div>
      `;
    }
  },
  
  setupPeriodicCheck() {
    // Check every 30 seconds if user is still following
    setInterval(() => {
      if (this.isFollowing) {
        this.saveFollowData(); // Update lastCheck timestamp
      }
    }, 30000);
  },
  
  // Method to notify followers (call this when you publish new content)
  notifyFollowers(title, message) {
    if (this.isFollowing && Notification.permission === 'granted') {
      new Notification(title, {
        body: message,
        icon: 'favicon.ico',
        tag: 'new-content',
        requireInteraction: true
      });
    }
  }
};

// Global function for the onclick handler
function toggleFollow() {
  FollowCard.toggle();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  FollowCard.init();
});