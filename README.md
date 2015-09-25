# 4d-tips-html-video
Example of using the video tag in a web area.

![](https://github.com/miyako/4d-tips-html-video/blob/master/images/m.png)

Remarks
---

The ```video``` tag is not supported in the Windows version of (open-source) WebKit integrated in 4D.

WA EXECUTE JAVASCRIPT FUNCTION can run any expression that evaluates as a function (e.g. ```app.play```) but apparently not on Windows with native WebArea. Need to call WA Evaluate javascript (e.g. ```app.play()```) instead.
