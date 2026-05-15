---
layout: archive
title: "Travels"
permalink: /travels/
author_profile: true
---

<style>
.travel-intro{font-family:'Inter',sans-serif;font-size:.875rem;color:#6b6b68;line-height:1.75;margin-bottom:1em}
#travel-map-container{position:relative;width:100%;background:#ffffff;margin-bottom:1.8em;overflow:hidden}
#travel-map svg{width:100%;height:auto;display:block;cursor:grab}
#travel-map svg:active{cursor:grabbing}
.map-loading{display:flex;align-items:center;justify-content:center;height:320px;font-family:'IBM Plex Mono',monospace;font-size:.72rem;color:#a3a39f}
.map-zoom-controls{position:absolute;bottom:12px;left:12px;display:flex;flex-direction:row;gap:0;z-index:10}
.map-zoom-btn{width:32px;height:32px;background:#fff;border:1.5px solid #999;color:#333;font-size:1.1rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;user-select:none;transition:background .12s ease}
.map-zoom-btn:first-child{border-right:none}
.map-zoom-btn:hover{background:#eee}
.map-legend{display:flex;align-items:center;gap:1.4em;font-family:'IBM Plex Mono',monospace;font-size:.7rem;color:#6b6b68;padding:.6em 1em;border-top:1px solid #d4d3cb;letter-spacing:.01em}
.legend-item{display:flex;align-items:center;gap:.5em}
.legend-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.legend-dot.visited{background:#111110}
.legend-dot.unvisited{background:#b0bec5}
.map-tooltip{position:fixed;background:#111110;color:#f9f9f7;font-family:'IBM Plex Mono',monospace;font-size:.72rem;padding:.35em .8em;pointer-events:none;white-space:nowrap;z-index:9999;opacity:0;transition:opacity .1s ease;letter-spacing:.02em;border-radius:2px}
/* country grid below map */
.travel-regions{display:flex;flex-direction:column;gap:1.6em;margin-top:.4em}
.travel-region{}
.region-label{font-family:'IBM Plex Mono',monospace;font-size:.7rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#6b6b68;border-bottom:1px solid #d4d3cb;padding-bottom:.3em;margin-bottom:.8em}
.country-list{display:flex;flex-wrap:wrap;gap:.75em}
.country-entry{display:flex;align-items:center;gap:.55em;border:1px solid #d4d3cb;padding:.3em .55em .3em .35em;background:#fff;transition:border-color .15s ease}
.country-entry{cursor:pointer}
.country-entry:hover{border-color:#111110}
.country-lightbox{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.78);z-index:9999;display:none;align-items:center;justify-content:center;cursor:pointer}
.country-lightbox.visible{display:flex}
.country-lightbox img{max-width:88vw;max-height:85vh;object-fit:contain;box-shadow:0 8px 40px rgba(0,0,0,.4)}
.country-lightbox-caption{position:absolute;bottom:24px;left:50%;transform:translateX(-50%);font-family:'IBM Plex Mono',monospace;font-size:.75rem;color:rgba(255,255,255,.8);letter-spacing:.02em;white-space:nowrap}
.country-entry img{width:52px;height:36px;object-fit:cover;display:block;flex-shrink:0}
.country-entry span{font-family:'IBM Plex Mono',monospace;font-size:.72rem;font-weight:500;color:#111110;white-space:nowrap;letter-spacing:.01em}
@media(max-width:600px){
  .country-entry img{width:40px;height:28px}
  .country-list{gap:.5em}
}
</style>

<p class="travel-intro">exploring the world, one country at a time</p>

<div id="travel-map-container">
  <div id="travel-map"><div class="map-loading">building dot map...</div></div>
  <div class="map-zoom-controls">
    <button class="map-zoom-btn" id="zoom-out" title="Zoom out">&minus;</button>
    <button class="map-zoom-btn" id="zoom-in" title="Zoom in">+</button>
    <button class="map-zoom-btn" id="route-replay" title="Replay route" style="display:none;margin-left:8px;font-size:.7rem;">&#9654;</button>
  </div>
  <div class="map-legend">
    <div class="legend-item"><div class="legend-dot visited"></div><span>visited</span></div>
    <div class="legend-item"><div class="legend-dot unvisited"></div><span>not yet</span></div>
  </div>
</div>

<div class="map-tooltip" id="map-tooltip"></div>

<p style="font-family:'IBM Plex Mono','JetBrains Mono',Monaco,monospace;font-size:.8rem;line-height:1.85;margin-bottom:1.8em;color:#111110">I have travelled to 13ish countries (out of which 10 solo :)) — I love love travel — taking unknown trains, walking unknown streets, observing people do their mundane activities, (ADHD brain) imagining living in the city, visiting local cafes, talking to strangers (and oversharing :)), staying in dorms, meeting people who've had completely different lives until now, yet, somehow, you ended up in the same location as them (many beautiful tangents)! truest believer of "we are of all the people we've met so far!"</p>

<div class="travel-regions">

  <div class="travel-region">
    <div class="region-label">Asia</div>
    <div class="country-list">
      <div class="country-entry"><img src="/images/travels/india.jpg" alt="India"><span>India</span></div>
      <div class="country-entry"><img src="/images/travels/japan.jpg" alt="Japan"><span>Japan</span></div>
      <div class="country-entry"><img src="/images/travels/taiwan.jpg" alt="Taiwan"><span>Taiwan</span></div>
      <div class="country-entry"><img src="/images/travels/philippines.jpg" alt="Philippines"><span>Philippines</span></div>
      <div class="country-entry"><img src="/images/travels/vietnam.jpg" alt="Vietnam"><span>Vietnam</span></div>
    </div>
  </div>

  <div class="travel-region">
    <div class="region-label">Europe</div>
    <div class="country-list">
      <div class="country-entry"><img src="/images/travels/austria.jpg" alt="Austria"><span>Austria</span></div>
      <div class="country-entry"><img src="/images/travels/belgium.jpg" alt="Belgium"><span>Belgium</span></div>
      <div class="country-entry"><img src="/images/travels/czech.jpg" alt="Czech Republic"><span>Czech Republic</span></div>
      <div class="country-entry"><img src="/images/travels/france.jpg" alt="France"><span>France</span></div>
      <div class="country-entry"><img src="/images/travels/germany.jpg" alt="Germany"><span>Germany</span></div>
      <div class="country-entry"><img src="/images/travels/italy.jpg" alt="Italy"><span>Italy</span></div>
      <div class="country-entry"><img src="/images/travels/netherlands.jpg" alt="Netherlands"><span>Netherlands</span></div>
    </div>
  </div>

  <div class="travel-region">
    <div class="region-label">North America</div>
    <div class="country-list">
      <div class="country-entry"><img src="/images/travels/usa.jpg" alt="USA"><span>USA</span></div>
    </div>
  </div>

</div>

<div class="country-lightbox" id="country-lightbox">
  <img id="country-lightbox-img" src="" alt="">
  <div class="country-lightbox-caption" id="country-lightbox-caption"></div>
</div>

<script>
(function() {
  var lightbox = document.getElementById('country-lightbox');
  var lbImg    = document.getElementById('country-lightbox-img');
  var lbCap    = document.getElementById('country-lightbox-caption');

  document.querySelectorAll('.country-entry').forEach(function(entry) {
    entry.addEventListener('click', function() {
      var img = entry.querySelector('img');
      var name = entry.querySelector('span').textContent;
      lbImg.src = img.src;
      lbImg.alt = name;
      lbCap.textContent = name;
      lightbox.classList.add('visible');
    });
  });

  lightbox.addEventListener('click', function() {
    lightbox.classList.remove('visible');
    lbImg.src = '';
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { lightbox.classList.remove('visible'); lbImg.src = ''; }
  });
})();
</script>

<script src="/assets/js/d3.v7.min.js"></script>
<script src="/assets/js/topojson-client.min.js"></script>
<script src="/assets/js/travel-map.js"></script>
