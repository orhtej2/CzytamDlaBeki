var image_element = document.createElement('img');
document.body.appendChild(image_element);
image_element.id = "dla-beki-ribbon";
image_element.src = chrome.extension.getURL("ribbon1_red_top_right.png");
image_element.style.position = "fixed";
image_element.style.top = "0px";
image_element.style.right = "0px";
image_element.style.border = "0px";
// delete itself upon clicking
image_element.onclick = function() {document.body.removeChild(document.getElementById("dla-beki-ribbon"))};
