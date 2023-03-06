import fs from "fs";

export class CsvFileReader {
  data: string[][] = [];
  constructor(private filePath: string) {}

  // ! read is a function that takes no arguments and returns nothing
  read(): void {
    this.data = fs
      .readFileSync(this.filePath, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}
