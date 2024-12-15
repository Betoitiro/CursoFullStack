package com.book.spot.bookspot.Book.service;

import com.book.spot.bookspot.Book.dto.CreateBookRequestDTO;
import com.book.spot.bookspot.Book.jpa.Book;
import com.book.spot.bookspot.Book.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CreateBookServiceImpl implements CreateBookService{
    private final BookRepository bookRepository;
    @Override
    public void createBook(CreateBookRequestDTO createBookRequestDTO) {
        var book = Book.builder()
                .tituloLivro(createBookRequestDTO.getTitulo())
                .resumo(createBookRequestDTO.getResumo())
                .conteudoCompleto(createBookRequestDTO.getConteudoCompleto())
                .autor(createBookRequestDTO.getAutor())
                .build();
        bookRepository.save(book);
    }
}
