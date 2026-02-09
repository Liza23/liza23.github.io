---
layout: archive
title: "Blog Posts"
permalink: /blogs/
author_profile: true
---

<style>
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2em;
  margin-top: 2em;
}

.blog-card {
  background: white;
  border-radius: 12px;
  padding: 2em;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.blog-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(102, 126, 234, 0.15);
  border-color: #667eea;
}

.blog-card:hover::before {
  transform: scaleX(1);
}

.blog-title {
  font-size: 1.4em;
  font-weight: 700;
  margin-bottom: 0.5em;
  color: #1a202c;
  line-height: 1.3;
}

.blog-title a {
  color: #1a202c;
  text-decoration: none;
  transition: color 0.3s ease;
}

.blog-title a:hover {
  color: #667eea;
}

.blog-excerpt {
  color: #2d3748;
  line-height: 1.6;
  margin-bottom: 1em;
  font-size: 0.95em;
}

.blog-meta {
  display: flex;
  align-items: center;
  gap: 1em;
  font-size: 0.85em;
  color: #718096;
  margin-bottom: 1em;
}

.blog-tag {
  display: inline-block;
  padding: 0.3em 0.8em;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 20px;
  font-size: 0.75em;
  font-weight: 600;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
}

.blog-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  color: #667eea;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.blog-link:hover {
  color: #764ba2;
  transform: translateX(5px);
}

.section-intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3em;
  color: #2d3748;
  line-height: 1.8;
}

.medium-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.8em 1.5em;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  margin: 2em auto;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.medium-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  color: white;
}
</style>

<div class="section-intro">
  <p>Welcome to my blog! I write about AI, research, life in Tokyo, and everything in between. Check out my latest posts below or visit my <a href="https://medium.com/@lizadahiya01" target="_blank" class="medium-badge">Medium Profile →</a></p>
</div>

<div class="blog-grid">

  <div class="blog-card">
    <div class="blog-meta">
      <span>📅 2024</span>
    </div>
    <h3 class="blog-title">
      <a href="https://medium.com/@lizadahiya01/all-the-tiny-ways-tokyo-stayed-with-me-1001127bf3b0" target="_blank">
        All the Tiny Ways Tokyo Stayed with Me
      </a>
    </h3>
    <p class="blog-excerpt">
      A heartfelt reflection on how living in Tokyo left an indelible mark on my life, from the small daily rituals to the profound cultural experiences.
    </p>
    <div>
      <span class="blog-tag">Tokyo</span>
      <span class="blog-tag">Life</span>
      <span class="blog-tag">Culture</span>
    </div>
    <a href="https://medium.com/@lizadahiya01/all-the-tiny-ways-tokyo-stayed-with-me-1001127bf3b0" target="_blank" class="blog-link">
      Read on Medium →
    </a>
  </div>

  <div class="blog-card">
    <div class="blog-meta">
      <span>📅 2024</span>
    </div>
    <h3 class="blog-title">
      <a href="https://medium.com/@lizadahiya01/solo-in-atami-my-adventures-along-the-sagami-bay-60ec3a895e5e" target="_blank">
        Solo in Atami: My Adventures Along the Sagami Bay
      </a>
    </h3>
    <p class="blog-excerpt">
      Join me on a solo adventure to Atami, where I explored the beautiful Sagami Bay, discovered hidden gems, and embraced the art of traveling alone.
    </p>
    <div>
      <span class="blog-tag">Travel</span>
      <span class="blog-tag">Japan</span>
      <span class="blog-tag">Adventure</span>
    </div>
    <a href="https://medium.com/@lizadahiya01/solo-in-atami-my-adventures-along-the-sagami-bay-60ec3a895e5e" target="_blank" class="blog-link">
      Read on Medium →
    </a>
  </div>

  <div class="blog-card">
    <div class="blog-meta">
      <span>📅 2023</span>
    </div>
    <h3 class="blog-title">
      <a href="https://medium.com/@lizadahiya01/the-sport-japan-taught-me-to-love-4eeb75a390a0" target="_blank">
        The Sport Japan Taught Me to Love
      </a>
    </h3>
    <p class="blog-excerpt">
      Discovering a new passion through Japanese culture - how living in Japan introduced me to a sport I never knew I'd fall in love with.
    </p>
    <div>
      <span class="blog-tag">Japan</span>
      <span class="blog-tag">Sports</span>
      <span class="blog-tag">Culture</span>
    </div>
    <a href="https://medium.com/@lizadahiya01/the-sport-japan-taught-me-to-love-4eeb75a390a0" target="_blank" class="blog-link">
      Read on Medium →
    </a>
  </div>

  <div class="blog-card">
    <div class="blog-meta">
      <span>📅 2023</span>
    </div>
    <h3 class="blog-title">
      <a href="https://medium.com/@lizadahiya01/a-coffee-lovers-guide-to-akatsuka-more-hidden-caf%C3%A9s-unexpected-encounters-074de0cccd09" target="_blank">
        A Coffee Lover's Guide to Akatsuka: More Hidden Cafés & Unexpected Encounters
      </a>
    </h3>
    <p class="blog-excerpt">
      Part two of my coffee adventures in Akatsuka, exploring even more hidden cafés and the unexpected encounters that made each visit memorable.
    </p>
    <div>
      <span class="blog-tag">Coffee</span>
      <span class="blog-tag">Tokyo</span>
      <span class="blog-tag">Food</span>
    </div>
    <a href="https://medium.com/@lizadahiya01/a-coffee-lovers-guide-to-akatsuka-more-hidden-caf%C3%A9s-unexpected-encounters-074de0cccd09" target="_blank" class="blog-link">
      Read on Medium →
    </a>
  </div>

  <div class="blog-card">
    <div class="blog-meta">
      <span>📅 2023</span>
    </div>
    <h3 class="blog-title">
      <a href="https://medium.com/@lizadahiya01/a-coffee-lovers-guide-to-akatsuka-tokyo-s-best-kept-secret-ad3e6eef5595" target="_blank">
        A Coffee Lover's Guide to Akatsuka: Tokyo's Best Kept Secret
      </a>
    </h3>
    <p class="blog-excerpt">
      Uncovering the hidden café culture of Akatsuka, a lesser-known neighborhood in Tokyo that's a paradise for coffee enthusiasts.
    </p>
    <div>
      <span class="blog-tag">Coffee</span>
      <span class="blog-tag">Tokyo</span>
      <span class="blog-tag">Hidden Gems</span>
    </div>
    <a href="https://medium.com/@lizadahiya01/a-coffee-lovers-guide-to-akatsuka-tokyo-s-best-kept-secret-ad3e6eef5595" target="_blank" class="blog-link">
      Read on Medium →
    </a>
  </div>

  <div class="blog-card">
    <div class="blog-meta">
      <span>📅 2023</span>
    </div>
    <h3 class="blog-title">
      <a href="https://medium.com/@lizadahiya01/the-curse-of-growing-up-3ad7c1841166" target="_blank">
        The Curse of Growing Up
      </a>
    </h3>
    <p class="blog-excerpt">
      A reflective piece on the bittersweet reality of growing up, losing innocence, and finding wisdom in the process of becoming an adult.
    </p>
    <div>
      <span class="blog-tag">Life</span>
      <span class="blog-tag">Personal Growth</span>
      <span class="blog-tag">Reflection</span>
    </div>
    <a href="https://medium.com/@lizadahiya01/the-curse-of-growing-up-3ad7c1841166" target="_blank" class="blog-link">
      Read on Medium →
    </a>
  </div>

  <div class="blog-card">
    <div class="blog-meta">
      <span>📅 2023</span>
    </div>
    <h3 class="blog-title">
      <a href="https://medium.com/@lizadahiya01/my-top-five-picks-of-2022-7217f4daa34d" target="_blank">
        My Top Five Picks of 2022
      </a>
    </h3>
    <p class="blog-excerpt">
      A curated list of my favorite books, shows, places, and experiences from 2022 - the things that shaped my year and left a lasting impression.
    </p>
    <div>
      <span class="blog-tag">Year in Review</span>
      <span class="blog-tag">Recommendations</span>
      <span class="blog-tag">2022</span>
    </div>
    <a href="https://medium.com/@lizadahiya01/my-top-five-picks-of-2022-7217f4daa34d" target="_blank" class="blog-link">
      Read on Medium →
    </a>
  </div>

  <div class="blog-card">
    <div class="blog-meta">
      <span>📅 2022</span>
    </div>
    <h3 class="blog-title">
      <a href="https://medium.com/@lizadahiya01/ghost-town-a-lackluster-city-named-lavasa-35b12a5da89e" target="_blank">
        Ghost Town: A Lackluster City Named Lavasa
      </a>
    </h3>
    <p class="blog-excerpt">
      Exploring Lavasa, India's planned hill city that never quite lived up to its promise - a fascinating look at urban planning gone wrong.
    </p>
    <div>
      <span class="blog-tag">Travel</span>
      <span class="blog-tag">India</span>
      <span class="blog-tag">Urban Planning</span>
    </div>
    <a href="https://medium.com/@lizadahiya01/ghost-town-a-lackluster-city-named-lavasa-35b12a5da89e" target="_blank" class="blog-link">
      Read on Medium →
    </a>
  </div>

  <div class="blog-card">
    <div class="blog-meta">
      <span>📅 2022</span>
    </div>
    <h3 class="blog-title">
      <a href="https://medium.com/@lizadahiya01/roommate-matching-application-a-ux-ui-perspective-e3dc1b10b3cb" target="_blank">
        Roommate Matching Application: A UX/UI Perspective
      </a>
    </h3>
    <p class="blog-excerpt">
      A deep dive into designing a roommate matching app with a focus on user experience, interface design, and solving real-world problems through thoughtful design.
    </p>
    <div>
      <span class="blog-tag">UX/UI</span>
      <span class="blog-tag">Design</span>
      <span class="blog-tag">Tech</span>
    </div>
    <a href="https://medium.com/@lizadahiya01/roommate-matching-application-a-ux-ui-perspective-e3dc1b10b3cb" target="_blank" class="blog-link">
      Read on Medium →
    </a>
  </div>

</div>
