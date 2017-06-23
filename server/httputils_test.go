package server

import (
	"net/http/httptest"
	"strings"
	"testing"
)

func TestReadBody(t *testing.T) {
	body := strings.NewReader("abcd")
	req := httptest.NewRequest("POST", "/api/graph/dot", body)
	if readBody(req) != "abcd" {
		t.Error(`readBody(req) = "abcd"`)
	}
}
