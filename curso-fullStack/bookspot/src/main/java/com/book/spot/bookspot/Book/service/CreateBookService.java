package com.book.spot.bookspot.Book.service;

import com.book.spot.bookspot.Book.dto.CreateBookRequestDTO;

@FunctionalInterface
public interface CreateBookService {
    void createBook(CreateBookRequestDTO createBookRequestDTO);
}
