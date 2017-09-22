open Service;;

let pastebin = createService
	~selector: {j|a[href*="//pastebin.com"]|j}
	~embed_url: (
			fun url ->
			match url |. regex [%bs.re "/\.com\/([A-Za-z0-9]+)$/"] with
			| Some([|_;id|]) -> "//pastebin.com/embed_iframe/" ^ id
			| _ -> raise UrlMatchFailure
	)

let ideone = createService
	~selector: {j|a[href*="//ideone.com"]|j}
	~embed_url: (
			fun url ->
			match url |. regex [%bs.re "/\.com\/([A-Za-z]+)$/"] with
			| Some([|_;id|]) -> "//ideone.com/embed/" ^ id
			| _ -> raise UrlMatchFailure
	)

let replit = createService
	~selector: {j|a[href*="//repl.it"]|j}
	~embed_url: (
			fun url ->
			match url |. regex [%bs.re "/\.it\/([A-Za-z0-9]+)$/"] with
			| Some([|_;id|]) -> "//repl.it/embed/" ^ id
			| _ -> raise UrlMatchFailure
	)

let services = [|pastebin; ideone; replit|]