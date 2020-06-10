var steps = document.querySelectorAll('.step');
var body = document.querySelector('body');
var html = document.querySelector('html');
var visibleCounter = 0;
for (var i=0; i < steps.length; i++) {
  var element = steps[i];
  element.onclick = function(event) {
    var number = this.dataset.step;
    var target = this.href;
    addStep(number, target);
  }
};

function removeVisited() {
  if (document.getElementById('visited')) {
    body.removeChild(document.getElementById('visited'));
  }
}

function addStep(number, target) {
  html.className += ' step' + number;

  removeVisited();

  if (target !== '') {
    var id = target.split('#')[1];
    document.getElementById(id).className = 'animate';
  }

  if (number === '7') {
    loadGoogleFont();
  }
}
/*
visited.onclick = function() {
  loadGoogleFont();
  for (var i=0; i < 11; i++) {
    html.className += ' step' + i;
  }
  removeVisited();
}
*/

WebFontConfig = {
  google: {
    families: ['Roboto:300,400,500']
  }
};

function loadGoogleFont() {
  (function(d) {
    var wf = d.createElement('script'), s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js';
    s.parentNode.insertBefore(wf, s);
  })(document);
}

function appendContent() {
    var elementType = document.getElementById("elementType").value;
    var userInput = document.getElementById("userInput").value
  var para = document.createElement(elementType);
  var node = document.createTextNode(userInput);
    var htmlNode = document.createTextNode(" adds <" + elementType + ">"+ userInput + "</" + elementType+"> to the html");
  para.appendChild(node);
  var element = document.getElementById("userContent");
  element.appendChild(para);
  element.appendChild(htmlNode);
}

function changeBackgroundColor() {
  var color = document.getElementById("background").value;
  var textColor = document.getElementById("bodyColor").value;
  document.body.style.backgroundColor = color;
  document.body.style.color = textColor;
}

function changeHeaderColor() {
  var color = document.getElementById("headerColor").value;
  var textColor = document.getElementById("headerTextColor").value;
  var elem = document.getElementById("header");
  elem.style.backgroundColor = color;
  elem.style.color = textColor;

}

function changehtmlBackground() {
  var color = document.getElementById("htmlbackground").value;
  var stuff = document.getElementById("all");
  stuff.style.backgroundColor = color;
}

function changeStrongColor() {
  var color = document.getElementById("strongText").value;
  var strongs = document.getElementsByTagName("strong");
  for(let i = 0 ; i < strongs.length; i++) {
    strongs[i].style.color = color;
  }
  
}

function changeBalance() {
  var color = document.getElementById("codebackground").value;
  var code = document.getElementsByTagName("pre");
  for(let i = 0 ; i < code.length; i++) {
    code[i].style.backgroundColor = color;
  }
  
}

function changeCentering() {
  var val = document.getElementById("marginInput").value;
  var val2 = document.getElementById("maxWidthInput").value;
  var elems = document.getElementsByTagName("body");
  
  for(let i = 0 ; i < elems.length; i++) {
    elems[i].style.margin = val + "px";
    elems[i].style.maxWidth = val2 + "em";
  }
}

function showNext() {
  document.getElementById(visibleCounter).style.visibility='visible';
  visibleCounter++;
}

function changeFont() {
  var font = document.getElementById("fonts").value;
  console.log(font);
  var elems = document.getElementsByTagName("body");
 for(let i = 0 ; i < elems.length; i++) {
    elems[i].style.fontFamily =font;
 }
}

function changeSpacing() {
  var lineHeight = document.getElementById("lineSpaceInput").value;
  var padding1 = document.getElementById("padding1").value;
  var padding2 = document.getElementById("padding2").value;
  var marginTopIn = document.getElementById("marginTopInput").value;
  var elems = document.getElementsByTagName("body");
 for(let i = 0 ; i < elems.length; i++) {
    elems[i].style.lineHeight = lineHeight + "";
    elems[i].style.padding = padding1 + "em " + padding2 + "em";
    elems[i].style.marginTop = marginTopIn + "em";
 }
}


