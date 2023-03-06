import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "../MatchResult";
import { dateStringToDate } from "../utils";
import { MatchData } from "../MatchData";

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return {
      date: dateStringToDate(row[0]),
      homeTeam: row[1],
      awayTeam: row[2],
      homeScore: parseInt(row[3]),
      awayScore: parseInt(row[4]),
      winner: row[5] as MatchResult,
      referee: row[6]?.split("\r")[0],
    };
  }
}
