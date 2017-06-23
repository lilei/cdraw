package browser

import "os/exec"

func Open(uri string) {
	cmd := exec.Command("app.exe",
		"--incognito",
		"--url=http://localhost:4000/"+uri)
	/*, "-–single-process"*/
	cmd.Run()
}
