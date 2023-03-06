"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const MatchResult_1 = require("./MatchResult");
const MatchReader_1 = require("./inheritance/MatchReader");
const CsvFileReader_1 = require("./composition/CsvFileReader");
const MatchReader_2 = require("./composition/MatchReader");
const Summery_1 = require("./Summery");
const WinsAnalysis_1 = require("./analysis/WinsAnalysis");
const ConsoleReports_1 = require("./reportsTarget/ConsoleReports");
const HtmlReport_1 = require("./reportsTarget/HtmlReport");
// ! This is a relative path to the data folder
const filePath = path_1.default.join(__dirname, "../data/football.csv");
/// ! Inheritance
const csvFileReader = new MatchReader_1.MatchReader(filePath);
csvFileReader.read();
let manUnitedWins = 0;
for (let match of csvFileReader.data) {
    if (match.homeTeam === "Man United" && match.winner === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match.awayTeam === "Man United" &&
        match.winner === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
/// ! Composition
const csvFileReader2 = new CsvFileReader_1.CsvFileReader(filePath);
const matchReader = new MatchReader_2.MatchReader(csvFileReader2);
matchReader.load();
const summery = new Summery_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new HtmlReport_1.HtmlReport());
const summery2 = new Summery_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new ConsoleReports_1.ConsoleReports());
summery.buildAndPrintReport(matchReader.matches);
summery2.buildAndPrintReport(matchReader.matches);
