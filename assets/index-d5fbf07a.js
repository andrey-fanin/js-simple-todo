(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m="/assets/remove-f27d259e.svg",f=document.querySelector("form"),d=document.querySelector(".todo-input"),a=document.querySelector(".todo-list");let c=JSON.parse(localStorage.getItem("todos"))||[];function i(){a.innerHTML="",c.forEach((r,s)=>{const n=document.createElement("li");n.classList.add("todo-item"),r.completed&&n.classList.add("completed");const o=document.createElement("input");o.type="checkbox",o.checked=r.completed,o.addEventListener("change",()=>{r.completed=o.checked,localStorage.setItem("todos",JSON.stringify(c)),i()});const e=document.createElement("label");e.innerHTML=`<div>${r.text}</div>`;const t=document.createElement("button");t.classList.add("todo-remove"),t.innerHTML=`<img src="${m}" alt="#">`,t.addEventListener("click",()=>{c.splice(s,1),u(),i()}),e.appendChild(o),n.appendChild(e),n.appendChild(t),a.appendChild(n)})}function u(){localStorage.setItem("todos",JSON.stringify(c))}f.addEventListener("submit",r=>{r.preventDefault(),d.value.trim()!==""&&(c.push({text:d.value,completed:!1}),u(),d.value="",i())});i();
