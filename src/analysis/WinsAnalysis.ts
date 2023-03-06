import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summery";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if (
        match.homeTeam === this.team &&
        match.winner === MatchResult.HomeWin
      ) {
        wins++;
      } else if (
        match.awayTeam === this.team &&
        match.winner === MatchResult.AwayWin
      ) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }
}
