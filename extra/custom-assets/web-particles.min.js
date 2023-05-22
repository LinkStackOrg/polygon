/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/web-particles@1.1.0/dist/web-particles.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function __extends(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}extendStatics(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var Particles=function(t){function e(){var e=t.call(this)||this;e.container={};var n=e.getAttribute("options");if(n)try{e._options=JSON.parse(n)}catch(t){}return e._url=e.getAttribute("url"),e.dispatchEvent(new CustomEvent("particlesInit",{detail:window.tsParticles})),e}return __extends(e,t),Object.defineProperty(e.prototype,"url",{get:function(){return this._url},set:function(t){var e,n=this;this._url=t,null===(e=this.container.current)||void 0===e||e.destroy(),window.tsParticles.setJSON(this.id,this,this._url).then((function(t){return n.notifyParticlesLoaded(t)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this._options},set:function(t){var e,n=this;this._options=t,null===(e=this.container.current)||void 0===e||e.destroy(),window.tsParticles.set(this.id,this,this._options).then((function(t){return n.notifyParticlesLoaded(t)}))},enumerable:!1,configurable:!0}),e.prototype.connectedCallback=function(){var t=this;this.isConnected&&(this._url?window.tsParticles.setJSON(this.id,this,this._url).then((function(e){return t.notifyParticlesLoaded(e)})):this._options&&window.tsParticles.set(this.id,this,this._options).then((function(e){return t.notifyParticlesLoaded(e)})))},e.prototype.notifyParticlesLoaded=function(t){this.container.current=t,this.dispatchEvent(new CustomEvent("particlesLoaded",{detail:t}))},e}(HTMLElement);customElements.define("web-particles",Particles);export{Particles};
//# sourceMappingURL=/sm/07dac3cf6dc08a88324d47d7ec4482490ef30e0e0e9567a7cde5a6de3669adae.map