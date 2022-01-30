package main

import "log"

func main() {
	a := App{}

	err := a.Initialize()
	if err != nil {
		log.Fatalf("Could not initialize app: %s", err)
	}
	a.Run()
}
