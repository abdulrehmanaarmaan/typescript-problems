# Advanced Problem Solving with TypeScript & OOP

This repository contains solutions for various advanced TypeScript problem-solving tasks focused on Generics, Type Guards, Interfaces, and Object-Oriented Programming (OOP).

The project demonstrates clean coding practices, reusable logic, strict type safety, and scalable TypeScript structure.

---

# 📁 Project Structure

```bash
├── solutions.ts
├── blog-1.md
├── blog-2.md
└── README.md
```

---

# 🚀 Technologies Used

TypeScript

---

# ✅ Problem Solutions

## Problem 1 — Filter Even Numbers

Created a function `filterEvenNumbers` that returns only even numbers from an array.

### Example

```ts
filterEvenNumbers([1, 2, 3, 4, 5, 6])

// Output:
[2, 4, 6]
```

---

## Problem 2 — Reverse String

Created a function `reverseString` that reverses a string.

### Example

```ts
reverseString("typescript")

// Output:
"tpircsepyt"
```

---

## Problem 3 — Type Guards with Union Types

Used union types and type guards to determine whether the input is a string or number.

### Example

```ts
checkType("Hello")
// Output: "String"

checkType(42)
// Output: "Number"
```

---

## Problem 4 — Generic Function

Implemented a reusable generic function `getProperty` with constraints to safely access object properties.

### Example

```ts
const user = {
  id: 1,
  name: "John Doe",
  age: 21
}

getProperty(user, "name")

// Output:
"John Doe"
```

---

## Problem 5 — Interface and Object Manipulation

Created a `Book` interface and added dynamic read status functionality.

### Example

```ts
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024
}

toggleReadStatus(myBook)
```

### Output

```ts
{
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
  isRead: true
}
```

---

## Problem 6 — Class Inheritance

Implemented inheritance using `Person` and `Student` classes.

### Example

```ts
const student = new Student("Alice", 20, "A")

student.getDetails()
```

### Output

```ts
"Name: Alice, Age: 20, Grade: A"
```

---

## Problem 7 — Array Intersection

Created a function that returns common elements between two arrays.

### Example

```ts
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])

// Output:
[3, 4, 5]
```

---

# 📝 Blog Topics Covered

## Blog 1

### Pick and Omit Utility Types in TypeScript

Discussed how `Pick` and `Omit` help create reusable and specialized types while keeping code DRY.

---

## Blog 2

### Generics in TypeScript

Explained how Generics help build reusable and strictly typed functions and components.

---

# 🎯 Project Goals

- Practice TypeScript fundamentals
- Improve problem-solving skills
- Understand Generics and Utility Types
- Apply OOP concepts
- Write clean and reusable code

---

# 📌 Important Notes

- All solutions are written in a single `solutions.ts` file
- Exact function names were maintained
- Clean and readable TypeScript syntax was followed
- No unnecessary comments or console statements were added