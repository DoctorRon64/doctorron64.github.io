function createNavbar(){const e=document.createElement("nav");e.className="navbar";const t=document.createElement("div");t.className="container";const n=document.createElement("ul");[{href:"/about.html",text:"About"},{href:"/index.html",text:"Home"},{text:"Projects",dropdown:[{href:"/overview.html",text:"Overview"},{href:"/games.html",text:"Games"},{href:"/uc.html",text:"Art"},{href:"/uc.html",text:"Music"}]}].forEach((e=>{const t=document.createElement("li");if(e.dropdown){const n=document.createElement("a");n.textContent=e.text,n.href="#";const a=document.createElement("ul");a.className="dropdown",e.dropdown.forEach((e=>{const t=document.createElement("li"),n=document.createElement("a");n.href=e.href,n.textContent=e.text,t.appendChild(n),a.appendChild(t)})),t.appendChild(n),t.appendChild(a),t.addEventListener("mouseenter",(()=>{a.style.display="block"})),t.addEventListener("mouseleave",(()=>{a.style.display="none"}))}else{const n=document.createElement("a");n.href=e.href,n.textContent=e.text,t.appendChild(n)}n.appendChild(t)})),t.appendChild(n),e.appendChild(t),document.body.appendChild(e)}createNavbar();//# sourceMappingURL=navbar.js.map
