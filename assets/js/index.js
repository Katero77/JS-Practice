"use strict";

/*1*/
function calculateSequence(N){
  if(N < 1){
    throw new RangeError();
  }
  let result = 0;
  for(let i = 1; i <= N; i++){
    result += i
  }
  return result;
}

console.log(calculateSequence(4));


/*2.1 2.2 2.3 2.4 */

class Student{
  constructor(name, surname, isMale, contacts){
    this.name = name;
    this.surname = surname;
    this.isMale = isMale;
    this.contacts = contacts;
    this._info = null;
  }

  get name(){
    return this._name;
  }

  get surname(){
    return this._surname;
  }

  get isMale(){
    return this._isMale;
  }

  get contacts(){
    return this._contacts;
  }

  set name(newValue){
    this._validateType(newValue, "string");
    this._name = newValue;
  }
  set isMale(newValue){
    this._validateType(newValue, "boolean");
    this._isMale = newValue;
  }

  set surname(newValue){
    this._validateType(newValue, "string");
    this._surname = newValue;
  }

  set contacts(newValue){
    this._validateType(newValue, "string");
    this._contacts = newValue;
  }

  _validateType(value, type){
    if(typeof(value) !== type){
      throw new TypeError();
    }
  }

  addInfoAboutFaculty(info){
    if(!(info instanceof Faculty)){
      throw new TypeError();
    }
    this._info = info;
  }

  showInformation(){
    console.log(`Info about student: Name:${this.name}, surname: ${this.surname},`+ ` gender:${this.isMale ? "man" : "woman"}, contacts: ${this.contacts} ${this._info ? this._info : "data about info not specified!"}`);
  }
}

class Faculty{
  constructor(aboutFaculty, department){
    this.faculty = aboutFaculty;
    this.department = department;
  }

  get faculty(){
    return this._faculty;
  }

  get department(){
    return this._department;
  }

  set faculty(newValue){
    this._validateType(newValue, "string");
    this._faculty = newValue;
  }

  set department(newValue){
    this._validateType(newValue, "string");
    this._department = newValue;
  }

  toString(){
    return `faculty: ${this.faculty} department: ${this.department}`;
  }

  _validateType(value, type){
    if(typeof(value) !== type){
      throw new TypeError();
    }
  }
}

const student1 = new Student("Rimma", "Bond", true, "city DP");
const student2 = new Student("Volk", "Rench", false, "Kyiv");
const faculty = new Faculty("История", "Физическое воспитание");

console.log("Add info:");
student1.addInfoAboutFaculty(faculty);
student2.addInfoAboutFaculty(faculty);
student1.showInformation();
student2.showInformation();

/*3 3.1 3.2 3.3 3.4 3.5*/

/**
 * 
 * @param {number} size 
 * @param {number} min 
 * @param {number} max 
 * @returns array
 */
function generateRandomArray(size, min, max){
  const array = [];
  for(let i = 0; i < size; i++){
    const item = Math.floor( Math.random() * (max - min + 1) + min);
    array.push(item);
  } 
  return array;
}

const ARRAY_SIZE = 25;
const MIN_VALUE = 0;
const MAX_VALUE = 60;
const arr = generateRandomArray(ARRAY_SIZE, MIN_VALUE, MAX_VALUE);
console.log(arr);
console.log("Вывести элементы с четными индексами");
arr.forEach((item, index) => {
  if(index % 2 === 0){
    console.log(item);
  }
});



console.log("Вывести только четные элементы (четные числа делятся на 2 без остатка)");
arr.forEach((item) => {
  if(item % 2 === 0){
    console.log(item);
  }
});
console.log("Вывести индексы нулевых элементов (элемент равен нулю)");
arr.forEach((item, index) => {
  if(item === 0){
    console.log(index);
  }
});

console.log("Подсчитать количество нулевых элементов");

const numberCounter = (findNumber, arr) => arr.reduce((acc, nextValue) => {
  nextValue === findNumber ? acc++ : acc;
  return acc;
}, 0);
const zeroCounter = numberCounter(0, arr);
console.log(zeroCounter);


/*4 4.1*/
class Book{
  constructor(autor, title, publishingYear, publishing){
    this.autor = autor;
    this.title = title;
    this.publishingYear = publishingYear;
    this.publishing = publishing;
  }

  get autor(){
    return this._autor;
  }

  get title(){
    return this._title;
  }

  get publishingYear(){
    return this._publishingYear;
  }

  get publishing(){
    return this._publishing;
  }

  set autor(newValue){
    this._validateType(newValue, "string");
    if(!newValue.length){
      throw new RangeError();
    }
    this._autor = newValue;
  }

  set title(newValue){
    this._validateType(newValue, "string");
    if(!newValue.length){
      throw new RangeError();
    }
    this._title = newValue;
  }

  set publishingYear(newValue){
    this._validateType(newValue, "number");
    const currentYear = new Date().getFullYear();
    if(newValue > currentYear){
      throw new RangeError();
    }
    this._publishingYear = newValue;
  }

  set publishing(newValue){
    this._validateType(newValue, "string");
    if(!newValue.length){
      throw new RangeError();
    }
    this._publishing = newValue;
  }

  _validateType(value, type){
    if(typeof(value) !== type){
      throw new TypeError();
    }
  }
}

class ElectronicBook extends Book{
  constructor(autor, title, publishingYear, publishing, format, isbn){
    super(autor, title, publishingYear, publishing);
    this.format = format;
    this.isbn = isbn;
  }

  get format(){
    return this._format;
  }

  get isbn(){
    return this._isbn;
  }
  set isbn(newValue){
    this._validateType(newValue, "number");
    this._isbn = newValue;
  }

  set format(newValue){
    this._validateType(newValue, "string");
    this._format = newValue;
  }

}

console.log("Info about books");
const book = new Book("Jim Afremow", "The champion`s comeback", 2016, "Azbyka");
console.log(book);
const eBook = new ElectronicBook("Jim Afremow", "The champion`s comeback", 2016, "pdf", 9785389157 );
console.log(eBook);

/*5 */

function print(n){
  for(let i = 1; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("fizzbuzz");
    } else if(i % 3 === 0){
      console.log("fizz");
    }else if(i % 5 === 0){
      console.log("buzz");
    }else{
      console.log(i);
    }
  }
}

console.log("Test function print");
print(40);
