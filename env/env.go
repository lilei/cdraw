package env

import (
	"os"
	"path"
	"path/filepath"
	"strings"
)

var ModuleDir string
var CurFile string
var CurDirBase string

func init() {
	ModuleDir, _ = filepath.Abs(filepath.Dir(os.Args[0]))
	if len(os.Args) == 1 {
		os.Chdir(ModuleDir)
	} else {
		CurFile, _ = filepath.Abs(os.Args[1])
		os.Chdir(filepath.Dir(CurFile))
	}
	curDirAbs, _ := filepath.Abs(".")
	curDirAbs = strings.Replace(curDirAbs, "\\", "/", -1)
	CurDirBase = path.Base(curDirAbs)
}
