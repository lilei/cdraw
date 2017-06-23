package server

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"../env"
	"../file"
	"../graph"
)

func index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "this is the index")
}

func test(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "test test test")
}

func dot(w http.ResponseWriter, r *http.Request) {
	input := readBody(r)
	fileName := getQueryString(r, "codeFile")
	fmt.Println("fileName", fileName)
	fmt.Println("file content:", input)
	file.WriteFile(fileName, input)

	output, err2 := graph.Dot(fileName)
	fmt.Println(output)
	if nil != err2 {
		log.Fatal(err2)
	}
	fmt.Fprint(w, output)
}

func readFile(w http.ResponseWriter, r *http.Request) {
	fileName := getQueryString(r, "name")
	if fileName == "" {
		fmt.Fprintf(w, "")
		return
	}
	content, err := file.ReadFile(fileName)
	if err != nil {
		log.Fatal("readfile", fileName, "error", err)
	}
	result := CodeFile{fileName, content}
	b, err1 := json.Marshal(result)
	if err1 != nil {
		log.Fatal("marshal to json fail", err1)
	}
	fmt.Fprintf(w, string(b))
}

func dirTree(w http.ResponseWriter, r *http.Request) {
	var dir file.Dir
	dir.Name = env.CurDirBase
	dir.Path = "."
	file.Read(&dir)
	b, err := json.MarshalIndent(dir, "", "  ")
	if nil != err {
		log.Fatal(err)
	}
	fmt.Fprintf(w, string(b))
}
