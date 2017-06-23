package server

type Error struct {
	ErrorCode int
	ErrorInfo string
}

type CodeFile struct {
	FileName string
	Content  string
}
