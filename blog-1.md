# How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

## Introduction

`Pick` and `Omit` are utility types in TypeScript that help developers create specialized versions of existing types without rewriting code manually. They help keep the code DRY (Don't Repeat Yourself) and improve maintainability.

---

## What is `Pick`?

`Pick` creates a new type by selecting specific properties from an existing type.

### Example

```ts
type Person = {
    name: string;
    email: string;
    age: number;
}
```

Using Pick:

type Admin = Pick<Person, 'name' | 'email'>

Now the Admin type contains only:

{
    name: string;
    email: string;
}

This is useful when only specific fields are needed from a larger type.

## What is Omit?

Omit creates a new type by excluding specific properties from an existing type.

### Example

type Student = Omit<Person, 'age'>

Now the Student type contains:

{
    name: string;
    email: string;
}

Here, all properties from Person are included except age.

## How do Pick and Omit Keep Code DRY?

Without these utility types, developers would need to manually create similar types repeatedly, which increases duplication and maintenance complexity.

Using Pick and Omit:

- Reduces repetitive code
- Keeps types consistent
- Improves maintainability
- Makes applications easier to scale

If the original type changes, derived types automatically stay updated.

## Conclusion

Pick and Omit are powerful utility types in TypeScript that help developers create reusable and maintainable code. They allow specialized slices of existing types while reducing duplication and keeping applications clean and scalable.