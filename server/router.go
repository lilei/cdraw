package server

import "net/http"

func setFileHandler(base string) {
	http.Handle("/", http.FileServer(http.Dir(base+"/html/")))
}

func setHandler() {
	http.HandleFunc("/api", index)
	http.HandleFunc("/api/dirtree", dirTree)
	http.HandleFunc("/api/test", test)
	http.HandleFunc("/api/graph/dot", dot)
	http.HandleFunc("/api/code", readFile)
}
