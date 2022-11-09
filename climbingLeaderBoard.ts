/**
 *
 * https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
 * An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this: • The player with the highest score is ranked number 1 on the leaderboard. • Players who have equal scores receive the same ranking number, and the next players) receive the immediately following ranking number. Example ranked = [100, 90, 90, 80] player = [70, 80, 105] The ranked players will have ranks 1, 2, 2, and 3, respectively. If the player's scores are 70, 80 and 105, their rankings after each game are 4th, ard and 1st. Return [4, 3, 1].
 *
 */
const ranked = [100, 90, 90, 80];
const player = [70, 80, 105];

console.log('User Ranking is', climbingLeaderBoard(ranked, player));

function climbingLeaderBoard(ranked: number[], player: number[]): number[] {
  let userRanking: Array<number>;
  userRanking = player.map((score) => getUserRanking(score));
  return userRanking;
  function getUserRanking(score: number): number {
    let modifiedRanking = Array.from(new Set([...ranked, score]));
    modifiedRanking.sort(function compareNumbers(a, b) {
      return b - a;
    });
    return modifiedRanking.indexOf(score) + 1;
  }
}
