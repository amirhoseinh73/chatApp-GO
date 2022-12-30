package main

import (
	"fmt"
	"os"
)

func errHandler(err error) {
	if err != nil {
		fmt.Println("Error: ", err)
		os.Exit(1)
	}
}
