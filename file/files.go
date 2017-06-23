package file

import (
	"io/ioutil"
	"log"
	"os"
	"path"
	"path/filepath"
)

type Dir struct {
	Name     string   `json:"name"`
	Path     string   `json:"path"`
	FileList []string `json:"fileList,omitempty"`
	SubDir   []Dir    `json:"subDir,omitempty"`
}

var availablExt []string = []string{".cdraw"}

func Read(fileTree *Dir) {
	dir, err := os.Open(fileTree.Path)
	if nil != err {
		log.Fatal(err)
	}
	fileList, err := dir.Readdir(0)
	if nil != err {
		log.Fatal(err)
	}
	for i := 0; i < len(fileList); i++ {
		if fileList[i].IsDir() {
			var subDir Dir
			subDir.Name = fileList[i].Name()
			subDir.Path, _ = filepath.Abs(fileTree.Path + "/" + subDir.Name)
			Read(&subDir)
			fileTree.SubDir = append(fileTree.SubDir, subDir)
		} else {
			if isExtAvailable(fileList[i].Name()) {
				fileTree.FileList = append(fileTree.FileList, fileList[i].Name())
			}
		}
	}
}

func isExtAvailable(fileName string) bool {
	ext := path.Ext(fileName)
	for i := 0; i < len(availablExt); i++ {
		if availablExt[i] == ext {
			return true
		}
	}
	return false
}

func WriteToTempFile(content []byte) (*os.File, error) {
	file, err := ioutil.TempFile("", "graph")
	if nil != err {
		log.Fatal(err)
		return file, err
	}
	_, err2 := file.Write(content)
	if nil != err2 {
		log.Fatal(err2)
		return file, err2
	}
	return file, nil
}

func ReadFile(fileName string) (string, error) {
	b, err := ioutil.ReadFile(fileName)
	if err != nil {
		log.Fatal("Read file ", fileName, "error", err)
		return "", err
	} else {
		return string(b), nil
	}
}

func WriteFile(fileName string, content string) {
	err := ioutil.WriteFile(fileName, []byte(content), os.ModePerm)
	if err != nil {
		log.Fatal(err)
	}
}
