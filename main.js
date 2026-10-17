// Header: glass solidifies on scroll; nav CTA appears only once the hero is scrolled past
(function(){
  var header = document.querySelector('header');
  var hero = document.querySelector('.hero');
  var onScroll = function(){ header.classList.toggle('scrolled', window.scrollY > 24); };
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});
  if(hero && 'IntersectionObserver' in window){
    var ho = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ header.classList.toggle('show-cta', !en.isIntersecting); });
    },{rootMargin:'-72px 0px 0px 0px',threshold:0});
    ho.observe(hero);
  } else { header.classList.add('show-cta'); }
})();

// Framer-style staggered reveal on scroll (respects reduced motion via CSS)
(function(){
  var els = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  els.forEach(function(e){
    var sibs = Array.prototype.filter.call(e.parentNode.children, function(c){ return c.classList && c.classList.contains('reveal'); });
    var idx = sibs.indexOf(e);
    if(idx > 0){ e.style.transitionDelay = Math.min(idx, 6) * 0.09 + 's'; }
  });
  if(!('IntersectionObserver' in window)){ els.forEach(function(e){ e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  },{threshold:0.12,rootMargin:'0px 0px -8% 0px'});
  els.forEach(function(e){ io.observe(e); });
})();
