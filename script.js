// Tiny JS for mobile menu and reading-time demo (placeholder)
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Follow Card Component Module
const FollowCard = {
  isFollowing: false,
  
  init() {
    this.isFollowing = localStorage.getItem('ajz-following') === 'true';
    this.updateUI();
    this.bindEvents();
  },
  
  bindEvents() {
    // Smooth scroll to follow card (now at bottom)
    const followLink = document.querySelector('a[href="#follow-card"]');
    if (followLink) {
      followLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('follow-card').scrollIntoView({ 
          behavior: 'smooth',
          block: 'center' // Center the card in viewport for better visibility
        });
      });
    }
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
        } else {
          this.fallbackToBookmark();
        }
        this.updateUI();
      });
    } else {
      this.fallbackToBookmark();
    }
  },
  
  stopFollowing() {
    this.setFollowing(false);
    this.updateUI();
    this.showUnfollowNotification();
  },
  
  setFollowing(status) {
    this.isFollowing = status;
    localStorage.setItem('ajz-following', status.toString());
    if (status) {
      localStorage.setItem('ajz-follow-date', new Date().toISOString());
    }
  },
  
  showWelcomeNotification() {
    new Notification('AJZ Storybook', {
      body: "You're now following! You'll get notified of new stories and discoveries.",
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
  
  fallbackToBookmark() {
    this.setFollowing(true);
    localStorage.setItem('ajz-follow-method', 'bookmark');
    
    if (window.sidebar && window.sidebar.addPanel) {
      window.sidebar.addPanel(document.title, window.location.href, "");
    } else if (window.external && ('AddFavorite' in window.external)) {
      window.external.AddFavorite(window.location.href, document.title);
    } else {
      alert('Following via bookmark! Press Ctrl+D (Cmd+D on Mac) to save this page.');
    }
    this.updateUI();
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
      followStatus.textContent = "You'll be notified of new content!";
      followStatus.className = 'follow-status active';
    } else {
      followIcon.textContent = '⭐';
      followText.textContent = 'Follow';
      followBtn.classList.remove('following');
      followStatus.textContent = '';
      followStatus.className = 'follow-status';
    }
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