var Services = require("./services.bs.js")
var services = Services.services

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
		for (var i = 0, len = services.length; i < len; ++i) {
			var links = document.querySelectorAll(
				services[i].selector + ':not(.expanded)');
			this._replace(links, i);
		}
	},

	_replace: function(links, service_id) {
		for (var i = 0, len = links.length; i < len; ++i) {
			var embed_url = services[service_id].
				embed_url(links[i].href);
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
			links[i].parentNode.style.overflow = "unset";
			links[i].parentNode.style.maxHeight = "unset";
			links[i].classList.add("expanded");
		}
	},
}

CodeEmbedding.init();
// vim:ts=4:sw=0:et:
