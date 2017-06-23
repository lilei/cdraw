package graph

import (
	"bytes"
	"os/exec"
	"strings"
)

func Dot(input string) (string, error) {
	cmd := exec.Command("dot", "-Tsvg", input)
	var out bytes.Buffer
	cmd.Stdout = &out
	err := cmd.Run()
	if nil != err {
		//log.Fatal(err)
	}

	//删除前几行document标签
	s := strings.SplitAfterN(out.String(), "\n", 4)
	if len(s) > 3 {
		return s[3], nil
	}
	return "", nil
}
