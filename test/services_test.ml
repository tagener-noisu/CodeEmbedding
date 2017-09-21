open Jest;;
open Service;;

describe "pastebin" (fun _ ->
	let result = Services.pastebin
		|. embed_url "https://pastebin.com/Leet1337" in
	let url = "//pastebin.com/embed_iframe/Leet1337" in
	it "should return correct url for embedding"
		(fun _ -> expect result toBe url);
());

describe "ideone" (fun _ ->
	let result = Services.ideone
		|. embed_url "https://ideone.com/LeeT" in
	let url = "//ideone.com/embed/LeeT" in
	it "should return correct url for embedding"
		(fun _ -> expect result toBe url);
());

describe "repl.it" (fun _ ->
	let result = Services.replit
		|. embed_url "https://repl.it/Leet1337" in
	let url = "//repl.it/embed/Leet1337" in
	it "should return correct url for embedding"
		(fun _ -> expect result toBe url);
());