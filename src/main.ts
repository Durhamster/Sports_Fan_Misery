// imgs
import cfl_url from "./img/cfl.png";
import epl_url from "./img/epl.png";
import ipl_url from "./img/ipl.png";
import isl_url from "./img/isl.png";
import kbo_url from "./img/kbo.png";
import laliga_url from "./img/laliga.png";
import mlb_url from "./img/mlb.png";
import mls_url from "./img/mls.png";
import nba_url from "./img/nba.png";
import ncaaf_url from "./img/ncaaf.png";
import nhl_url from "./img/nhl.png";
import nfl_url from "./img/nfl.png";
import nwsl_url from "./img/nwsl.png";
import wnba_url from "./img/wnba.png";
// styles
import "./styles/misery.css";
import "./styles/team_colors.css";
// components
import {
  currentYear,
  footer,
  footer_content,
  roundNumber,
  usingIE,
} from "./components/all_pages";
import { result_sentences, sports_input } from "./components/all_sports";
import {
  kbo_dropdown,
  KBOTeamData,
  mlb_dropdown,
  MLBTeamData,
} from "./components/baseball";
import {
  cfl_dropdown,
  CFLTeamData,
  ncaaf_dropdown,
  nfl_dropdown,
  NCAAFTeamData,
  NFLTeamData,
} from "./components/am_football";
import {
  nba_dropdown,
  NBATeamData,
  wnba_dropdown,
  WNBATeamData,
} from "./components/basketball";
import { ipl_dropdown, IPLTeamData } from "./components/cricket";
import {
  LALIGATeamData,
  laliga_dropdown,
  isl_dropdown,
  ISLTeamData,
  mls_dropdown,
  MLSTeamData,
  nwsl_dropdown,
  NWSLTeamData,
  epl_dropdown,
  EPLTeamData,
} from "./components/football";
import { nhl_dropdown, NHLTeamData } from "./components/hockey";
import { misery_calculation } from "./components/misery";

// HTML Section
const main_app = document.querySelector<HTMLDivElement>("#main_app")!;
const misery_zone = <HTMLElement>document.getElementById("misery_zone");
const misery_inputs = <HTMLElement>document.getElementById("misery_inputs");
const misery_calc = <HTMLElement>document.getElementById("misery_calc");
const back_link = document.getElementById("back_link");

main_app.innerHTML =
  `
<h1>🚩 Sports Fan Misery Calculator 😔</h1>
<div id="sports_selection">
  <p>Select every league you have a favorite team in</p>
  <ul>
    <li>
      <input class="sports_checkbox" type="checkbox" name="sports_check" id="cfl" value="cfl"/>
      <label id="cfl_label" for="cfl"><img id="cfl_logo" /></label>
    </li>
    <li>
    <input class="sports_checkbox" type="checkbox" name="sports_check" id="epl" value="epl"/>
    <label id="epl_label" for="epl"><img id="epl_logo" /></label>
    </li>
    <li>
      <input class="sports_checkbox" type="checkbox" name="sports_check" id="kbo" value="kbo"/>
      <label id="kbo_label" for="kbo"><img id="kbo_logo" /></label>
    </li>
    <li>
    <input class="sports_checkbox" type="checkbox" name="sports_check" id="laliga" value="laliga"/>
    <label id="laliga_label" for="laliga"><img id="laliga_logo" /></label>
    </li>
    <li>
      <input class="sports_checkbox" type="checkbox" name="sports_check" id="ipl" value="ipl"/>
      <label id="ipl_label" for="ipl"><img id="ipl_logo" /></label>
    </li>
    <li>
    <input class="sports_checkbox" type="checkbox" name="sports_check" id="isl" value="isl"/>
    <label id="isl_label" for="isl"><img id="isl_logo" /></label>
    </li>
    <li>
      <input class="sports_checkbox" type="checkbox" name="sports_check" id="nba" value="nba"/>
      <label id="nba_label" for="nba"><img id="nba_logo" /></label>
    </li>
    <li>
      <input class="sports_checkbox" type="checkbox" name="sports_check" id="mlb" value="mlb"/>
      <label id="mlb_label" for="mlb"><img id="mlb_logo" /></label>
    </li>
    <li>
      <input class="sports_checkbox" type="checkbox" name="sports_check" id="mls" value="mls"/>
      <label id="mls_label" for="mls"><img id="mls_logo" /></label>
    </li>
    <li>
      <input class="sports_checkbox" type="checkbox" name="sports_check" id="ncaaf" value="ncaaf"/>
      <label id="ncaaf_label" for="ncaaf"><img id="ncaaf_logo" /></label>
    </li>
    <li>
      <input class="sports_checkbox" type="checkbox" name="sports_check" id="nfl" value="nfl"/>
      <label id="nfl_label" for="nfl"><img id="nfl_logo" /></label>
    </li>
    <li>
      <input class="sports_checkbox" type="checkbox" name="sports_check" id="nhl" value="nhl"/>
      <label id="nhl_label" for="nhl"><img id="nhl_logo" /></label>
    </li>
    <li>
      <input class="sports_checkbox" type="checkbox" name="sports_check" id="nwsl" value="nwsl"/>
      <label id="nwsl_label" for="nwsl"><img id="nwsl_logo" /></label>
    </li>
    <li>
      <input class="sports_checkbox" type="checkbox" name="sports_check" id="wnba" value="wnba"/>
      <label id="wnba_label" for="wnba"><img id="wnba_logo" /></label>
    </li>
    </ul>` +
  sports_input +
  `
    <p id="sports_selection_error"></p>
    </div>
    `;

misery_calc.innerHTML =
  `
    <p>
    <input
    name="birth_year"
    maxlength="4"
    id="birth_year"
    />
    <button id="submit_btn">Find out how miserable you are!</button>` +
  result_sentences +
  `</p>
`;

footer.innerHTML = footer_content;
// END HTML SECTION

// League Icons
document.getElementById("cfl_logo")!.setAttribute("src", cfl_url);
document.getElementById("epl_logo")!.setAttribute("src", epl_url);
document.getElementById("ipl_logo")!.setAttribute("src", ipl_url);
document.getElementById("isl_logo")!.setAttribute("src", isl_url);
document.getElementById("kbo_logo")!.setAttribute("src", kbo_url);
document.getElementById("laliga_logo")!.setAttribute("src", laliga_url);
document.getElementById("mlb_logo")!.setAttribute("src", mlb_url);
document.getElementById("mls_logo")!.setAttribute("src", mls_url);
document.getElementById("nba_logo")!.setAttribute("src", nba_url);
document.getElementById("ncaaf_logo")!.setAttribute("src", ncaaf_url);
document.getElementById("nfl_logo")!.setAttribute("src", nfl_url);
document.getElementById("nhl_logo")!.setAttribute("src", nhl_url);
document.getElementById("nwsl_logo")!.setAttribute("src", nwsl_url);
document.getElementById("wnba_logo")!.setAttribute("src", wnba_url);

let sports_selection_error = <HTMLElement>(
  document.getElementById("sports_selection_error")
);
let sports_selection_div = <HTMLElement>(
  document.getElementById("sports_selection")
);
let default_sentence = <HTMLElement>document.getElementById("default_sentence");
let misery_result = <HTMLElement>document.getElementById("misery_result");
let error_result1 = <HTMLElement>document.getElementById("error_result1");
let error_result2 = <HTMLElement>document.getElementById("error_result2");
let age_input = <HTMLElement>document.getElementById("birth_year");

// Fade In/Out
const fade_In = function (e: any) {
  let opacity = 0;
  setInterval(function () {
    if (opacity < 1) {
      opacity = opacity + 0.1;
      e.style.opacity = opacity;
    }
  }, 75);
};

const fade_Out = function (e: any) {
  e.classList.add("hide");
  e.classList.remove("show");
};

// Checks if user selections are valid
const check_values = function (birth_year: any, fav_teams: any) {
  if (
    birth_year !== null &&
    birth_year >= currentYear - 110 &&
    birth_year <= currentYear - 1 &&
    !fav_teams.includes("default")
  ) {
    default_sentence.style.display = "none";
    error_result1.style.display = "none";
    error_result2.style.display = "none";
    misery_result.style.opacity = "0";
    misery_result.style.display = "block";
    fade_In(misery_result);
    back_link!.style.display = "block";
  } else if (birth_year !== 0 && fav_teams.includes("default")) {
    default_sentence.style.display = "none";
    error_result1.style.display = "block";
    error_result2.style.display = "none";
    misery_result.style.display = "none";
  } else if (birth_year === "" && fav_teams.includes("default")) {
    default_sentence.style.display = "none";
    error_result1.style.display = "none";
    error_result2.style.display = "block";
    misery_result.style.display = "none";
  } else if (birth_year < currentYear - 110 && !fav_teams.includes("default")) {
    default_sentence.style.display = "none";
    error_result1.style.display = "none";
    error_result2.style.display = "block";
    misery_result.style.display = "none";
  } else if (birth_year > 2021 && !fav_teams.includes("default")) {
    default_sentence.style.display = "none";
    error_result1.style.display = "none";
    error_result2.style.display = "block";
    misery_result.style.display = "none";
  }
};

// Checks if any sports have been checked
const sports_check = function () {
  let checked_sports: any = [];
  let checkboxes: any = document.getElementsByName("sports_check");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checked_sports.push(checkboxes[i].value);
    }
  }
  // Tells user to check a sport if none selected
  if (checked_sports.length == 0) {
    sports_selection_error.innerHTML = "You forgot to select a league...";
    sports_selection_error.style.color = "#dc143c";
  } else {
    fade_Out(sports_selection_div);

    let fade_sports_selection = function () {
      sports_selection_div.style.display = "none";
      // Checks which sports have been selected & produces correct dropdown menus

      let misery_div_items = `<p>Select your team(s) and the year you were born</p>`;

      if (checked_sports.includes("cfl")) {
        misery_div_items = misery_div_items + cfl_dropdown;
      }
      if (checked_sports.includes("epl")) {
        misery_div_items = misery_div_items + epl_dropdown;
      }
      if (checked_sports.includes("kbo")) {
        misery_div_items = misery_div_items + kbo_dropdown;
      }
      if (checked_sports.includes("laliga")) {
        misery_div_items = misery_div_items + laliga_dropdown;
      }
      if (checked_sports.includes("mlb")) {
        misery_div_items = misery_div_items + mlb_dropdown;
      }
      if (checked_sports.includes("nba")) {
        misery_div_items = misery_div_items + nba_dropdown;
      }
      if (checked_sports.includes("isl")) {
        misery_div_items = misery_div_items + isl_dropdown;
      }
      if (checked_sports.includes("ipl")) {
        misery_div_items = misery_div_items + ipl_dropdown;
      }
      if (checked_sports.includes("mls")) {
        misery_div_items = misery_div_items + mls_dropdown;
      }
      if (checked_sports.includes("nhl")) {
        misery_div_items = misery_div_items + nhl_dropdown;
      }
      if (checked_sports.includes("ncaaf")) {
        misery_div_items = misery_div_items + ncaaf_dropdown;
      }
      if (checked_sports.includes("nfl")) {
        misery_div_items = misery_div_items + nfl_dropdown;
      }
      if (checked_sports.includes("nwsl")) {
        misery_div_items = misery_div_items + nwsl_dropdown;
      }
      if (checked_sports.includes("wnba")) {
        misery_div_items = misery_div_items + wnba_dropdown;
      }

      misery_inputs.innerHTML = misery_div_items;
      age_input.style.display = "inline-block";
      age_input.style.opacity = "0";
      submit_btn!.style.display = "inline-block";
      submit_btn!.style.opacity = "0";
      fade_In(age_input);
      fade_In(submit_btn);
      fade_In(misery_zone);
    };

    setTimeout(fade_sports_selection, 1000);
  }
};

// Final misery calculations
const misery = function () {
  let birth_year = (document.getElementById("birth_year") as HTMLButtonElement)
    .value;

  // Checks which sports drop down(s) are visible
  let laliga_DD = document.querySelector<HTMLElement>("#laliga_team_options")!;
  let epl_DD = document.querySelector<HTMLElement>("#epl_team_options")!;
  let cfl_DD = document.querySelector<HTMLElement>("#cfl_team_options")!;
  let kbo_DD = document.querySelector<HTMLElement>("#kbo_team_options")!;
  let mlb_DD = document.querySelector<HTMLElement>("#mlb_team_options")!;
  let ipl_DD = document.querySelector<HTMLElement>("#ipl_team_options")!;
  let isl_DD = document.querySelector<HTMLElement>("#isl_team_options")!;
  let mls_DD = document.querySelector<HTMLElement>("#mls_team_options")!;
  let nba_DD = document.querySelector<HTMLElement>("#nba_team_options")!;
  let nhl_DD = document.querySelector<HTMLElement>("#nhl_team_options")!;
  let ncaaf_DD = document.querySelector<HTMLElement>("#ncaaf_team_options")!;
  let nfl_DD = document.querySelector<HTMLElement>("#nfl_team_options")!;
  let nwsl_DD = document.querySelector<HTMLElement>("#nwsl_team_options")!;
  let wnba_DD = document.querySelector<HTMLElement>("#wnba_team_options")!;

  // Arrays for total wins, championship wins, etc.
  let grand_total_games = [];
  let grand_total_wins = [];
  let grand_champs_apps = [];
  let grand_champs_wins = [];
  let win_rates_list = [];
  // Names of chosen teams
  let fav_teams = [];

  // CFL
  if (cfl_DD != null) {
    let franchiseID = (
      document.getElementById("cfl_team_options") as HTMLButtonElement
    ).value;
    let CFLTeamName = document!.getElementById(franchiseID)?.textContent;

    fav_teams.push(CFLTeamName);

    // Retrieve data for baseball team
    let { total_games, total_wins, win_rate, ch_wins, ch_apps } = CFLTeamData(
      birth_year,
      franchiseID
    );

    grand_total_games.push(total_games);
    grand_total_wins.push(total_wins);
    grand_champs_apps.push(ch_apps);
    grand_champs_wins.push(ch_wins);
    win_rates_list.push(win_rate);
  }

  // EPL
  if (epl_DD != null) {
    let franchiseID = (
      document.getElementById("epl_team_options") as HTMLButtonElement
    ).value;
    let EPLTeamName = document!.getElementById(franchiseID)?.textContent;

    fav_teams.push(EPLTeamName);

    let { total_games, total_wins, win_rate, ch_wins, ch_apps } = EPLTeamData(
      birth_year,
      franchiseID
    );

    grand_total_games.push(total_games);
    grand_total_wins.push(total_wins);
    grand_champs_apps.push(ch_apps);
    grand_champs_wins.push(ch_wins);
    win_rates_list.push(win_rate);
  }

  // KBO
  if (kbo_DD != null) {
    let franchiseID = (
      document.getElementById("kbo_team_options") as HTMLButtonElement
    ).value;
    let KBOTeamName = document!.getElementById(franchiseID)?.textContent;

    fav_teams.push(KBOTeamName);

    // Retrieve data for baseball team
    let { total_games, total_wins, win_rate, ch_wins, ch_apps } = KBOTeamData(
      birth_year,
      franchiseID
    );

    grand_total_games.push(total_games);
    grand_total_wins.push(total_wins);
    grand_champs_apps.push(ch_apps);
    grand_champs_wins.push(ch_wins);
    win_rates_list.push(win_rate);
  }

  // La Liga
  if (laliga_DD != null) {
    let franchiseID = (
      document.getElementById("laliga_team_options") as HTMLButtonElement
    ).value;
    let LALIGATeamName = document!.getElementById(franchiseID)?.textContent;

    fav_teams.push(LALIGATeamName);

    let { total_games, total_wins, win_rate, ch_wins, ch_apps } =
      LALIGATeamData(birth_year, franchiseID);

    grand_total_games.push(total_games);
    grand_total_wins.push(total_wins);
    grand_champs_apps.push(ch_apps);
    grand_champs_wins.push(ch_wins);
    win_rates_list.push(win_rate);
  }

  // MLB
  if (mlb_DD != null) {
    let franchiseID = (
      document.getElementById("mlb_team_options") as HTMLButtonElement
    ).value;
    let MLBTeamName = document!.getElementById(franchiseID)?.textContent;

    fav_teams.push(MLBTeamName);

    let { total_games, total_wins, win_rate, ch_wins, ch_apps } = MLBTeamData(
      birth_year,
      franchiseID
    );

    grand_total_games.push(total_games);
    grand_total_wins.push(total_wins);
    grand_champs_apps.push(ch_apps);
    grand_champs_wins.push(ch_wins);
    win_rates_list.push(win_rate);
  }

  // IPL
  if (ipl_DD != null) {
    let franchiseID = (
      document.getElementById("ipl_team_options") as HTMLButtonElement
    ).value;
    let IPLTeamName = document!.getElementById(franchiseID)?.textContent;
    let { total_games, total_wins, win_rate, ch_wins, ch_apps } = IPLTeamData(
      birth_year,
      franchiseID
    );

    fav_teams.push(IPLTeamName);

    grand_total_games.push(total_games);
    grand_total_wins.push(total_wins);
    grand_champs_apps.push(ch_apps);
    grand_champs_wins.push(ch_wins);
    win_rates_list.push(win_rate);
  }

  // ISL
  if (isl_DD != null) {
    let franchiseID = (
      document.getElementById("isl_team_options") as HTMLButtonElement
    ).value;
    let ISLTeamName = document!.getElementById(franchiseID)?.textContent;
    let { total_games, total_wins, win_rate, ch_wins, ch_apps } = ISLTeamData(
      birth_year,
      franchiseID
    );

    fav_teams.push(ISLTeamName);

    grand_total_games.push(total_games);
    grand_total_wins.push(total_wins);
    grand_champs_apps.push(ch_apps);
    grand_champs_wins.push(ch_wins);
    win_rates_list.push(win_rate);
  }

  // MLS
  if (mls_DD != null) {
    let franchiseID = (
      document.getElementById("mls_team_options") as HTMLButtonElement
    ).value;
    let MLSTeamName = document!.getElementById(franchiseID)?.textContent;
    let { total_games, total_wins, win_rate, ch_wins, ch_apps } = MLSTeamData(
      birth_year,
      franchiseID
    );

    fav_teams.push(MLSTeamName);

    grand_total_games.push(total_games);
    grand_total_wins.push(total_wins);
    grand_champs_apps.push(ch_apps);
    grand_champs_wins.push(ch_wins);
    win_rates_list.push(win_rate);
  }

  // NBA
  if (nba_DD != null) {
    let franchiseID = (
      document.getElementById("nba_team_options") as HTMLButtonElement
    ).value;
    let NBATeamName = document!.getElementById(franchiseID)?.textContent;
    let { total_games, total_wins, win_rate, ch_wins, ch_apps } = NBATeamData(
      birth_year,
      franchiseID
    );

    fav_teams.push(NBATeamName);

    grand_total_games.push(total_games);
    grand_total_wins.push(total_wins);
    grand_champs_apps.push(ch_apps);
    grand_champs_wins.push(ch_wins);
    win_rates_list.push(win_rate);
  }

  // NFL
  if (ncaaf_DD != null) {
    let franchiseID = (
      document.getElementById("ncaaf_team_options") as HTMLButtonElement
    ).value;
    let NCAAFTeamName = document!.getElementById(franchiseID)?.textContent;
    let { total_games, total_wins, win_rate, ch_wins, ch_apps } = NCAAFTeamData(
      birth_year,
      franchiseID
    );

    fav_teams.push(NCAAFTeamName);

    grand_total_games.push(total_games);
    grand_total_wins.push(total_wins);
    grand_champs_apps.push(ch_apps);
    grand_champs_wins.push(ch_wins);
    win_rates_list.push(win_rate);
  }

  // NFL
  if (nfl_DD != null) {
    let franchiseID = (
      document.getElementById("nfl_team_options") as HTMLButtonElement
    ).value;
    let NFLTeamName = document!.getElementById(franchiseID)?.textContent;
    let { total_games, total_wins, win_rate, ch_wins, ch_apps } = NFLTeamData(
      birth_year,
      franchiseID
    );

    fav_teams.push(NFLTeamName);

    grand_total_games.push(total_games);
    grand_total_wins.push(total_wins);
    grand_champs_apps.push(ch_apps);
    grand_champs_wins.push(ch_wins);
    win_rates_list.push(win_rate);
  }

  // NHL
  if (nhl_DD != null) {
    let franchiseID = (
      document.getElementById("nhl_team_options") as HTMLButtonElement
    ).value;
    let NHLTeamName = document!.getElementById(franchiseID)?.textContent;
    let { total_games, total_wins, win_rate, ch_wins, ch_apps } = NHLTeamData(
      birth_year,
      franchiseID
    );

    fav_teams.push(NHLTeamName);

    grand_total_games.push(total_games);
    grand_total_wins.push(total_wins);
    grand_champs_apps.push(ch_apps);
    grand_champs_wins.push(ch_wins);
    win_rates_list.push(win_rate);
  }

  // NWSL
  if (nwsl_DD != null) {
    let franchiseID = (
      document.getElementById("nwsl_team_options") as HTMLButtonElement
    ).value;
    let NWSLTeamName = document!.getElementById(franchiseID)?.textContent;
    let { total_games, total_wins, win_rate, ch_wins, ch_apps } = NWSLTeamData(
      birth_year,
      franchiseID
    );

    fav_teams.push(NWSLTeamName);

    grand_total_games.push(total_games);
    grand_total_wins.push(total_wins);
    grand_champs_apps.push(ch_apps);
    grand_champs_wins.push(ch_wins);
    win_rates_list.push(win_rate);
  }

  // WNBA
  if (wnba_DD != null) {
    let franchiseID = (
      document.getElementById("wnba_team_options") as HTMLButtonElement
    ).value;
    let WNBATeamName = document!.getElementById(franchiseID)?.textContent;
    let { total_games, total_wins, win_rate, ch_wins, ch_apps } = WNBATeamData(
      birth_year,
      franchiseID
    );

    fav_teams.push(WNBATeamName);

    grand_total_games.push(total_games);
    grand_total_wins.push(total_wins);
    grand_champs_apps.push(ch_apps);
    grand_champs_wins.push(ch_wins);
    win_rates_list.push(win_rate);
  }

  // Adds up all the wins and championships
  let total_games = 0;
  for (let i = 0; i < grand_total_games.length; i++) {
    total_games += grand_total_games[i];
  }

  let total_wins = 0;
  for (let i = 0; i < grand_total_wins.length; i++) {
    total_wins += grand_total_wins[i];
  }

  let total_champs_apps = 0;
  for (let i = 0; i < grand_champs_apps.length; i++) {
    total_champs_apps += grand_champs_apps[i];
  }

  let total_champs_wins = 0;
  for (let i = 0; i < grand_champs_wins.length; i++) {
    total_champs_wins += grand_champs_wins[i];
  }

  let win_rate = (total_wins / total_games) * 100;

  // Get championship wins per year and potential for rest of life
  let user_age = currentYear - Number(birth_year);
  let years_per_champ = (2021 - Number(birth_year)) / total_champs_wins;
  let years_left_75 = 75 - (2021 - Number(birth_year));
  let champs_left_75 = years_left_75 / years_per_champ;
  let years_left_85 = 85 - (2021 - Number(birth_year));
  let champs_left_85 = years_left_85 / years_per_champ;
  let years_left_100 = 100 - (2021 - Number(birth_year));
  let champs_left_100 = years_left_100 / years_per_champ;

  let misery_level = misery_calculation(
    user_age,
    total_champs_wins,
    years_per_champ,
    fav_teams
  );

  if (total_champs_wins == 0) {
    var years_line =
      "<p>Ouch... normally this line tells you how long you have waited on average for each championship win... but you've seen one...</p>";
    var lifetime_line =
      "<p>And this line normally tells you how many more championships to expect in your lifetime, but at the moment for you... it's looking like <b>0</b>...</p>";
  } else {
    var years_line =
      "<p>That's an average of <b>" +
      roundNumber(years_per_champ) +
      " years per every championship/cup/finals win.</b></p>";

    var lifetime_line =
      "<p>At this rate if you live to be 75 you will see <b>~" +
      roundNumber(champs_left_75) +
      "</b> more championship victories." +
      " If you live to be 85 you will see <b>~" +
      roundNumber(champs_left_85) +
      "</b>. If you live to be 100 you will see <b>~" +
      roundNumber(champs_left_100) +
      "</b>.</p>";
  }

  // Writes results/misery
  misery_result.innerHTML =
    "<p>Since you were born in " +
    birth_year +
    "...</p>" +
    "<p>Your team(s), have won a total of <b>" +
    total_wins.toLocaleString("en-US") +
    " (" +
    roundNumber(win_rate) +
    "%)</b>" +
    " games out of <b>" +
    total_games.toLocaleString("en-US") +
    " games played.</b></p>" +
    "<p>During this time they been the runner-up <b>" +
    total_champs_apps +
    "</b> time(s) and have won <b>" +
    total_champs_wins +
    " championships.</b></p>." +
    years_line +
    lifetime_line +
    "<div id='misery_level'>" +
    misery_level +
    "</div>";
  // Checks values and displays the result
  check_values(birth_year, fav_teams);
};

// Page refresh
const pg_reload = function () {
  document.location.reload();
};

// Btn listeners
let sports_input_btn = document.getElementById("sports_input");
let submit_btn = document.getElementById("submit_btn");
back_link?.addEventListener("click", pg_reload);
submit_btn?.addEventListener("click", misery);
sports_input_btn?.addEventListener("click", sports_check);

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
