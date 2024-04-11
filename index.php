<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="themes/default/css/style.css">
    <script src="themes/default/js/script.js" defer></script>
    <title>ChatMat :)</title>
</head>
<body>
<div id="container">
    <div id="left-panel">
        <div class="left-panel-item active">
            <div class="left-panel-username">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>Public</span>
            </div>
        </div>
        <div class="left-panel-item">
            <div class="left-panel-username">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>pc1</span>
            </div>
            <div class="left-offline">offline</div>
        </div>
        <div class="left-panel-item">
            <div class="left-panel-username">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>pc2</span>
            </div>
            <div class="left-online">online</div>
        </div>
        <div class="left-panel-item">
            <div class="left-panel-username">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>pc3</span>
            </div>
            <div class="left-offline">offline</div>
        </div>
        <div class="left-panel-item">
            <div class="left-panel-username">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>pc4</span>
            </div>
            <div class="left-offline">offline</div>
        </div>
        <div class="left-panel-item">
            <div class="left-panel-username">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>pc5</span>
            </div>
            <div class="left-offline">offline</div>
        </div>
        <div class="left-panel-item">
            <div class="left-panel-username">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>pc6</span>
            </div>
            <div class="left-offline">offline</div>
        </div>
        <div class="left-panel-item">
            <div class="left-panel-username">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>pc7</span>
            </div>
            <div class="left-offline">offline</div>
        </div>
        <div class="left-panel-item">
            <div class="left-panel-username">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>pc8</span>
            </div>
            <div class="left-offline">offline</div>
        </div>
        <div class="left-panel-item">
            <div class="left-panel-username">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>pc9</span>
            </div>
            <div class="left-offline">offline</div>
        </div>
        <div class="left-panel-item">
            <div class="left-panel-username">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>pc10</span>
            </div>
            <div class="left-offline">offline</div>
        </div>
    </div>
    <div id="right-panel">
        <div id="right-header-container">
            <div id="right-header">
                <div id="username-right-header">Public</div>
                <div id="right-header-item-separator"></div>
                <div id="left-offline">offline</div>
            </div>
        </div>
        <div id="top-section">
            <div class="right-section">
                <div class="message-box">
                    Hello This is a message test;
                </div>
            </div>
            <div class="left-section">
                <div class="message-box">
                    Hello This is a message test;
                </div>
            </div>
            <div class="left-section">
                <div class="message-box">
                    Hello This is a message test;
                </div>
            </div>
            <div class="right-section">
                <div class="message-box">
                    Hello This is a message test;
                </div>
            </div>
            <div class="left-section">
                <div class="message-box">
                    Hello This is a message test;
                </div>
            </div>
            <div class="right-section">
                <div class="message-box">
                    Hello This is a message test;
                </div>
            </div>
        </div>
        <div id="bottom-section">
            <div name="textBox" id="text-box" contenteditable="" placeholder="Message"
                 oninput="if(this.innerHTML.trim()==='<br>')this.innerHTML=''"></div>
        </div>
    </div>
</div>
</body>
</html>