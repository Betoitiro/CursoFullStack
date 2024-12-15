package com.book.spot.bookspot.Book.service;

import com.book.spot.bookspot.Book.dto.GetAllBookResponseDTO;
import com.book.spot.bookspot.Book.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetAllBookServiceImpl implements GetAllBookService{
    private final BookRepository bookRepository;
    @Override
    public List<GetAllBookResponseDTO> findAll() {
        return bookRepository.findAll()
                .stream()
                .map(GetAllBookResponseDTO::from)
                .toList();
    }
}
