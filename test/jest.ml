type test
type expected

external describe : string -> (unit -> unit) -> unit = "" [@@bs.val]
external it : string -> (unit -> test) -> test = "" [@@bs.val]
external expect_ : 'a -> expected = "expect" [@@bs.val]
external toBe : expected -> 'a -> test = "" [@@bs.send]

let expect x fn y = expect_ x |. fn y