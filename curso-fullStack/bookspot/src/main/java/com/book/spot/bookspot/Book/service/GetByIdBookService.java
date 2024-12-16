package com.book.spot.bookspot.Book.service;

import com.book.spot.bookspot.Book.dto.GetByIdBookResponseDTO;

import java.util.Optional;

@FunctionalInterface
public interface GetByIdBookService {
    Optional<GetByIdBookResponseDTO> findById(Long id);
}
