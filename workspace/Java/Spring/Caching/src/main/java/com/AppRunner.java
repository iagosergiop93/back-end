package com;

import com.entities.Book;
import com.repositories.BookData;
import com.repositories.SimpleBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AppRunner implements CommandLineRunner {

    private SimpleBookRepository repo;

    @Autowired
    public AppRunner(SimpleBookRepository repo) {
        this.repo = repo;
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Adding books ...");
        BookData.addBook(new Book("First Book", "1"));
        BookData.addBook(new Book("Second Book", "2"));
        BookData.addBook(new Book("Third Book", "3"));
        BookData.addBook(new Book("Fourth Book", "4"));


        System.out.println("\nGetting all books with Cached method...");
        List<Book> books = repo.getBooksCached();
        for(Book item : books) {
            System.out.println(item.toString());
        }

        System.out.println("\nGetting all books for second time with Cached method ...");
        books = repo.getBooksCached();
        for(Book item : books) {
            System.out.println(item.toString());
        }

        System.out.println("\nGetting all books for third time without Cached method ...");
        books = repo.getBooks();
        for(Book item : books) {
            System.out.println(item.toString());
        }

        System.exit(0);
    }
}
