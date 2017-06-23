package main

import (
	"log"

	"./browser"
	"./env"
	"./server"
)

func main() {
	go func() {
		log.Fatal(server.Start(env.ModuleDir, 4000))
	}()

	//fmt.Printf("%s\n", b)
	if env.CurFile == "" {
		browser.Open("")
	} else {
		browser.Open("/?codefile=" + env.CurFile)
	}
}
