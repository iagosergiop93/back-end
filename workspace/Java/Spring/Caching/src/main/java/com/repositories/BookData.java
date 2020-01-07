package com.repositories;

import com.entities.Book;

import java.util.ArrayList;
import java.util.List;

public class BookData {

    private static List<Book> bookList = new ArrayList<>();

    public static List<Book> getBookList() {
        return bookList;
    }

    public static boolean addBook(Book book) {
        bookList.add(book);
        return true;
    }

}
