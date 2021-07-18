function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
}


function myFunction() {
  var x = document.getElementById("dropdown-menu");
  if (x.className === "nav-menu-container") {
    x.className += " show";
  } else {
    x.className = "nav-menu-container";
  }
}

function scrollRightD(value, outContainer, bigEle) {
  const container = document.getElementById(outContainer);
  const bigel = document.getElementById(bigEle);
  const available = bigel.offsetWidth - container.offsetWidth;
  bigel.scrollLeft += 50;
}

function scrollLeftD(value, outContainer, bigEle) {
  const container = document.getElementById(outContainer);
  const bigel = document.getElementById(bigEle);
  const available = bigel.offsetWidth - container.offsetWidth;
  bigel.scrollLeft -= 50;
}