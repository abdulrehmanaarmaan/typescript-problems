type FilterEvenNumbers = (numbers: number[]) => number[]

const filterEvenNumbers: FilterEvenNumbers = numbers => {
    const evenNumbers = numbers.filter(number => number % 2 === 0)
    return evenNumbers
}


type ReverseString = (string: string) => string

const reverseString: ReverseString = string => {
    const reversedString = string.split("").reverse().join("")
    return reversedString
}


type StringOrNumber = string | number

type CheckType = (input: StringOrNumber) => string

const checkType: CheckType = input => {
    return typeof input === 'string' ? "String" : "Number"
}


const getProperty = <T>(object: T, key: keyof T) => {
    return object[key]
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

type ToggleReadStatus = (book: Book) => object

const toggleReadStatus: ToggleReadStatus = book => {
    return { ...book, isRead: true }
}


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


type GetIntersection = (numbers: number[], rest: number[]) => number[]

const getIntersection: GetIntersection = (numbers, rest) => {
    const commonNumbers = numbers.filter(number => rest.includes(number))
    return commonNumbers
}
