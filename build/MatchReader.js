"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./inheritance/CsvFileReader");
const utils_1 = require("./utils");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(row) {
        var _a;
        return {
            date: (0, utils_1.dateStringToDate)(row[0]),
            homeTeam: row[1],
            awayTeam: row[2],
            homeScore: parseInt(row[3]),
            awayScore: parseInt(row[4]),
            winner: row[5],
            referee: (_a = row[6]) === null || _a === void 0 ? void 0 : _a.split("\r")[0],
        };
    }
}
exports.MatchReader = MatchReader;
