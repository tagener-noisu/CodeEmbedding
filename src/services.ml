open Service;;

let pastebin = createService
	~selector: {j|a[href*="//pastebin.com"]|j}
	~embed_url: (
			fun url ->
			match url |. regex [%bs.re "/\.com\/([A-Za-z0-9]+)$/"] with
			| Some([|_;id|]) -> "//pastebin.com/embed_iframe/" ^ id
			| _ -> raise UrlMatchFailure
	)


let services = [|pastebin|]