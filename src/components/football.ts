// Data
import bundesliga_data from "../data/json/bundesliga_data.json";
import epl_data from "../data/json/epl_data.json";
import laliga_data from "../data/json/laliga_data.json";
import ligue1_data from "../data/json/ligue1_data.json";
import isl_data from "../data/json/isl_data.json";
import mls_data from "../data/json/mls_data.json";
import nwsl_data from "../data/json/nwsl_data.json";
import serie_a_data from "../data/json/serie_a_data.json";
import { TeamData } from "./all_sports";

// Drop-downs
export const bundesliga_dropdown = `<select
name="bundesliga_options"
class="drop_down"
id="bundesliga_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your Bundesliga Team</option>
  <option class="team_selection" id="Arminia" value="Arminia">Arminia</option>
  <option class="team_selection" id="Augsburg" value="Augsburg">Augsburg</option>
  <option class="team_selection" id="Bayern_Munich" value="Bayern Munich">Bayern Munich</option>
  <option class="team_selection" id="Bochum" value="Bochum">Bochum</option>
  <option class="team_selection" id="Dortmund" value="Dortmund">Dortmund</option>
  <option class="team_selection" id="Eint_Frankfurt" value="Eint Frankfurt">Eint Frankfurt</option>
  <option class="team_selection" id="Greuther_Fürth" value="Greuther Fürth">Greuther Fürth</option>
  <option class="team_selection" id="Hertha_BSC" value="Hertha BSC">Hertha BSC</option>
  <option class="team_selection" id="Hoffenheim" value="Hoffenheim">Hoffenheim</option>
  <option class="team_selection" id="Köln" value="Köln">Köln</option>
  <option class="team_selection" id="Leverkusen" value="Leverkusen">Leverkusen</option>
  <option class="team_selection" id="M_Gladbach" value="M'Gladbach">M'Gladbach</option>
  <option class="team_selection" id="Mainz_05" value="Mainz 05">Mainz 05</option>
  <option class="team_selection" id="RB_Leipzig" value="RB Leipzig">RB Leipzig</option>
  <option class="team_selection" id="SC_Freiburg" value="Freiburg">SC Freiburg</option>
  <option class="team_selection" id="Stuttgart" value="Stuttgart">Stuttgart</option>
  <option class="team_selection" id="Union_Berlin" value="Union Berlin">Union Berlin</option>
  <option class="team_selection" id="Wolfsburg" value="Wolfsburg">Wolfsburg</option>
</select>`;

export const epl_dropdown = `<select
name="epl_options"
class="drop_down"
id="epl_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your Premier League Team</option>
  <option class="team_selection" id="Aston_Villa" value="Aston Villa">Aston Villa</option>
  <option class="team_selection" id="Arsenal" value="Arsenal">Arsenal</option>
  <option class="team_selection" id="Brentford" value="Brentford">Brentford</option>
  <option class="team_selection" id="Brighton" value="Brighton">Brighton</option>
  <option class="team_selection" id="Burnley" value="Burnley">Burnley</option>
  <option class="team_selection" id="Chelsea" value="Chelsea">Chelsea</option>
  <option class="team_selection" id="Crystal_Palace" value="Crystal Palace">Crystal Palace</option>
  <option class="team_selection" id="Everton" value="Everton">Everton</option>
  <option class="team_selection" id="Leeds_United" value="Leeds United">Leeds United</option>
  <option class="team_selection" id="Leicester_City" value="Leicester City">Leicester City</option>
  <option class="team_selection" id="Liverpool" value="Liverpool">Liverpool</option>
  <option class="team_selection" id="Manchester_City" value="Manchester City">Manchester City</option>
  <option class="team_selection" id="Manchester_Utd" value="Manchester Utd">Manchester United</option>
  <option class="team_selection" id="Newcastle_Utd" value="Newcastle Utd">Newcastle United</option>
  <option class="team_selection" id="Norwich_City" value="Norwich City">Norwich City</option>
  <option class="team_selection" id="Southampton" value="Southampton">Southampton</option>
  <option class="team_selection" id="Tottenham" value="Tottenham">Tottenham</option>
  <option class="team_selection" id="Watford" value="Watford">Watford</option>
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

export const ligue1_dropdown = `<select
name="ligue1_options"
class="drop_down"
id="ligue1_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your Ligue 1 Team</option>
  <option class="team_selection" id="Angers" value="Angers">Angers</option>
  <option class="team_selection" id="Brest" value="Brest">Brest</option>
  <option class="team_selection" id="Bordeaux" value="Bordeaux">Bordeaux</option>
  <option class="team_selection" id="Clermont" value="Clermont Foot">Clermont</option>
  <option class="team_selection" id="Lens" value="Lens">Lens</option>
  <option class="team_selection" id="Lille" value="Lille">Lille</option>
  <option class="team_selection" id="Lorient" value="Lorient">Lorient</option>
  <option class="team_selection" id="Lyon" value="Lyon">Lyon</option>
  <option class="team_selection" id="Marseille" value="Marseille">Marseille</option>
  <option class="team_selection" id="Metz" value="Metz">Metz</option>
  <option class="team_selection" id="Monaco" value="Monaco">Monaco</option>
  <option class="team_selection" id="Montpellier" value="Montpellier">Montpellier</option>
  <option class="team_selection" id="Nantes" value="Nantes">Nantes</option>
  <option class="team_selection" id="Nice" value="Nice">Nice</option>
  <option class="team_selection" id="Paris_SG" value="Paris S-G">Paris Saint-Germain</option>
  <option class="team_selection" id="Rennes" value="Rennes">Rennes</option>
  <option class="team_selection" id="Saint_Étienne" value="Saint-Étienne">Saint-Étienne</option>
  <option class="team_selection" id="Strasbourg" value="Strasbourg">Strasbourg</option>
  <option class="team_selection" id="Reims" value="Reims">Reims</option>
  <option class="team_selection" id="Troyes" value="Troyes">Troyes</option>
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

export const serie_a_dropdown = `<select
name="serie_a_options"
class="drop_down"
id="serie_a_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your Serie A Team</option>
  <option class="team_selection" id="Atalanta" value="Atalanta">Atalanta</option>
  <option class="team_selection" id="Bologna" value="Bologna">Bologna</option>
  <option class="team_selection" id="Cagliari" value="Cagliari">Cagliari</option>
  <option class="team_selection" id="Empoli" value="Empoli">Empoli</option>
  <option class="team_selection" id="Fiorentina" value="Fiorentina">Fiorentina</option>
  <option class="team_selection" id="Genoa" value="Genoa">Genoa</option>
  <option class="team_selection" id="Hellas_Verona" value="Hellas Verona">Hellas Verona</option>
  <option class="team_selection" id="Inter" value="Inter">Inter Milan</option>
  <option class="team_selection" id="Juventus" value="Juventus">Juventus</option>
  <option class="team_selection" id="Lazio" value="Lazio">Lazio</option>
  <option class="team_selection" id="Milan" value="Milan">Milan</option>
  <option class="team_selection" id="Napoli" value="Napoli">Napoli</option>
  <option class="team_selection" id="Roma" value="Roma">Roma</option>
  <option class="team_selection" id="Salernitana" value="Salernitana">Salernitana</option>
  <option class="team_selection" id="Sampdoria" value="Sampdoria">Sampdoria</option>
  <option class="team_selection" id="Sassuolo" value="Sassuolo">Sassuolo</option>
  <option class="team_selection" id="Spezia" value="Spezia">Spezia</option>
  <option class="team_selection" id="Torino" value="Torino">Torino</option>
  <option class="team_selection" id="Udinese" value="Udinese">Udinese</option>
  <option class="team_selection" id="Venezia" value="Venezia">Venezia</option>
</select>`;

// Team Data Funcs
export const BUNDESLIGATeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, total_draws, total_losses, ch_wins, ch_apps } =
    TeamData(
      "football",
      "BUNDESLIGA",
      birth_year,
      franchiseID,
      bundesliga_data,
      "LgRk",
      "1",
      "LgRK",
      "2"
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

export const EPLTeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, total_draws, total_losses, ch_wins, ch_apps } =
    TeamData(
      "football",
      "PREMIER",
      birth_year,
      franchiseID,
      epl_data,
      "LgRk",
      "1",
      "LgRK",
      "2"
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

export const LALIGATeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, total_draws, total_losses, ch_wins, ch_apps } =
    TeamData(
      "football",
      "LALIGA",
      birth_year,
      franchiseID,
      laliga_data,
      "LgRk",
      "1",
      "LgRK",
      "2"
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

export const LIGUE1TeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, total_draws, total_losses, ch_wins, ch_apps } =
    TeamData(
      "football",
      "LIGUE1",
      birth_year,
      franchiseID,
      ligue1_data,
      "LgRk",
      "1",
      "LgRK",
      "2"
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

export const ISLTeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, total_draws, total_losses, ch_wins, ch_apps } =
    TeamData(
      "football",
      "ISL",
      birth_year,
      franchiseID,
      isl_data,
      "Cwin",
      "Y",
      "CRU",
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

export const MLSTeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, total_draws, total_losses, ch_wins, ch_apps } =
    TeamData(
      "football",
      "MLS",
      birth_year,
      franchiseID,
      mls_data,
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

export const NWSLTeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, total_draws, total_losses, ch_wins, ch_apps } =
    TeamData(
      "football",
      "NWSL",
      birth_year,
      franchiseID,
      nwsl_data,
      "Cwin",
      "Y",
      "CRU",
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

export const SERIEATeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, total_draws, total_losses, ch_wins, ch_apps } =
    TeamData(
      "football",
      "SERIEA",
      birth_year,
      franchiseID,
      serie_a_data,
      "Cwin",
      "Y",
      "CRU",
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

// Teams that have been relegated and may return in future seasons go below here as a comment

// EPL Teams
// <option class="team_selection" id="Fulham" value="Fulham">Fulham</option>
// <option class="team_selection" id="Sheffield_Utd" value="Sheffield Utd">Sheffield United</option>
// <option class="team_selection" id="West_Brom" value="West Brom">West Brom</option>

// La Liga Teams
// <option class="team_selection" id="Eibar" value="Eibar">Eibar</option>
