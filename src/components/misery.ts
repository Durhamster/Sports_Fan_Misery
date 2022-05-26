// Misery Calculator
export const misery_calculation = function (
  time_alive: number,
  ch_wins: number,
  time_per_ch: number,
  fav_teams: any
) {
  var misery_level: string;

  // Check for Band wagon teams
  let band_wagon_index = 0;
  if (fav_teams.includes("New York Yankees")) {
    band_wagon_index += 1;
  }
  if (fav_teams.includes("New England Patriots")) {
    band_wagon_index += 1;
  }
  if (fav_teams.includes("Boston Red Sox")) {
    band_wagon_index += 1;
  }
  if (fav_teams.includes("San Francisco Giants")) {
    band_wagon_index += 1;
  }
  if (fav_teams.includes("Los Angeles Lakers")) {
    band_wagon_index += 1;
  }
  if (fav_teams.includes("Golden State Warriors")) {
    band_wagon_index += 1;
  }
  if (fav_teams.includes("San Antonio Spurs")) {
    band_wagon_index += 1;
  }
  if (fav_teams.includes("Miami Heat")) {
    band_wagon_index += 1;
  }
  if (fav_teams.includes("Pittsburgh Penguins")) {
    band_wagon_index += 1;
  }
  if (fav_teams.includes("Chicago Blackhawks")) {
    band_wagon_index += 1;
  }
  if (fav_teams.includes("Tampa Bay Lightning")) {
    band_wagon_index += 1;
  }
  if (fav_teams.includes("Los Angeles Galaxy")) {
    band_wagon_index += 1;
  }
  if (fav_teams.includes("Chennai Super Kings")) {
    band_wagon_index += 1;
  }
  if (fav_teams.includes("Mumbai Indians")) {
    band_wagon_index += 1;
  }
  if (fav_teams.includes("Alabama")) {
    band_wagon_index += 1;
  }
  if (fav_teams.includes("Clemson")) {
    band_wagon_index += 1;
  }

  let bandwanger = false;
  if (band_wagon_index >= 4) {
    bandwanger = true;
  }

  // One who has Never Experience Victory
  if (ch_wins <= 0) {
    var misery_level =
      "<h2>Misery Level: The Fan Who Has Never Experienced Victory.</h2><p>In all your years," +
      "you haven't seen one of your teams win the championship of their leagues. You knew this though, didn't you?" +
      " Perhaps you simply wanted to use this to check in case you missed one awhile back, and that all those years of pain" +
      " was a bad dream. Nope it's not. Sorry.</p>" +
      "<p>Perhaps you need to find new teams to follow. Maybe it's time to step away. Your selection of team(s) clearly" +
      " is not doing your mental health any favors, unless you are a masochist and if you are no judgment.</p>";
  }
  // Band Wagoner
  else if (bandwanger == true) {
    var misery_level =
      "<h2>Misery Level: 🚨🚨🚨 BAND WAGONER ALERT 🚨🚨🚨</h2><p>You're a band wagoner. The worst kind of fan. Yes, even worse than the ones who start riots." +
      " At least they're willing to take a tear gas canister to the face for the team. You on the other hand aren't.</p> <p>Your loyalties are as loose and worn out as " +
      " the dozens of jerseys in the back of your closet from past teams who 'repped' right after their victory. You're the most miserable fan of all and you deserve it." +
      " You're miserable because no matter how many times you hop from one team to another, you know deep down inside you'll never truly belong to any fandom, any tribe." +
      " You will wander the world of fandom, unloved, unless you clean up your act.</p>";
  }
  // One Hit Wonder
  else if (ch_wins == 1) {
    var misery_level =
      "<h2>Misery Level: The One Hit Wonder.</h2><p>In the ~" +
      time_alive +
      " years you have been alive. Your team(s) have only brought you sweet victory once." +
      " Only once were you able to be smug to everyone else about who the reigning champions are." +
      " But we both know once is not enough. You crave more even though you kept telling yourself " +
      " <i>'I just wanna see them win it once.'</i> so you didn't sound like a sore loser." +
      " You will spend the remaining years of your life chasing, hoping, dreaming, for just one more hit." +
      " Good luck buddy, you and your team(s) are gonna need it.</p>";
  }
  // Once a Decade Dan
  else if (ch_wins >= 2 && time_per_ch >= 10 && time_per_ch <= 12) {
    var misery_level =
      "<h2>Misery Level: Once a Decade Dan/Danielle</h2><p>About once every decade your team(s) bring one home." +
      " You savor those moments because you know the next time you get that feeling, the world will be a different place." +
      " In the meantime be at peace knowing you're not your neighbor, you know the guy who passionately follows 10+ teams. All of whom never bring him" +
      " anything but misery years after year, with some false hope sprinkled in. You're not him. Good for you. </p>";
  }
  // The Patient One
  else if (ch_wins >= 2 && time_per_ch >= 13 && time_per_ch <= 21) {
    var misery_level =
      "<h2>Misery Level: The Patient One</h2><p>About once every other decade your team(s) bring one home." +
      " You savor those moments because you know the next time you get that feeling may not be until your toddler is putting you in debt with their college tuition" +
      " There's probably something the Dali Lama once said that is supposed to make you feel better, but let's be honest," +
      " no buddhist zen is going to stop you from yelling at your team(s) when they choke in the playoffs, if they even manage to qualify." +
      " Here's to you oh loyal fan. </p>";
  }
  // The One Realizing It's Not a Phase
  else if (ch_wins >= 2 && time_per_ch >= 22 && time_per_ch <= 50) {
    var misery_level =
      "<h2>Misery Level: The One Realizing Your Team(s) Bad Luck isn't 'Just a Phase'</h2><p>About once every quarter century or so your team(s) bring one home." +
      "Your team(s) are the ones who will spend everything they have on one season, once every few years, only to blow it, sell off all the good players," +
      " and force you to watch them compete for the bottom of the standings for the next 5-7 years. But you know that one day, it will happen again." +
      " They'll take the top spot and bring home the prize. So like a gambler who won big years ago, you keep coming back hoping, praying the next payout will be" +
      " enough to pay off all the debts and time spent since the last big win.</p>";
  }
  // Moderately Happy
  else if (ch_wins >= 2 && time_per_ch >= 5 && time_per_ch <= 9) {
    var misery_level =
      "<h2>Misery Level: Moderately Happy</h2><p>About once every 5-7 years your team(s) bring one home." +
      " They're not the best, but they're relatively dependable." +
      " They hurt you occasionally, but you know they only need to make a few adjustments and they'll win it all again." +
      " <br>You picked good team(s) to follow or maybe your parents chose the right place to raise a family." +
      " Sports misery is often a factor, along with quality of schools, that a couple should consider when they settle down and raise a family.</p>";
  }
  // Happy Sports Fan
  else if (ch_wins >= 2 && time_per_ch >= 0 && time_per_ch <= 4) {
    var misery_level =
      "<h2>Misery Level: The Happy Sports Fan</h2><p>The time you spend waiting for one of your team(s) to bring home the big one are few and far between." +
      " Your friends and other fans see you as spoiled, but you know they're jealous. The secret isn't that you're a band wagon fan. The secret to their success" +
      " is from fans like you. ❤️</p>";
  }
  // Error
  else {
    var misery_level = "Error. Misery too strong to comprehend...";
  }
  return misery_level;
};
