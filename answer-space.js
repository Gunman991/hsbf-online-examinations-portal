
/* Presentation-only enhancement: does not modify answers, form events, or submission endpoints. */
(function(){
  function grow(t){ if(!t || t.tagName!=='TEXTAREA')return; t.style.height='auto'; t.style.height=Math.max(t.scrollHeight,420)+'px'; }
  document.querySelectorAll('textarea').forEach(function(t){
    t.setAttribute('data-hsbf-expanded','true'); t.setAttribute('rows','18');
    t.addEventListener('input',function(){grow(t)});
    grow(t);
  });
})();
