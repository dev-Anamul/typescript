import fs from "fs";

export abstract class CsvFileReader<T> {
  // ! data is an array of arrays of generic type T
  data: T[] = [];

  // ! filePath is a string
  constructor(private filePath: string) {}

  // ! mapRow is a function that takes an array of strings and returns a generic type T
  abstract mapRow(row: string[]): T;

  // ! read is a function that takes no arguments and returns nothing
  read(): void {
    this.data = fs
      .readFileSync(this.filePath, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}
