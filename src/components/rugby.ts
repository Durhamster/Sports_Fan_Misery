// Data
import nrl_data from "../data/json/nrl_data.json";
import { TeamData } from "./all_sports";

// Drop-downs
export const nrl_dropdown = `<select
name="nrl_options"
class="drop_down"
id="nrl_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your NHL Team</option>
  <option class="team_selection" id="BRI" value="BRI">Brisbane Broncos</option>
  <option class="team_selection" id="CAN" value="CAN">Canberra Raiders</option>
  <option class="team_selection" id="BUL" value="BUL">Canterbury-Bankstown Bulldogs</option>
  <option class="team_selection" id="CRO" value="CRO">Cronulla-Sutherland Sharks</option>
  <option class="team_selection" id="GOL" value="GOL">Gold Coast Titans</option>
  <option class="team_selection" id="MAN" value="MAN">Manly Warringah Sea Eagles</option>
  <option class="team_selection" id="MEL" value="MEL">Melbourne Storm</option>
  <option class="team_selection" id="NEC" value="NEC">Newcastle Knights</option>
  <option class="team_selection" id="WAR" value="WAR">New Zealand Warriors</option>
  <option class="team_selection" id="NOQ" value="NOQ">North Queensland Cowboys</option>
  <option class="team_selection" id="PAR" value="PAR">Parramatta Eels</option>
  <option class="team_selection" id="PEN" value="PEN">Penrith Panthers</option>
  <option class="team_selection" id="SSY" value="SSY">South Sydney Rabbitohs</option>
  <option class="team_selection" id="STG" value="STG">St. George Illawarra Dragons</option>
  <option class="team_selection" id="SYD" value="SYD">Sydney Roosters</option>
  <option class="team_selection" id="TIG" value="TIG">Wests Tigers</option>
</select>`;

// Team Data Funcs
export const NRLTeamData = function (birth_year: any, franchiseID: any) {
  let {
    total_games,
    total_wins,
    total_draws,
    total_losses,
    ch_wins,
    ch_apps,
    shields,
  } = TeamData(
    "rugby",
    "NRL",
    birth_year,
    franchiseID,
    nrl_data,
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
