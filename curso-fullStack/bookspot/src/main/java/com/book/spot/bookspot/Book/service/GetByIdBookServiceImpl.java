package com.book.spot.bookspot.Book.service;

import com.book.spot.bookspot.Book.dto.GetByIdBookResponseDTO;
import com.book.spot.bookspot.Book.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GetByIdBookServiceImpl implements GetByIdBookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public Optional<GetByIdBookResponseDTO>   findById(Long id){
        return bookRepository.findById(id)
                .map(GetByIdBookResponseDTO::from);

    }
}
