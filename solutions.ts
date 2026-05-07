// Problem 1

type FilterEvenNumbers = (numbers: number[]) => number[]

const filterEvenNumbers: FilterEvenNumbers = numbers => {
    const evenNumbers = numbers.filter(number => number % 2 === 0)
    return evenNumbers
}

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))

// Problem 2

type ReverseString = (string: string) => string

const reverseString: ReverseString = string => {
    const reversedString = string.split("").reverse().join("")
    return reversedString
}

// console.log(reverseString("typescript"))

// Problem 3

type StringOrNumber = string | number

type CheckType = (input: StringOrNumber) => string

const checkType: CheckType = input => {
    return typeof input === 'string' ? "String" : "Number"
}

// console.log(checkType("Hello"))
// console.log(checkType(42))

// Problem 4

const getProperty = <T>(object: T, key: keyof T) => {
    return object[key]
}

// const user = { id: 1, name: "John Doe", age: 21 };
// console.log(getProperty(user, "name"))

// Problem 5

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

type ToggleReadStatus = (book: Book) => object

const toggleReadStatus: ToggleReadStatus = book => {
    return { ...book, isRead: true }
}

// const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// console.log(toggleReadStatus(myBook));

// Problem 6

class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

class Student extends Person {
    grade: string

    constructor(name: string, age: number, grade: string) {
        super(name, age)
        this.grade = grade
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}

// const student = new Student("Alice", 20, "A");
// console.log(student.getDetails());

// Problem 7

type GetIntersection = (numbers: number[], rest: number[]) => number[]

const getIntersection: GetIntersection = (numbers, rest) => {
    const commonNumbers = numbers.filter(number => rest.includes(number))
    return commonNumbers
}

// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))