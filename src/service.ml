type service
external createService :
	selector:string ->
	embed_url:(string->string) ->
	service
= "" [@@bs.obj]

external embed_url : service -> string -> string = "" [@@bs.send]

exception UrlMatchFailure