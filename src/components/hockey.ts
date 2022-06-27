// Data
import nhl_data from "../data/json/nhl_data.json";
import { TeamData } from "./all_sports";

// Drop-downs
export const nhl_dropdown = `<select
name="nhl_options"
class="drop_down"
id="nhl_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your NHL Team</option>
  <option class="team_selection" id="ANA" value="ANA">Anaheim Ducks</option>
  <option class="team_selection" id="PHO" value="PHO">Arizona Coyotes</option>
  <option class="team_selection" id="BOS" value="BOS">Boston Bruins</option>
  <option class="team_selection" id="BUF" value="BUF">Buffalo Sabres</option>
  <option class="team_selection" id="CAL" value="CAL">Calgary Flames</option>
  <option class="team_selection" id="CAR" value="CAR">Carolina Hurricanes</option>
  <option class="team_selection" id="CHI" value="CHI">Chicago Blackhawks</option>
  <option class="team_selection" id="COL" value="COL">Colorado Avalanche</option>
  <option class="team_selection" id="CBS" value="CBS">Columbus Blue Jackets</option>
  <option class="team_selection" id="DAL" value="DAL">Dallas Stars</option>
  <option class="team_selection" id="DET" value="DET">Detroit Redwings</option>
  <option class="team_selection" id="EDM" value="EDM">Edmonton Oilers</option>
  <option class="team_selection" id="FLO" value="FLO">Florida Panthers</option>
  <option class="team_selection" id="LAK" value="LAK">Los Angeles Kings</option>
  <option class="team_selection" id="MIN" value="MIN">Minnesota Wild</option>
  <option class="team_selection" id="MTL" value="MTL">Montreal Canadiens</option>
  <option class="team_selection" id="NAS" value="NAS">Nashville Predators</option>
  <option class="team_selection" id="NJD" value="NJD">New Jersey Devils</option>
  <option class="team_selection" id="NYI" value="NYI">New York Islanders</option>
  <option class="team_selection" id="NYR" value="NYR">New York Rangers</option>
  <option class="team_selection" id="OTT" value="OTT">Ottawa Senators</option>
  <option class="team_selection" id="PHI" value="PHI">Philadelphia Flyers</option>
  <option class="team_selection" id="PIT" value="PIT">Pittsburgh Penguins</option>
  <option class="team_selection" id="SJS" value="SJS">San Jose Sharks</option>
  <option class="team_selection" id="SEA" value="SEA">Seattle Kraken</option>
  <option class="team_selection" id="STL" value="STL">St. Louis Blues</option>
  <option class="team_selection" id="TBL" value="TBL">Tampa Bay Lightning</option>
  <option class="team_selection" id="TOR" value="TOR">Toronto Maple Leafs</option>
  <option class="team_selection" id="VAN" value="VAN">Vancouver Canucks</option>
  <option class="team_selection" id="VGK" value="VGK">Vegas Golden Knights</option>
  <option class="team_selection" id="WAS" value="WAS">Washington Capitals</option>
  <option class="team_selection" id="WPG" value="WPG">Winnipeg Jets</option>
</select>`;

// Team Data Funcs
export const NHLTeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, total_draws, total_losses, ch_wins, ch_apps } =
    TeamData(
      "hockey",
      "NHL",
      birth_year,
      franchiseID,
      nhl_data,
      "playoff",
      "SC",
      "playoff",
      "F"
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
