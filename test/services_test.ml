type test
type expected
external describe : string -> (unit -> unit) -> unit = "" [@@bs.val]
external it : string -> (unit -> test) -> test = "" [@@bs.val]
external expect : 'a -> expected = "" [@@bs.val]
external toBe : expected -> 'a -> test = "" [@@bs.send]

open Service;;

let _ = describe "pastebin" (fun _ ->

let _ =
	let result =
	Services.pastebin |. embed_url "https://pastebin.com/Leet1337" in
	let url = "//pastebin.com/embed_iframe/Leet1337" in
	it "should return correct url for embedding"
		(fun _ -> expect result |. toBe url)
in

()

)