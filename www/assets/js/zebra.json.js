var JSONConfig = {
    "version" : "02.2015",

    "classAliases": {
        "Picture"       : "zebra.ui.Picture",
        "Border"        : "zebra.ui.Border",
        "Dotted"        : "zebra.ui.Dotted",
        "ViewSet"       : "zebra.ui.ViewSet",
        "View"          : "zebra.ui.View",
        "Gradient"      : "zebra.ui.Gradient",
        "CompositeView" : "zebra.ui.CompositeView",
        "rgb"           : "zebra.util.rgb",
        "Font"          : "zebra.ui.Font",
        "FlowLayout"    : "zebra.layout.FlowLayout",
        "BorderLayout"  : "zebra.layout.BorderLayout",
        "ListLayout"    : "zebra.layout.ListLayout"
    },

    "doubleClickDelta":180,

    "KeyEvent": {
        "A":65, "B":66, "C":67, "D":68, "E":69, "F":70, "G":71, "H":72, "I":73, "J":74, "K":75,
        "L":76, "M":77, "N":78, "O":79, "P":80, "Q":81, "R":82, "S":83, "T":84, "U":85, "V":86,
        "W":87, "X":88, "Y":89, "Z":90, "0":48, "1":49, "2":50, "3":51, "4":52, "5":53, "6":54,
        "7":55, "8":56, "9":57, "F1":112, "F2":113, "F3":114, "F4":115, "F5":116, "F6":117,
        "F7":118, "F8":119, "F9":120, "F10":121, "F11" : 122, "F12" : 123, ",":188, ";" : 186, "'" : 222,
        "[":219, "]":221, "\\":220,  "/":191,  "ENTER":13, "ESCAPE" : 27, "SPACE" : 32, "DELETE" : 46,
        "BSPACE":8, "TAB":9, "INSERT":45, "LEFT":37, "RIGHT":39, "UP":38, "DOWN":40,
        "HOME":36,"END":35,"PAGEUP":33,"PAGEDOWN":34, "CMD":{ ".expr":"zebra.isFF?224:91" }, "SHIFT": 16,
        "CTRL" : 17, "ALT":18, "CHAR_UNDEFINED":0
    },

    "events"        : { "$zebra.ui.EventManager":[]  },
    "paintManager"  : { "$zebra.ui.PaintManImpl":[]  },
    "focusManager"  : { "$zebra.ui.FocusManager":[]  },

    "?zebra.isTouchable == false": {
        "clipboardTriggerKey" : {".expr" : "zebra.isMacOS ? zebra.ui.KeyEvent.CMD : zebra.ui.KeyEvent.CTRL" },
        "cursorManager"  : { "$zebra.ui.CursorManager"  :[] },
        "commandManager" : {
            "$zebra.ui.CommandManager" :[{
                "common": [
                    {
                        "command" : "undo_command",
                        "key"     : "Ctrl+z"
                    },
                    {
                        "command" : "redo_command",
                        "key"     : "Ctrl+Shift+z"
                    },
                    {
                        "command" : "selectAll_command",
                        "key"     : "Ctrl+A"
                    },
                    {
                        "command" : "nextWord_command",
                        "args"    : [ false, 1 ],
                        "key"     : "Ctrl+Right"
                    },
                    {
                        "command" : "nextWord_command",
                        "args"    : [ false, -1 ],
                        "key"     : "Ctrl+Left"
                    },
                    {
                        "command" : "nextWord_command",
                        "args"    : [ true, 1],
                        "key"     : "Ctrl+Shift+Right"
                    },
                    {
                        "command" : "nextWord_command",
                        "args"    : [ true, -1],
                        "key"     : "Ctrl+Shift+Left"
                    },
                    {
                        "command" : "nextPage_command",
                        "args"    : [ false, -1],
                        "key"     : "Ctrl+Up"
                    },
                    {
                        "command" : "nextPage_command",
                        "args"    : [ false, 1],
                        "key"     : "Ctrl+Down"
                    },
                    {
                        "command" : "nextPage_command",
                        "args"    : [ true, -1],
                        "key"     : "Ctrl+Up+Shift"
                    },
                    {
                        "command" : "nextPage_command",
                        "args"    : [ true, 1],
                        "key"     : "Ctrl+Down+Shift"
                    }
                ],
                "osx" : [
                    {
                        "command"   : "undo_command",
                        "key"       : "Cmd+z"
                    },
                    {
                        "command" : "redo_command",
                        "key"     : "Cmd+Shift+z"
                    },
                    {
                        "command" : "selectAll_command",
                        "key"     : "Cmd+A"
                    },
                    {
                        "command" : "nextWord_command",
                        "args"    : [ false, 1 ],
                        "key"     : "Cmd+Right"
                    },
                    {
                        "command" : "nextWord_command",
                        "args"    : [ false, -1 ],
                        "key"     : "Cmd+Left"
                    },
                    {
                        "command" : "nextWord_command",
                        "args"    : [ true, 1],
                        "key"     : "Cmd+Shift+Right"
                    },
                    {
                        "command" : "nextWord_command",
                        "args"    : [ true, -1],
                        "key"     : "Cmd+Shift+Left"
                    }
                ]
             }]
        }
    },

    "popup" : {
        "$zebra.ui.PopupManager": [],
        "hideTooltipByPress": { ".expr": "!zebra.isTouchable" }
    },

    "font"          : { "$Font" : ["'Pt Sans', Helvetica neue, Helvetica, sans-serif", 12] },
    "boldFont"      : { "$Font" : ["'Pt Sans', Helvetica neue, Helvetica, sans-serif", "bold", 12] },
    "smallFont"     : { "$Font" : ["'Pt Sans', Helvetica neue, Helvetica, sans-serif", 10] },

    "palette": {
        "white"      : "#FFFFFF",
        "black"      : "#000000",
        "fontColor"  : "#222222",
        "fontColorOld"  : "#808080",
        "background" :  { "$Gradient": [ "white", "#F0F0F0", 32 ] },
        "borderColor": "#AAAAAA",
        "gray1"      : "#A1A1A1",
        "gray2"      : "#AAAAAA",
        "gray3"      : "#C7C7C7",
        "gray4"      : "#CECECE",
        "gray5"      : "#D9D9D9",
        "gray6"      : "#E4E4E4",
        "gray7"      : "#F3F3F3"
    },
    
    "borders" : {
        "raised" : { "$zebra.ui.Raised":[] },
        "sunken" : { "$zebra.ui.Sunken":[] },
        "etched" : { "$zebra.ui.Etched":[] },
        "plain"  : { "$Border" : [ "#C5C5C5", 1, 3 ]  },
        "dot"    : { "$Dotted" : []  }
    },

    "BaseLayer": {
        "layout"     : { "$zebra.layout.RasterLayout":[] },
        "background" : null
    },

    "RootLayer" : {
        "$inherit": [ "BaseLayer" ]
    },

    "WinLayer" : {
        "$inherit": [ "BaseLayer" ]
    },

    "zCanvas": {
        "//"    :  "IT IS IMPORTANT TO HAVE CANVAS CSS PADDING = 0 TO FIX IE9 PROBLEM",
        "background": "white",
        "layout": { "$zebra.layout.StackLayout":[] },

        "styles": {
            "background-color"           : "@palette.background",
            "outline"                    : "none",
            "padding"                    : "0px",
            "-webkit-user-select"        : "none",
            "-ms-user-select"            : "none",
            "-moz-user-select"           : "-moz-none",
            "user-select"                : "none",
            "-khtml-user-select"         : "none",
            "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
            "touch-action"               : "none",
            "content-zooming"            : "none",
            "touch-callout"              : "none",
            "user-drag"                  : "none",
            "tap-highlight-color"        : "rgba(0,0,0,0)"
        },

        "features" : [
            "zebra.ui.MouseWheelSupport"
        ],

        "kids": [
            { "$ *zebra.ui.RootLayer" : "root" },
            { "$ *zebra.ui.WinLayer"  : [] },
            { "$ *zebra.ui.PopupLayer": [] }
        ]
    },

	"pictures" : { 
		"zebra" : { 
			".loadImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxOGMyZGY1OC1lMWE0LTgzNDctYWYzNi1iOGRmOGJiMTU0OTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTM4NThDMzAwNjFBMTFFNTg1NEZFNTM3MjE3MDZFN0EiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTM4NThDMkYwNjFBMTFFNTg1NEZFNTM3MjE3MDZFN0EiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjA3YjYyMzgtZTk0Ni0yNTQyLTlkMGQtN2E4YjAxNjU1NTM0IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OWYxZTA0N2QtMDYxYS0xMWU1LWJhYjct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EAAAgAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAAASApwAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAgADwFACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAEACeAgAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAAAsBTAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAABAAHgKAGD2/E+AAQDWe4qvA8/SCAAAAABJRU5ErkJggg==" 
		},
		"slider" : {
			".loadImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxOGMyZGY1OC1lMWE0LTgzNDctYWYzNi1iOGRmOGJiMTU0OTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzlFRUU5QkQwQUVCMTFFNTk5QkVCMjdBMUQyRDdFQjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzlFRUU5QkMwQUVCMTFFNTk5QkVCMjdBMUQyRDdFQjEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Qzg5MEVDNkUwQUU4MTFFNThCMUM5NEUyQzhGRkI3NzkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qzg5MEVDNkYwQUU4MTFFNThCMUM5NEUyQzhGRkI3NzkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4w9XRaAAABa0lEQVR42sxXoW7DMBC9mCwj/YRqI4NjVVlR4TIaNA1V+aYoMCi0Gywqq8YKSzr1E0yWsr3WZ9Wq0ire4lyf9EyS+J7Pzt1zRD6Y6weME3AKjsEhP9mBK3ABLul18N12yqhF0DuMKZiDcct5azADK4jZ/13AXL9g/KD/IYGITz8BZtUF+EbdoARnTdmIGoIPMH6BT9QtNuAIIvRlAWbl6wDBXRHPbibU2QtFwODEcxfNGejmwHkfzMhJfU39Ij5shd2ClPpH6p6BXEBAbrbAlNctyeBRcW2XwkRxY5HCVHFXk8JYOS1VAkNFwlBsJqSwU+xkpLBSbKOksFBHDyeHpW1GPx5+ryvUaEb39i/IBFafuc2oEhBQnQQYi5T0GDyxtuxUiIxDKXsIXro2/bwSztg4hsKGY1CzAJOWUSAR1pbvLwswIvTROne7HSXbcX1zV7Pr3dB8eChQ756uueZv4mvB292OA1/PfwUYAMT9Xofi/VbMAAAAAElFTkSuQmCC"
		},
		"blank" : {
			".loadImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII="
		}
    },

    "StringRender" : {
        "disabledColor": "#9A9C9A",
        "color": "@palette.fontColor",
        "font" : "@font"
    },

    "TextRender" : {
        "disabledColor": "#9A9C9A",
        "color": "@palette.fontColor",
        "font" : "@font"
    },

    "PasswordText" : {
        "$inherit" : [ "TextRender"]
    },

    "Label": {
        "disabledColor": "#9A9C9A"
    },
    
    "CompositeEvStatePan": {
        "layout"     : { "$FlowLayout": [ "center","center", "horizontal",2 ] },
        "focusMarker": "@borders.dot"
    },

    "BoldLabel": {
        "font": "@boldFont"
    },

    "Button": {
        "Label": {
            "font": { "$Font" : ["Arial", "bold", 15] },
            "disabledColor": "#9A9C9A"
        },

        "layout": { "$FlowLayout": ["center", "center", "horizontal",2] },

        "background": {
            "pressed.over" : "#FFFFFF",
            "out"          : { "$Gradient": [ "rgb(250, 250, 250)", "rgb(234, 234, 234)"] },
            "over"         : { "$Gradient": [ "rgb(234, 234, 234)", "rgb(214, 214, 214)"] },
            "disabled"     : "lightGray"
        },

        "border": {
            "focuson"  : { "$Border" : [ "#66CCFF", 2, 3 ] },
            "focusoff" : { "$Border" : [ "#C5C5C5", 1, 3 ] }
        },

        "focusMarkerView" : null,
        "padding":6
    },

    "Checkbox": {
        "Box": {
            "preferredSize": [ 16, 16],
            "border"       : "@borders.plain",
            "background"   : {
                "*": { "$Gradient": [ "rgb(250, 250, 250)", "rgb(234, 234, 234)" ] },
                "doff": "lightGray",
                "don": "lightGray"
            },
            "view": {
                "on.out"   : { "$zebra.ui.CheckboxView": [] },
                "off.out"  : { "$View": [] },
                "off.over" : { "$zebra.ui.CheckboxView": [ "lightGray" ] },
                "on.over"  : { "$zebra.ui.CheckboxView": [ "red" ] },
                "don"      : { "$zebra.ui.CheckboxView": [ "#AAAAAA" ] },
                "doff"     : { "$View": [] }
            }
        },

        "Label": {
            "disabledColor": "lightGray",
        	"font": "@smallFont",
        	"color": "@palette.fontColor",
            "padding": [6, 0, 0, 0]         	
        },

        "layout" : { "$FlowLayout": [ "left","center","horizontal",6 ] },
        "border" : {
             "focuson" :  { "$Border": [ "#66CCFF", 1, 4 ] },
             "focusoff":  { "$View" : [ ] }
        },
        "padding": 2
    },

    "Radiobox": {
        "$inherit" : [ "Checkbox" ],

        "Label": {
            "disabledColor": "lightGray"
        },

        "Box": {
            "preferredSize": [ 16, 16],
            "border"       : { "$zebra.ui.RoundBorder":["rgb(197,197,197)", 1] },
            "background"   : {
                "*" : { "$Gradient": [ "rgb(250, 250, 250)", "rgb(234, 234, 234)" ] },
                "doff": "lightGray",
                "don": "lightGray"
            },
            "view": {
                "on.out"   : { "$zebra.ui.RadioView" : []  },
                "off.out"  : { "$View"      : []  },
                "off.over" : { "$zebra.ui.RadioView" : [ "lightGray", "#DDDDDD"]  },
                "on.over"  : { "$zebra.ui.RadioView" : [ "#111111", "red"    ] },
                "don"      : { "$zebra.ui.RadioView" : [ "#AAAAAA", "#AAAAAA"] },
                "doff"     : { "$View" : [] }
            }
        }
    },

    "BorderPan": {
        "Label": {
            "font" : "@boldFont",
            "color": "@palette.gray1"
        },

        "border": { "$zebra.ui.TitledBorder": [ "@borders.plain", "center" ] }
    },

    "SplitPan": {
        "Bar": {
            "border"        : "@borders.plain",
            "background"    : {
                "*"        : "#7BAEDB",
                "over"     : "red",
                "pressed.*": "#FFFFCC"
            },
            "preferredSize" : [ 6, 6 ]
        }
    },

    "Scroll" : {
        "HIncButton": {
            "view": {
                "pressed.over" : { "$zebra.ui.ArrowView": [ 2, "gray" ] },
                "out"          : { "$zebra.ui.ArrowView": [ 2 ] },
                "over"         : { "$zebra.ui.ArrowView": [ 2, "red" ] },
                "disabled"     : { "$zebra.ui.ArrowView": [ 2, "white" ] }
            },
            "preferredSize":[ 16, 11 ],
            "canHaveFocus": false
        },

        "HDecButton": {
            "view": {
                "pressed.over" : { "$zebra.ui.ArrowView": [ 1, "gray" ] },
                "out"     : { "$zebra.ui.ArrowView": [ 1 ] },
                "over"    : { "$zebra.ui.ArrowView": [ 1, "red" ] },
                "disabled": { "$zebra.ui.ArrowView": [ 1, "white" ] }
            },
            "preferredSize":[ 16, 11 ],
            "canHaveFocus": false
        },

        "VIncButton": {
            "view": {
                "pressed.over" : { "$zebra.ui.ArrowView": [8, "gray"] },
                "out"     : { "$zebra.ui.ArrowView": [8] },
                "over"    : { "$zebra.ui.ArrowView": [8, "red"] },
                "disabled": { "$zebra.ui.ArrowView": [8, "white"] }
            },

            "preferredSize" :[ 11, 16 ],
            "canHaveFocus": false
        },

        "VDecButton": {
            "view": {
                "pressed.over" : { "$zebra.ui.ArrowView": [ 4, "gray" ] },
                "out"     : { "$zebra.ui.ArrowView": [ 4 ] },
                "over"    : { "$zebra.ui.ArrowView": [ 4, "red" ] },
                "disabled": { "$zebra.ui.ArrowView": [ 4, "white" ] }
            },

            "preferredSize":[ 11, 16 ],
            "canHaveFocus": false
        },

        "VBundle": {
            "padding":1,
            "preferredSize" : [16, -1],
            "background" : { "$zebra.ui.BunldeView": [] }
        },

        "HBundle": {
            "padding":1,
            "preferredSize" : [ -1, 6 ],
            "background" : { "$zebra.ui.BunldeView": [ 32 ] }
        },

        "background":  null,
        "padding"   : 1,
        "border"    : { "$Border": [ null, 0, 4 ] }
    },

    "?zebra.isTouchable": {
        "mscroll": { "$zebra.ui.MobileScrollMan"  :[] }
    },

    "ScrollPan": {
        "autoHide": { ".expr": "zebra.isTouchable" }
    },

    "TextField": {
    	"font"  	: "@font",
    	"color"		: "@palette.fontColor",
        "HintRender" : {
            "font"  : { "$Font": ["Arial", "bold italic", 12] },
            "color" : "#C1C1C1"
        },
        "border"        : {
            "focuson" :  { "$Border" : [ "#66CCFF", 2, 8 ] },
            "focusoff":  { "$Border" : [ "#DDDDDD", 2, 8 ] }
        },
        "background"    : "rgb(248, 250, 255)",
        "selectionColor": "#d3edad",
        "curW"          : 1,
        "cursorView"    : "@palette.black",
        "padding"      : [4, 4, 4, 4],
        "disabledColor": "#9A9C9A"
    },

    "TextArea" : {
        "$inherit" : [ "TextField" ]
    },

    "PassTextField" : {
        "$inherit" : [ "TextField" ]
    },

    "Progress": {
        "border"    : { "$Border" : [ "rgb(200,200,255)", 1, 3] },
        "bundleView": "@palette.gray4",
        "padding"   : 2
    },

    "Tabs": {
        "TabView": {
            "TabPan": {
                "layout": { "$FlowLayout": 4 }
            },

            "captionRender"    : "@StringRender",
            "fontColor"        : "@palette.fontColor",
            "selectedFontColor": "black",
            "font"             : "@font",
            "selectedFont"     : { "$Font": ["Arial", "bold", 14 ] }
        },

        "border" : {  "$zebra.ui.TitledBorder": {"$Border": ["gray",1, 6] } },
        "views"  : {
                    "tab"    : { "$zebra.ui.TabBorder": 1 },
                    "tabover": { "$zebra.ui.TabBorder": 2 },
                    "tabon"  : { "$zebra.ui.TabBorder": 0 },
                    "marker" : { "$Border": [ "#66CCFF", 1, 3 ] }
                },
        "pageGaps"  : [2 , 2]
    },

    "BaseList": {
        "views" :  {
            "select"    :  "rgb(228,244,252)",
            "top.marker": { "$Border": [ "#0081C4", 1, 4 ] },
            "marker"    : "#DEF1FF"
        },

        "border" : {
            "focuson"  :  { "$Border": [ "#66CCFF", 3, 4 ] },
            "focusoff" : "@borders.plain"
        },

        "padding": 0
    },

    "List": {
        "$inherit" : [ "BaseList" ],
        "gap":4
    },

    "CompList": {
        "$inherit" : [ "BaseList" ],

        "Label" : {
            "padding":4
        },

        "ImageLabel" : {
            "padding":4
        },

        "layout"  : { "$ListLayout":[] }
    },

    "Combo": {
        "ComboPadPan": {
        	"font"  		: "@font",
            "background"    : "rgb(248, 250, 255)",
        	"color"			: "@palette.fontColor",        	
            "border"    	: { "$Border":[ "#969696", 1, 3] },
        },

        "ReadonlyContentPan": {
            "padding": 0
        },

        "EditableContentPan": {
            "TextField": {
                "$inherit"  : [ "TextField" ],
            	"font"  	: "@font",
            	"color"		: "@palette.fontColor",
                "border"    : null,
                "background": null,
                "padding"  : [ 0,0,0,0 ]
            },
            "padding": 4,
            "layout": { "$BorderLayout": [ 0, 0 ] }
        },

        "Button": {
            "preferredSize": [16, 16],
            "view": {
               "out"       : { "$zebra.ui.ComboArrowView": [ ] },
               "over"      : { "$zebra.ui.ComboArrowView": [ "red" ] },
               "pressed.*" : { "$zebra.ui.ComboArrowView": [ "blue", true] },
               "disabled"  : { "$zebra.ui.ComboArrowView": [ "#CCCCCC"] }
            }
        },

        "List": {
            "$inherit": [ "List" ],
        	"font"  	: "@font",
        	"color"		: "@palette.fontColor",          
            "border"  	: null
        },

        "padding"      : [ 0, 4, 0, 4 ],
        "border"       : {
            "focuson" :  { "$Border" : [ "#66CCFF", 2, 8 ] },
            "focusoff":  { "$Border" : [ "#DDDDDD", 2, 8 ] }
        },
        "background"    : "rgb(248, 250, 255)",
        "font"  		: "@font",
        "layout"       : { "$BorderLayout": [0, 0] },
        "selectionView":  null
    },

    "Slider": {
        "border": {
            "focuson" :  { "$Border" : [ "#66CCFF", 1, 3 ] },
            "focusoff":  { "$View":[] }
        },
        "views" : {
             "gauge"  : { "$Border" : "@palette.gray3" },
             "hbundle": { "$Picture": [ "@pictures.slider" ] },
             "vbundle": { "$Picture": [ "@pictures.slider" ] }
        },
        "scaleColor": "@palette.gray1",
        "padding"   : 4
    },

    "Link": {
        "font"        : "@boldFont",
        "colors"      : [ "blue", "darkBlue", "black", "blue", "gray" ],
        "canHaveFocus": false
    },

    "MenuItem" : {
        "padding": [ 4,4,4,4],

        "Label": {
            "color"   : "#5A5A5A",
            "padding": [ 0,0, 0, 0 ],
            "font"    : { "$Font": ["Arial", "bold", 14] }
        },

        "CheckStatePan": {
            "view": {
                "on"    : { "$zebra.ui.StringRender":[ "✓",  { "$Font": [ "Arial", "bold", 16] }, "gray" ] },
                "dis.on": { "$zebra.ui.StringRender":[ "✓",  { "$Font": [ "Arial", "bold", 16] }, "lightGray" ] },
                "off"   : null
            }
        },

        "SubImage": {
            "padding": [ 0, 0, 0, 4],
            "view": {
                "arrow" :  { "$zebra.ui.ArrowView" : [ "right", "black", 9 ] },
                "*"     : null
            }
        }
    },

    "Menu": {
        "Line": {
            "padding": 4
        },

        "MenuItem" : {
            "$inherit" : [ "MenuItem" ],
            "Label": {
                "$inherit" : [ "MenuItem.Label" ]
            }
        },

        "border"     : { "$Border": []  },
        "background" : "rgba(235,235,235, 1.0)",
        "padding"    : [ 4,0,4,0 ],
        "views"      : {
            "marker" : { "$Gradient": [ "rgb(228,244,252)", "rgb(167,217,245)"  ] }
        },
        "layout"     : { "$ListLayout":0 }
    },

    "Menubar": {
        "MenuItem" : {
            "$inherit" : [ "MenuItem" ],
            "padding"  : [6, 16, 6, 16],
            "Label": {
                "$inherit" : [ "MenuItem.Label" ]
            }
        },

        "$inherit": [ "Menu" ],

        "background" : [ [ "#DCF0F7", { "$Gradient":["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.0)"] } ] ] ,
        "padding"   : [0,0,0,0],
        "layout"     : { "$FlowLayout": 0 },
        "views"      : {
            "select" : { "$Gradient": [ "rgb(228,244,252)", "rgb(167,217,245)"  ] } ,
            "marker" : { "$Gradient": [ "rgb(218,234,242)", "rgb(157,207,235)"  ] }
        }
    },

    "Toolbar": {
        "Combo": {
            "background": "@palette.white",
            "border"    : { "$Border": "rgb(200,180,200)" },
            "padding"  : [1, 4, 1, 1]
        },

        "ToolPan": {
            "border": {
                "over"        : { "$Border": [ "#32B6E6", 1, 6] },
                "*"           : null,
                "pressed.over": { "$Border": [ "#E6563A", 1, 6] }
            },

            "background": {
                "over"        : "#E1F0F5",
                "*"           : null,
                "pressed.over": "#FF8637"
            }
        },

        "ImagePan": {
            "padding": 4
        },

        "Checkbox": {
            "$inherit": ["Checkbox"],
            "canHaveFocus": false,
            "padding": 4,
            "background": {
                "on.*": "orange",
                "off.*": null
            }
        },

        "Radiobox" : {
            "$inherit": ["Radiobox", "Toolbar.Checkbox"]
        },

        "layout" : { "$FlowLayout":[ "left", "center", "horizontal", 6 ] },
        "border" : "@borders.plain",
        "padding": 4
    },

    "ExtendablePan": {
        "Label":{
            "font"  : "@boldFont",
            "color" : "@palette.white"
        },

        "TitlePan":{
            "padding"    : 4,
            "background" : { "$Gradient": [ "rgb(220,220,220)", "rgb(160,160,160)" ] },
            "layout"     : { "$FlowLayout": 4  }
        },

        "TogglePan":{
            "view" : { 
                "off" : { "$zebra.ui.tree.TreeSignView": [ true,  "white", "#4DB8FF" ], "width":20, "height":20  },
                "on"  : { "$zebra.ui.tree.TreeSignView": [ false, "white", "#4DB8FF" ], "width":20, "height":20  }
            }
        },

        "layout": { "$BorderLayout":[] }
    },

    "tree": {
        "DefViews": {
            "color" : "@palette.gray1",
            "font"  : "12px 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
        },

        "BaseTree" : {
            "lineColor" : "rgb(65, 131, 215)",
            "views": {
                "close"   : { "$Picture": [ "@pictures.zebra", 61 ,20 ,16,14, true ] },
                "open"    : { "$Picture": [ "@pictures.zebra", 49 ,34,16,14, true ] },
                "leaf"    : { "$Picture": [ "@pictures.zebra", 49 ,20 ,16,14, true ] },
                "off"     : { "$zebra.ui.tree.TreeSignView": [] },
                "on"      : { "$zebra.ui.tree.TreeSignView": false },
                "aselect" : [ [ "rgb(228, 244, 252)", { "$Border": "rgb(200,180,200)" } ] ]
            }
        },

        "Tree": {
            "$inherit" : ["tree.BaseTree"]
        },

        "CompTree": {
            "Checkbox" : {
                "$inherit" : [ "Checkbox" ]
            },

            "Combo" : {
                "$inherit" : [ "Combo" ]
            },

            "Label" : {
                "$inherit" : [ "Label" ],
                "padding"  : 4
            },

            "$inherit" : ["tree.BaseTree"],
            "views": {
                "close"   : { "$Picture": [ "@pictures.zebra", 61 ,20 ,16,14, true ] },
                "open"    : { "$Picture": [ "@pictures.zebra", 49 ,34,16,14, true ] },
                "leaf"    : { "$Picture": [ "@pictures.zebra", 49 ,20 ,16,14, true ] },

                "off"     : { "$zebra.ui.tree.TreeSignView": [] },
                "on"      : { "$zebra.ui.tree.TreeSignView": false },
                "iselect" : "#A0D9EA",
                "aselect" : "#A0D9EA"
            }
        }
    },

    "grid" : {
        "DefViews": {
            "cellBackground": null,
            "font": "13px 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
            "color": "rgb(74,74,74)"
        },

        "DefEditors" : {
            "TextField": {
                "$inherit" : [ "TextField" ],
                "border": {"$Border":  "blue" },
                "background": null
            },

            "Combo": {
                 "$inherit" : [ "Combo" ],
                "border":null
            },

            "Checkbox": {
                "$inherit" : [ "Checkbox" ],
                "layout": { "$FlowLayout": [ "center", "center" ]},
                "border": {"$Border":  "blue" }
            }
        },

        "BaseGridCaption": {
            "border": { "$Border":"gray" },
            "background" : { "$Gradient": [ "white", "lightGray" ] }
        },

        "CompGridCaption" :{
            "$inherit" : [ "grid.BaseGridCaption" ],

            "StatusPan": {
                "view" : {
                    "*"       : { "$zebra.ui.ArrowView" : [ "left", "rgb(255, 153, 0)" ], "width":9, "height":9  },
                    "ascent"  : { "$zebra.ui.ArrowView" : [ "top", "rgb(255, 153, 0)"  ]   },
                    "descent" : { "$zebra.ui.ArrowView" : [ "bottom", "rgb(255, 153, 0)" ] }
                }
            },

            "TitlePan": {
                "padding":6
            },

            "Link": {
                "font"  : "bold 14px 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                "colors": [ "orange", "red", "black", "blue", "gray" ]
            }
        },

        "GridCaption" :{
            "$inherit" : [ "grid.BaseGridCaption" ],

            "padding" : 4,
            "font"     : "@boldFont",
            "fontColor": "rgb(65, 131, 215)"
        },

        "Grid": {
            "CornerPan" : {
                "$inherit": [ "grid.BaseGridCaption" ]
            },

            "views" : {
                "onselection" :"#D0EAFF",
                "offselection":"#ADC1D6"
            },
            "lineColor": "rgb(65, 131, 215)"
        }
    },

    "Tooltip": {
        "borderColor":"gray",
        "borderWidth":1,

        "Label": {
            "font"   : "bold 11px Arial",
            "color"  : "gray",
            "padding": 2
        },

        "background" : "yellow",
        "layout": { "$FlowLayout": [ "center", "top" ] }
    },

    "Window": {
        "CaptionPan": {
            "layout"     : { "$BorderLayout":[] },
            "background" : {
                  "active"  : { "$zebra.ui.WindowTitleView": [] },
                  "inactive": { "$zebra.ui.WindowTitleView": "#E0F4FF" }
            },
            "padding"  : 8
        },

        "ContentPan": {
            "layout": { "$BorderLayout":[] }
        },

        "TitleLab": {
            "font" : {"$Font" : ["Verdana", 16] },
            "color": "@palette.white"
        },

        "StatusPan": {
            "layout": { "$FlowLayout":["right","center"] }
        },

        "SizerIcon": {
            "padding" : [0,0,1,2],
            "image"    : { "$Picture": [ "@pictures.zebra",0,32,9,8 ] }
        },

        "Icon": {
            "visible":false
        },

        "Button": {

        },

        "border"    : { "active"   : { "$Border":["#33AAFF", 2, 8], "gap":2 },
                        "inactive" : { "$Border":["lightGray", 2, 8], "gap":2 } },
        "background": "#ECECEC",
        "padding"  : [0,0,2,0],
        "buttons"   : {
            "close": {
                "over"   : { "$Picture": [ "@pictures.zebra",16,0,16,16   ]},
                "out"    : { "$Picture": [ "@pictures.zebra",0,0,16,16    ]},
                "pressed": { "$Picture": [ "@pictures.zebra",32,0,16,16   ]}
            }
        }
    },

    "StatusBar" : {
        "borderView" : "etched"
    },

    "HtmlElement": {
        "styles": {
            "margin"          : "0px",
            "border"          : "none",
            "borderWidth"     : "0px",
            "boxSizing"       : "border-box",
            "-moz-box-sizing" : "border-box",
            "display"         : "block",
            "backgroundImage" : "none",
            "backgroundColor" : "transparent",
            "position"        : "absolute",
            "zIndex"          : 10,
            "visibility"      : "hidden",
            "boxShadow"       : "none",
            "-moz-box-shadow" : "none",
            "isIE:overflow"   : "hidden"
        },

        "border": null
    },

    "HtmlContent": {
        "$inherit": [ "TextField", "HtmlElement" ]
    },

    "HtmlTextInput": {
        "$inherit": [ "TextField", "HtmlElement" ],
        "style"   : [ "outline", "none"],
        "padding" : [4,4,4,4],
        "disabledColor": "#9A9C9A"
    },

    "HtmlTextField": {
        "$inherit": [ "HtmlTextInput"]
    },

    "HtmlTextArea": {
        "$inherit": [  "HtmlTextInput" ],
        "resizeable"  :  false
    }
};