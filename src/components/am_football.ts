// Data
import cfl_data from "../data/json/cfl_data.json";
import nfl_data from "../data/json/nfl_data.json";
import { TeamData } from "./all_sports";

// Drop-downs
export const cfl_dropdown = `<select
name="cfl_options"
class="drop_down"
id="cfl_team_options"
autocomplete="off">
<option class="team_selection" id="default" value="default" selected="selected">Choose your CFL Team</option>
<option class="team_selection" id="BCL" value="BCL">BC Lions</option>
<option class="team_selection" id="CAL" value="CAL">Calgary Stampeders</option>
<option class="team_selection" id="EDM" value="EDM">Edmonton Elks</option>
<option class="team_selection" id="HAM" value="HAM">Hamilton Tiger-Cats</option>
<option class="team_selection" id="MON" value="MON">Montreal Alouettes</option>
<option class="team_selection" id="OTT" value="OTT">Ottawa Redblacks</option>
<option class="team_selection" id="SAK" value="SAK">Saskatchewan Roughriders</option>
<option class="team_selection" id="TOR" value="TOR">Toronto Argonauts</option>
<option class="team_selection" id="WIN" value="WIN">Winnipeg Blue Bombers</option>

</select>`;

export const nfl_dropdown = `<select
  name="nfl_options"
  class="drop_down"
  id="nfl_team_options"
  autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your NFL Team</option>
  <option class="team_selection" id="ARZ" value="ARZ">Arizona Cardinals</option>
  <option class="team_selection" id="ATL" value="ATL">Atlanta Falcons</option>
  <option class="team_selection" id="BAL" value="BAL">Baltimore Ravens</option>
  <option class="team_selection" id="BUF" value="BUF">Buffalo Bills</option>
  <option class="team_selection" id="CAR" value="CAR">Carolina Panthers</option>
  <option class="team_selection" id="CHI" value="CHI">Chicago Bears</option>
  <option class="team_selection" id="CIN" value="CIN">Cincinnati Bengals</option>
  <option class="team_selection" id="CLE" value="CLE">Cleveland Browns</option>
  <option class="team_selection" id="DAL" value="DAL">Dallas Cowboys</option>
  <option class="team_selection" id="DEN" value="DEN">Denver Broncos</option>
  <option class="team_selection" id="DET" value="DET">Detroit Lions</option>
  <option class="team_selection" id="GBP" value="GBP">Green Bay Packers</option>
  <option class="team_selection" id="HOU" value="HOU">Houston Texans</option>
  <option class="team_selection" id="IND" value="IND">Indianapolis Colts</option>
  <option class="team_selection" id="JAX" value="JAX">Jacksonville Jaguars</option>
  <option class="team_selection" id="KCC" value="KCC">Kansas City Chiefs</option>
  <option class="team_selection" id="LVR" value="LVR">Los Vegas Raiders</option>
  <option class="team_selection" id="LAC" value="LAC">Los Angeles Chargers</option>
  <option class="team_selection" id="LAR" value="LAR">Los Angeles Rams</option>
  <option class="team_selection" id="MIA" value="MIA">Miami Dolphins</option>
  <option class="team_selection" id="MIN" value="MIN">Minnesota Vikings</option>
  <option class="team_selection" id="NEP" value="NEP">New England Patriots</option>
  <option class="team_selection" id="NOS" value="NOS">New Orleans Saints</option>
  <option class="team_selection" id="NYG" value="NYG">New York Giants</option>
  <option class="team_selection" id="NYJ" value="NYJ">New York Jets</option>
  <option class="team_selection" id="PHI" value="PHI">Philadelphia Eagles</option>
  <option class="team_selection" id="PIT" value="PIT">Pittsburgh Steelers</option>
  <option class="team_selection" id="SFC" value="SFC">San Francisco 49ners</option>
  <option class="team_selection" id="SEA" value="SEA">Seattle Seahawks</option>
  <option class="team_selection" id="TBB" value="TBB">Tampa Bay Buccaneers</option>
  <option class="team_selection" id="TEN" value="TEN">Tennessee Titans</option>
  <option class="team_selection" id="WAS" value="WAS">Washington Commanders</option>
  </select>`;

// Team Data Funcs
export const CFLTeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, win_rate, ch_wins, ch_apps } = TeamData(
    "CFL",
    birth_year,
    franchiseID,
    cfl_data,
    "CH",
    "Won Grey Cup",
    "CH",
    "Lost Grey Cup"
  );
  return { total_games, total_wins, win_rate, ch_wins, ch_apps };
};

export const NFLTeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, win_rate, ch_wins, ch_apps } = TeamData(
    "NFL",
    birth_year,
    franchiseID,
    nfl_data,
    "ch_sb_win",
    "Y",
    "ch_sb_app",
    "Y"
  );
  return { total_games, total_wins, win_rate, ch_wins, ch_apps };
};
