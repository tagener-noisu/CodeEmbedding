// ==UserScript==
// @name        CodeEmbedding
// @namespace   org.noisu
// @description Code embedding script for imageboards
// @include     http://dobrochan.com/*/res/*
// @version     1.1
// @grant       none
// @updateURL https://github.com/tagener-noisu/CodeEmbedding/raw/master/CodeEmbedding.meta.js
// @downloadURL https://github.com/tagener-noisu/CodeEmbedding/raw/master/CodeEmbedding.user.js
// ==/UserScript==

/*
    Copyright (C) 2016  tagener-noisu<op4.renegat@gmail.com>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var Services = [
	{
		selector: 'a[href^="http://pastebin.com"]',
		embedURL: function(plain_url) {
			var m = plain_url.match(/\.com\/([A-Za-z0-9]+)$/);
			if (!m) return null;
			return "http://pastebin.com/embed_iframe/" + m[1];
		}
	},
	{
		selector: 'a[href^="https://ideone.com"]',
		embedURL: function(plain_url) {
			var m = plain_url.match(/\.com\/([A-Za-z0-9]+)$/);
			if (!m) return null;
			return "https://ideone.com/embed/" + m[1];
		}
	},
];

var CodeEmbedding = {
	init: function() {
		this.replaceLinks();
		var obs = new MutationObserver(function (unused) {
			CodeEmbedding.replaceLinks();
		});
		obs.observe(document.querySelector('.thread'), {
			childList: true
		});
	},

	replaceLinks: function() {
		for (var i = 0, len = Services.length; i < len; ++i) {
			var links = document.querySelectorAll(
				Services[i].selector +':not(.expanded)');
			this._replace(links, i);
		}
	},

	_replace: function(links, service_id) {
		for (var i = 0, len = links.length; i < len; ++i) {
			var embed_url = Services[service_id].
				embedURL(links[i].href);
			if (!embed_url)
				continue;

			var frame = document.createElement("iframe");
			frame.style.width = "100%"
			frame.style.height = "100%";
			frame.style.border = "dotted 1px";
			frame.src = embed_url;

			var wrap = document.createElement("div");
			wrap.style.minWidth = "60em";
			wrap.style.resize = "both";
			wrap.style.overflow = "hidden";
			wrap.appendChild(frame);

			links[i].parentNode.insertBefore(wrap, links[i]);
			var br = document.createElement("br");
			links[i].parentNode.insertBefore(br, links[i]);
			links[i].classList.add("expanded");
		}
	},
}

document.addEventListener('DOMContentLoaded', CodeEmbedding.init());
