import path from "path";
import { MatchResult } from "./MatchResult";
import { MatchReader } from "./inheritance/MatchReader";
import { CsvFileReader } from "./composition/CsvFileReader";
import { MatchReader as ComoseMatchReader } from "./composition/MatchReader";
import { Summary } from "./Summery";
import { WinsAnalysis } from "./analysis/WinsAnalysis";
import { ConsoleReports } from "./reportsTarget/ConsoleReports";
import { HtmlReport } from "./reportsTarget/HtmlReport";

// ! This is a relative path to the data folder
const filePath = path.join(__dirname, "../data/football.csv");

/// ! Inheritance
const csvFileReader = new MatchReader(filePath);
csvFileReader.read();

let manUnitedWins = 0;
for (let match of csvFileReader.data) {
  if (match.homeTeam === "Man United" && match.winner === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (
    match.awayTeam === "Man United" &&
    match.winner === MatchResult.AwayWin
  ) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);

/// ! Composition
const csvFileReader2 = new CsvFileReader(filePath);
const matchReader = new ComoseMatchReader(csvFileReader2);
matchReader.load();

const summery = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
const summery2 = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReports()
);

summery.buildAndPrintReport(matchReader.matches);
summery2.buildAndPrintReport(matchReader.matches);
