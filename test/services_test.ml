type test
type expected
external describe : string -> (unit -> unit) -> unit = "" [@@bs.val]
external it : string -> (unit -> test) -> test = "" [@@bs.val]
external expect_ : 'a -> expected = "expect" [@@bs.val]
external toBe : expected -> 'a -> test = "" [@@bs.send]

let expect x fn y = expect_ x |. fn y

open Service;;

let _ = describe "pastebin" (fun _ ->

	let result =
	Services.pastebin |. embed_url "https://pastebin.com/Leet1337" in
	let url = "//pastebin.com/embed_iframe/Leet1337" in
	it "should return correct url for embedding"
		(fun _ -> expect result toBe url);

	it "should pass" (fun _ -> expect true toBe true);

	()
)