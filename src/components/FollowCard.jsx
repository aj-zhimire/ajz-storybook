import { useState, useEffect } from 'react'

export default function FollowCard() {
  const [isFollowing, setIsFollowing] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    // Initialize from localStorage
    const following = localStorage.getItem('ajz-following') === 'true'
    setIsFollowing(following)
    if (following) {
      setStatusMessage("You'll be notified of new content!")
    }

    // Smooth scroll handler for follow link
    const followLink = document.querySelector('a[href="#follow-card"]')
    if (followLink) {
      followLink.addEventListener('click', (e) => {
        e.preventDefault()
        document.getElementById('follow-card')?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      })
    }
  }, [])

  const showWelcomeNotification = () => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('AJZ Storybook', {
        body: "You're now following! You'll get notified of new stories and discoveries.",
        icon: 'favicon.ico',
        tag: 'follow-welcome',
      })
    }
  }

  const showUnfollowNotification = () => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('AJZ Storybook', {
        body: "You've unfollowed. You can follow again anytime!",
        icon: 'favicon.ico',
        tag: 'unfollow-confirm',
      })
    }
  }

  const fallbackToBookmark = () => {
    setIsFollowing(true)
    localStorage.setItem('ajz-following', 'true')
    localStorage.setItem('ajz-follow-date', new Date().toISOString())
    localStorage.setItem('ajz-follow-method', 'bookmark')

    if (window.sidebar && window.sidebar.addPanel) {
      window.sidebar.addPanel(document.title, window.location.href, '')
    } else if (window.external && 'AddFavorite' in window.external) {
      window.external.AddFavorite(window.location.href, document.title)
    } else {
      alert('Following via bookmark! Press Ctrl+D (Cmd+D on Mac) to save this page.')
    }

    setStatusMessage("You'll be notified of new content!")
  }

  const startFollowing = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          showWelcomeNotification()
          setIsFollowing(true)
          localStorage.setItem('ajz-following', 'true')
          localStorage.setItem('ajz-follow-date', new Date().toISOString())
          setStatusMessage("You'll be notified of new content!")
        } else {
          fallbackToBookmark()
        }
      })
    } else {
      fallbackToBookmark()
    }
  }

  const stopFollowing = () => {
    setIsFollowing(false)
    localStorage.setItem('ajz-following', 'false')
    setStatusMessage('')
    showUnfollowNotification()
  }

  const toggleFollow = () => {
    if (!isFollowing) {
      startFollowing()
    } else {
      stopFollowing()
    }
  }

  return (
    <section id="follow-card" className="follow-section">
      <div className="card follow-card">
        <div className="follow-header">
          <span className="follow-icon">📬</span>
          <h3>Stay Updated</h3>
        </div>
        <p className="follow-description">
          Get notified when new stories, essays, and science experiments are published.
        </p>
        <button
          id="followBtn"
          className={`follow-btn ${isFollowing ? 'following' : ''}`}
          onClick={toggleFollow}
          title={isFollowing ? 'Unfollow' : 'Follow for updates'}
          aria-label={isFollowing ? 'Unfollow' : 'Follow for updates'}
        >
          <span id="followIcon" className="btn-icon">
            {isFollowing ? '✓' : '⭐'}
          </span>
          <span id="followText">{isFollowing ? 'Following' : 'Follow'}</span>
        </button>
        <p id="followStatus" className={`follow-status ${statusMessage ? 'active' : ''}`}>
          {statusMessage}
        </p>
      </div>
    </section>
  )
}
