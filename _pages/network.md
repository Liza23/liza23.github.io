---
layout: archive
title: "Network"
permalink: /network/
author_profile: true
---

<style>
.network-intro{font-family:'Inter',sans-serif;font-size:.875rem;color:#6b6b68;line-height:1.75;margin-bottom:1.2em}
#graph-container{position:relative;width:100%;background:#ffffff;border:1px solid #d4d3cb;margin-bottom:1.4em;overflow:hidden}
#social-graph{width:100%;display:block}
#social-graph svg{width:100%;height:auto;display:block;cursor:grab}
#social-graph svg:active{cursor:grabbing}
.graph-loading{display:flex;align-items:center;justify-content:center;height:320px;font-family:'IBM Plex Mono',monospace;font-size:.72rem;color:#a3a39f}
.graph-zoom-controls{position:absolute;bottom:42px;left:12px;display:flex;flex-direction:row;gap:0;z-index:10}
.graph-zoom-btn{width:32px;height:32px;background:#fff;border:1.5px solid #999;color:#333;font-size:1.1rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;user-select:none;transition:background .12s ease}
.graph-zoom-btn:first-child{border-right:none}
.graph-zoom-btn:hover{background:#eee}
.graph-legend{display:flex;align-items:center;gap:1.4em;font-family:'IBM Plex Mono',monospace;font-size:.7rem;color:#6b6b68;padding:.6em 1em;border-top:1px solid #d4d3cb;letter-spacing:.01em}
.legend-item{display:flex;align-items:center;gap:.5em}
.legend-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0;border:1.5px solid #d4d3cb}
.legend-dot.owner{background:#c8f464;border-color:#111110}
.legend-dot.friend{background:#ffffff;border-color:#111110}
#graph-tooltip{position:fixed;background:#111110;color:#f9f9f7;font-family:'IBM Plex Mono',monospace;font-size:.72rem;padding:.55em .85em;pointer-events:none;z-index:9999;opacity:0;transition:opacity .1s ease;max-width:220px;line-height:1.5}
#graph-tooltip .gt-name{font-weight:600;font-size:.78rem;margin-bottom:.2em;letter-spacing:-.01em}
#graph-tooltip .gt-bio{color:rgba(249,249,247,.7);font-family:'Inter',sans-serif;font-size:.72rem;line-height:1.45;margin-bottom:.25em}
#graph-tooltip .gt-url{color:#c8f464;font-size:.68rem;letter-spacing:.02em}
.node circle{transition:filter .15s ease}
.node:hover circle{filter:drop-shadow(0 0 6px rgba(200,244,100,0.5))}
.node text.node-label{font-family:'IBM Plex Mono',monospace;font-size:9px;fill:#6b6b68;text-anchor:middle;pointer-events:none;user-select:none}
.node text.node-initials{font-family:'IBM Plex Mono',monospace;font-weight:600;fill:#111110;text-anchor:middle;dominant-baseline:central;pointer-events:none;user-select:none}
.node.owner text.node-initials{fill:#111110}
.links line{transition:stroke .15s ease,stroke-opacity .15s ease}
.links line.dimmed{stroke-opacity:.12}
.links line.highlighted{stroke:#111110}
.node.dimmed circle{opacity:.2}
.node.dimmed text{opacity:.2}
.node.owner .owner-ring{animation:ring-pulse 3s ease-in-out infinite;transform-origin:center}
@keyframes ring-pulse{0%,100%{opacity:.3;transform:scale(1)}50%{opacity:0;transform:scale(1.55)}}
hr.sg-divider{border:none;border-top:1px solid #d4d3cb;margin:2em 0}
.sg-section-header{font-family:'IBM Plex Mono',monospace;font-size:1rem;font-weight:600;letter-spacing:-.02em;margin-bottom:.9em;margin-top:0}
.sg-intro{font-family:'Inter',sans-serif;font-size:.875rem;color:#6b6b68;line-height:1.75;margin-bottom:1.4em;max-width:580px}
.sg-field{margin-bottom:.9em}
.sg-field label{font-family:'IBM Plex Mono',monospace;font-size:.75rem;font-weight:500;color:#6b6b68;letter-spacing:.02em;margin-bottom:.3em;display:block}
.sg-field input[type="text"],.sg-field input[type="url"],.sg-field select{font-family:'IBM Plex Mono',monospace;font-size:.82rem;border:1px solid #d4d3cb;border-radius:0;background:#ffffff;color:#111110;padding:.45em .75em;width:100%;max-width:480px;box-shadow:none;transition:border-color .15s ease;-webkit-appearance:none;appearance:none}
.sg-field input:focus,.sg-field select:focus{border-color:#111110;outline:none;box-shadow:none}
.sg-field input.sg-error-field,.sg-field select.sg-error-field{border-color:#e55}
.sg-field select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%236b6b68'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right .75em center;padding-right:2em;cursor:pointer}
.sg-optional{font-weight:400;color:#a3a39f;font-size:.7rem}
.sg-submit{font-family:'IBM Plex Mono',monospace;font-size:.72rem;font-weight:500;letter-spacing:.05em;text-transform:uppercase;border:1px solid #111110;background:transparent;color:#111110;padding:.5em 1.4em;cursor:pointer;border-radius:0;transition:background .15s ease,color .15s ease;margin-top:.4em}
.sg-submit:hover{background:#111110;color:#f9f9f7}
#sg-output{margin-top:1.2em;padding:1em 1.2em;border:1px solid #d4d3cb;background:#f9f9f7;max-width:480px;display:none}
#sg-output .sg-output-note{font-family:'Inter',sans-serif;font-size:.82rem;color:#6b6b68;margin-bottom:.75em;line-height:1.6}
.sg-issue-btn{display:inline-block;font-family:'IBM Plex Mono',monospace;font-size:.72rem;font-weight:500;letter-spacing:.05em;text-transform:uppercase;border:1px solid #111110;padding:.4em 1.1em;color:#111110;text-decoration:none;transition:background .15s ease,color .15s ease}
.sg-issue-btn:hover{background:#111110;color:#f9f9f7;opacity:1}
</style>

<p class="network-intro">
  a small corner of the world of people i know and who they know connected by curiosity!
  feel free to drag rearrange, hover to peak or click to visit their world
</p>

<div id="graph-container">
  <div id="social-graph">
    <div class="graph-loading">loading graph...</div>
  </div>
  <div class="graph-zoom-controls">
    <button class="graph-zoom-btn" id="graph-zoom-in" aria-label="zoom in">+</button>
    <button class="graph-zoom-btn" id="graph-zoom-out" aria-label="zoom out">−</button>
  </div>
  <div class="graph-legend">
    <div class="legend-item">
      <div class="legend-dot owner"></div>
      <span>me</span>
    </div>
    <div class="legend-item">
      <div class="legend-dot friend"></div>
      <span>friend / friend-of-friend</span>
    </div>
    <div class="legend-item" style="margin-left:auto;color:#a3a39f;font-size:.65rem">
      click node to visit · drag to move
    </div>
  </div>
</div>

<div id="graph-tooltip"></div>

<hr class="sg-divider">

<h2 class="sg-section-header">add yourself</h2>

<p class="sg-intro">
  know someone already on this graph? add yourself as a node.
  fill in the form below, it'll open a pre-filled github issue for me to review.
  once merged, you'll appear here.
</p>

<form id="add-form" novalidate>
  <div class="sg-field">
    <label for="sg-name">name *</label>
    <input type="text" id="sg-name" placeholder="Jane Smith" autocomplete="off">
  </div>
  <div class="sg-field">
    <label for="sg-url">website *</label>
    <input type="url" id="sg-url" placeholder="https://janesmith.com" autocomplete="off">
  </div>
  <div class="sg-field">
    <label for="sg-bio">bio <span class="sg-optional">(optional)</span></label>
    <input type="text" id="sg-bio" placeholder="PhD student at MIT. Likes cats." autocomplete="off">
  </div>
  <div class="sg-field">
    <label for="sg-avatar">avatar url <span class="sg-optional">(optional)</span></label>
    <input type="url" id="sg-avatar" placeholder="https://..." autocomplete="off">
  </div>
  <div class="sg-field">
    <label for="sg-connection">you know... *</label>
    <select id="sg-connection">
      <option value="">— select someone —</option>
    </select>
  </div>
  <button type="submit" class="sg-submit">open github issue →</button>
</form>

<div id="sg-output">
  <p class="sg-output-note">a github issue has been pre-filled with your details. submit it and i'll add you once i see it.</p>
  <a id="sg-issue-link" href="" target="_blank" rel="noopener noreferrer" class="sg-issue-btn">open issue on github →</a>
</div>

<script src="/assets/js/d3.v7.min.js"></script>
<script src="/assets/js/social-graph.js"></script>
