package main

import (
	"errors"
	"fmt"
	"net/http"
	"os"
)

func main() {
	setupAPI()

	createHost()
}

func setupAPI() {

	manager := newManager()

	http.Handle("/", http.FileServer(http.Dir("./frontend")))

	http.HandleFunc("/ws", manager.serveWS)
}

func createHost() {
	fmt.Print("server running on port 6060 normally\n")
	err := http.ListenAndServe(":6060", nil)

	if errors.Is(err, http.ErrServerClosed) {
		fmt.Printf("server closed\n")
		os.Exit(2)
	} else if err != nil {
		fmt.Printf("error starting server: %s\n", err)
		os.Exit(1)
	}
}
