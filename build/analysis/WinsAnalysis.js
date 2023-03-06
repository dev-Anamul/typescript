"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match.homeTeam === this.team &&
                match.winner === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match.awayTeam === this.team &&
                match.winner === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return `Team ${this.team} won ${wins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
