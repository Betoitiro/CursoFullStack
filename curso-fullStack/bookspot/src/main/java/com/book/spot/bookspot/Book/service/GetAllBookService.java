package com.book.spot.bookspot.Book.service;

import com.book.spot.bookspot.Book.dto.GetAllBookResponseDTO;

import java.util.List;

@FunctionalInterface
public interface GetAllBookService {
    List<GetAllBookResponseDTO> findAll();
}
