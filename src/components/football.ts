// Data
import epl_data from "../data/json/epl_data.json";
import laliga_data from "../data/json/laliga_data.json";
import isl_data from "../data/json/isl_data.json";
import mls_data from "../data/json/mls_data.json";
import nwsl_data from "../data/json/nwsl_data.json";
import { TeamData } from "./all_sports";

// Drop-downs
export const epl_dropdown = `<select
name="epl_options"
class="drop_down"
id="epl_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your Premier League Team</option>
  <option class="team_selection" id="Aston_Villa" value="Aston Villa">Aston Villa</option>
  <option class="team_selection" id="Arsenal" value="Arsenal">Arsenal</option>
  <option class="team_selection" id="Brighton" value="Brighton">Brighton</option>
  <option class="team_selection" id="Burnley" value="Burnley">Burnley</option>
  <option class="team_selection" id="Chelsea" value="Chelsea">Chelsea</option>
  <option class="team_selection" id="Crystal_Palace" value="Crystal Palace">Crystal Palace</option>
  <option class="team_selection" id="Everton" value="Everton">Everton</option>
  <option class="team_selection" id="Fulham" value="Fulham">Fulham</option>
  <option class="team_selection" id="Leeds_United" value="Leeds United">Leeds United</option>
  <option class="team_selection" id="Leicester_City" value="Leicester City">Leicester City</option>
  <option class="team_selection" id="Liverpool" value="Liverpool">Liverpool</option>
  <option class="team_selection" id="Manchester_City" value="Manchester City">Manchester City</option>
  <option class="team_selection" id="Manchester_Utd" value="Manchester Utd">Manchester United</option>
  <option class="team_selection" id="Newcastle_Utd" value="Newcastle Utd">Newcastle United</option>
  <option class="team_selection" id="Sheffield_Utd" value="Sheffield Utd">Sheffield United</option>
  <option class="team_selection" id="Southampton" value="Southampton">Southampton</option>
  <option class="team_selection" id="Tottenham" value="Tottenham">Tottenham</option>
  <option class="team_selection" id="West_Ham" value="West Ham">West Ham United</option>
  <option class="team_selection" id="Wolves" value="Wolves">Wolves</option>
  <option class="team_selection" id="West_Brom" value="West Brom">West Brom</option>
</select>`;

export const laliga_dropdown = `<select
name="laliga_options"
class="drop_down"
id="laliga_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your La Liga Team</option>
  <option class="team_selection" id="Alavés" value="Alavés">Alavés</option>
  <option class="team_selection" id="Athletic_Club" value="Athletic Club">Athletic Club</option>
  <option class="team_selection" id="Atlético_Madrid" value="Atlético Madrid">Atlético Madrid</option>
  <option class="team_selection" id="Barcelona" value="Barcelona">Barcelona</option>
  <option class="team_selection" id="Cádiz" value="Cádiz">Cádiz</option>
  <option class="team_selection" id="Celta_Vigo" value="Celta Vigo">Celta Vigo</option>
  <option class="team_selection" id="Elche" value="Elche">Elche</option>
  <option class="team_selection" id="Espanyol" value="Espanyol">Espanyol</option>
  <option class="team_selection" id="Getafe" value="Getafe">Getafe</option>
  <option class="team_selection" id="Granada" value="Granada">Granada</option>
  <option class="team_selection" id="Levante" value="Levante">Levante</option>
  <option class="team_selection" id="Mallorca" value="Mallorca">Mallorca</option>
  <option class="team_selection" id="Osasuna" value="Osasuna">Osasuna</option>
  <option class="team_selection" id="Rayo_Vallecano" value="Rayo Vallecano">Rayo Vallecano</option>
  <option class="team_selection" id="Real_Betis" value="Real Betis">Real Betis</option>
  <option class="team_selection" id="Real_Madrid" value="Real Madrid">Real Madrid</option>
  <option class="team_selection" id="Real_Sociedad" value="Real Sociedad">Real Sociedad</option>
  <option class="team_selection" id="Sevilla" value="Sevilla">Sevilla </option>
  <option class="team_selection" id="Valencia" value="Valencia">Valencia</option>
  <option class="team_selection" id="Villarreal" value="Villarreal">Villarreal</option>

</select>`;

export const isl_dropdown = `<select
name="isl_options"
class="drop_down"
id="isl_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your ISL Team</option>
  <option class="team_selection" id="ATK" value="ATK">ATK Mohun Began</option>
  <option class="team_selection" id="BFC" value="BFC">Bengaluru FC</option>
  <option class="team_selection" id="CHE" value="CHE">Chennaiyin FC</option>
  <option class="team_selection" id="EGE" value="EGE">East Bengal Club</option>
  <option class="team_selection" id="GOA" value="GOA">FC Goa</option>
  <option class="team_selection" id="HYD" value="HYD">Hyderabad FC</option>
  <option class="team_selection" id="JAM" value="JAM">Jamshedpur FC</option>
  <option class="team_selection" id="KER" value="KER">Kerala Blasters FC</option>
  <option class="team_selection" id="MBC" value="MBC">Mumbai City FC</option>
  <option class="team_selection" id="NEU" value="NEU">NorthEast United FC</option>
  <option class="team_selection" id="DEL" value="DEL">Odisha FC</option>

</select>`;

export const mls_dropdown = `<select
name="mls_options"
class="drop_down"
id="mls_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your MLS Team</option>
  <option class="team_selection" id="ATL" value="ATL">Atlanta United</option>
  <option class="team_selection" id="AUS" value="AUS">Austin FC</option>
  <option class="team_selection" id="CHR" value="CHR">Charlotte FC</option>
  <option class="team_selection" id="CHI" value="CHI">Chicago FC</option>
  <option class="team_selection" id="CIN" value="CIN">FC Cincinnati</option>
  <option class="team_selection" id="COL" value="COL">Colorado Rapids</option>
  <option class="team_selection" id="CLM" value="CLM">Columbus Crew</option>
  <option class="team_selection" id="DCU" value="DCU">DC United</option>
  <option class="team_selection" id="DAL" value="DAL">FC Dallas</option>
  <option class="team_selection" id="HOU" value="HOU">Houston Dynamo FC</option>
  <option class="team_selection" id="SKC" value="SKC">Sporting Kansas City</option>
  <option class="team_selection" id="LAG" value="LAG">Los Angeles Galaxy</option>
  <option class="team_selection" id="LAF" value="LAF">Los Angeles Football Club</option>
  <option class="team_selection" id="MIA" value="MIA">Inter Miami FC</option>
  <option class="team_selection" id="MIN" value="MIN">Minnesota United</option>
  <option class="team_selection" id="MON" value="MON">CF Montreal</option>
  <option class="team_selection" id="NAS" value="NAS">Nashville SC</option>
  <option class="team_selection" id="NER" value="NER">New England Revolution</option>
  <option class="team_selection" id="NYB" value="NYB">New York Red Bulls</option>
  <option class="team_selection" id="NYF" value="NYF">New York City FC</option>
  <option class="team_selection" id="ORC" value="ORC">Orlando City</option>
  <option class="team_selection" id="PHI" value="PHI">Philadelphia Union</option>
  <option class="team_selection" id="POR" value="POR">Portland Timbers</option>
  <option class="team_selection" id="RSL" value="RSL">Real Salt Lake</option>
  <option class="team_selection" id="SJE" value="SJE">San Jose Earthquakes</option>
  <option class="team_selection" id="SEA" value="SEA">Seattle Sounders FC</option>
  <option class="team_selection" id="TOR" value="TOR">Toronto FC</option>
  <option class="team_selection" id="VAN" value="VAN">Vancouver Whitecaps FC</option>
</select>`;

export const nwsl_dropdown = `<select
name="nwsl_options"
class="drop_down"
id="nwsl_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your NWSL Team</option>
  <option class="team_selection" id="CHI" value="CHI">Chicago Red Stars</option>
  <option class="team_selection" id="HOU" value="HOU">Houston Dash</option>
  <option class="team_selection" id="KCC" value="KCC">Kansas City Current</option>
  <option class="team_selection" id="LOU" value="LOU">Racing Louisville FC</option>
  <option class="team_selection" id="NYF" value="NYF">North Carolina Courage</option>
  <option class="team_selection" id="NYG" value="NYG">NJ/NY Gotham FC</option>
  <option class="team_selection" id="ORL" value="ORL">Orlando Pride</option>
  <option class="team_selection" id="POR" value="POR">Portland Thorns FC</option>
  <option class="team_selection" id="SEA" value="SEA">OL Reign</option>
  <option class="team_selection" id="WAS" value="WAS">Washington Spirit</option>
</select>`;

// Team Data Funcs
export const EPLTeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, win_rate, ch_wins, ch_apps } = TeamData(
    "PREMIER",
    birth_year,
    franchiseID,
    epl_data,
    "LgRk",
    "1",
    "LgRK",
    "2"
  );
  return { total_games, total_wins, win_rate, ch_wins, ch_apps };
};

export const LALIGATeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, win_rate, ch_wins, ch_apps } = TeamData(
    "LALIGA",
    birth_year,
    franchiseID,
    laliga_data,
    "LgRk",
    "1",
    "LgRK",
    "2"
  );
  return { total_games, total_wins, win_rate, ch_wins, ch_apps };
};

export const ISLTeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, win_rate, ch_wins, ch_apps } = TeamData(
    "ISL",
    birth_year,
    franchiseID,
    isl_data,
    "Cwin",
    "Y",
    "CRU",
    "Y"
  );
  return { total_games, total_wins, win_rate, ch_wins, ch_apps };
};

export const MLSTeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, win_rate, ch_wins, ch_apps } = TeamData(
    "MLS",
    birth_year,
    franchiseID,
    mls_data,
    "ch_win",
    "Y",
    "ch_app",
    "Y"
  );
  return { total_games, total_wins, win_rate, ch_wins, ch_apps };
};

export const NWSLTeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, win_rate, ch_wins, ch_apps } = TeamData(
    "NWSL",
    birth_year,
    franchiseID,
    nwsl_data,
    "Cwin",
    "Y",
    "CRU",
    "Y"
  );
  return { total_games, total_wins, win_rate, ch_wins, ch_apps };
};
