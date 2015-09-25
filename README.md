# 4d-tips-html-video
Example of using the video tag in a web area.

Object Method
---

```
$event:=Form event

Case of 
: ($event=On Load)

WA_SET_FILTER ("video/*")
WA_SET_HTML ("index.html")
WA_SET_VISIBLE (False)

OBJECT SET ENABLED(*;"button.@";False)

: ($event=On End URL Loading)

  //HTML is ready
OBJECT SET ENABLED(*;"button.@";True)
CALL PROCESS(-1)  //force update

: ($event=On URL Filtering)

$thisName:=OBJECT Get name(Object current)
$url:=WA Get last filtered URL(*;$thisName)

Case of 
: ($url="http://video/canplay/")

  //video is ready
WA_SET_VISIBLE (True)

End case 

End case 
```
