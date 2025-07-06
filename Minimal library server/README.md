# Library Management API

A RESTful API for managing books and borrowing records, built using Node Js, Express and MongoDB (with Mongoose)

## Key Features

1. Book Management

   - Create, Read, Update, Delete books
   - Filter books by genre
   - Sort and limit result

2. Borrowing System

   - Borrow books by quantity
   - Deduct available copies on borrow
   - Automatically set the availability status if there is no copies of the book

3. Validations

- Schema-level validations
- Custom error message for user friendly

4. Folder structure

- Looks clean and compact

## Here are some end points

### Books

| Method | Endpoint         |
| ------ | ---------------- |
| GET    | "/api/books"     |
| POST   | "/api/books"     |
| GET    | "/api/books/:id" |
| PUT    | "/api/books/:id" |
| DELETE | "/api/books/:id" |

### Borrow

| Method | Endpoint      |
| ------ | ------------- |
| POST   | "/api/borrow" |
| GET    | "/api/borrow" |

### Techies

- Backend :- Node.js, Express,
- Database :- MongoDB, Mongoose
- Language :- TypeScript
- API Tester : Postman
