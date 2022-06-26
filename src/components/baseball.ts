// Data
import kbo_data from "../data/json/kbo_data.json";
import mlb_data from "../data/json/mlb_data.json";
import { TeamData } from "./all_sports";

// Drop-downs
export const kbo_dropdown = `<select
name="kbo_options"
class="drop_down"
id="kbo_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your KBO Team</option>
  <option class="team_selection" id="OBB" value="OBB">Doosan Bears</option>
  <option class="team_selection" id="BGE" value="BGE">Hanwha Eagles</option>
  <option class="team_selection" id="HAI" value="HAI">Kia Tigers</option>
  <option class="team_selection" id="WOH" value="WOH">Kiwoom Heroes</option>
  <option class="team_selection" id="KTW" value="KTW">KT Wiz</option>
  <option class="team_selection" id="MBC" value="MBC">LG Twins</option>
  <option class="team_selection" id="LOG" value="LOG">Lotte Giants</option>
  <option class="team_selection" id="NCD" value="NCD">NC Dinos</option>
  <option class="team_selection" id="SAM" value="SAM">Samsung Lions</option>
  <option class="team_selection" id="SKW" value="SKW">SSG Langers</option>
  </select>`;

export const mlb_dropdown = `<select
name="mlb_options"
class="drop_down"
id="mlb_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your MLB Team</option>
  <option class="team_selection" id="ARI" value="ARI">Arizona Diamondbacks</option>
  <option class="team_selection" id="ATL" value="ATL">Atlanta Braves</option>
  <option class="team_selection" id="BAL" value="BAL">Baltimore Orioles</option>
  <option class="team_selection" id="BOS" value="BOS">Boston Red Socks</option>
  <option class="team_selection" id="CHC" value="CHC">Chicago Cubs</option>
  <option class="team_selection" id="CHW" value="CHW">Chicago White Socks</option>
  <option class="team_selection" id="CIN" value="CIN">Cincinnati Reds</option>
  <option class="team_selection" id="CLE" value="CLE">Cleveland Guardians</option>
  <option class="team_selection" id="COL" value="COL">Colorado Rockies</option>
  <option class="team_selection" id="DET" value="DET">Detroit Tigers</option>
  <option class="team_selection" id="HOU" value="HOU">Houston Astros</option>
  <option class="team_selection" id="KCR" value="KCR">Kansas City Royals</option>
  <option class="team_selection" id="ANA" value="ANA">Los Angeles Angles</option>
  <option class="team_selection" id="LAD" value="LAD">Los Angeles Dodgers</option>
  <option class="team_selection" id="FLA" value="FLA">Miami Marlins</option>
  <option class="team_selection" id="MIL" value="MIL">Milwaukee Brewers</option>
  <option class="team_selection" id="MIN" value="MIN">Minnesota Twins</option>
  <option class="team_selection" id="NYM" value="NYM">New York Mets</option>
  <option class="team_selection" id="NYY" value="NYY">New York Yankees</option>
  <option class="team_selection" id="OAK" value="OAK">Oakland Athletics</option>
  <option class="team_selection" id="PHI" value="PHI">Philadelphia Phillies</option>
  <option class="team_selection" id="PIT" value="PIT">Pittsburgh Pirates</option>
  <option class="team_selection" id="SDP" value="SDP">San Diego Padres</option>
  <option class="team_selection" id="SEA" value="SEA">Seattle Mariners</option>
  <option class="team_selection" id="SFG" value="SFG">San Francisco Giants</option>
  <option class="team_selection" id="STL" value="STL">St. Louis Cardinals</option>
  <option class="team_selection" id="TBD" value="TBD">Tampa Bay Rays</option>
  <option class="team_selection" id="TEX" value="TEX">Texas Rangers</option>
  <option class="team_selection" id="TOR" value="TOR">Toronto Blue Jays</option>
  <option class="team_selection" id="WSN" value="WSN">Washington Nationals</option>
</select>`;

// Team Data Funcs
export const KBOTeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, total_draws, total_losses, ch_wins, ch_apps } =
    TeamData(
      "baseball",
      "MLB",
      birth_year,
      franchiseID,
      kbo_data,
      "ch_win",
      "Y",
      "ch_app",
      "Y"
    );
  return {
    total_games,
    total_wins,
    total_draws,
    total_losses,
    ch_wins,
    ch_apps,
  };
};

export const MLBTeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, total_draws, total_losses, ch_wins, ch_apps } =
    TeamData(
      "baseball",
      "MLB",
      birth_year,
      franchiseID,
      mlb_data,
      "WSWin",
      "Y",
      "LgWin",
      "Y"
    );
  return {
    total_games,
    total_wins,
    total_draws,
    total_losses,
    ch_wins,
    ch_apps,
  };
};
