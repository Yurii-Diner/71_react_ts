let age: number= 25;  

let name: string = "Alice";

let isActive: boolean = true; 

let nullableValue: string | null = null; // Строка или null

let numbers: number[] = [1, 2, 3, 4]; 

let names: string[] = ["Alice", "Bob", "Charlie"];

let mixed: (number | string)[] = [1, "Alice", 2, "Bob"];

let colors: (number | string | boolean)[] = [123, "red", true, "blue"];

const add = (a: number, b: number): number => {
  return a - b;
};

const logMessage = (message: string): void => {
  console.log(message);
};