# 📚 Bookshelf API

> This project is a submission for the **"Belajar Membuat Aplikasi Back-End untuk Pemula"** course at **Dicoding Indonesia**.

A lightweight API designed to manage your personal book collection. This project allows users to store, retrieve, update, and delete book data efficiently.

## 🚀 Key Features
- Add Books: Save new book entries to the collection.
- List Books: View all books or filter the collection.
- Book Details: Access detailed information for a specific book.
- Update Books: Edit information for existing entries.
- Delete Books: Remove books from the database.

## 🛠️ Installation & Setup
1. Clone the repository:
```bash
git clone https://github.com/habdwahid/bookshelf-api.git
```

2. Navigate to the directory:
```bash
cd bookshelf-api
```

3. Install dependencies:
```bash
npm install
```

4. Run the application:
```bash
npm run start
```

## 🛣️ API Endpoints
| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/books` | Add a new book |
| `GET` | `/books` | Get all books |
| `GET` | `/books/{id}` | Get book details by ID |
| `PUT` |`/books/{id}` | Update book data by ID |
| `DELETE` | `/books/{id}` | Delete a book by ID |

## 📝 Data Format (JSON)
When adding a book, use the following structure for the request body:
```json
{
    "name": "The Great Gatsby",
    "year": 1925,
    "author": "F. Scott Fitzgerald",
    "summary": "A story of wealth, love, and the American Dream.",
    "publisher": "Charles Scribner's Sons",
    "pageCount": 180,
    "readPage": 50,
    "reading": false
}
```

***Note: Ensure you have Node.js installed on your machine before running this project.***
