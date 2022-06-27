import "./styles/about.scss";
import {
  footer,
  footer_content,
  navbar,
  navbar_content,
  usingIE,
} from "./components/all_pages";

footer.innerHTML = footer_content;
navbar.innerHTML = navbar_content;

// Checking for IE
if (!!usingIE()) {
  alert(
    "Hey there. It looks as though you are using Internet Explorer. You really should start using another browser (i.e. FireFox, Chrome, or Safari)."
  );
}

// Preventing content framing
if (top != window) {
  top!.location = window.location;
}
