import { OutputTarget } from "../Summery";

export class ConsoleReports implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
