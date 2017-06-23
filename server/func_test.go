package server

import (
	"fmt"
	"net/http"
	"net/http/httptest"
	"os"
	"testing"

	"../env"
)

func TestDir(t *testing.T) {
	env.CurDirBase = "a"
	os.Chdir("../")
	w := httptest.NewRecorder()
	var r http.Request
	dirTree(w, &r)
	//fmt.Printf("%s\n", w.Body)
}

func TestReadFile(t *testing.T) {
	r := httptest.NewRequest("GET", `/index.html?name=F:\code\draft_and_toy\go\http\test\version.dot`, nil)
	w := httptest.NewRecorder()
	readFile(w, r)
	fmt.Printf("%s\n", w.Body)
}
