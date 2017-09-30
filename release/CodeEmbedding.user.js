// ==UserScript==
// @name        CodeEmbedding
// @namespace   org.noisu
// @description Code embedding script for imageboards
// @include     http://dobrochan.com/*/res/*
// @include     https://2ch.hk/*/res/*
// @version     1.3.6
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
!function(e){var r={};function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=3)}([function(e,r,t){"use strict";var n=[0];function i(){return n[0]+=1,n[0]}r.caml_set_oo_id=function(e){return e[1]=n[0],n[0]+=1,e},r.get_id=i,r.create=function(e){var r=[e,i()];return r.tag=248,r},r.isCamlExceptionOrOpenVariant=function(e){if(void 0===e)return!1;if(248===e.tag)return!0;var r=e[0];return void 0!==r&&248===r.tag}},function(e,r,t){"use strict";var n=t(0).create("Service.UrlMatchFailure");r.UrlMatchFailure=n},function(e,r,t){"use strict";var n=t(1),i={selector:'a[href*="//pastebin.com"]',embed_url:function(e){var r=e.match(/\.com\/([A-Za-z0-9]+)$/);if(null==r)throw n.UrlMatchFailure;if(2!==r.length)throw n.UrlMatchFailure;return"//pastebin.com/embed_iframe/"+r[1]}},o={selector:'a[href*="//ideone.com"]',embed_url:function(e){var r=e.match(/\.com\/([A-Za-z]+)$/);if(null==r)throw n.UrlMatchFailure;if(2!==r.length)throw n.UrlMatchFailure;return"//ideone.com/embed/"+r[1]}},a={selector:'a[href*="//repl.it"]',embed_url:function(e){var r=e.match(/\.it\/([A-Za-z0-9]+)$/);if(null==r)throw n.UrlMatchFailure;if(2!==r.length)throw n.UrlMatchFailure;return"//repl.it/embed/"+r[1]}},c={selector:'a[href*="//codepen.io"]',embed_url:function(e){return e.replace(/\/pen\//,"/embed/").replace(/^https?:/,"")}},l=[i,o,a,c];r.pastebin=i,r.ideone=o,r.replit=a,r.codepen=c,r.services=l},function(e,r,t){var n=t(2).services,i={init:function(){this.replaceLinks(),new MutationObserver(function(e){i.replaceLinks()}).observe(document.querySelector(".thread"),{childList:!0})},replaceLinks:function(){for(var e=0,r=n.length;e<r;++e){var t=document.querySelectorAll(n[e].selector+":not(.expanded)");this._replace(t,e)}},_replace:function(e,r){for(var t=0,i=e.length;t<i;++t){var o=n[r].embed_url(e[t].href);if(o){var a=document.createElement("iframe");a.style.width="100%",a.style.height="100%",a.style.border="dotted 1px",a.src=o;var c=document.createElement("div");c.style.minWidth="60em",c.style.resize="both",c.style.overflow="hidden",c.appendChild(a),e[t].parentNode.insertBefore(c,e[t]);var l=document.createElement("br");e[t].parentNode.insertBefore(l,e[t]),e[t].parentNode.style.overflow="unset",e[t].parentNode.style.maxHeight="unset",e[t].classList.add("expanded")}}}};i.init()}]);