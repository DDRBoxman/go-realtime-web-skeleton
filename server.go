package main

import (
	"github.com/gorilla/mux"
	"net/http"
)

func startServer() {
	r := mux.NewRouter()

	r.HandleFunc("/ws", wsHandler)

	fs := http.FileServer(http.Dir("./static"))
	r.PathPrefix("/").Handler(fs)

	http.Handle("/", r)
	http.ListenAndServe(":8080", nil)
}
