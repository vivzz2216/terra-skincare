const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
if(!reducedMotion.matches && 'IntersectionObserver' in window){
 const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');reveal.unobserve(entry.target)}}),{threshold:.12});
 document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));
}
