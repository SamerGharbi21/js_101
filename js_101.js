const books = [];

function addBook(bookId, title, author, price, quantity) {
    const book = {
        "bookId": bookId,  "title": title, "author": author,  "price": price,  "quantity": quantity
    };

    books.push(book);
}

function updateBook(bookId, title=null, author=null, price=null, quantity=null) {
    for (const book of books) {
        if (book["bookId"] == bookId) {
            if (title != null) {
                book["title"] = title;
            }
            if (author != null) {
                book["author"] = author;
            }
            if (price != null) {
                book["price"] = price;
            }
            if (quantity != null) {
                book["quantity"] = quantity;
            }
            break;
        }
    }
}

function deleteBook(bookId) {
    for (let i = 0; i < books.length; i++) {
        if (books[i]["bookId"] == bookId) {
            books.splice(i, 1);
            break;
        }
    }
}

function showBookInfo(bookId) {
    for (const book of books) {
        if (book["bookId"] == bookId) {
            console.log("book number :", book["bookId"]);
            console.log("book title :", book["title"]);
            console.log("auther name :", book["author"]);
            console.log("price :", book["price"]);
            console.log("quantity:", book["quantity"]);
            break;
        }
    }
}

function sellBook(title, quantity, balance) {
    for (const book of books) {
        if (book["title"] == title) {
            if (book["quantity"] >= quantity) {
                book["quantity"] -= quantity;

                const invoiceAmount = quantity * book["price"];

                if (balance >= invoiceAmount) {
                    balance -= invoiceAmount;

                    console.log("bill");
                    console.log("title book:", book["title"]);
                    console.log("quantity:", quantity);
                    console.log("price:", book["price"]);
                    console.log("price  bill:", invoiceAmount);
                    console.log("amount left:", balance);
                } else {
                    console.log("not enough");
                }
                break;
            }
        }
    }
}


    //  **** MAIN ****


    addBook(1, "1st book ", "1st auther", 10, 100);
    addBook(2, "2nd book ", "2nd auther", 20, 200);
    addBook(3, "3rd book ", "3rd  auther", 30, 300);

    showBookInfo(1);

    updateBook(2, title=" new book ");

    deleteBook(3);

    sellBook("1st book ", 2, 1000);
