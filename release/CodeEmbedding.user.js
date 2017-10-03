// ==UserScript==
// @name        CodeEmbedding
// @namespace   org.noisu
// @description Code embedding script for imageboards
// @include     http://dobrochan.com/*/res/*
// @include     https://2ch.hk/*/res/*
// @version     1.3.7
// @grant       none
// @updateURL   https://github.com/tagener-noisu/CodeEmbedding/raw/master/release/CodeEmbedding.meta.js
// @downloadURL https://github.com/tagener-noisu/CodeEmbedding/raw/master/release/CodeEmbedding.user.js
// ==/UserScript==

// Copyright (C) 2016-2018 tagener-noisu <op4.renegat@gmail.com>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){"use strict";var n=[0];function i(){return n[0]+=1,n[0]}t.caml_set_oo_id=function(e){return e[1]=n[0],n[0]+=1,e},t.get_id=i,t.create=function(e){var t=[e,i()];return t.tag=248,t},t.isCamlExceptionOrOpenVariant=function(e){if(void 0===e)return!1;if(248===e.tag)return!0;var t=e[0];return void 0!==t&&248===t.tag}},function(e,t,r){"use strict";var n=r(0).create("Service.UrlMatchFailure");t.UrlMatchFailure=n},function(e,t,r){"use strict";var n=r(1),i={selector:'a[href*="//pastebin.com"]',embed_url:function(e){var t=e.match(/\.com\/([A-Za-z0-9]+)$/);if(null==t)throw n.UrlMatchFailure;if(2!==t.length)throw n.UrlMatchFailure;return"//pastebin.com/embed_iframe/"+t[1]}},o={selector:'a[href*="//ideone.com"]',embed_url:function(e){var t=e.match(/\.com\/([A-Za-z]+)$/);if(null==t)throw n.UrlMatchFailure;if(2!==t.length)throw n.UrlMatchFailure;return"//ideone.com/embed/"+t[1]}},a={selector:'a[href*="//repl.it"]',embed_url:function(e){var t=e.match(/\.it\/([A-Za-z0-9]+)$/);if(null==t)throw n.UrlMatchFailure;if(2!==t.length)throw n.UrlMatchFailure;return"//repl.it/embed/"+t[1]}},c={selector:'a[href*="//codepen.io"]',embed_url:function(e){return e.replace(/\/pen\//,"/embed/").replace(/^https?:/,"")}},l=[i,o,a,c];t.pastebin=i,t.ideone=o,t.replit=a,t.codepen=c,t.services=l},function(e,t,r){var n=r(2).services,i={init:function(){this.replaceLinks(),new MutationObserver(function(e){i.replaceLinks()}).observe(document.querySelector(".thread"),{childList:!0})},replaceLinks:function(){for(var e=0,t=n.length;e<t;++e){var r=document.querySelectorAll(n[e].selector+":not(.expanded)");this._replace(r,e)}},_replace:function(e,t){for(var r=0,i=e.length;r<i;++r){try{var o=n[t].embed_url(e[r].href)}catch(e){continue}if(o){var a=document.createElement("iframe");a.style.width="100%",a.style.height="100%",a.style.border="dotted 1px",a.src=o;var c=document.createElement("div");c.style.minWidth="60em",c.style.resize="both",c.style.overflow="hidden",c.appendChild(a),e[r].parentNode.insertBefore(c,e[r]);var l=document.createElement("br");e[r].parentNode.insertBefore(l,e[r]),e[r].parentNode.style.overflow="unset",e[r].parentNode.style.maxHeight="unset",e[r].classList.add("expanded")}}}};i.init()}]);