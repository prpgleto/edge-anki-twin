// Copyright 2018 NTT Group

// Permission is hereby granted, free of charge, to any person obtaining a copy of this
// software and associated documentation files (the "Software"), to deal in the Software
// without restriction, including without limitation the rights to use, copy, modify,
// merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to the following
// conditions:

// The above copyright notice and this permission notice shall be included in all copies
// or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
// PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
// FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.

package main

import "errors"

type (
	// Command represents a valid command with can be sent to the Anki Overdrive controller
	Command struct {
		Command string  `json:"command"`
		CarNo   string  `json:"carNo"`
		Param1  string  `json:"param1"`
		Param2  string  `json:"param2"`
		Param3  int     `json:"param3"`
		Param4  int     `json:"param4"`
		Param5  float32 `json:"param5"`
		Source  string  `json:"source"`
	}
)

// ControllerString converts the command struct in a string that
// can be processed by the Anki Overdrive controller
func (c *Command) ControllerString() (string, error) {
	if c.Command == "ping" {
		return "ping", nil
	} else if c.Command == "s" {
		return "s " + c.Param1, nil
	} else if c.Command == "e" {
		return "e", nil
	} else if c.Command == "c" {
		return "c " + c.Param1, nil
	} else if c.Command == "ver" {
		return "ver", nil
	} else if c.Command == "l" {
		return "l", nil
	} else if c.Command == "lp" {
		return "lp", nil
	} else if c.Command == "bat" {
		return "bat", nil
	}
	return "", errors.New("Unknown Anki Overdrive controller command")
}
