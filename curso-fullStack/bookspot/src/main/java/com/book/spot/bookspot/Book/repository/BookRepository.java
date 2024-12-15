package com.book.spot.bookspot.Book.repository;

import com.book.spot.bookspot.Book.jpa.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
}
