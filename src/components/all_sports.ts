// Functions and variables to be used for all sports in the future
export const result_sentences = `
  <p id="default_sentence"> </p>
  <p id="error_result1">You forgot to select your favorite team... surely you have one right?</p>
  <p id="error_result2">That's not a valid birth year (1 - 110 years ago).</p>
  <p id="misery_result"> </p>`;

export const sports_input = `
<button id="sports_input">Submit</button>`;

// Filter data for team name
const findTeam = function (league: string, team: number, data: any) {
  if (league == "NCAAF") {
    var select_team = data.filter((x: any) => x.School == team);
  } else {
    var select_team = data.filter((x: any) => x.franchID == team);
  }
  return select_team;
};

// Filter data for years >= the given year
const findYear = function (year: number, team_dict: any) {
  let select_year = team_dict.filter((x: any) => x.yearID >= year);
  return select_year;
};

// Get all wins, losses, championship wins, etc. for given team
export const TeamData = function (
  league: string,
  birth_year: number,
  franchiseID: any,
  data: any,
  Cwin: any,
  Cwin_type: string,
  CRU: any,
  CRU_type: string
) {
  // Get dict of selected team & birth year
  let team_dict = findTeam(league, franchiseID, data);
  let team_year_dict = findYear(birth_year, team_dict);
  // Get wins, losses, World Series appearance & victories
  let team_wins: any = team_year_dict.map((o: any) => o.W);
  let team_losses: any = team_year_dict.map((o: any) => o.L);
  let team_ch_wins: any = team_year_dict.filter(
    (o: any) => o[Cwin] == Cwin_type
  );
  let team_ch_apps: any = team_year_dict.filter((o: any) => o[CRU] == CRU_type);
  // Convert to ints
  team_wins = team_wins.map(Number);
  team_losses = team_losses.map(Number);

  // Get total wins & losses
  let total_wins = 0;
  for (let wins of team_wins) {
    total_wins += wins;
  }

  let total_losses = 0;
  for (let losses of team_losses) {
    total_losses += losses;
  }

  let ch_win_years: any = team_ch_wins.map((o: any) => o.yearID);
  let ch_wins = Object.keys(ch_win_years).length;

  let ch_ru_years: any = team_ch_apps.map((o: any) => o.yearID);
  let ch_rus = Object.keys(ch_ru_years).length;

  // Checks for league. Some data sets use runners up while others count appearances
  if (league == "MLB") {
    var ch_apps = ch_rus - ch_wins;
  } else {
    var ch_apps = ch_rus;
  }

  // Total games played & win rate
  let total_games = total_wins + total_losses;
  let win_rate = (total_wins / total_games) * 100;
  return { total_games, total_wins, win_rate, ch_wins, ch_apps };
};
