(function() {
var image_element = document.createElement('img');
image_element.id = "dla-beki-ribbon";
image_element.src = self.options.imageURL;
image_element.style.position = "fixed";
image_element.style.top = "0px";
image_element.style.right = "0px";
image_element.style.border = "0px";
image_element.style.zIndex = "10000";
// delete itself upon clicking
image_element.onclick = function() {document.body.removeChild(document.getElementById("dla-beki-ribbon"))};
document.body.appendChild(image_element);
}) ();