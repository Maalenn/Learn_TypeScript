// Object

// import { extend } from "dayjs";

// const user: {
//   id: number;
//   name: string;
//   isSingle: boolean;
// } = {
//   id: 1,
//   name: "Malen",
//   isSingle: true,
// };
/////////////////////////////////

// Array
// const obj: string[] = ["Teacher", "Student"];

/////////////////////////////////

//Tuples
// const data: [string, number] = ["Apple", 100];

// let student: [id: number, name: string];

// student = [1, "heng"];

/////////////////////////////////

// Function

// function calc(a: number, b: number): number {
//   return a * b;
// }

// const greeting = (name: string): string => {
//   return `Nice to see you ${name}`;
// };

// greeting("Khun Malen")

// const welcome = (name: string): string => {
//     console.log(`Nice to see you ${name}`);
//   };

/////////////////////////////////

// Function More
// const totalSalary = (salary: number[]): number =>
//   salary.reduce((p, c) => p + c);

// console.log(totalSalary([10, 20]));

//Tuple in Function
// function func(): [number, string] {
//   return [10, "Malen"];
// }

/////////////////////////////////

// Interface

// interface Post {
//   id: number;
//   author: string;
//   text: string;
//   tags: string[];
//   date: Date;
// }

// const postOne: Post = {
//   id: 1,
//   author: "Malen",
//   text: "She is...",
//   tags: ["Money", "Heart"],
//   date: new Date(),
// };

// console.log(postOne);

/////////////////////////////////

// // Method
// interface Person {
//   name: String;
//   isTall: boolean;
//   walking(): void;
// }

// const personOne: Person = {
//   name: "Malen",
//   isTall: true,
//   walking: () => {
//     console.log("I can walking and run hasha...");
//   },
// };

/////////////////////////////////

// // Interface with Array
// interface Post {
//   id: number;
//   name: string;
// }

// const myArray: Post[] = [
//   {
//     id: 1,
//     name: "Malen",
//   },
//   {
//     id: 2,
//     name: "Tina",
//   },
// ];

/////////////////////////////////

// Interface as Parameter

// interface Post {
//   id: number;
//   author: string;
// }

// const postOne: Post = {
//   id: 1,
//   author: "Malen",
// };

// function getPost(p: Post): void {
//   console.log(`This post is belong to ${p.author}`);
// }

// getPost(postOne);

/////////////////////////////////

// interface Product {
//   quality: string;
// }

// const getProduct = (product: Product): void => {
//   console.log(`The product is ${product.quality}`);
// };

// const car = {
//   quality: "good",
// };

// getProduct(car);

/////////////////////////////////

// // Extend Interface

// interface IUser {
//   name: string;
//   email: string;
// }

/////////////////////////////////

// interface IMember extends IUser {
//   member: string;
// }

// const user: IUser = {
//   name: "Khun Malen",
//   email: "malen8622@gmail.com",
// };

// const guest: IMember = {
//   name: "Hua",
//   email: "huaberkthnom@gmail.com",
//   member: "normal user",
// };

// console.log(user, guest);

/////////////////////////////////

// Type Aliases

// type Grade = string;

// const show = (grade: Grade): void => {
//   console.log(grade);
// };

// show("A");

///////////////////////////////////

//// Type aliases with Tuple
// type RGB = [number, number, number];

// const getColor = (rgb: RGB): RGB => {
//   return rgb;
// };

/////////////////////////////////

// // Type aliases with function
// type Calc = (x: number, y: number) => number;

// // Create array
// const listCalc: Calc[] = [];

// // Create function
// function calc(nOne: number, nTwo: number): number {
//   return nOne + nTwo;
// }

// listCalc.push(calc);

// console.log(listCalc);

/////////////////////////////////

// // Intersection with aliases
// type User = {
//   name: string;
//   email: string;
// };

// type Membership = User & {
//   member: boolean;
// };

/////////////////////////////////

// // Union type
// let email: string | null = null;
// email = "malendjhfgja";

// interface Obj {
//   dbId: string | number | null;
//   userName: string;
// }

// const myObj: Obj = { dbId: 10, userName: "malen" };

// const myArr: (string | number)[] = [10, "apple"];

/////////////////////////////////

// type Size = "XL" | "M" | "S";

// let size: Size = "XL";

// size = "S";

// console.log(size);

/////////////////////////////////

// // Type Guard

// type Id = string | number;

// function transformId(id: Id): Id {
//   if (typeof id === "string") {
//     return parseInt(id);
//   }
//   return id.toString();
// }

// const resulOne = transformId(20);
// const resultTwo = transformId("2334523");

// console.log(resulOne, resultTwo);

/////////////////////////////////

// //Generics Type

// function showValue<T>(value: T) {
//   return value;
// }
// //when we pass number it return number , if we pass string it return string, whatever we pass it will that thing

// //arrow function

// const showVal = <T>(value: T) => value;

/////////////////////////////////

// // Generic (more example)

// function insert(val: any): any {
//   return val.toUppercase();
// }

// insert(10);

/////////////////////////////////

// // Intersection with Generics

// //Create interface for ID
// interface ID {
//   id: number;
// }

// // When we write T like that it means that it will show unknow Type
// function addProduct<T>(obj: T): T & ID {
//   const id = Math.random();
//   return { ...obj, id };
// }

// //Now we try to set type
// type Product = {
//   brand: string;
//   price: number;
// };

// // for now our addProduct has two are Product and ID
// const result = addProduct<Product>({ brand: "Addidas", price: 20 });
// console.log(result);

/////////////////////////////////

// // Generic with interface
// interface Collection<T> {
//   title: string;
//   data: T[];
// }

// const one: Collection<string> = {
//   title: "Computer",
//   data: ["Mac", "windows"],
// };

// const two: Collection<number> = {
//   title: "Computer",
//   data: [10, 20],
// };

/////////////////////////////////

// Classes

// class Car {
//   brand: string;
//   model: string;
//   constructor(brand: string, model: string) {
//     this.brand = brand;
//     this.model = model;
//   }
// }

// const newCar = new Car("BMW", "4 GB");
// const oldCar = new Car("Toyota", "Camer");

// console.log(newCar, oldCar);

/////////////////////////////////

// Union in Class

// type Condition = "New" | "Used good" | "Old";

// class Car {
//   brand: string;
//   model: string;
//   condition: Condition;
//   constructor(brand: string, model: string, condition: Condition) {
//     this.brand = brand;
//     this.model = model;
//     this.condition = condition;
//   }
// }

// const newCar = new Car("BMW", "4 GB", "New");
// const oldCar = new Car("Toyota", "Camery", "Old");

// console.log(newCar, oldCar);

/////////////////////////////////

// // Define method

// class Car {
//   constructor(brand: string, model: string) {
//     this.brand = brand;
//     this.model = model;
//   }

//   brand: string;
//   model: string;
//   features: string[] = [];

//   addFeature(feature: string): void {
//     this.features.push(feature);
//   }
// }

// const newCar = new Car("BMW", "4 GB");
// newCar.addFeature("Power");
// newCar.addFeature("Super");
// console.log(newCar);

// /////////////////////////////////

// // Access Modifier

// class Car {
//     constructor(public brand: string, private model: string) {
//     //   this.brand = brand;
//     //   this.model = model;
//     }

//     // brand: string;
//     // model: string;
//     features: string[] = [];

//     addFeature(feature: string): void {
//       this.features.push(feature);
//     }
//   }

//   const newCar = new Car("BMW", "4 GB");
//   newCar.addFeature("Power");
//   newCar.addFeature("Super");
//   console.log(newCar);

// /////////////////////////////////

// // Inheritance Classes

// class Product {
//   constructor(private title: string, private price: number) {}
//   setDiscount(discount: number): void {
//     const newPrice = this.price - discount;
//     this.price = newPrice;
//   }
// }

// class Car extends Product {
//   constructor(
//     public brand: string,
//     private model: string,
//     title: string,
//     price: number
//   ) {
//     super(title, price);
//   }
// }

// const newCar = new Car("BMW", "4 GB", "Car", 100000);
// newCar.setDiscount(1000);
// console.log(newCar);

/////////////////////////////////

// Classes with interface

// class Product {
//   constructor(protected price: number) {}
//   setDiscount(discount: number): void {
//     const newPrice = this.price - discount;
//     this.price = newPrice;
//   }
// }

// interface Billing {
//   showBill(): string;
// }

// class Car extends Product implements Billing {
//   constructor(
//     public brand: string,
//     private model: string,
//     price: number
//   ) {
//     super(price);
//   }

//   showBill(): string {
//     return `This ${this.model} is cost about ${this.price}`;
//   }
// }

// const newCar = new Car("BMW", "4 GB", 100000);
// newCar.setDiscount(1000);
// console.log(newCar.showBill());

/////////////////////////////////

// // Generic Classes
// class Collection<T> {
//   constructor(private data: T[]) {}
//   addItems(item: T): void {
//     this.data.push(item);
//   }
// }

// const one = new Collection<string | number>(["a", "b"]);
// one.addItems(10);
// console.log(one);

/////////////////////////////////

// Set function
// const numsSet = new Set<number>();
// numsSet.add(2);
// numsSet.add(5);
// numsSet.add(2);
// console.log(numsSet);

// //create interface
// interface Student {
//   name: string;
//   score: number;
// }

// //create obj
// const stOne: Student = { name: "Malen", score: 100 };
// const stTwo: Student = { name: "Tina", score: 110 };

// //create set using set function
// const setStudent = new Set<Student>();

// //add item into set
// setStudent.add(stOne);
// setStudent.add(stTwo);

// //create set funtion to display set
// function printScore(stu: Set<Student>) {
//   stu.forEach((st) => console.log(st.score));
// }

// printScore(setStudent);

/////////////////////////////////

// //enum
// enum Priority {
//   Low,
//   High,
//   Urgent,
// }

// function ticket(problem: string, priority: Priority) {
//   if (priority === Priority.Low) {
//     console.log("Help me when you free");
//   }
//   if (priority === Priority.High) {
//     console.log("Not now but please help at least today");
//   }
//   if (priority === Priority.Urgent) {
//     console.log("Please help right now...");
//   }
// }

// ticket("error code", Priority.Low);

/////////////////////////////

// DOM element

// const link = document.querySelector("a")!;
// link.href;

// /////////////////////////////

// // Define Element Type

// const link = document.querySelector(".link") as HTMLAnchorElement;
// link.href;

/////////////////////////////

// NodeList & HTMLCollection

//NodeList
// const listItems = document.querySelectorAll(
//   ".link"
// ) as NodeListOf<HTMLLIElement>;

// //Collection
// const listAll = document.getElementsByClassName(
//   ".list-item"
// ) as HTMLCollectionOf<HTMLLIElement>;

// // const links = document.querySelectorAll(".link") as NodeListOf<HTMLLIElement>;

import { JSDOM } from "jsdom";

// Simulate the DOM
const dom = new JSDOM(`<!DOCTYPE html><html><body><ul></ul></body></html>`);
const document = dom.window.document;

// // Your existing code
// const list = document.querySelector("ul")!;

// function addListItems(text: string): void {
//   const LI = document.createElement("li");
//   LI.append(text);
//   list.appendChild(LI);
// }

// addListItems("Hi");

// // Log the updated HTML
// console.log(document.body.innerHTML);

const form = document.querySelector("form");
const userName = document.querySelector(".name") as HTMLInputElement;
const userEmail = document.querySelector(".email") as HTMLInputElement;

form?.addEventListener("submit", (e: Event): void => {
  e.preventDefault()
  console.log(userName.value);
  console.log(userEmail.value);
});
