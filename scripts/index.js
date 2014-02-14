var p = document.createElement("p");var p_text = document.createTextNode("This is my first web page, created with JavaScript");var div = document.createElement("div");
var a_first = document.createElement("a");
var a_second = document.createElement("a");
var a_second_text = document.createTextNode("IRC Channel");
var img = document.createElement("img");
var button = document.createElement("button");
var button_text = document.createTextNode("Please click me.");
var br1 = document.createElement("br");
var br = document.createElement("br");
			
button.id="button_changes";
button.type="button";
button.onclick= function(){alertmeplease();};
button.ondblclick= function(){getItBack();};
button.appendChild(button_text);
			
a_second.href="irc.html";
a_second.appendChild(a_second_text);
			
img.id="erep_image_2";
img.alt="Go to eRepublik";
img.title="Go to eRep";
img.src="styles/small_images/32/2.png";
			
a_first.class="erep_redirect";
a_first.href="http://www.erepublik.com";
a_first.appendChild(img);
			
p.appendChild(p_text);
p.id="p_elem";
p.style="color:red";
			
div.id = "first_paragraph";
div.appendChild(p);
			
document.body.appendChild(div);
document.body.appendChild(a_first);
document.body.appendChild(br1);
document.body.appendChild(a_second);
document.body.appendChild(br);
document.body.appendChild(button);