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
		var links = document.querySelectorAll(".message a");

		for (var i = 0, len = links.length; i < len; ++i) {
			if (links[i].classList.contains("expanded"))
				continue;

			var embed_url = this._matchUrl(links[i].href);
			if (!embed_url)
				continue;

			var frame = document.createElement("iframe");
			frame.style.width = "100%"
			frame.style.height = "100%";
			frame.src = embed_url;

			var wrap = document.createElement("div");
			wrap.style.minWidth = "60em"
			wrap.style.resize = "both";
			wrap.style.overflow = "hidden";
			wrap.appendChild(frame);

			links[i].parentNode.insertBefore(wrap, links[i]);
			var br = document.createElement("br");
			links[i].parentNode.insertBefore(br, links[i]);
			links[i].classList.add("expanded");
		}
	},

	_matchUrl: function(url) {
		var mdata = url.match(
			/(https?:\/\/)(pastebin.com|ideone.com)\/(.+)$/);

		if (!mdata) return null;
		mdata.shift();

		if (mdata[1] == "pastebin.com")
			return mdata[0] + mdata[1] +
				"/embed_iframe/" + mdata[2];

		if (mdata[1] == "ideone.com")
			return mdata[0] + mdata[1] +
				"/embed/" + mdata[2];
	}
}

document.addEventListener('DOMContentLoaded', CodeEmbedding.init());
