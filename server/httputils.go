package server

import (
	"io"
	"log"
	"net/http"
)

func readBody(r *http.Request) string {
	defer r.Body.Close()
	input := make([]byte, 4096)
	len := 0
	for {
		n, err := r.Body.Read(input[len:])
		len += n
		if err != nil {
			if err != io.EOF {
				log.Fatal("read http body failed", err)
			}
			break
		}
	}
	return string(input[0:len])
}

func getQueryString(r *http.Request, key string) string {
	return r.URL.Query()[key][0]
}
