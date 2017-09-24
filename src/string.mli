external regex : string -> Js.Re.t -> string array option =
	"match" [@@bs.send][@@bs.return nullable]

external replace : string -> Js.Re.t -> string -> string = "" [@@bs.send]