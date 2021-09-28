var div1 = document.createElement("div");
var a1 = document.createElement("a");
var img1 = document.createElement("img");
var a2 = document.createElement("a");
var img2 = document.createElement("img");
var blockquote = document.createElement("blockquote");
var p1 = document.createElement("p");
var text1 = document.createTextNode("IRC so easy your mom could use it.");
var p2 = document.createElement("p");
var text2 = document.createTextNode("Josh Lowensohn, CNet News.");
var div2 = document.createElement("div");
var p3 = document.createElement("p");
var p4 = document.createElement("p");
var img3 = document.createElement("img");
var iframe1 = document.createElement("iframe");
var div3 = document.createElement("div");
var h1 = document.createElement("h1");
var text3 = document.createTextNode("Connecting with Mibbit");
var p5 = document.createElement("p");
var text4 = document.createTextNode('To connect you need to choose valid, registered nick');
var br = document.createElement("br");
var text4_2 = document.createTextNode("it must be registered because you can't join our channel with unregistered nick.");
var iframe2 = document.createElement("iframe");

iframe2.id="qwebirc";
iframe2.src="https://qchat2.rizon.net/?channels=b365&uio=Mj10cnVlJjc9dHJ1ZQbf";

p5.id="mibbit_help_text";
p5.appendChild(text4);
p5.appendChild(br);
p5.appendChild(text4_2);

h1.appendChild(text3);

div3.className="mibbit_help";
div3.appendChild(h1);
div3.appendChild(p5);

iframe1.id="mibbit_widgett";
iframe1.scrolling="no";
iframe1.src="https://widget.mibbit.com/?settings=fa1e099a838c446c6e595ce6f9c09658&server=rizon.mibbit.org&channel=%23b365";

img3.src="";
img3.id="flag_source";

p4.id="ip_flag";
p4.style="visibility:hidden;";
p4.appendChild(img3);

p3.id="ip_finder";
p3.style="";

div2.className="body_widgets";
div2.appendChild(p3);
div2.appendChild(p4);
div2.appendChild(iframe1);

p2.id="mibbit_quote_second";
p2.appendChild(text2);

p1.appendChild(text1);

blockquote.id="mibbit_quote";
blockquote.cite="http://mibbit.com";
blockquote.appendChild(p1);
blockquote.appendChild(p2);

img2.title="IRC";
img2.alt="IRC Page";
img2.src="styles/small_images/IRC Channel.png";

a2.id="irc_button";
a2.href="irc.html";
a2.appendChild(img2);

img1.title="Home";
img1.alt="Home Page";
img1.src="styles/small_images/Home.png";

a1.id="home_button";
a1.href="index.html";
a1.appendChild(img1);

div1.className="mainmenu";
div1.appendChild(a1);
div1.appendChild(a2);

document.body.appendChild(div1);
document.body.appendChild(blockquote);
document.body.appendChild(div2);
document.body.appendChild(div3);
document.body.appendChild(iframe2);
document.body.onload= function(){ helper(),echoIp(),IpFlag(); };
