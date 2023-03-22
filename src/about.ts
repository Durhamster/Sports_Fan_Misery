// imgs
import flowchart_url from "./img/flowchart.jpg";
// styles
import "./styles/about.scss";
// components
import {
  footer,
  footer_content,
  navbar,
  navbar_content,
  usingIE,
} from "./components/all_pages";

navbar.innerHTML = navbar_content;
footer.innerHTML = footer_content;
document.getElementById("flowchart")!.setAttribute("src", flowchart_url);

// Checking for IE
if (usingIE?.()) {
  alert(
    "Hey there. It looks as though you are using Internet Explorer. You really should start using another browser (i.e. FireFox, Chrome, or Safari)."
  );
}

// Preventing content framing
if (top != window) {
  top!.location = window.location;
}
