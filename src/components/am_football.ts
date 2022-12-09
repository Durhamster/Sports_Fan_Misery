// Data
import cfl_data from "../data/json/cfl_data.json";
import ncaaf_data from "../data/json/ncaaf_data.json";
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

export const ncaaf_dropdown = `<select
  name="ncaaf_options"
  class="drop_down"
  id="ncaaf_team_options"
  autocomplete="off">
  <option class="team_selection" id="default" value="default" selected="selected">Choose your NCAAF Team</option>
  <optgroup label="Atlantic Coast Conference">
  <option class="team_selection" id="Boston_College" value="Boston College">Boston College</option>
  <option class="team_selection" id="Clemson" value="Clemson">Clemson</option>
  <option class="team_selection" id="Duke" value="Duke">Duke</option>
  <option class="team_selection" id="Florida_State" value="Florida State">Florida State</option>
  <option class="team_selection" id="Georgia_Tech" value="Georgia Tech">Georgia Tech</option>
  <option class="team_selection" id="Louisville" value="Louisville">Louisville</option>
  <option class="team_selection" id="Miami_FL" value="Miami (FL)">Miami (FL)</option>
  <option class="team_selection" id="North_Carolina" value="North Carolina">North Carolina</option>
  <option class="team_selection" id="North_Carolina_State" value="North Carolina State">North Carolina State</option>
  <option class="team_selection" id="Pitt" value="Pitt">Pitt</option>
  <option class="team_selection" id="Syracuse" value="Syracuse">Syracuse</option>
  <option class="team_selection" id="Virginia" value="Virginia">Virginia</option>
  <option class="team_selection" id="Virginia_Tech" value="Virginia Tech">Virginia Tech</option>
  <option class="team_selection" id="Wake_Forest" value="Wake Forest">Wake Forest</option>

  <optgroup label="American Athletic Conference">
  <option class="team_selection" id="Cincinnati" value="Cincinnati">Cincinnati</option>
  <option class="team_selection" id="East_Carolina" value="East Carolina">East Carolina</option>
  <option class="team_selection" id="Houston" value="Houston">Houston</option>
  <option class="team_selection" id="Memphis" value="Memphis">Memphis</option>
  <option class="team_selection" id="Navy" value="Navy">Navy</option>
  <option class="team_selection" id="SMU" value="SMU">SMU</option>
  <option class="team_selection" id="South_Florida" value="South Florida">South Florida</option>
  <option class="team_selection" id="Temple" value="Temple">Tulsa</option>
  <option class="team_selection" id="Tulane" value="Tulane">Tulane</option>
  <option class="team_selection" id="Tulsa" value="Tulsa">Tulsa</option>
  <option class="team_selection" id="UCF" value="UCF">UCF</option>

  <optgroup label="Big 12 Conference">
  <option class="team_selection" id="Baylor" value="Baylor">Baylor</option>
  <option class="team_selection" id="Iowa_State" value="Iowa State">Iowa State</option>
  <option class="team_selection" id="Kansas" value="Kansas">Kansas</option>
  <option class="team_selection" id="Kansas_State" value="Kansas State">Kansas State</option>
  <option class="team_selection" id="Oklahoma" value="Oklahoma">Oklahoma</option>
  <option class="team_selection" id="Oklahoma_State" value="Oklahoma State">Oklahoma State</option>
  <option class="team_selection" id="Texas" value="Texas">Texas</option>
  <option class="team_selection" id="Texas_Christian" value="Texas Christian">Texas Christian</option>
  <option class="team_selection" id="Texas_Tech" value="Texas Tech">Texas Tech</option>
  <option class="team_selection" id="West_Virginia" value="West Virginia">West Virginia</option>

  <optgroup label="Big Ten Conference">
  <option class="team_selection" id="Illinois" value="Illinois">Illinois</option>
  <option class="team_selection" id="Indiana" value="Indiana">Indiana</option>
  <option class="team_selection" id="Iowa" value="Iowa">Iowa</option>
  <option class="team_selection" id="Maryland" value="Maryland">Maryland</option>
  <option class="team_selection" id="Michigan" value="Michigan">Michigan</option>
  <option class="team_selection" id="Minnesota" value="Minnesota">Minnesota</option>
  <option class="team_selection" id="Michigan_State" value="Michigan State">Michigan</option>
  <option class="team_selection" id="Nebraska" value="Nebraska">Nebraska</option>
  <option class="team_selection" id="Northwestern" value="Northwestern">Northwestern</option>
  <option class="team_selection" id="Ohio_State" value="Ohio State">Ohio State</option>
  <option class="team_selection" id="Penn_State" value="Penn State">Penn State</option>
  <option class="team_selection" id="Purdue" value="Purdue">Purdue</option>
  <option class="team_selection" id="Rutgers" value="Rutgers">Rutgers</option>
  <option class="team_selection" id="Wisconsin" value="Wisconsin">Wisconsin</option>

  <optgroup label="Conference USA">
  <option class="team_selection" id="Charlotte" value="Charlotte">Charlotte</option>
  <option class="team_selection" id="Florida_Atlantic" value="Florida Atlantic">Florida Atlantic</option>
  <option class="team_selection" id="Florida_International" value="Florida International">Florida International</option>
  <option class="team_selection" id="Louisiana_Tech" value="Louisiana Tech">Louisiana Tech</option>
  <option class="team_selection" id="Marshall" value="Marshall">Marshall</option>
  <option class="team_selection" id="Middle_Tennessee_State" value="Middle Tennessee State">Middle Tennessee State</option>
  <option class="team_selection" id="North_Texas" value="North Texas">North Texas</option>
  <option class="team_selection" id="Old_Dominion" value="Old Dominion">Old Dominion</option>
  <option class="team_selection" id="Rice" value="Rice">Rice</option>
  <option class="team_selection" id="Southern_Mississippi" value="Southern Mississippi">Southern Mississippi</option>
  <option class="team_selection" id="UAB" value="UAB">UAB</option>
  <option class="team_selection" id="UTEP" value="UTEP">UTEP</option>
  <option class="team_selection" id="UTSA" value="UTSA">UTSA</option>
  <option class="team_selection" id="Western_Kentucky" value="Western Kentucky">Western Kentucky</option>

  <optgroup label="Independent">
  <option class="team_selection" id="Army" value="Army">Army</option>
  <option class="team_selection" id="BYU" value="BYU">BYU</option>
  <option class="team_selection" id="Connecticut" value="Connecticut">Connecticut</option>
  <option class="team_selection" id="Liberty" value="Liberty">Liberty</option>
  <option class="team_selection" id="Massachusetts" value="Massachusetts">Massachusetts</option>
  <option class="team_selection" id="New_Mexico_State" value="New Mexico State">New Mexico State</option>
  <option class="team_selection" id="Notre_Dame" value="Notre Dame">Notre Dame</option>

  <optgroup label="Mid-American Conference">
  <option class="team_selection" id="Akron" value="Akron">Akron</option>
  <option class="team_selection" id="Ball_State" value="Ball State">Ball State</option>
  <option class="team_selection" id="Bowling_Green_State" value="Bowling Green State">Bowling Green State</option>
  <option class="team_selection" id="Buffalo" value="Buffalo">Buffalo</option>
  <option class="team_selection" id="Central_Michigan" value="Central Michigan">Central Michigan</option>
  <option class="team_selection" id="Eastern_Michigan" value="Eastern Michigan">Eastern Michigan</option>
  <option class="team_selection" id="Kent_State" value="Kent State">Kent State</option>
  <option class="team_selection" id="Miami_OH" value="Miami (OH)">Miami (OH)</option>
  <option class="team_selection" id="Northern_Illinois" value="Northern Illinois">Northern Illinois</option>
  <option class="team_selection" id="Ohio" value="Ohio">Ohio</option>
  <option class="team_selection" id="Toledo" value="Toledo">Toledo</option>
  <option class="team_selection" id="Western_Michigan" value="Western Michigan">Western Michigan</option>

  <optgroup label="Mountain West Conference">
  <option class="team_selection" id="Air_Force" value="Air Force">Air Force</option>
  <option class="team_selection" id="Boise_State" value="Boise State">Boise State</option>
  <option class="team_selection" id="Colorado_State" value="Colorado State">Colorado State</option>
  <option class="team_selection" id="Fresno_State" value="Fresno State">Fresno State</option>
  <option class="team_selection" id="Hawaii" value="Hawaii">Hawaii</option>
  <option class="team_selection" id="Nevada" value="Nevada">Nevada</option>
  <option class="team_selection" id="Nevada-Las_Vegas" value="Nevada-Las Vegas">Nevada-Las Vegas</option>
  <option class="team_selection" id="New_Mexico" value="New Mexico">New Mexico</option>
  <option class="team_selection" id="San_Diego_State" value="San Diego State">San Diego State</option>
  <option class="team_selection" id="San_Jose_State" value="San Jose State">San Jose State</option>
  <option class="team_selection" id="Utah_State" value="Utah State">Utah State</option>
  <option class="team_selection" id="Wyoming" value="Wyoming">Wyoming</option>

  <optgroup label="Pac-12 Conference">
  <option class="team_selection" id="Arizona" value="Arizona">Arizona</option>
  <option class="team_selection" id="Arizona_State" value="Arizona State">Arizona State</option>
  <option class="team_selection" id="California" value="California">California</option>
  <option class="team_selection" id="Colorado" value="Colorado">Colorado</option>
  <option class="team_selection" id="Oregon" value="Oregon">Oregon</option>
  <option class="team_selection" id="Oregon_State" value="Oregon State">Oregon State</option>
  <option class="team_selection" id="Stanford" value="Stanford">Stanford</option>
  <option class="team_selection" id="UCLA" value="UCLA">UCLA</option>
  <option class="team_selection" id="USC" value="USC">USC</option>
  <option class="team_selection" id="Utah" value="Utah">Utah</option>
  <option class="team_selection" id="Washington" value="Washington">Washington</option>
  <option class="team_selection" id="Washington_State" value="Washington State">Washington State</option>

  <optgroup label="Southeastern Conference">
  <option class="team_selection" id="Alabama" value="Alabama">Alabama</option>
  <option class="team_selection" id="Arkansas" value="Arkansas">Arkansas</option>
  <option class="team_selection" id="Auburn" value="Auburn">Auburn</option>
  <option class="team_selection" id="Florida" value="Florida">Florida</option>
  <option class="team_selection" id="Georgia" value="Georgia">Georgia</option>
  <option class="team_selection" id="Kentucky" value="Kentucky">Kentucky</option>
  <option class="team_selection" id="LSU" value="LSU">LSU</option>
  <option class="team_selection" id="Missouri" value="Missouri">Missouri</option>
  <option class="team_selection" id="Mississippi_State" value="Mississippi State">Mississippi State</option>
  <option class="team_selection" id="Ole_Miss" value="Ole Miss">Ole Miss</option>
  <option class="team_selection" id="South_Carolina" value="South Carolina">South Carolina</option>
  <option class="team_selection" id="Tennessee" value="Tennessee">Tennessee</option>
  <option class="team_selection" id="Texas_AM" value="Texas A&M">Texas A&M</option>
  <option class="team_selection" id="Vanderbilt" value="Vanderbilt">Vanderbilt</option>

  <optgroup label="Sun Belt Conference">
  <option class="team_selection" id="Appalachian_State" value="Appalachian State">Appalachian State</option>
  <option class="team_selection" id="Arkansas_State" value="Arkansas State">Arkansas State</option>
  <option class="team_selection" id="Coastal_Carolina" value="Coastal Carolina">Coastal Carolina</option>
  <option class="team_selection" id="Georgia_Southern" value="Georgia Southern">Georgia Southern</option>
  <option class="team_selection" id="Georgia_State" value="Georgia State">Georgia State</option>
  <option class="team_selection" id="Louisiana" value="Louisiana">Louisiana</option>
  <option class="team_selection" id="Louisiana-Monroe" value="Louisiana-Monroe">Louisiana-Monroe</option>
  <option class="team_selection" id="South_Alabama" value="South Alabama">South Alabama</option>
  <option class="team_selection" id="Texas_State" value="Texas State">Texas State</option>
  <option class="team_selection" id="Troy" value="Troy">Troy</option>

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
  <option class="team_selection" id="SFC" value="SFC">San Francisco 49ers</option>
  <option class="team_selection" id="SEA" value="SEA">Seattle Seahawks</option>
  <option class="team_selection" id="TBB" value="TBB">Tampa Bay Buccaneers</option>
  <option class="team_selection" id="TEN" value="TEN">Tennessee Titans</option>
  <option class="team_selection" id="WAS" value="WAS">Washington Commanders</option>
  </select>`;

// Team Data Funcs
export const CFLTeamData = function (birth_year: any, franchiseID: any) {
  let {
    total_games,
    total_wins,
    total_draws,
    total_losses,
    ch_wins,
    ch_apps,
    shields,
  } = TeamData(
    "am_football",
    "CFL",
    birth_year,
    franchiseID,
    cfl_data,
    "CH",
    "Won Grey Cup",
    "CH",
    "Lost Grey Cup"
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

export const NCAAFTeamData = function (birth_year: any, franchiseID: any) {
  let {
    total_games,
    total_wins,
    total_draws,
    total_losses,
    ch_wins,
    ch_apps,
    shields,
  } = TeamData(
    "am_football",
    "NCAAF",
    birth_year,
    franchiseID,
    ncaaf_data,
    "ch_win",
    "Y",
    "ch_ru",
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

export const NFLTeamData = function (birth_year: any, franchiseID: any) {
  let {
    total_games,
    total_wins,
    total_draws,
    total_losses,
    ch_wins,
    ch_apps,
    shields,
  } = TeamData(
    "am_football",
    "NFL",
    birth_year,
    franchiseID,
    nfl_data,
    "ch_sb_win",
    "Y",
    "ch_sb_app",
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
