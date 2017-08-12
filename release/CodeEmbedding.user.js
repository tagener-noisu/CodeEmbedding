// ==UserScript==
// @name        CodeEmbedding
// @namespace   org.noisu
// @description Code embedding script for imageboards
// @include     http://dobrochan.com/*/res/*
// @include     https://2ch.hk/*/res/*
// @version     1.3.4
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
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){var r=[{safe:!0,selector:'a[href*="//pastebin.com"]',embedURL:function(e){var t=e.match(/\.com\/([A-Za-z0-9]+)$/);return t?"https://pastebin.com/embed_iframe/"+t[1]:null}},{safe:!0,selector:'a[href*="//ideone.com"]',embedURL:function(e){var t=e.match(/\.com\/([A-Za-z0-9]+)$/);return t?"https://ideone.com/embed/"+t[1]:null}},{safe:!0,selector:'a[href*="//ghostbin.com"]',embedURL:function(e){return e.match(/paste\/[A-Za-z0-9]+$/)?e:null}},{safe:!0,selector:'a[href*="//jsfiddle.net"]',embedURL:function(e){return e.match(/\/[A-Za-z0-9]+\/?$/)?e+"embedded/":null}},{safe:!0,selector:'a[href*="//transfer.sh"]',embedURL:function(e){return e.match(/\.sh\/[A-Za-z0-9]+\/.+$/)?e:null}},{safe:!0,selector:'a[href*="//repl.it"]',embedURL:function(e){var t=e.match(/\.it\/([A-Za-z0-9]+\/\d)$/);return t?"https://repl.it/embed/"+t[1]:null}}],n={isSafePage:!1,init:function(){document.location.href.match(/^https:/)&&(this.isSafePage=!0),this.replaceLinks(),new MutationObserver(function(e){n.replaceLinks()}).observe(document.querySelector(".thread"),{childList:!0})},replaceLinks:function(){for(var e=0,t=r.length;e<t;++e)if(!this.isSafePage||r[e].safe){var n=document.querySelectorAll(r[e].selector+":not(.expanded)");this._replace(n,e)}},_replace:function(e,t){for(var n=0,a=e.length;n<a;++n){var o=r[t].embedURL(e[n].href);if(o){var c=document.createElement("iframe");c.style.width="100%",c.style.height="100%",c.style.border="dotted 1px",c.src=o;var i=document.createElement("div");i.style.minWidth="60em",i.style.resize="both",i.style.overflow="hidden",i.appendChild(c),e[n].parentNode.insertBefore(i,e[n]);var s=document.createElement("br");e[n].parentNode.insertBefore(s,e[n]),e[n].parentNode.style.overflow="unset",e[n].parentNode.style.maxHeight="unset",e[n].classList.add("expanded")}}}};n.init()}]);