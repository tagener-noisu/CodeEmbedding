// ==UserScript==
// @name        CodeEmbedding
// @namespace   org.noisu
// @description Code embedding script for imageboards
// @include     http://dobrochan.com/*/res/*
// @include	https://2ch.hk/*/res/*
// @version     1.3.3
// @grant       none
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
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=[{safe:!0,selector:'a[href*="//pastebin.com"]',embedURL:function(e){var t=e.match(/\.com\/([A-Za-z0-9]+)$/);return t?"https://pastebin.com/embed_iframe/"+t[1]:null}},{safe:!0,selector:'a[href*="//ideone.com"]',embedURL:function(e){var t=e.match(/\.com\/([A-Za-z0-9]+)$/);return t?"https://ideone.com/embed/"+t[1]:null}},{safe:!0,selector:'a[href*="//ghostbin.com"]',embedURL:function(e){return e.match(/paste\/[A-Za-z0-9]+$/)?e:null}},{safe:!0,selector:'a[href*="//jsfiddle.net"]',embedURL:function(e){return e.match(/\/[A-Za-z0-9]+\/?$/)?e+"embedded/":null}},{safe:!0,selector:'a[href*="//transfer.sh"]',embedURL:function(e){return e.match(/\.sh\/[A-Za-z0-9]+\/.+$/)?e:null}},{safe:!0,selector:'a[href*="//repl.it"]',embedURL:function(e){var t=e.match(/\.it\/([A-Za-z0-9]+\/\d)$/);return t?"https://repl.it/embed/"+t[1]:null}}],r={isSafePage:!1,init:function(){document.location.href.match(/^https:/)&&(this.isSafePage=!0),this.replaceLinks(),new MutationObserver(function(e){r.replaceLinks()}).observe(document.querySelector(".thread"),{childList:!0})},replaceLinks:function(){for(var e=0,t=n.length;e<t;++e)if(!this.isSafePage||n[e].safe){var r=document.querySelectorAll(n[e].selector+":not(.expanded)");this._replace(r,e)}},_replace:function(e,t){for(var r=0,a=e.length;r<a;++r){var o=n[t].embedURL(e[r].href);if(o){var i=document.createElement("iframe");i.style.width="100%",i.style.height="100%",i.style.border="dotted 1px",i.src=o;var c=document.createElement("div");c.style.minWidth="60em",c.style.resize="both",c.style.overflow="hidden",c.appendChild(i),e[r].parentNode.insertBefore(c,e[r]);var s=document.createElement("br");e[r].parentNode.insertBefore(s,e[r]),e[r].parentNode.style.overflow="unset",e[r].parentNode.style.maxHeight="unset",e[r].classList.add("expanded")}}}};document.addEventListener("DOMContentLoaded",r.init.bind(r))}]);