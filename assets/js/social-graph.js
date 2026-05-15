(function () {
  var GRAPH_DATA_URL = '/assets/data/social_graph.json';
  var GITHUB_REPO    = 'pandaliza/pandaliza.github.io';

  var OWNER_R      = 22;
  var NODE_R       = 14;
  var LINK_STROKE  = 1.5;

  var OWNER_FILL   = '#c8f464';
  var NODE_FILL    = '#ffffff';
  var NODE_STROKE  = '#111110';
  var LINK_COLOR   = '#d4d3cb';
  var LINK_HL      = '#111110';

  var isMobile = window.innerWidth < 600;
  var W = isMobile ? 400 : 867;
  var H = isMobile ? 300 : 573;
  var oR = isMobile ? 18 : OWNER_R;
  var nR = isMobile ? 11 : NODE_R;

  var svg, g, simulation, linkSel, nodeSel, graphData;

  function init() {
    var container = document.getElementById('social-graph');
    if (!container) return;

    svg = d3.select(container)
      .html('<div class="graph-loading">loading graph...</div>')
      .append('svg')
      .attr('viewBox', '0 0 ' + W + ' ' + H)
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .style('width', '100%')
      .style('height', 'auto')
      .style('display', 'none');

    var zoom = d3.zoom()
      .scaleExtent([0.3, 4])
      .on('zoom', function (event) {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    document.getElementById('graph-zoom-in').addEventListener('click', function () {
      svg.transition().duration(300).call(zoom.scaleBy, 1.5);
    });
    document.getElementById('graph-zoom-out').addEventListener('click', function () {
      svg.transition().duration(300).call(zoom.scaleBy, 1 / 1.5);
    });

    svg.on('mousemove', function (event) {
      var tip = document.getElementById('graph-tooltip');
      if (tip && parseFloat(tip.style.opacity) > 0) {
        tip.style.left = (event.clientX + 16) + 'px';
        tip.style.top  = (event.clientY - 12) + 'px';
      }
    });

    d3.json(GRAPH_DATA_URL).then(function (data) {
      graphData = data;
      document.querySelector('#social-graph .graph-loading') &&
        (document.querySelector('#social-graph .graph-loading').style.display = 'none');
      svg.style('display', null);
      buildGraph(data);
      populateSelect(data.nodes);
    }).catch(function (err) {
      console.error('social-graph: failed to load data', err);
      var c = document.getElementById('social-graph');
      if (c) c.innerHTML = '<div class="graph-loading">graph data unavailable</div>';
    });
  }

  function computeDegrees(nodes, links) {
    var directNeighbors = new Set();
    links.forEach(function (l) {
      var sid = typeof l.source === 'object' ? l.source.id : l.source;
      var tid = typeof l.target === 'object' ? l.target.id : l.target;
      if (sid === 'liza') directNeighbors.add(tid);
      if (tid === 'liza') directNeighbors.add(sid);
    });
    nodes.forEach(function (n) {
      if (n.isOwner) { n._degree = 0; return; }
      n._degree = directNeighbors.has(n.id) ? 1 : 2;
    });
  }

  function buildGraph(data) {
    computeDegrees(data.nodes, data.links);

    g = svg.append('g').attr('class', 'graph-layer');

    simulation = d3.forceSimulation(data.nodes)
      .force('link', d3.forceLink(data.links)
        .id(function (d) { return d.id; })
        .distance(function (d) {
          var ownerInvolved = d.source.isOwner || d.target.isOwner;
          return ownerInvolved ? 180 : 110;
        })
        .strength(0.6))
      .force('charge', d3.forceManyBody()
        .strength(function (d) { return d.isOwner ? -400 : -180; }))
      .force('center', d3.forceCenter(W / 2, H / 2))
      .force('collision', d3.forceCollide()
        .radius(function (d) { return (d.isOwner ? oR : nR) + 10; }))
      .force('radial', d3.forceRadial(function (d) {
        if (d.isOwner) return 0;
        return d._degree === 1 ? 133 : 240;
      }, W / 2, H / 2).strength(0.1))
      .alphaDecay(0.028)
      .velocityDecay(0.4);

    linkSel = g.append('g').attr('class', 'links')
      .selectAll('line')
      .data(data.links)
      .join('line')
      .attr('stroke', LINK_COLOR)
      .attr('stroke-width', LINK_STROKE)
      .attr('stroke-linecap', 'round');

    nodeSel = g.append('g').attr('class', 'nodes')
      .selectAll('g.node')
      .data(data.nodes)
      .join('g')
      .attr('class', function (d) { return 'node' + (d.isOwner ? ' owner' : ''); })
      .style('cursor', 'pointer')
      .call(makeDrag(simulation))
      .on('click', function (event, d) {
        if (d.url) window.open(d.url, '_blank', 'noopener,noreferrer');
      })
      .on('mouseenter', handleMouseEnter)
      .on('mouseleave', handleMouseLeave);

    nodeSel.each(function (d) {
      var nodeG = d3.select(this);
      var r = d.isOwner ? oR : nR;

      if (d.isOwner) {
        nodeG.append('circle')
          .attr('class', 'owner-ring')
          .attr('r', r)
          .attr('fill', 'none')
          .attr('stroke', OWNER_FILL)
          .attr('stroke-width', 2);
      }

      var defs = svg.append('defs');
      var clipId = 'clip-' + d.id;
      defs.append('clipPath')
        .attr('id', clipId)
        .append('circle')
        .attr('r', r)
        .attr('cx', 0)
        .attr('cy', 0);

      nodeG.append('circle')
        .attr('r', r)
        .attr('fill', d.isOwner ? OWNER_FILL : NODE_FILL)
        .attr('stroke', NODE_STROKE)
        .attr('stroke-width', d.isOwner ? 2 : 1.5);

      var initialsEl = nodeG.append('text')
        .attr('class', 'node-initials')
        .attr('font-size', d.isOwner ? 10 : 8)
        .text(getInitials(d.name));

      var avatarEl = nodeG.append('image')
        .attr('clip-path', 'url(#' + clipId + ')')
        .attr('x', -r)
        .attr('y', -r)
        .attr('width', r * 2)
        .attr('height', r * 2)
        .attr('preserveAspectRatio', 'xMidYMid slice')
        .style('display', 'none');

      if (d.avatar) {
        var img = new Image();
        img.onload = function () {
          avatarEl.attr('href', d.avatar).style('display', null);
          initialsEl.style('display', 'none');
        };
        img.onerror = function () {
          initialsEl.style('display', null);
        };
        img.src = d.avatar;
      }

      if (!isMobile) {
        nodeG.append('text')
          .attr('class', 'node-label')
          .attr('y', r + 13)
          .text(d.name);
      }
    });

    simulation.on('tick', function () {
      linkSel
        .attr('x1', function (d) { return d.source.x; })
        .attr('y1', function (d) { return d.source.y; })
        .attr('x2', function (d) { return d.target.x; })
        .attr('y2', function (d) { return d.target.y; });
      nodeSel.attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      });
    });

    simulation.alpha(0.8).restart();
  }

  function makeDrag(sim) {
    return d3.drag()
      .on('start', function (event, d) {
        if (!event.active) sim.alphaTarget(0.3).restart();
        d.fx = d.x; d.fy = d.y;
      })
      .on('drag', function (event, d) {
        d.fx = event.x; d.fy = event.y;
      })
      .on('end', function (event, d) {
        if (!event.active) sim.alphaTarget(0);
        d.fx = null; d.fy = null;
      });
  }

  function handleMouseEnter(event, d) {
    if (!graphData) return;
    var neighborIds = new Set([d.id]);
    graphData.links.forEach(function (l) {
      var sid = typeof l.source === 'object' ? l.source.id : l.source;
      var tid = typeof l.target === 'object' ? l.target.id : l.target;
      if (sid === d.id) neighborIds.add(tid);
      if (tid === d.id) neighborIds.add(sid);
    });

    nodeSel.classed('dimmed', function (n) { return !neighborIds.has(n.id); });
    linkSel
      .classed('dimmed', function (l) {
        var sid = typeof l.source === 'object' ? l.source.id : l.source;
        var tid = typeof l.target === 'object' ? l.target.id : l.target;
        return sid !== d.id && tid !== d.id;
      })
      .classed('highlighted', function (l) {
        var sid = typeof l.source === 'object' ? l.source.id : l.source;
        var tid = typeof l.target === 'object' ? l.target.id : l.target;
        return sid === d.id || tid === d.id;
      });

    showTooltip(event, d);
  }

  function handleMouseLeave() {
    if (nodeSel) nodeSel.classed('dimmed', false);
    if (linkSel) linkSel.classed('dimmed', false).classed('highlighted', false);
    hideTooltip();
  }

  function showTooltip(event, d) {
    var tip = document.getElementById('graph-tooltip');
    if (!tip) return;
    var domain = '';
    try { domain = new URL(d.url).hostname.replace(/^www\./, ''); } catch (e) { domain = d.url || ''; }
    tip.innerHTML =
      '<div class="gt-name">' + escHtml(d.name) + '</div>' +
      (d.bio ? '<div class="gt-bio">' + escHtml(d.bio) + '</div>' : '') +
      (domain ? '<div class="gt-url">' + escHtml(domain) + ' ↗</div>' : '');
    tip.style.opacity = '1';
    tip.style.left = (event.clientX + 16) + 'px';
    tip.style.top  = (event.clientY - 12) + 'px';
  }

  function hideTooltip() {
    var tip = document.getElementById('graph-tooltip');
    if (tip) tip.style.opacity = '0';
  }

  function getInitials(name) {
    return (name || '').split(' ')
      .filter(function (w) { return w.length > 0; })
      .slice(0, 2)
      .map(function (w) { return w[0].toUpperCase(); })
      .join('');
  }

  function escHtml(str) {
    return (str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function populateSelect(nodes) {
    var sel = document.getElementById('sg-connection');
    if (!sel) return;
    nodes.forEach(function (node) {
      var opt = document.createElement('option');
      opt.value = node.id;
      opt.textContent = node.name;
      sel.appendChild(opt);
    });
  }

  function setupForm() {
    var form = document.getElementById('add-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nameVal   = document.getElementById('sg-name').value.trim();
      var urlVal    = document.getElementById('sg-url').value.trim();
      var bioVal    = document.getElementById('sg-bio').value.trim();
      var avatarVal = document.getElementById('sg-avatar').value.trim();
      var knowsVal  = document.getElementById('sg-connection').value;

      var valid = true;
      ['sg-name','sg-url','sg-connection'].forEach(function (id) {
        var el = document.getElementById(id);
        var empty = !el.value.trim();
        el.classList.toggle('sg-error-field', empty);
        if (empty) valid = false;
      });
      if (!valid) return;

      var slug = nameVal.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      var body = [
        '## Add me to the network',
        '',
        '| field | value |',
        '|-------|-------|',
        '| **name** | ' + nameVal + ' |',
        '| **id (suggested)** | ' + slug + ' |',
        '| **url** | ' + urlVal + ' |',
        '| **bio** | ' + (bioVal || '—') + ' |',
        '| **avatar** | ' + (avatarVal || '—') + ' |',
        '| **knows** | ' + knowsVal + ' |',
        '',
        '_To add: update `assets/data/social_graph.json` — append the node and a link from `' + slug + '` to `' + knowsVal + '`._'
      ].join('\n');

      var issueUrl = 'https://github.com/' + GITHUB_REPO + '/issues/new'
        + '?title=' + encodeURIComponent('[network] add ' + nameVal)
        + '&body='  + encodeURIComponent(body)
        + '&labels=' + encodeURIComponent('network-request');

      document.getElementById('sg-issue-link').href = issueUrl;
      var output = document.getElementById('sg-output');
      output.style.display = 'block';
      output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    ['sg-name','sg-url','sg-connection'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('input', function () {
        el.classList.remove('sg-error-field');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init(); setupForm(); });
  } else {
    init();
    setupForm();
  }
})();
