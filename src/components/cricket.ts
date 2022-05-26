// Data
import ipl_data from "../data/json/ipl_data.json";
import { TeamData } from "./all_sports";

export const ipl_dropdown = `<select
name="ipl_options"
class="drop_down"
id="ipl_team_options"
autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your IPL Team</option>
  <option class="team_selection" id="CSK" value="CSK">Chennai Super Kings</option>
  <option class="team_selection" id="DC" value="DC">Delhi Capitals</option>
  <option class="team_selection" id="PBKS" value="PBKS">Punjab Kings</option>
  <option class="team_selection" id="KKR" value="KKR">Kolkata Knight Riders</option>
  <option class="team_selection" id="MI" value="MI">Mumbai Indians</option>
  <option class="team_selection" id="RR" value="RR">Rajasthan Royals</option>
  <option class="team_selection" id="RCB" value="RCB">Royal Challengers Bangalore</option>
  <option class="team_selection" id="HDC" value="HDC">Sunrisers Hyderabad</option>
</select>`;

export const IPLTeamData = function (birth_year: any, franchiseID: any) {
  let { total_games, total_wins, win_rate, ch_wins, ch_apps } = TeamData(
    "IPL",
    birth_year,
    franchiseID,
    ipl_data,
    "Cwin",
    "Y",
    "CRU",
    "Y"
  );
  return { total_games, total_wins, win_rate, ch_wins, ch_apps };
};
