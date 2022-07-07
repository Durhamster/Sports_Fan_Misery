// imgs
import bbl_url from "./img/bbl.png";
import bungesliga_url from "./img/bundesliga.png";
import cfl_url from "./img/cfl.png";
import epl_url from "./img/epl.png";
import ipl_url from "./img/ipl.png";
import isl_url from "./img/isl.png";
import kbo_url from "./img/kbo.png";
import laliga_url from "./img/laliga.png";
import ligue1_url from "./img/ligue1.png";
import mlb_url from "./img/mlb.png";
import mls_url from "./img/mls.png";
import nba_url from "./img/nba.png";
import nhl_url from "./img/nhl.png";
import nfl_url from "./img/nfl.png";
import nwsl_url from "./img/nwsl.png";
import serie_a_url from "./img/serie_a.png";
import wnba_url from "./img/wnba.png";
// styles
import "./styles/misery.scss";
import "./styles/team_colors.scss";
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
  nfl_dropdown,
  NFLTeamData,
} from "./components/am_football";
import {
  nba_dropdown,
  NBATeamData,
  wnba_dropdown,
  WNBATeamData,
} from "./components/basketball";
import {
  bbl_dropdown,
  BBLTeamData,
  ipl_dropdown,
  IPLTeamData,
} from "./components/cricket";
import {
  BUNDESLIGATeamData,
  bundesliga_dropdown,
  LALIGATeamData,
  laliga_dropdown,
  LIGUE1TeamData,
  ligue1_dropdown,
  isl_dropdown,
  ISLTeamData,
  mls_dropdown,
  MLSTeamData,
  nwsl_dropdown,
  NWSLTeamData,
  epl_dropdown,
  EPLTeamData,
  SERIEATeamData,
  serie_a_dropdown,
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
  <li>
    <input class="sports_checkbox" type="checkbox" name="sports_check" id="bbl" value="bbl"/>
    <label id="bbl_label" for="bbl"><img id="bbl_logo" /></label>
  </li>
  <li>
    <input class="sports_checkbox" type="checkbox" name="sports_check" id="bundesliga" value="bundesliga"/>
    <label id="bundesliga_label" for="bundesliga"><img id="bundesliga_logo" /></label>
  </li>
  <li>
    <input class="sports_checkbox" type="checkbox" name="sports_check" id="cfl" value="cfl"/>
    <label id="cfl_label" for="cfl"><img id="cfl_logo" /></label>
  </li>
  <li>
    <input class="sports_checkbox" type="checkbox" name="sports_check" id="epl" value="epl"/>
    <label id="epl_label" for="epl"><img id="epl_logo" /></label>
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
    <input class="sports_checkbox" type="checkbox" name="sports_check" id="kbo" value="kbo"/>
    <label id="kbo_label" for="kbo"><img id="kbo_logo" /></label>
  </li>
  <li>
    <input class="sports_checkbox" type="checkbox" name="sports_check" id="laliga" value="laliga"/>
    <label id="laliga_label" for="laliga"><img id="laliga_logo" /></label>
  </li>
  <li>
    <input class="sports_checkbox" type="checkbox" name="sports_check" id="ligue1" value="ligue1"/>
    <label id="ligue1_label" for="ligue1"><img id="ligue1_logo" /></label>
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
    <input class="sports_checkbox" type="checkbox" name="sports_check" id="serie_a" value="serie_a"/>
    <label id="serie_a_label" for="serie_a"><img id="serie_a_logo" /></label>
  </li>
  <li>
    <input class="sports_checkbox" type="checkbox" name="sports_check" id="wnba" value="wnba"/>
    <label id="wnba_label" for="wnba"><img id="wnba_logo" /></label>
  </li>
  <p>` +
  sports_input +
  `</p>
  <p id="sports_selection_error"></p>
    </div>
    `;

misery_calc.innerHTML =
  `
    <p>
    Enter the year you were born:
    <input
    name="birth_year"
    maxlength="4"
    id="birth_year"
    />
    </p><p><button id="submit_btn">Find out how miserable you are!</button></p>` +
  result_sentences +
  `</p>
`;

footer.innerHTML = footer_content;
// END HTML SECTION

// League Icons
document.getElementById("bbl_logo")!.setAttribute("src", bbl_url);
document.getElementById("bundesliga_logo")!.setAttribute("src", bungesliga_url);
document.getElementById("cfl_logo")!.setAttribute("src", cfl_url);
document.getElementById("epl_logo")!.setAttribute("src", epl_url);
document.getElementById("ipl_logo")!.setAttribute("src", ipl_url);
document.getElementById("isl_logo")!.setAttribute("src", isl_url);
document.getElementById("kbo_logo")!.setAttribute("src", kbo_url);
document.getElementById("laliga_logo")!.setAttribute("src", laliga_url);
document.getElementById("ligue1_logo")!.setAttribute("src", ligue1_url);
document.getElementById("mlb_logo")!.setAttribute("src", mlb_url);
document.getElementById("mls_logo")!.setAttribute("src", mls_url);
document.getElementById("nba_logo")!.setAttribute("src", nba_url);
document.getElementById("nfl_logo")!.setAttribute("src", nfl_url);
document.getElementById("nhl_logo")!.setAttribute("src", nhl_url);
document.getElementById("nwsl_logo")!.setAttribute("src", nwsl_url);
document.getElementById("serie_a_logo")!.setAttribute("src", serie_a_url);
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

      let misery_div_items = `<p>Select your team(s)</p>`;

      if (checked_sports.includes("bbl")) {
        misery_div_items = misery_div_items + bbl_dropdown;
      }
      if (checked_sports.includes("bundesliga")) {
        misery_div_items = misery_div_items + bundesliga_dropdown;
      }
      if (checked_sports.includes("cfl")) {
        misery_div_items = misery_div_items + cfl_dropdown;
      }
      if (checked_sports.includes("epl")) {
        misery_div_items = misery_div_items + epl_dropdown;
      }
      if (checked_sports.includes("kbo")) {
        misery_div_items = misery_div_items + kbo_dropdown;
      }
      if (checked_sports.includes("isl")) {
        misery_div_items = misery_div_items + isl_dropdown;
      }
      if (checked_sports.includes("ipl")) {
        misery_div_items = misery_div_items + ipl_dropdown;
      }
      if (checked_sports.includes("laliga")) {
        misery_div_items = misery_div_items + laliga_dropdown;
      }
      if (checked_sports.includes("ligue1")) {
        misery_div_items = misery_div_items + ligue1_dropdown;
      }
      if (checked_sports.includes("mlb")) {
        misery_div_items = misery_div_items + mlb_dropdown;
      }
      if (checked_sports.includes("nba")) {
        misery_div_items = misery_div_items + nba_dropdown;
      }
      if (checked_sports.includes("mls")) {
        misery_div_items = misery_div_items + mls_dropdown;
      }
      if (checked_sports.includes("nhl")) {
        misery_div_items = misery_div_items + nhl_dropdown;
      }
      if (checked_sports.includes("nfl")) {
        misery_div_items = misery_div_items + nfl_dropdown;
      }
      if (checked_sports.includes("nwsl")) {
        misery_div_items = misery_div_items + nwsl_dropdown;
      }
      if (checked_sports.includes("serie_a")) {
        misery_div_items = misery_div_items + serie_a_dropdown;
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
  let bbl_DD = document.querySelector<HTMLElement>("#bbl_team_options")!;
  let bundesliga_DD = document.querySelector<HTMLElement>(
    "#bundesliga_team_options"
  )!;
  let cfl_DD = document.querySelector<HTMLElement>("#cfl_team_options")!;
  let epl_DD = document.querySelector<HTMLElement>("#epl_team_options")!;
  let ipl_DD = document.querySelector<HTMLElement>("#ipl_team_options")!;
  let isl_DD = document.querySelector<HTMLElement>("#isl_team_options")!;
  let laliga_DD = document.querySelector<HTMLElement>("#laliga_team_options")!;
  let ligue1_DD = document.querySelector<HTMLElement>("#ligue1_team_options")!;
  let kbo_DD = document.querySelector<HTMLElement>("#kbo_team_options")!;
  let mlb_DD = document.querySelector<HTMLElement>("#mlb_team_options")!;
  let mls_DD = document.querySelector<HTMLElement>("#mls_team_options")!;
  let nba_DD = document.querySelector<HTMLElement>("#nba_team_options")!;
  let nhl_DD = document.querySelector<HTMLElement>("#nhl_team_options")!;
  let nfl_DD = document.querySelector<HTMLElement>("#nfl_team_options")!;
  let nwsl_DD = document.querySelector<HTMLElement>("#nwsl_team_options")!;
  let serie_a_DD = document.querySelector<HTMLElement>(
    "#serie_a_team_options"
  )!;
  let wnba_DD = document.querySelector<HTMLElement>("#wnba_team_options")!;

  // Arrays for total wins, championship wins, etc.
  let selected_leagues: any = [];
  let grand_total_games: any = [];
  let grand_total_wins: any = [];
  let grand_total_draws: any = [];
  let grand_champs_apps: any = [];
  let grand_champs_wins: any = [];
  let grand_total_losses: any = [];
  // Names of chosen teams
  let fav_teams: any = [];

  // Gets the drop downs and league data
  const get_team_selections = function (
    team_options: string,
    team_data: any,
    league: string
  ) {
    let franchiseID = (
      document.getElementById(team_options) as HTMLButtonElement
    ).value;

    if (
      league == "CFL" ||
      league == "IPL" ||
      league == "ISL" ||
      league == "KBO" ||
      league == "MLB" ||
      league == "MLS" ||
      league == "NBA" ||
      league == "NFL" ||
      league == "NWSL" ||
      league == "NHL" ||
      league == "WNBA"
    ) {
      let TeamName = document!.getElementById(franchiseID)?.textContent;
      fav_teams.push(TeamName);
    } else fav_teams.push(franchiseID);

    let {
      total_games,
      total_wins,
      total_draws,
      total_losses,
      ch_wins,
      ch_apps,
    } = team_data(birth_year, franchiseID);

    selected_leagues.push(league);
    grand_total_games.push(total_games);
    grand_total_wins.push(total_wins);
    grand_total_draws.push(total_draws);
    grand_champs_apps.push(ch_apps);
    grand_champs_wins.push(ch_wins);
    grand_total_losses.push(total_losses);
  };
  // BBL
  if (bbl_DD != null) {
    get_team_selections("bbl_team_options", BBLTeamData, "BBL");
  }

  // BUNDESLIGA
  if (bundesliga_DD != null) {
    get_team_selections(
      "bundesliga_team_options",
      BUNDESLIGATeamData,
      "BUNDESLIGA"
    );
  }

  // CFL
  if (cfl_DD != null) {
    get_team_selections("cfl_team_options", CFLTeamData, "CFL");
  }

  // EPL
  if (epl_DD != null) {
    get_team_selections("epl_team_options", EPLTeamData, "EPL");
  }

  // KBO
  if (kbo_DD != null) {
    get_team_selections("kbo_team_options", KBOTeamData, "KBO");
  }

  // La Liga
  if (laliga_DD != null) {
    get_team_selections("laliga_team_options", LALIGATeamData, "LALIGA");
  }

  // Ligue 1
  if (ligue1_DD != null) {
    get_team_selections("ligue1_team_options", LIGUE1TeamData, "LIGUE1");
  }

  // MLB
  if (mlb_DD != null) {
    get_team_selections("mlb_team_options", MLBTeamData, "MLB");
  }

  // IPL
  if (ipl_DD != null) {
    get_team_selections("ipl_team_options", IPLTeamData, "IPL");
  }

  // ISL
  if (isl_DD != null) {
    get_team_selections("isl_team_options", ISLTeamData, "ISL");
  }

  // MLS
  if (mls_DD != null) {
    get_team_selections("mls_team_options", MLSTeamData, "MLS");
  }

  // NBA
  if (nba_DD != null) {
    get_team_selections("nba_team_options", NBATeamData, "NBA");
  }

  // NFL
  if (nfl_DD != null) {
    get_team_selections("nfl_team_options", NFLTeamData, "NFL");
  }

  // NHL
  if (nhl_DD != null) {
    get_team_selections("nhl_team_options", NHLTeamData, "NHL");
  }

  // NWSL
  if (nwsl_DD != null) {
    get_team_selections("nwsl_team_options", NWSLTeamData, "NWSL");
  }

  // Serie A
  if (serie_a_DD != null) {
    get_team_selections("serie_a_team_options", SERIEATeamData, "SERIE_A");
  }

  // WNBA
  if (wnba_DD != null) {
    get_team_selections("bbl_team_options", WNBATeamData, "BBL");
  }

  // Adds up all the wins, draws, and championships
  let total_games = 0;
  for (let i = 0; i < grand_total_games.length; i++) {
    total_games += grand_total_games[i];
  }

  let total_wins = 0;
  for (let i = 0; i < grand_total_wins.length; i++) {
    total_wins += grand_total_wins[i];
  }

  let total_draws = 0;
  for (let i = 0; i < grand_total_draws.length; i++) {
    total_draws += grand_total_draws[i];
  }

  let total_losses = 0;
  for (let i = 0; i < grand_total_losses.length; i++) {
    total_losses += grand_total_losses[i];
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

  let draw_rate = (total_draws / total_games) * 100;

  let loss_rate = (total_losses / total_games) * 100;

  // Get championship wins per year
  let user_age = currentYear - Number(birth_year);
  let years_per_champ = (2021 - Number(birth_year)) / total_champs_wins;

  let misery_level = misery_calculation(
    user_age,
    total_champs_wins,
    years_per_champ,
    fav_teams
  );

  if (total_champs_wins == 0) {
    var years_line =
      "<p>Ouch... normally this line tells you how long you have waited on average for each championship win... but you've never seen one...</p>";
  } else {
    var years_line =
      "<p>That's an average of <b>" +
      roundNumber(years_per_champ) +
      " years per every championship/cup/finals win.</b></p>";
  }

  var asterisk = "";
  var asterisk_note = "";
  // Includes asterisk if certain leagues are selected
  if (
    selected_leagues.includes("BUNDESLIGA") ||
    selected_leagues.includes("EPL") ||
    selected_leagues.includes("LALIGA") ||
    selected_leagues.includes("LIGUE1") ||
    selected_leagues.includes("SERIE_A")
  ) {
    var asterisk = "*";
    var asterisk_note =
      "*At this point in time Bundesliga, EPL, La Liga, Ligue 1, & Serie A data only includes 1996 - 2022." +
      "More seasons will be added soon. Data ONLY includes wins from the top league. Wins from other leagues are currently not counted." +
      " Champions league match data will be added in the future.";
  }

  // Writes results/misery
  misery_result.innerHTML =
    "<p>Since you were born in " +
    birth_year +
    "...</p>" +
    "<p>Out of <b>" +
    total_games.toLocaleString("en-US") +
    " games played</b> your team(s), have won <b>" +
    total_wins.toLocaleString("en-US") +
    " (" +
    roundNumber(win_rate) +
    "%)</b> games" +
    ", tied <b>" +
    total_draws.toLocaleString("en-US") +
    " (" +
    roundNumber(draw_rate) +
    "%)" +
    "</b>, and lost <b>" +
    total_losses.toLocaleString("en-US") +
    " (" +
    roundNumber(loss_rate) +
    "%)" +
    "</b>.</p>" +
    "<p>During this time they been the runner-up <b>" +
    total_champs_apps +
    "</b> time(s) and have won <b>" +
    total_champs_wins +
    " championships.</b>" +
    asterisk +
    "</p>" +
    "<p id='asterisk_note'>" +
    "<i>" +
    asterisk_note +
    "</i>" +
    "</p>" +
    years_line +
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
