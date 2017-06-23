package server

import (
	"fmt"
	"net/http"
)

// Start  start the http server
func Start(base string, port uint) error {
	setFileHandler(base)
	setHandler()
	addr := fmt.Sprintf("localhost:%d", port)
	return http.ListenAndServe(addr, nil)
}
