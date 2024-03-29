// Data
import bbl_data from "../data/json/bbl_data.json";
import cpl_data from "../data/json/cpl_data.json";
import ipl_data from "../data/json/ipl_data.json";
import { TeamData } from "./all_sports";

export const bbl_dropdown = `<select
name="bbl_options"
class="drop_down"
id="bbl_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your BBL Team</option>
  <option class="team_selection" id="Adelaide_Strikers" value="Adelaide Strikers">Adelaide Strikers</option>
  <option class="team_selection" id="Brisbane_Heat" value="Brisbane Heat">Brisbane Heat</option>
  <option class="team_selection" id="Hobart_Hurricanes" value="Hobart Hurricanes">Hobart Hurricanes</option>
  <option class="team_selection" id="Melbourne_Renegades" value="Melbourne Renegades">Melbourne Renegades</option>
  <option class="team_selection" id="Melbourne_Stars" value="Melbourne Stars">Melbourne Stars</option>
  <option class="team_selection" id="Perth_Scorchers" value="Perth Scorchers">Perth Scorchers</option>
  <option class="team_selection" id="Sydney_Sixers" value="Sydney Sixers">Sydney Sixers</option>
  <option class="team_selection" id="Sydney_Thunder" value="Sydney Thunder">Sydney Thunder</option>
</select>`;

export const cpl_dropdown = `<select
name="cpl_options"
class="drop_down"
id="cpl_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your CPL Team</option>
  <option class="team_selection" id="Barbados_Royals" value="Barbados Royals">Barbados Royals</option>
  <option class="team_selection" id="Guyana_Amazon_Warriors" value="Guyana Amazon Warriors">Guyana Amazon Warriors</option>
  <option class="team_selection" id="Jamaica_Tallawahs" value="Jamaica Tallawahs">Jamaica Tallawahs</option>
  <option class="team_selection" id="St_Kitts_Nevis_Patriots" value="St Kitts & Nevis Patriots">St Kitts & Nevis Patriots</option>
  <option class="team_selection" id="St_Lucia_Kings" value="St Lucia Kings">St Lucia Kings</option>
  <option class="team_selection" id="Trinbago_Knight_Riders" value="Trinbago Knight Riders">Trinbago Knight Riders</option>
</select>`;

export const ipl_dropdown = `<select
name="ipl_options"
class="drop_down"
id="ipl_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your IPL Team</option>
  <option class="team_selection" id="CSK" value="CSK">Chennai Super Kings</option>
  <option class="team_selection" id="DC" value="DC">Delhi Capitals</option>
  <option class="team_selection" id="GUJ" value="GUJ">Gujarat Titans</option>
  <option class="team_selection" id="PBKS" value="PBKS">Punjab Kings</option>
  <option class="team_selection" id="KKR" value="KKR">Kolkata Knight Riders</option>
  <option class="team_selection" id="LUK" value="LUK">Luknow Super Giants</option>
  <option class="team_selection" id="MI" value="MI">Mumbai Indians</option>
  <option class="team_selection" id="RR" value="RR">Rajasthan Royals</option>
  <option class="team_selection" id="RCB" value="RCB">Royal Challengers Bangalore</option>
  <option class="team_selection" id="HDC" value="HDC">Sunrisers Hyderabad</option>
</select>`;

export const BBLTeamData = function (birth_year: any, franchiseID: any) {
  let {
    total_games,
    total_wins,
    total_draws,
    total_losses,
    ch_wins,
    ch_apps,
    shields,
  } = TeamData(
    "cricket",
    "BBL",
    birth_year,
    franchiseID,
    bbl_data,
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
    shields,
  };
};

export const CPLTeamData = function (birth_year: any, franchiseID: any) {
  let {
    total_games,
    total_wins,
    total_draws,
    total_losses,
    ch_wins,
    ch_apps,
    shields,
  } = TeamData(
    "cricket",
    "CPL",
    birth_year,
    franchiseID,
    cpl_data,
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
    shields,
  };
};

export const IPLTeamData = function (birth_year: any, franchiseID: any) {
  let {
    total_games,
    total_wins,
    total_draws,
    total_losses,
    ch_wins,
    ch_apps,
    shields,
  } = TeamData(
    "cricket",
    "IPL",
    birth_year,
    franchiseID,
    ipl_data,
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
    shields,
  };
};
