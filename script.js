const elements=document.querySelectorAll('.card,.about-card,.contact-card');
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0)';}})},{threshold:.12});
elements.forEach(el=>{el.style.opacity='0';el.style.transform='translateY(25px)';el.style.transition='opacity .6s ease,transform .6s ease';observer.observe(el);});
