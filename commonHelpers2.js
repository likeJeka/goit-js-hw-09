import"./assets/styles-4b46808e.js";const o=document.querySelector(".feedback-form");o.querySelector("textarea");o.addEventListener("input",()=>{const e=new FormData(o),t=e.get("email"),a=e.get("message");n("feedback-form-state",{email:t,message:a})});function n(e,t){const a=JSON.stringify(t);localStorage.setItem(e,a)}function s(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return error,t}}window.addEventListener("DOMContentLoaded",()=>{const e=s("feedback-form-state");console.log(e),o.elements.email.value=(e==null?void 0:e.email)||"",o.elements.message.value=(e==null?void 0:e.message)||""});
//# sourceMappingURL=commonHelpers2.js.map
