// @ts-nocheck — client bundle migrated from verified JS; kept as-is to avoid
// rewriting 700 lines of working logic. Host side (src/index.ts) is fully typed.
import React, { createElement as h } from 'react'

var CSS = '.dshm-root{display:flex;flex-direction:column;gap:12px;padding:6px 2px;font-size:13px;color:inherit}'
+ '.dshm-tabs{display:flex;gap:6px}'
+ '.dshm-tab{padding:6px 12px;border:1px solid rgba(127,127,127,.4);border-radius:8px;background:transparent;color:inherit;cursor:pointer;font-size:13px}'
+ '.dshm-tab-on{background:rgba(100,120,230,.18);border-color:rgba(100,120,230,.7)}'
+ '.dshm-banner{opacity:.7}'
+ '.dshm-status{padding:6px 10px;border-radius:8px;background:rgba(255,190,60,.15);color:inherit}'
+ '.dshm-form{display:flex;flex-direction:column;gap:10px;max-width:480px}'
+ '.dshm-field{display:flex;flex-direction:column;gap:4px}'
+ '.dshm-label{opacity:.7;font-size:12px}'
+ '.dshm-form input[type=text],.dshm-form input[type=password],.dshm-form input[type=number],.dshm-search,.dshm-card textarea{background:rgba(127,127,127,.07);border:1px solid rgba(127,127,127,.4);border-radius:8px;padding:8px 10px;color:inherit;font-size:13px}'
+ '.dshm-browbar select{color-scheme:dark;background:#1a1d24;color:#e6e6e6;border:1px solid rgba(127,127,127,.4);border-radius:8px;padding:8px 10px;font-size:13px}'
+ '.dshm-browbar select option{background:#1a1d24;color:#e6e6e6}'
+ '.dshm-actions{display:flex;gap:8px;margin-top:4px}'
+ '.dshm-actions button,.dshm-browbar button,.dshm-graph-toolbar button{padding:8px 14px;border:1px solid rgba(127,127,127,.4);border-radius:8px;background:rgba(100,120,230,.18);color:inherit;cursor:pointer}'
+ '.dshm-actions button:disabled{opacity:.5;cursor:default}'
+ '.dshm-hint{opacity:.65;font-size:11px;line-height:1.5}'
+ '.dshm-browser{display:flex;flex-direction:column;gap:10px}'
+ '.dshm-browbar{display:flex;gap:8px;align-items:center}'
+ '.dshm-search{flex:1}'
+ '.dshm-count{opacity:.7;font-size:12px}'
+ '.dshm-card{border:1px solid rgba(127,127,127,.3);border-radius:10px;padding:10px 12px;display:flex;flex-direction:column;gap:6px;background:rgba(127,127,127,.05)}'
+ '.dshm-card-head{display:flex;align-items:center;gap:8px}'
+ '.dshm-badge{font-size:11px;padding:1px 7px;border-radius:999px;border:1px solid rgba(127,127,127,.5);opacity:.85}'
+ '.dshm-badge-pitfall{color:#e07979;border-color:#c26a6a}'
+ '.dshm-badge-knowledge{color:#79a8e0;border-color:#6a92c2}'
+ '.dshm-badge-note{opacity:.8}'
+ '.dshm-summary{font-weight:600;flex:1}'
+ '.dshm-del{background:transparent;border:none;color:#d88;cursor:pointer;font-size:12px}'
+ '.dshm-content{opacity:.8;line-height:1.5;white-space:pre-wrap;word-break:break-word}'
+ '.dshm-tags{display:flex;flex-wrap:wrap;gap:4px}'
+ '.dshm-tag{font-size:11px;padding:1px 7px;border-radius:999px;background:rgba(100,120,230,.16)}'
+ '.dshm-empty{opacity:.7;padding:12px 0}'
+ '.dshm-pending{display:flex;flex-direction:column;gap:6px}'
+ '.dshm-pending-item{display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid rgba(100,120,230,.35);border-radius:10px;background:rgba(100,120,230,.08)}'
+ '.dshm-pending-preview{flex:1;opacity:.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'
+ '.dshm-spinner{width:14px;height:14px;border:2px solid rgba(127,127,127,.3);border-top-color:rgba(100,120,230,.9);border-radius:50%;display:inline-block;animation:dshmspin .8s linear infinite}'
+ '@keyframes dshmspin{to{transform:rotate(360deg)}}'
+ '.dshm-stage{font-size:12px;opacity:.8;white-space:nowrap}'
+ '.dshm-stage-done{color:#7fd17f}'
+ '.dshm-stage-err{color:#e07979}'
+ '.dshm-graph{display:flex;flex-direction:column;gap:8px}'
+ '.dshm-graph-toolbar{display:flex;gap:6px;align-items:center}'
+ '.dshm-graph-toolbar button{padding:4px 12px}'
+ '.dshm-svg{display:block;max-width:100%;background:rgba(127,127,127,.04);border:1px solid rgba(127,127,127,.3);border-radius:10px;touch-action:none}'
+ '.dshm-node-label{fill:currentColor;font-size:11px}'
+ '.dshm-graph-linew{display:flex;gap:8px;align-items:center;font-size:12px}'
+ '.dshm-graph-linew input[type=range]{accent-color:rgba(100,120,230,.8)}'
+ '.dshm-selinfo{padding:10px 12px;border:1px solid rgba(255,200,80,.35);border-radius:10px;background:rgba(255,200,80,.08);display:flex;flex-direction:column;gap:8px}'
+ '.dshm-selinfo-title{font-weight:600;font-size:14px}'
+ '.dshm-selinfo-neighbors{display:flex;flex-wrap:wrap;gap:4px}'
+ '.dshm-selinfo-neighbors .dshm-tag{background:rgba(255,200,80,.16)}'
+ '.dshm-update{border:1px solid rgba(100,120,230,.55);border-radius:10px;padding:10px 12px;background:rgba(100,120,230,.1);display:flex;flex-direction:column;gap:8px}'
+ '.dshm-update-title{font-weight:600}'
+ '.dshm-update-log{font-size:12px;opacity:.85;white-space:pre-wrap;max-height:160px;overflow:auto;border:1px solid rgba(127,127,127,.25);border-radius:8px;padding:8px 10px;background:rgba(127,127,127,.05)}'
+ '.dshm-update-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}'
+ '.dshm-update-msg{font-size:12px;opacity:.85}';

var styleTag = null;
function ensureCSS() {
  if (styleTag) return;
  if (typeof document === 'undefined') return;
  styleTag = document.createElement('style');
  styleTag.setAttribute('data-plugin', 'dsh-memory');
  styleTag.textContent = CSS;
  document.head.appendChild(styleTag);
}

function apiGet(path) {
  return fetch('/memory/api' + path, { cache: 'no-store' }).then(function (r) { return r.json(); });
}
function apiPost(path, body) {
  return fetch('/memory/api' + path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body || {}) }).then(function (r) { return r.json(); });
}

function typeLabel(t) { return t === 'pitfall' ? '\u5751' : t === 'knowledge' ? '\u77e5\u8bc6' : '\u7b14\u8bb0'; }

function field(label, input) {
  return h('label', { className: 'dshm-field' }, h('span', { className: 'dshm-label' }, label), input);
}

// 错误边界：捕获子树渲染错误，显示错误信息而非卸载整个面板
var ErrorBoundary = (function (Component) {
  function EB(props) {
    Component.call(this, props);
    this.state = { error: null };
  }
  EB.prototype = Object.create(Component.prototype);
  EB.prototype.constructor = EB;
  EB.getDerivedStateFromError = function (error) { return { error: error }; };
  EB.prototype.componentDidCatch = function (error, info) {};
  EB.prototype.render = function () {
    if (this.state.error) {
      var e = this.state.error;
      return h('div', { style: { padding: '12px', border: '1px solid rgba(238,80,80,.5)', borderRadius: '10px', background: 'rgba(238,80,80,.1)', fontSize: '12px' } },
        h('div', { style: { fontWeight: '600', marginBottom: '6px' } }, '\u274c \u6e32\u67d3\u9519\u8bef\uff1a'),
        h('div', { style: { opacity: '.85', whiteSpace: 'pre-wrap', wordBreak: 'break-all' } }, String(e && e.message ? e.message : e)),
        h('div', { style: { opacity: '.5', marginTop: '6px', fontSize: '11px', whiteSpace: 'pre-wrap', wordBreak: 'break-all' } }, String(e && e.stack ? e.stack : ''))
      );
    }
    return this.props.children;
  };
  return EB;
})(React.Component);

function GraphCanvas(props) {
  var nodes = props.nodes || [];
  var edges = props.edges || [];
  var W = 660, H = 460;
  var svgRef = React.useRef(null);
  var gRef = React.useRef(null);
  var nodeElsRef = React.useRef({});
  var lineElsRef = React.useRef({});
  var posRef = React.useRef({});
  var viewRef = React.useRef({ tx: 0, ty: 0, k: 1 });
  var dragRef = React.useRef(null);
  var adjRef = React.useRef({});
  var edgesRef = React.useRef(edges);
  var zoomArr = React.useState(100);
  var setZoomPct = zoomArr[1]; var zoomPct = zoomArr[0];
  var selArr = React.useState(null);
  var setSelected = selArr[1]; var sel = selArr[0];
  var lineWArr = React.useState(1.2);
  var setLineW = lineWArr[1]; lineWArr = lineWArr[0];

  // ── 并查集：计算连通分量 ──
  var ufParent = {};
  function ufFind(x) {
    if (ufParent[x] === undefined) { ufParent[x] = x; return x; }
    var root = x;
    while (ufParent[root] !== root) root = ufParent[root];
    while (ufParent[x] !== root) { var nx = ufParent[x]; ufParent[x] = root; x = nx; }
    return root;
  }
  function ufUnion(a, b) {
    var ra = ufFind(a), rb = ufFind(b);
    if (ra !== rb) ufParent[ra] = rb;
  }
  nodes.forEach(function (n) { ufFind(n.id); });
  edges.forEach(function (e) { ufUnion(e.a, e.b); });

  // ── 按连通分量分组 + 力导向布局 ──
  function layoutPositions() {
    // 局部邻接（本函数内做力导向用）
    var localAdj = {};
    edges.forEach(function (e) {
      (localAdj[e.a] = localAdj[e.a] || []).push(e.b);
      (localAdj[e.b] = localAdj[e.b] || []).push(e.a);
    });
    // 分组：每个连通分量一个块
    var groups = {};
    nodes.forEach(function (n) {
      var root = ufFind(n.id);
      (groups[root] = groups[root] || []).push(n.id);
    });
    var groupIds = Object.keys(groups);
    var numGroups = groupIds.length;
    // 画布分块（块之间留大片 padding，让分量明显分开）
    var cols = Math.max(1, Math.ceil(Math.sqrt(numGroups)));
    var rows = Math.max(1, Math.ceil(numGroups / cols));
    var cellW = W / cols, cellH = H / rows;
    var padX = 30, padY = 30, padIn = 20;

    groupIds.forEach(function (gid, gi) {
      var col = gi % cols, row = Math.floor(gi / cols);
      var cellX0 = cellW * col, cellY0 = cellH * row;
      var boxW = cellW - padX * 2, boxH = cellH - padY * 2;
      var members = groups[gid];
      var n = members.length;
      if (!n) return;

      // 初始：均匀放在块内（带确定性扰动避免全部挤中心）
      members.forEach(function (nid, mi) {
        var seed = 0;
        for (var j = 0; j < nid.length; j++) seed += nid.charCodeAt(j);
        posRef.current[nid] = { x: cellX0 + padX + (Math.abs(Math.sin(seed)) * 0.9) * boxW, y: cellY0 + padY + (Math.abs(Math.cos(seed * 1.7)) * 0.9) * boxH, vx: 0, vy: 0 };
      });

      // 力导向迭代：斥力防重叠，引力沿边聚拢到理想间距
      var ideal = Math.min(boxW, boxH) / Math.max(2.2, Math.sqrt(n)) * 1.9;
      if (ideal < 60) ideal = 60;
      var rep = 9000; // 斥力强度（1/d² 反比）
      var maxSpd = 5;
      var minDist = 40; // 节点间最小间距（硬约束）

      function clamp(p) {
        p.x = Math.max(cellX0 + padX + padIn, Math.min(cellX0 + cellW - padX - padIn, p.x));
        p.y = Math.max(cellY0 + padY + padIn, Math.min(cellY0 + cellH - padY - padIn, p.y));
      }
      function disp(p, q, want) {
        var dx = p.x - q.x, dy = p.y - q.y;
        var d2 = dx * dx + dy * dy;
        if (d2 < 0.01) { dx = (Math.random() - 0.5); dy = (Math.random() - 0.5); d2 = dx * dx + dy * dy || 1; }
        var d = Math.sqrt(d2);
        if (d > want) return 0;
        var f = (want - d) / d;
        dx = dx * f; dy = dy * f;
        p.x += dx / 2; p.y += dy / 2;
        q.x -= dx / 2; q.y -= dy / 2;
        return 1;
      }

      for (var iter = 0; iter < 60; iter++) {
        members.forEach(function (nid) { var p = posRef.current[nid]; p.vx = 0; p.vy = 0; });
        // 斥力（两两，1/d²）
        for (var i = 0; i < n; i++) {
          for (var j = i + 1; j < n; j++) {
            var a = posRef.current[members[i]], b = posRef.current[members[j]];
            var dx = a.x - b.x, dy = a.y - b.y;
            var d2 = dx * dx + dy * dy;
            var d = Math.sqrt(d2) || 1;
            var f = rep / d2 / Math.max(1, d);
            var fx = dx / d * f, fy = dy / d * f;
            a.vx += fx; a.vy += fy;
            b.vx -= fx; b.vy -= fy;
          }
        }
        // 引力（沿边弹簧力：对称作用两端，拉向 ideal 距离）
        members.forEach(function (nid) {
          var conns = localAdj[nid];
          if (!conns) return;
          var pa = posRef.current[nid];
          for (var k = 0; k < conns.length; k++) {
            var pb = posRef.current[conns[k]];
            if (!pb) continue;
            var dx2 = pb.x - pa.x, dy2 = pb.y - pa.y;
            var dd = Math.sqrt(dx2 * dx2 + dy2 * dy2) || 1;
            var stretch = (dd - ideal) * 0.10;
            var fx2 = dx2 / dd * stretch, fy2 = dy2 / dd * stretch;
            pa.vx += fx2; pa.vy += fy2;
            pb.vx -= fx2; pb.vy -= fy2;
          }
        });
        // 更新位置（限速）+ 夹在块内
        members.forEach(function (nid) {
          var p = posRef.current[nid];
          p.x += Math.max(-maxSpd, Math.min(maxSpd, p.vx));
          p.y += Math.max(-maxSpd, Math.min(maxSpd, p.vy));
          clamp(p);
        });
        // 硬分离：把过近的节点强制推开（保证最小间距）
        for (var s = 0; s < 8; s++) {
          var any = false;
          for (var i2 = 0; i2 < n; i2++) {
            for (var j2 = i2 + 1; j2 < n; j2++) {
              if (disp(posRef.current[members[i2]], posRef.current[members[j2]], minDist)) { any = true; clamp(posRef.current[members[i2]]); clamp(posRef.current[members[j2]]); }
            }
          }
          if (!any) break;
        }
      }
      // 去掉速度字段
      members.forEach(function (nid) { var p = posRef.current[nid]; delete p.vx; delete p.vy; });
    });

    // 渲染时读取位置不需要 vx/vy
    return;
  }

  // 首次初始化
  var hasMissing = nodes.some(function (n) { return !posRef.current[n.id]; });
  if (hasMissing) layoutPositions();

  // 清理已删除的节点位置
  var alive = {};
  nodes.forEach(function (node) { alive[node.id] = true; });
  Object.keys(posRef.current).forEach(function (id) { if (!alive[id]) delete posRef.current[id]; });

  // 邻接表
  edgesRef.current = edges;
  var adj = {};
  edges.forEach(function (e, i) {
    (adj[e.a] = adj[e.a] || []).push({ idx: i, end: 'a' });
    (adj[e.b] = adj[e.b] || []).push({ idx: i, end: 'b' });
  });
  adjRef.current = adj;

  // ── 工具函数 ──
  function svgScale() {
    var el = svgRef.current;
    if (!el) return { sx: 1, sy: 1 };
    var r = el.getBoundingClientRect();
    return { sx: W / Math.max(1, r.width), sy: H / Math.max(1, r.height) };
  }
  function applyView() {
    var v = viewRef.current;
    if (gRef.current) gRef.current.setAttribute('transform', 'translate(' + v.tx + ',' + v.ty + ') scale(' + v.k + ')');
  }
  function syncNode(id) {
    var p = posRef.current[id];
    var el = nodeElsRef.current[id];
    if (el && p) el.setAttribute('transform', 'translate(' + p.x + ',' + p.y + ')');
  }
  function syncLine(i) {
    var el = lineElsRef.current[i];
    var e = edgesRef.current[i];
    if (!el || !e) return;
    var pa = posRef.current[e.a], pb = posRef.current[e.b];
    if (pa) { el.setAttribute('x1', pa.x); el.setAttribute('y1', pa.y); }
    if (pb) { el.setAttribute('x2', pb.x); el.setAttribute('y2', pb.y); }
  }
  function zoomBy(f) {
    var v = viewRef.current;
    v.k = Math.max(0.2, Math.min(4, v.k * f));
    applyView();
    setZoomPct(Math.round(v.k * 100));
  }

  // ── 鼠标交互：统一用 mousedown/mouseup 判断点击/拖拽 ──
  function onWheel(evt) {
    var sc = svgScale();
    var r = svgRef.current.getBoundingClientRect();
    var px = (evt.clientX - r.left) * sc.sx;
    var py = (evt.clientY - r.top) * sc.sy;
    var v = viewRef.current;
    v.k = Math.max(0.2, Math.min(4, v.k * (evt.deltaY < 0 ? 1.15 : 1 / 1.15)));
    v.tx = px - ((px - v.tx) / (v.k / (evt.deltaY < 0 ? 1.15 : 1 / 1.15))) * v.k;
    v.ty = py - ((py - v.ty) / (v.k / (evt.deltaY < 0 ? 1.15 : 1 / 1.15))) * v.k;
    applyView();
    setZoomPct(Math.round(v.k * 100));
  }
  function onSvgMouseDown(evt) {
    if (evt.button !== 0) return;
    evt.preventDefault();
    var sc = svgScale();
    dragRef.current = { type: 'pan', sx: evt.clientX, sy: evt.clientY, tx: viewRef.current.tx, ty: viewRef.current.ty, sxScale: sc.sx, syScale: sc.sy, moved: false };
  }
  function onNodeMouseDown(evt, id) {
    if (evt.button !== 0) return;
    evt.stopPropagation();
    evt.preventDefault();
    var sc = svgScale();
    var p = posRef.current[id];
    dragRef.current = { type: 'node', id: id, sx: evt.clientX, sy: evt.clientY, ox: p.x, oy: p.y, sxScale: sc.sx, syScale: sc.sy, moved: false };
  }
  function onMouseMove(evt) {
    var d = dragRef.current;
    if (!d) return;
    var dx = (evt.clientX - d.sx) * d.sxScale;
    var dy = (evt.clientY - d.sy) * d.syScale;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) d.moved = true;
    if (d.type === 'pan') {
      viewRef.current.tx = d.tx + dx;
      viewRef.current.ty = d.ty + dy;
      applyView();
    } else if (d.type === 'node') {
      var p = posRef.current[d.id];
      p.x = d.ox + dx / viewRef.current.k;
      p.y = d.oy + dy / viewRef.current.k;
      syncNode(d.id);
      var conns = adjRef.current[d.id] || [];
      for (var ci = 0; ci < conns.length; ci++) syncLine(conns[ci].idx);
    }
  }
  function onMouseUp() {
    var d = dragRef.current;
    if (!d) return;
    if (!d.moved) {
      // 是点击，不是拖拽
      if (d.type === 'node') {
        var clickedId = d.id;
        setSelected(function (prev) { return prev === clickedId ? null : clickedId; });
      } else if (d.type === 'pan') {
        // 点击空白 → 取消选择
        setSelected(null);
      }
    }
    dragRef.current = null;
  }

  function reset() {
    var v = viewRef.current;
    v.k = 1; v.tx = 0; v.ty = 0;
    applyView();
    setZoomPct(100);
    setSelected(null);
    posRef.current = {};
    layoutPositions();
    nodes.forEach(function (n) { syncNode(n.id); });
    for (var i = 0; i < edges.length; i++) syncLine(i);
  }

  React.useEffect(function () {
    function move(evt) { onMouseMove(evt); }
    function up() { onMouseUp(); }
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    var el = svgRef.current;
    function wheel(evt) { evt.preventDefault(); onWheel(evt); }
    if (el) el.addEventListener('wheel', wheel, { passive: false });
    return function () {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      if (el) el.removeEventListener('wheel', wheel);
    };
  }, []);

  // ── 高亮集合 ──
  var hlNodes = {}, hlEdges = {};
  var selNode = null;
  if (sel) {
    for (var ni = 0; ni < nodes.length; ni++) { if (nodes[ni].id === sel) { selNode = nodes[ni]; break; } }
    hlNodes[sel] = true;
    (adj[sel] || []).forEach(function (c) {
      var e = edges[c.idx];
      hlEdges[c.idx] = true;
      hlNodes[e.a] = true;
      hlNodes[e.b] = true;
    });
  }

  // ── 渲染线条 ──
  var lines = [];
  for (var i = 0; i < edges.length; i++) {
    var e = edges[i];
    var pa = posRef.current[e.a], pb = posRef.current[e.b];
    if (!pa || !pb) continue;
    var isHL = !!hlEdges[i];
    var dim = sel && !isHL;
    var baseW = Math.max(0.5, Math.min(3, e.weight * 0.5)) * lineWArr;
    lines.push(h('line', {
      key: 'e' + i,
      ref: (function (idx) { return function (el) { if (el) lineElsRef.current[idx] = el; else delete lineElsRef.current[idx]; }; })(i),
      x1: pa.x, y1: pa.y, x2: pb.x, y2: pb.y,
      stroke: isHL ? 'rgba(255,200,80,0.9)' : 'rgba(120,130,200,0.5)',
      strokeWidth: baseW * (isHL ? 2 : 1),
      opacity: dim ? 0.25 : 1,
      vectorEffect: 'non-scaling-stroke',
    }));
  }

  // ── 渲染节点 ──
  var circles = nodes.map(function (node) {
    var p = posRef.current[node.id];
    var r = 6 + Math.min(16, 4 + node.weight * 1.2);
    var isHL = !!hlNodes[node.id];
    var dim = sel && !isHL;
    var isCenter = sel === node.id;
    return h('g', {
      key: node.id,
      ref: (function (nid) { return function (el) { if (el) nodeElsRef.current[nid] = el; else delete nodeElsRef.current[nid]; }; })(node.id),
      transform: 'translate(' + p.x + ',' + p.y + ')',
      onMouseDown: function (evt) { onNodeMouseDown(evt, node.id); },
      style: { cursor: 'pointer', opacity: dim ? 0.35 : 1, transition: 'opacity 0.15s' },
    },
      h('circle', { cx: 0, cy: 0, r: r,
        fill: isCenter ? 'rgba(255,200,80,0.95)' : (isHL ? 'rgba(255,180,60,0.85)' : 'rgba(100,120,230,0.8)'),
        stroke: isHL ? 'rgba(255,220,120,0.7)' : 'rgba(255,255,255,0.18)',
        strokeWidth: isHL ? 2.5 : 1,
      }),
      h('text', { x: 0, y: r + 13, textAnchor: 'middle', className: 'dshm-node-label' }, node.label));
  });

  // ── 选中节点的文字介绍 ──
  var selInfo = null;
  if (selNode) {
    var neighbors = [];
    (adj[sel] || []).forEach(function (c) {
      var e = edges[c.idx];
      var otherId = e.a === sel ? e.b : e.a;
      neighbors.push({ id: otherId, weight: e.weight });
    });
    neighbors.sort(function (a, b) { return b.weight - a.weight; });
    selInfo = h('div', { className: 'dshm-selinfo' },
      h('div', { className: 'dshm-selinfo-title' }, selNode.label + ' \uff08\u5173\u8054 ' + neighbors.length + ' \u4e2a\u5b9e\u4f53\uff09'),
      neighbors.length ? h('div', { className: 'dshm-selinfo-neighbors' },
        neighbors.map(function (nb) {
          return h('span', { key: nb.id, className: 'dshm-tag' }, nb.id + ' \u00d7' + nb.weight);
        })
      ) : null
    );
  }

  return h('div', { className: 'dshm-graph' },
    h('div', { className: 'dshm-graph-toolbar' },
      h('span', { className: 'dshm-count' }, zoomPct + '%'),
      h('button', { onClick: function () { zoomBy(1.3); } }, '+'),
      h('button', { onClick: function () { zoomBy(1 / 1.3); } }, '\u2212'),
      h('button', { onClick: reset }, '\u91cd\u7f6e'),
      sel ? h('span', { className: 'dshm-count' }, '\u5df2\u9009\uff1a' + sel) : null),
    h('div', { className: 'dshm-graph-linew' },
      h('span', { className: 'dshm-label' }, '\u7ebf\u7c97'),
      h('input', { type: 'range', min: 0.5, max: 5, step: 0.1, value: lineWArr, onChange: function (e) { setLineW(Number(e.target.value)); }, style: { width: '80px' } }),
      h('span', { className: 'dshm-count' }, lineWArr.toFixed(1) + 'x')
    ),
    h('svg', { ref: svgRef, width: W, height: H, className: 'dshm-svg', onMouseDown: onSvgMouseDown, style: { touchAction: 'none' } },
      h('g', { ref: gRef, transform: 'translate(0,0) scale(1)' }, lines, circles)),
    selInfo,
    h('div', { className: 'dshm-hint' }, '\u70b9\u51fb\u8282\u70b9\u9ad8\u4eae\u5173\u8054\u94fe \u00b7 \u62d6\u62fd\u8282\u70b9\u79fb\u52a8 \u00b7 \u6eda\u8f6e\u7f29\u653e \u00b7 \u62d6\u62fd\u7a7a\u767d\u5e73\u79fb \u00b7 \u91cd\u7f6e\u91cd\u65b0\u5206\u7ec4\u5e03\u5c40')
  );
}

function ConfigForm(props) {
  var apiBase = React.useState('');
  var setApiBase = apiBase[1]; apiBase = apiBase[0];
  var apiKey = React.useState('');
  var setApiKey = apiKey[1]; apiKey = apiKey[0];
  var model = React.useState('');
  var setModel = model[1]; model = model[0];
  var dimensions = React.useState('');
  var setDimensions = dimensions[1]; dimensions = dimensions[0];
  var maxNodes = React.useState('50');
  var setMaxNodes = maxNodes[1]; maxNodes = maxNodes[0];
  var enabled = React.useState(false);
  var setEnabled = enabled[1]; enabled = enabled[0];
  var organize = React.useState(true);
  var setOrganize = organize[1]; organize = organize[0];
  var busy = React.useState(false);
  var setBusy = busy[1]; busy = busy[0];

  React.useEffect(function () {
    if (!props.cfg) return;
    setApiBase(props.cfg.apiBase || '');
    setApiKey(props.cfg.apiKey || '');
    setModel(props.cfg.model || '');
    setDimensions(props.cfg.dimensions ? String(props.cfg.dimensions) : '');
    setMaxNodes(props.cfg.maxNodes ? String(props.cfg.maxNodes) : '50');
    setEnabled(!!props.cfg.enabled);
    setOrganize(props.cfg.organizeWithModel !== false);
  }, [props.cfg]);

  function persist() {
    return apiPost('/config', { apiBase: apiBase, apiKey: apiKey, model: model, dimensions: Number(dimensions) || 0, maxNodes: Number(maxNodes) || 50, enabled: enabled, organizeWithModel: organize });
  }
  function save() {
    setBusy(true);
    persist().then(function (c) { props.onSaved(c); setBusy(false); }).catch(function (e) { props.onStatus('\u4fdd\u5b58\u5931\u8d25\uff1a' + String(e && e.message || e)); setBusy(false); });
  }
  function test() {
    setBusy(true);
    persist().then(function () { return apiGet('/test'); }).then(function (r) { props.onTest(r); setBusy(false); }).catch(function (e) { props.onTest({ ok: false, error: String(e && e.message || e) }); setBusy(false); });
  }

  return h('div', { className: 'dshm-form' },
    field('API Base\uff08OpenAI \u517c\u5bb9\uff0c\u5982 https://api.openai.com/v1\uff09', h('input', { type: 'text', value: apiBase, placeholder: 'https://api.openai.com/v1', onChange: function (e) { setApiBase(e.target.value); } })),
    field('API Key', h('input', { type: 'password', value: apiKey, placeholder: 'sk-\u2026', autoComplete: 'off', onChange: function (e) { setApiKey(e.target.value); } })),
    field('\u5d4c\u5165\u6a21\u578b', h('input', { type: 'text', value: model, placeholder: 'text-embedding-3-small', onChange: function (e) { setModel(e.target.value); } })),
    field('\u5d4c\u5165\u7ef4\u5ea6\uff080 = \u6a21\u578b\u9ed8\u8ba4\uff09', h('input', { type: 'number', value: dimensions, placeholder: '0', onChange: function (e) { setDimensions(e.target.value); } })),
    field('\u5173\u7cfb\u56fe\u6700\u5927\u8282\u70b9\u6570\uff083\u2013200\uff0c\u9ed8\u8ba4 50\uff09', h('input', { type: 'number', value: maxNodes, min: 3, max: 200, onChange: function (e) { setMaxNodes(e.target.value); } })),
    field('\u542f\u7528\u5411\u91cf\u68c0\u7d22', h('input', { type: 'checkbox', checked: enabled, onChange: function (e) { setEnabled(e.target.checked); } })),
    field('\u7528\u7f16\u7a0b\u6a21\u578b\u6574\u7406\u8bb0\u5fc6', h('input', { type: 'checkbox', checked: organize, onChange: function (e) { setOrganize(e.target.checked); } })),
    h('div', { className: 'dshm-actions' },
      h('button', { onClick: save, disabled: busy }, '\u4fdd\u5b58'),
      h('button', { onClick: test, disabled: busy }, '\u6d4b\u8bd5\u8fde\u63a5')),
    h('div', { className: 'dshm-hint' }, '\u8bb0\u5fc6\u4e0e\u914d\u7f6e\u4fdd\u5b58\u5728\u5de5\u4f5c\u533a\u6839\u76ee\u5f55\u7684 .dsh-memory-config.json \u4e0e .dsh-memory-store.json \u6587\u4ef6\u4e2d\uff1bAPI Key \u4e3a\u660e\u6587\u4fdd\u5b58\uff0c\u8bf7\u52ff\u63d0\u4ea4\u5230\u7248\u672c\u5e93\u3002')
  );
}

function stageLabel(stage) {
  if (stage === 'organizing') return '\u6574\u7406\u4e2d\u2026';
  if (stage === 'embedding') return '\u5411\u91cf\u5316\u4e2d\u2026';
  if (stage === 'done') return '\u5df2\u6dfb\u52a0';
  if (stage === 'error') return '\u5931\u8d25';
  return '\u5904\u7406\u4e2d\u2026';
}

function PendingList(props) {
  var items = props.items || [];
  if (!items.length) return null;
  return h('div', { className: 'dshm-pending' },
    items.map(function (p) {
      var active = p.stage === 'organizing' || p.stage === 'embedding';
      var cls = p.stage === 'done' ? 'dshm-stage dshm-stage-done' : (p.stage === 'error' ? 'dshm-stage dshm-stage-err' : 'dshm-stage');
      var src = p.source === 'agent' ? 'AI' : '\u4eba\u5de5';
      var tip = p.stage === 'error' ? (p.error || '\u5931\u8d25') : (src + '\uff1a' + (p.preview || ''));
      return h('div', { className: 'dshm-pending-item', key: p.id, title: tip },
        active ? h('span', { className: 'dshm-spinner' }) : h('span', { className: 'dshm-stage', style: { width: '14px' } }, p.stage === 'done' ? '\u2713' : (p.stage === 'error' ? '\u2717' : '')),
        h('span', { className: 'dshm-pending-preview' }, (p.preview || '')),
        h('span', { className: cls }, stageLabel(p.stage)));
    })
  );
}

function MemoryBrowser(props) {
  var items = React.useState([]);
  var setItems = items[1]; items = items[0];
  var total = React.useState(0);
  var setTotal = total[1]; total = total[0];
  var query = React.useState('');
  var setQuery = query[1]; query = query[0];
  var type = React.useState('all');
  var setType = type[1]; type = type[0];
  var draft = React.useState('');
  var setDraft = draft[1]; draft = draft[0];
  var draftType = React.useState('note');
  var setDraftType = draftType[1]; draftType = draftType[0];
  var pending = React.useState([]);
  var setPending = pending[1]; pending = pending[0];
  var wasBusyRef = React.useRef(false);
  var debounceRef = React.useRef(null);
  var seqRef = React.useRef(0);

  function load(q, t) {
    var seq = ++seqRef.current;
    if (q && q.trim()) {
      apiPost('/search', { query: q, limit: 50 }).then(function (r) {
        if (seq !== seqRef.current) return;
        setItems(r.items); setTotal(r.items.length);
      }).catch(function () {});
    } else {
      apiGet('/list?limit=100&type=' + (t || 'all')).then(function (r) {
        if (seq !== seqRef.current) return;
        setItems(r.items); setTotal(r.total);
      }).catch(function () {});
    }
  }
  // 输入自动搜索（300ms 防抖）
  function onQueryChange(val) {
    setQuery(val);
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(function () { load(val, type); }, 300);
  }
  React.useEffect(function () {
    load('', 'all');
    var alive = true;
    function tick() {
      apiGet('/pending').then(function (r) {
        if (!alive) return;
        setPending(r.items || []);
        var busy = (r.items || []).some(function (p) { return p.stage === 'organizing' || p.stage === 'embedding'; });
        if (wasBusyRef.current && !busy) load(query, type);
        wasBusyRef.current = busy;
      }).catch(function () {});
    }
    var id = window.setInterval(tick, 1200);
    tick();
    return function () { alive = false; window.clearInterval(id); };
  }, []);

  function remove(id) { apiPost('/delete', { id: id }).then(function () { load(query, type); }); }

  function add() {
    var c = draft.trim();
    if (!c) return;
    apiPost('/add', { content: c, type: draftType, tags: [] }).then(function (r) {
      setDraft('');
      props.onStatus(r.ok ? ('\u5df2\u63d0\u4ea4\uff1a' + (r.summary || r.id)) : ('\u4fdd\u5b58\u5931\u8d25\uff1a' + (r.error || '')));
    }).catch(function (e) { props.onStatus('\u4fdd\u5b58\u5931\u8d25\uff1a' + String(e && e.message || e)); });
  }

  return h('div', { className: 'dshm-browser' },
    h('div', { className: 'dshm-browbar' },
      h('input', { className: 'dshm-search', value: query, placeholder: '\u641c\u7d22\u8bb0\u5fc6\u2026', onChange: function (e) { onQueryChange(e.target.value); } }),
      h('select', { value: type, onChange: function (e) { setType(e.target.value); load(query && query.trim() ? query : '', e.target.value); } },
        h('option', { value: 'all' }, '\u5168\u90e8'),
        h('option', { value: 'pitfall' }, '\u5751'),
        h('option', { value: 'knowledge' }, '\u77e5\u8bc6'),
        h('option', { value: 'note' }, '\u7b14\u8bb0'))),
    h(PendingList, { items: pending }),
    h('div', { className: 'dshm-count' }, '\u5171 ' + total + ' \u6761'),
    h('div', { className: 'dshm-card' },
      h('textarea', { rows: 2, value: draft, placeholder: '\u624b\u52a8\u6dfb\u52a0\u4e00\u6761\u8bb0\u5fc6\u2026', onChange: function (e) { setDraft(e.target.value); } }),
      h('div', { className: 'dshm-browbar' },
        h('select', { value: draftType, onChange: function (e) { setDraftType(e.target.value); } },
          h('option', { value: 'note' }, '\u7b14\u8bb0'),
          h('option', { value: 'pitfall' }, '\u5751'),
          h('option', { value: 'knowledge' }, '\u77e5\u8bc6')),
        h('button', { onClick: add }, '\u6dfb\u52a0'))),
    items.map(function (m) {
      return h('div', { className: 'dshm-card', key: m.id },
        h('div', { className: 'dshm-card-head' },
          h('span', { className: 'dshm-badge dshm-badge-' + (m.type || 'note') }, typeLabel(m.type)),
          h('span', { className: 'dshm-summary' }, m.summary),
          h('button', { className: 'dshm-del', onClick: function () { remove(m.id); } }, '\u5220\u9664')),
        h('div', { className: 'dshm-content' }, m.content),
        (m.tags && m.tags.length) ? h('div', { className: 'dshm-tags' }, m.tags.map(function (t) { return h('span', { className: 'dshm-tag', key: t }, t); })) : null);
    })
  );
}

function GraphView() {
  var data = React.useState(null);
  var setData = data[1]; data = data[0];
  React.useEffect(function () { apiGet('/graph').then(setData).catch(function () { setData({ nodes: [], edges: [], totalEntities: 0, limit: 0 }); }); }, []);
  if (!data) return h('div', { className: 'dshm-empty' }, '\u52a0\u8f7d\u4e2d\u2026');
  if (!data.nodes || !data.nodes.length) return h('div', { className: 'dshm-empty' }, '\u6682\u65e0\u5b9e\u4f53\u3002\u5148\u4fdd\u5b58\u51e0\u6761\u5e26\u5b9e\u4f53\uff08\u5173\u952e\u8bcd\uff09\u7684\u8bb0\u5fc6\u3002');
  var trunc = data.totalEntities > data.nodes.length;
  return h('div', { className: 'dshm-graph' },
    h('div', { className: 'dshm-count' }, '\u5b9e\u4f53 ' + data.nodes.length + ' \u4e2a \u00b7 \u5173\u7cfb ' + data.edges.length + ' \u6761' + (trunc ? ('\uff08\u5171 ' + data.totalEntities + ' \u4e2a\uff0c\u5df2\u9650\u5236\u663e\u793a\u524d ' + data.nodes.length + ' \u4e2a\uff0c\u53ef\u5728\u914d\u7f6e\u4e2d\u8c03\u6574\uff09') : '')),
    h(GraphCanvas, { nodes: data.nodes, edges: data.edges }));
}

// ── 更新提示横幅：忽略 / 忽略这个版本 / 更新（两阶段真实进度 + 中英文自适应） ──
function UpdateBanner(props) {
  var info = props.info;
  var onDone = props.onDone || function () {};
  var zh = ((typeof navigator !== 'undefined' && navigator.language) || '').toLowerCase().indexOf('zh') === 0;
  var L = zh ? {
    title: '\u63d2\u4ef6\u6709\u66f4\u65b0\uff1a',
    ignore: '\u5ffd\u7565',
    ignoreV: '\u5ffd\u7565\u8fd9\u4e2a\u7248\u672c',
    update: '\u66f4\u65b0',
    fail: '\u66f4\u65b0\u5931\u8d25\uff1a',
    opFail: '\u64cd\u4f5c\u5931\u8d25\uff1a',
    stepDl: '\u6b63\u5728\u4e0b\u8f7d\u65b0\u7248\u672c\u2026',
    stepIn: '\u6b63\u5728\u5b89\u88c5\u6587\u4ef6\u2026'
  } : {
    title: 'Update available: ',
    ignore: 'Dismiss',
    ignoreV: 'Skip this version',
    update: 'Update',
    fail: 'Update failed: ',
    opFail: 'Operation failed: ',
    stepDl: 'Downloading new version…',
    stepIn: 'Installing files…'
  };
  var logText = (zh && info.changelogZh) ? info.changelogZh : info.changelog;
  var busyArr = React.useState(false);
  var setBusy = busyArr[1]; busyArr = busyArr[0];
  var msgArr = React.useState('');
  var setMsg = msgArr[1]; msgArr = msgArr[0];
  var phaseArr = React.useState(''); // '' | 'dl' | 'in'
  var setPhase = phaseArr[1]; phaseArr = phaseArr[0];

  function doIgnore() { onDone({ action: 'dismiss' }); }
  function doIgnoreVersion() {
    setBusy(true);
    apiPost('/update/ignore', { version: info.latest }).then(function () { onDone({ action: 'ignoreVersion' }); }).catch(function (e) { setBusy(false); setMsg(L.opFail + String(e && e.message || e)); });
  }
  function doUpdate() {
    setBusy(true); setMsg(''); setPhase('dl');
    apiPost('/update/prepare', {}).then(function (p) {
      if (!(p && p.ok)) throw new Error((p && p.error) || 'prepare failed');
      setPhase('in');
      return apiPost('/update/apply', {});
    }).then(function (a) {
      if (!(a && a.ok)) throw new Error((a && a.error) || 'apply failed');
      onDone({ action: 'updated', to: a.to });
    }).catch(function (e) { setBusy(false); setPhase(''); setMsg(L.fail + String(e && e.message || e)); });
  }
  var stepText = phaseArr === 'dl' ? L.stepDl : (phaseArr === 'in' ? L.stepIn : '');

  return h('div', { className: 'dshm-update' },
    h('div', { className: 'dshm-update-title' }, L.title + 'v' + info.current + ' \u2192 v' + info.latest),
    (logText ? h('div', { className: 'dshm-update-log' }, logText) : null),
    h('div', { className: 'dshm-update-actions' },
      h('button', { onClick: doIgnore, disabled: busyArr }, L.ignore),
      h('button', { onClick: doIgnoreVersion, disabled: busyArr }, L.ignoreV),
      h('button', { onClick: doUpdate, disabled: busyArr }, busyArr ? (zh ? '\u66f4\u65b0\u4e2d\u2026' : 'Updating…') : L.update),
      (busyArr ? h('span', { className: 'dshm-spinner' }) : null),
      (stepText ? h('span', { className: 'dshm-update-msg' }, stepText) : null),
      (msgArr && !busyArr ? h('span', { className: 'dshm-update-msg' }, msgArr) : null)));
}

function MemorySettings() {
  var tab = React.useState('config');
  var setTab = tab[1]; tab = tab[0];
  var cfg = React.useState(null);
  var setCfg = cfg[1]; cfg = cfg[0];
  var stats = React.useState(null);
  var setStats = stats[1]; stats = stats[0];
  var status = React.useState('');
  var setStatus = status[1]; status = status[0];
  var upd = React.useState(null);
  var setUpd = upd[1]; upd = upd[0];

  function refresh() {
    apiGet('/config').then(setCfg).catch(function (e) { setStatus('\u8bfb\u53d6\u914d\u7f6e\u5931\u8d25\uff1a' + String(e && e.message || e)); });
    apiGet('/stats').then(setStats).catch(function () {});
  }
  React.useEffect(refresh, []);
  // 打开设置时检查一次更新（宿主端有 1h 缓存，不会频繁请求 GitHub）
  React.useEffect(function () { apiGet('/update/check').then(setUpd).catch(function () {}); }, []);

  function onUpdateDone(r) {
    if (r && r.action === 'updated') {
      var zh2 = ((typeof navigator !== 'undefined' && navigator.language) || '').toLowerCase().indexOf('zh') === 0;
      setStatus(zh2 ? ('\u2714 \u5df2\u66f4\u65b0\u5230 v' + r.to + '\uff0c\u91cd\u542f dsh web \u540e\u751f\u6548') : ('\u2714 Updated to v' + r.to + ' \u2014 restart dsh web to apply'));
      refresh();
    }
    setUpd(null); // dismiss / ignoreVersion / updated 都收起横幅
  }
  var ignoredV = String((cfg && cfg.ignoredUpdateVersion) || (upd && upd.ignoredVersion) || '');
  var showUpdate = !!(upd && upd.ok && upd.hasUpdate && String(upd.latest) !== ignoredV);

  ensureCSS();

  return h('div', { className: 'dshm-root' },
    (showUpdate ? h(UpdateBanner, { info: upd, onDone: onUpdateDone }) : null),
    h('div', { className: 'dshm-tabs' },
      h('button', { className: 'dshm-tab' + (tab === 'config' ? ' dshm-tab-on' : ''), onClick: function () { setTab('config'); } }, '\u914d\u7f6e'),
      h('button', { className: 'dshm-tab' + (tab === 'browse' ? ' dshm-tab-on' : ''), onClick: function () { setTab('browse'); } }, '\u8bb0\u5fc6\u5e93'),
      h('button', { className: 'dshm-tab' + (tab === 'graph' ? ' dshm-tab-on' : ''), onClick: function () { setTab('graph'); } }, '\u5173\u7cfb\u56fe')),
    (stats ? h('div', { className: 'dshm-banner' }, '\u8bb0\u5fc6 ' + stats.count + ' \u6761 \u00b7 \u5b9e\u4f53 ' + stats.entityCount + ' \u4e2a') : null),
    (status ? h('div', { className: 'dshm-status' }, status) : null),
    tab === 'config' ? h(ConfigForm, { cfg: cfg, onSaved: function (c) { setCfg(c); setStatus('\u5df2\u4fdd\u5b58'); }, onTest: function (r) { setStatus(r.ok ? ('\u8fde\u63a5\u6210\u529f\uff0c\u5411\u91cf\u7ef4\u5ea6 ' + r.dimensions) : ('\u6d4b\u8bd5\u5931\u8d25\uff1a' + (r.error || '\u672a\u77e5\u9519\u8bef'))); }, onStatus: setStatus }) :
    tab === 'browse' ? h(MemoryBrowser, { onStatus: setStatus }) :
    h(ErrorBoundary, null, h(GraphView, null))
  );
}

var plugin = {
  inject: ['slots'],
  apply: function (ctx: any) {
    ensureCSS();
    ctx.slots.inject('settings.section', function () {
      return ctx.slots.register({ name: 'settings.section', id: 'memory', order: 30, label: '\u8bb0\u5fc6 / Memory' }, function () {
        return h(MemorySettings, null);
      });
    });
  },
};

export default plugin
