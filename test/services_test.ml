open Jest;;
open Service;;

describe "pastebin" (fun _ ->
	let result = Services.pastebin
		|. embed_url "https://pastebin.com/Leet1337" in
	let url = "//pastebin.com/embed_iframe/Leet1337" in
	it "should return correct url for embedding"
		(fun _ -> expect result toBe url);
());