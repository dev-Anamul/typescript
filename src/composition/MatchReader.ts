import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { dateStringToDate } from "../utils";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  // ! load is a function that takes no arguments and returns nothing
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return {
        date: dateStringToDate(row[0]),
        homeTeam: row[1],
        awayTeam: row[2],
        homeScore: parseInt(row[3]),
        awayScore: parseInt(row[4]),
        winner: row[5] as MatchResult,
        referee: row[6]?.split("\r")[0],
      };
    });
  }
}
