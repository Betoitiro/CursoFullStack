package com.book.spot.bookspot.Book.service;

import com.book.spot.bookspot.Book.dto.CreateBookRequestDTO;
import com.book.spot.bookspot.Book.jpa.Book;
import com.book.spot.bookspot.Book.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CreateBookServiceImpl implements CreateBookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public void createBook(CreateBookRequestDTO createBookRequestDTO) {
        Book book = new Book();
        book.setTituloLivro(createBookRequestDTO.getTitulo());
        book.setResumo(createBookRequestDTO.getResumo());
        book.setConteudoCompleto(createBookRequestDTO.getConteudoCompleto());
        book.setAutor(createBookRequestDTO.getAutor());

        bookRepository.save(book);
    }
}
