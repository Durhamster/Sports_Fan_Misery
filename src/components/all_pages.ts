// Functions used in multiple pages
import "../styles/main.scss";

// Misc. Vars
export const data_year = 2022;

// Rounds any numbers to 2 decimal places
export const roundNumber = function (num: number) {
  var m = Number((Math.abs(num) * 100).toPrecision(15));
  return (Math.round(m) / 100) * Math.sign(num);
};

//Detects if User is using IE
export const usingIE = () => {
  return (
    navigator.userAgent.indexOf(`MSIE `) > -1 ||
    navigator.userAgent.indexOf(`Trident/`) > -1
  );
};

// Navbar
export const navbar = document.getElementById("navbar")!;
export const navbar_content = `
<nav class="navbar">
<p class="nav-logo"><a href="index.html" id="nav-logo">Sports Fan Misery Calculator</a></p>
</nav>`;

// Copyright year
export const currentYear: any = new Date().getFullYear();

if (currentYear > 2022) {
  var cr_yr: string = "2022 - " + currentYear;
} else {
  var cr_yr: string = currentYear;
}

// Footer
export const footer = document.getElementById("footer")!;

export const footer_content =
  `<hr id="footer_divider" />` +
  `<p>Sports Fan Misery Calculator ©` +
  cr_yr +
  `</p>` +
  `<p>Not affiliated with or endorsed by any sports league.` +
  `<p>All data is up to date as of October ` +
  data_year +
  `</p> <p>*Seasons are not added until they are completed</p>` +
  `<p><a href="about.html">About</a> | <a href="about.html#contact">Contact</a> | <a href="sources.html">Sources</a></p>`;
