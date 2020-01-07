package com.repositories;

import com.entities.Book;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SimpleBookRepository {

    public List<Book> getBooks() {
        generateDelay(3000L);
        return BookData.getBookList();
    }

    @Cacheable("books")
    public List<Book> getBooksCached() {
        generateDelay(3000L);
        return BookData.getBookList();
    }

    private void generateDelay(long time) {
        try {
            Thread.sleep(time);
        } catch (InterruptedException e) {
            throw new IllegalStateException(e);
        }
    }

}
