// Data
import nba_data from "../data/json/nba_data.json";
import wnba_data from "../data/json/wnba_data.json";
import { TeamData } from "./all_sports";

// Drop-downs
export const nba_dropdown = `<select
name="nba_options"
class="drop_down"
id="nba_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your NBA Team</option>
  <option class="team_selection" id="ATL" value="ATL">Atlanta Hawks</option>
  <option class="team_selection" id="BOS" value="BOS">Boston Celtics</option>
  <option class="team_selection" id="NJN" value="NJN">Brooklyn Nets</option>
  <option class="team_selection" id="CHA" value="CHA">Charlotte Hornets</option>
  <option class="team_selection" id="CHI" value="CHI">Chicago Bulls</option>
  <option class="team_selection" id="CLE" value="CLE">Cleveland Cavaliers</option>
  <option class="team_selection" id="DALM" value="DALM">Dallas Mavericks</option>
  <option class="team_selection" id="DEN" value="DEN">Denver Nuggets</option>
  <option class="team_selection" id="DET" value="DET">Detroit Pistons</option>
  <option class="team_selection" id="WAR" value="WAR">Golden State Warriors</option>
  <option class="team_selection" id="HOU" value="HOU">Houston Rockets</option>
  <option class="team_selection" id="IND" value="IND">Indiana Pacers</option>
  <option class="team_selection" id="LAC" value="LAC">Los Angeles Clippers</option>
  <option class="team_selection" id="MINL" value="MINL">Los Angeles Lakers</option>
  <option class="team_selection" id="MEM" value="MEM">Memphis Grizzlies</option>
  <option class="team_selection" id="MIA" value="MIA">Miami Heat</option>
  <option class="team_selection" id="MIL" value="MIL">Milwaukee Bucks</option>
  <option class="team_selection" id="MIN" value="MIN">Minnesota Timberwolves</option>
  <option class="team_selection" id="NOR" value="NOR">New Orleans Pelicans</option>
  <option class="team_selection" id="NYK" value="NYK">New York Knicks</option>
  <option class="team_selection" id="OKC" value="OKC">Oklahoma City Thunder</option>
  <option class="team_selection" id="ORL" value="ORL">Orlando Magic</option>
  <option class="team_selection" id="PHI" value="PHI">Philadelphia 76ers</option>
  <option class="team_selection" id="PHE" value="PHE">Phoenix Suns</option>
  <option class="team_selection" id="POR" value="POR">Portland Trail Blazers</option>
  <option class="team_selection" id="SAC" value="SAC">Sacramento Kings</option>
  <option class="team_selection" id="SAP" value="SAP">San Antonio Spurs</option>
  <option class="team_selection" id="TOR" value="TOR">Toronto Raptors</option>
  <option class="team_selection" id="NOJ" value="NOJ">Utah Jazz</option>
  <option class="team_selection" id="CHIP" value="CHIP">Washington Wizards</option>
</select>`;

export const wnba_dropdown = `<select
name="wnba_options"
class="drop_down"
id="wnba_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your WNBA Team</option>
  <option class="team_selection" id="ATL" value="ATL">Atlanta Dream</option>
  <option class="team_selection" id="CHI" value="CHI">Chicago Sky</option>
  <option class="team_selection" id="CON" value="CON">Connecticut Sun</option>
  <option class="team_selection" id="DAL" value="DAL">Dallas Wings</option>
  <option class="team_selection" id="IND" value="IND">Indiana Fever</option>
  <option class="team_selection" id="LAS" value="LAS">Los Angeles Sparks</option>
  <option class="team_selection" id="MIN" value="MIN">Minnesota Lynx</option>
  <option class="team_selection" id="NYL" value="NYL">New York Liberty</option>
  <option class="team_selection" id="PHE" value="PHE">Phoenix Mercury</option>
  <option class="team_selection" id="LVA" value="LVA">Las Vegas Aces</option>
  <option class="team_selection" id="SEA" value="SEA">Seattle Storm</option>
  <option class="team_selection" id="WAS" value="WAS">Washington Mystics</option>
</select>`;

// Team Data Funcs
export const NBATeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, win_rate, ch_wins, ch_apps } = TeamData(
    "NBA",
    birth_year,
    franchiseID,
    nba_data,
    "Finals_W",
    "Y",
    "Finals_RU",
    "Y"
  );
  return { total_games, total_wins, win_rate, ch_wins, ch_apps };
};

export const WNBATeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, win_rate, ch_wins, ch_apps } = TeamData(
    "WNBA",
    birth_year,
    franchiseID,
    wnba_data,
    "ch_win",
    "Y",
    "ch_ru",
    "Y"
  );
  return { total_games, total_wins, win_rate, ch_wins, ch_apps };
};
