import { MatchResult } from "./MatchResult";

export interface MatchData {
  date: Date;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  winner: MatchResult;
  referee: string;
}
