(()=>{"use strict";(()=>{const e=new class{#e=null;constructor(){this.#e=this.#r()}#r(){const e=document.createElement("div");return e.classList.add("app"),document.body.append(e),e}appendNode(e){return this.#e.append(e),this.#e}},r=(e,r)=>{const p=document.createElement(e);return p.classList.add(r),p},p=class{constructor(e,r){this.keyCode=e,this.keyValue=r,this.keyNode=this.#p(),this.mouseClickHandler=this.mouseClickHandler.bind(this),this.clickEvent()}#p(){const e=r("button","key");return e.innerHTML=`<span class="key__inner">${this.keyValue}</span>`,e.dataset.code=this.keyCode,e}clickEvent(){this.keyNode.addEventListener("click",this.mouseClickHandler)}static keypressEvent(){window.addEventListener("keydown",(e=>{e.preventDefault();const r=e.code,p=document.querySelector(`.key[data-code="${r}"]`);p.classList.add("key_active"),p.click(),window.addEventListener("keyup",(()=>{p.classList.remove("key_active")}))}))}mouseClickHandler(){const e=document.querySelector(".textarea");switch(this.keyCode){case"Enter":e.value+="\n";break;case"Tab":e.value+="\t";break;case"Delete":this.deleteSymbol(e);break;case"Backspace":this.backspaceSymbol(e);break;case"CapsLock":case"ShiftLeft":case"ShiftRight":case"AltRight":case"AltLeft":case"ControlRight":case"ControlLeft":case"MetaLeft":break;default:this.printSymbol(e)}e.focus()}deleteSymbol(e){const r=e.value.substring(0,e.selectionStart),p=e.value.substring(e.selectionStart,e.value.length).split("");p.shift(),e.value=r+p.join(""),e.selectionStart=r.length,e.selectionEnd=r.length}backspaceSymbol(e){const r=e.value.substring(0,e.selectionStart).split(""),p=e.value.substring(e.selectionStart,e.value.length);r.pop(),e.value=r.join("")+p,e.selectionStart=r.length,e.selectionEnd=r.length}printSymbol(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.keyValue;const p=e.value.substring(0,e.selectionStart),t=e.value.substring(e.selectionStart,e.value.length);e.value=p+r+t,e.selectionStart=p.length+1,e.selectionEnd=p.length+1}},t=[{Backquote:{ru:{upper:"Ё",lower:"ё"},eng:{upper:"`",lower:"`"}},Digit1:{ru:{upper:"!",lower:"1"},eng:{upper:"!",lower:"1"}},Digit2:{ru:{upper:'"',lower:"2"},eng:{upper:"@",lower:"2"}},Digit3:{ru:{upper:"№",lower:"3"},eng:{upper:"#",lower:"3"}},Digit4:{ru:{upper:";",lower:"4"},eng:{upper:"$",lower:"4"}},Digit5:{ru:{upper:"%",lower:"5"},eng:{upper:"%",lower:"5"}},Digit6:{ru:{upper:":",lower:"6"},eng:{upper:"^",lower:"6"}},Digit7:{ru:{upper:"?",lower:"7"},eng:{upper:"&",lower:"7"}},Digit8:{ru:{upper:"*",lower:"8"},eng:{upper:"*",lower:"8"}},Digit9:{ru:{upper:"(",lower:"9"},eng:{upper:"(",lower:"9"}},Digit0:{ru:{upper:")",lower:"0"},eng:{upper:")",lower:"0"}},Minus:{ru:{upper:"_",lower:"-"},eng:{upper:"_",lower:"-"}},Equal:{ru:{upper:"+",lower:"="},eng:{upper:"+",lower:"="}},Backspace:{ru:{upper:"Backspace",lower:"Backspace"},eng:{upper:"Backspace",lower:"Backspace"}}},{Tab:{ru:{upper:"Tab",lower:"Tab"},eng:{upper:"Tab",lower:"Tab"}},KeyQ:{ru:{upper:"Й",lower:"Й"},eng:{upper:"Q",lower:"q"}},KeyW:{ru:{upper:"Ц",lower:"ц"},eng:{upper:"W",lower:"w"}},KeyE:{ru:{upper:"У",lower:"у"},eng:{upper:"E",lower:"e"}},KeyR:{ru:{upper:"К",lower:"к"},eng:{upper:"R",lower:"r"}},KeyT:{ru:{upper:"Е",lower:"е"},eng:{upper:"T",lower:"t"}},KeyY:{ru:{upper:"Н",lower:"н"},eng:{upper:"Y",lower:"y"}},KeyU:{ru:{upper:"Г",lower:"г"},eng:{upper:"U",lower:"u"}},KeyI:{ru:{upper:"Ш",lower:"ш"},eng:{upper:"I",lower:"i"}},KeyO:{ru:{upper:"Щ",lower:"щ"},eng:{upper:"O",lower:"o"}},KeyP:{ru:{upper:"З",lower:"з"},eng:{upper:"P",lower:"p"}},BracketLeft:{ru:{upper:"Х",lower:"х"},eng:{upper:"{",lower:"["}},BracketRight:{ru:{upper:"Ъ",lower:"ъ"},eng:{upper:"}",lower:"]"}},Backslash:{ru:{upper:"/",lower:"/"},eng:{upper:"\\",lower:"\\"}},Delete:{ru:{upper:"Del",lower:"Del"},eng:{upper:"Del",lower:"Del"}}},{CapsLock:{ru:{upper:"Caps",lower:"Caps"},eng:{upper:"Caps",lower:"Caps"}},KeyA:{ru:{upper:"Ф",lower:"ф"},eng:{upper:"A",lower:"a"}},KeyS:{ru:{upper:"Ы",lower:"ы"},eng:{upper:"S",lower:"s"}},KeyD:{ru:{upper:"В",lower:"в"},eng:{upper:"D",lower:"d"}},KeyF:{ru:{upper:"А",lower:"а"},eng:{upper:"F",lower:"f"}},KeyG:{ru:{upper:"П",lower:"п"},eng:{upper:"G",lower:"g"}},KeyH:{ru:{upper:"Р",lower:"р"},eng:{upper:"H",lower:"h"}},KeyJ:{ru:{upper:"О",lower:"о"},eng:{upper:"J",lower:"j"}},KeyK:{ru:{upper:"Л",lower:"л"},eng:{upper:"K",lower:"k"}},KeyL:{ru:{upper:"Д",lower:"д"},eng:{upper:"L",lower:"l"}},Semicolon:{ru:{upper:"Ж",lower:"ж"},eng:{upper:":",lower:";"}},Quote:{ru:{upper:"Э",lower:"э"},eng:{upper:'"',lower:"'"}},Enter:{ru:{upper:"Enter",lower:"Enter"},eng:{upper:"Enter",lower:"Enter"}}},{ShiftLeft:{ru:{upper:"Shift",lower:"Shift"},eng:{upper:"Shift",lower:"Shift"}},KeyZ:{ru:{upper:"Я",lower:"я"},eng:{upper:"Z",lower:"z"}},KeyX:{ru:{upper:"Ч",lower:"ч"},eng:{upper:"X",lower:"x"}},KeyC:{ru:{upper:"С",lower:"с"},eng:{upper:"C",lower:"c"}},KeyV:{ru:{upper:"М",lower:"м"},eng:{upper:"V",lower:"v"}},KeyB:{ru:{upper:"И",lower:"и"},eng:{upper:"B",lower:"b"}},KeyN:{ru:{upper:"Т",lower:"т"},eng:{upper:"N",lower:"n"}},KeyM:{ru:{upper:"Ь",lower:"ь"},eng:{upper:"M",lower:"m"}},Comma:{ru:{upper:"Б",lower:"б"},eng:{upper:"<",lower:","}},Period:{ru:{upper:"Ю",lower:"ю"},eng:{upper:">",lower:"."}},Slash:{ru:{upper:",",lower:"."},eng:{upper:"?",lower:"/"}},ArrowUp:{ru:{upper:"↑",lower:"↑"},eng:{upper:"↑",lower:"↑"}},ShiftRight:{ru:{upper:"Shift",lower:"Shift"},eng:{upper:"Shift",lower:"Shift"}}},{ControlLeft:{ru:{upper:"Ctrl",lower:"Ctrl"},eng:{upper:"Ctrl",lower:"Ctrl"}},MetaLeft:{ru:{upper:"Win",lower:"Win"},eng:{upper:"Win",lower:"Win"}},AltLeft:{ru:{upper:"Alt",lower:"Alt"},eng:{upper:"Alt",lower:"Alt"}},Space:{ru:{upper:" ",lower:" "},eng:{upper:" ",lower:" "}},AltRight:{ru:{upper:"Alt",lower:"Alt"},eng:{upper:"Alt",lower:"Alt"}},ArrowLeft:{ru:{upper:"←",lower:"←"},eng:{upper:"←",lower:"←"}},ArrowDown:{ru:{upper:"↓",lower:"↓"},eng:{upper:"↓",lower:"↓"}},ArrowRight:{ru:{upper:"→",lower:"→"},eng:{upper:"→",lower:"→"}},ControlRight:{ru:{upper:"Ctrl",lower:"Ctrl"},eng:{upper:"Ctrl",lower:"Ctrl"}}}];e.appendNode(function(){const e=r("textarea","textarea");return e.setAttribute("autofocus",!0),e}());const o=new class{#t=localStorage.getItem("lang")||"eng";#o=localStorage.getItem("case")||"lower";#l=null;constructor(){this.#u(),this.#l=this.#n("div","keyboard"),this.changeLanquageHandler(),this.changeCaseClickHandler()}#n=r;#u(){localStorage.setItem("lang",this.#t),localStorage.setItem("case",this.#o)}renderKeyboard(){return this.#l}renderKeys(){t.forEach((e=>{const r=this.#a(e);this.#l.append(r)}))}#a(e){const t=r("div","keyboard__line");return Object.keys(e).forEach((r=>{const{keyNode:o}=new p(r,e[r][this.#t][this.#o]);t.append(o)})),t}changeLanquageHandler(){window.addEventListener("keydown",(e=>{const r=e.key,p=e=>{"Alt"===e.key&&(this.#t="ru"===this.#t?"eng":"ru",this.rerender(),this.#u()),window.removeEventListener("keydown",p)};"Shift"===r&&window.addEventListener("keydown",p)}))}changeCaseClickHandler(){window.addEventListener("click",(e=>{e.target.closest('.key[data-code="CapsLock"]')&&(this.#o="upper"===this.#o?"lower":"upper",this.rerender(),this.#u())}))}rerender(){document.querySelector(".keyboard").innerHTML="",this.renderKeys()}};o.renderKeys(),p.keypressEvent(),e.appendNode(o.renderKeyboard()),document.querySelector(".app").insertAdjacentHTML("afterend",'<p class="info">*Клавиатура создана в операционной системе Windows</p><p class="info">*Для переключения языка комбинация:Shift + alt, Нажатие CapsLock включает и выключает UpperCase</p></p>')})()})();
//# sourceMappingURL=index.js.map