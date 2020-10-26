package com.example.demo.books.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.books.entities.Book;

@Repository
public interface BookRepo extends JpaRepository<Book, Integer> {

}
