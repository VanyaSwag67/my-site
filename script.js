const loader=document.getElementById('loader');
window.addEventListener('load',()=>setTimeout(()=>loader?.classList.add('hide'),450));

const menu=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>links?.classList.toggle('open'));
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

const theme=document.getElementById('theme-toggle');
const savedTheme=localStorage.getItem('theme');
if(savedTheme==='light') document.body.classList.add('light');
function updateThemeIcon(){if(theme) theme.textContent=document.body.classList.contains('light')?'🌙':'☀️'}
updateThemeIcon();
theme?.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('theme',document.body.classList.contains('light')?'light':'dark');updateThemeIcon()});

const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

const typing=document.querySelector('.typing');
if(typing){const text=typing.dataset.text;typing.textContent='';let i=0;const type=()=>{if(i<text.length){typing.textContent+=text[i++];setTimeout(type,110)}};setTimeout(type,600)}

document.querySelectorAll('[data-count]').forEach(counter=>{
 const target=Number(counter.dataset.count);
 const observer=new IntersectionObserver(entries=>{if(entries[0].isIntersecting){let n=0;const step=Math.max(1,Math.ceil(target/20));const timer=setInterval(()=>{n=Math.min(target,n+step);counter.textContent=n;if(n>=target)clearInterval(timer)},45);observer.disconnect()}});
 observer.observe(counter);
});

const cursor=document.querySelector('.cursor'),dot=document.querySelector('.cursor-dot');
document.addEventListener('mousemove',e=>{if(cursor){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'}if(dot){dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px'}});
document.querySelectorAll('a,button,.card,input,textarea').forEach(el=>{el.addEventListener('mouseenter',()=>cursor&&(cursor.style.width='42px',cursor.style.height='42px'));el.addEventListener('mouseleave',()=>cursor&&(cursor.style.width='30px',cursor.style.height='30px'))});

const form=document.getElementById('contact-form');
form?.addEventListener('submit',e=>{
 e.preventDefault();
 const name=document.getElementById('name').value.trim();
 const email=document.getElementById('email').value.trim();
 const message=document.getElementById('message').value.trim();
 const subject=encodeURIComponent('Сообщение с сайта Vanyaswag67');
 const body=encodeURIComponent(`Имя: ${name}\nEmail: ${email}\n\n${message}`);
 document.getElementById('form-note').textContent='Открываю почтовую программу...';
 window.location.href=`mailto:?subject=${subject}&body=${body}`;
});
