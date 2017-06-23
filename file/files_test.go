package file

import "testing"

func TestNo1(t *testing.T) {
}

func TestNo2(t *testing.T) {
	WriteFile("a.txt", "1234\n")
}
