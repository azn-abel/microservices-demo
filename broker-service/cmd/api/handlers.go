package main

import (
	"net/http"
)

func (app *Config) Broker(w http.ResponseWriter, r *http.Request) {
	payload := jsonResponse{
		Error:   false,
		Message: "Hit the broker endpoint!",
	}

	app.WriteJSON(w, http.StatusOK, payload)
}
