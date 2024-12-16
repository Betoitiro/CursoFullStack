package com.book.spot.bookspot.Book.service;

import com.book.spot.bookspot.Book.dto.CreateBookRequestDTO;
import com.book.spot.bookspot.Book.jpa.Book;
import com.book.spot.bookspot.Book.repository.BookRepository;
import com.book.spot.bookspot.autor.jpa.Autor;
import com.book.spot.bookspot.autor.repository.AutorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CreateBookServiceImpl implements CreateBookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private AutorRepository autorRepository;

    @Override
    public void createBook(CreateBookRequestDTO createBookRequestDTO) {
        Autor autor = autorRepository.findById(createBookRequestDTO.getAutor().getId())
                .orElseThrow(() -> new IllegalArgumentException("Autor não encontrado"));

        Book book = new Book();
        book.setTituloLivro(createBookRequestDTO.getTitulo());
        book.setResumo(createBookRequestDTO.getResumo());
        book.setConteudoCompleto(createBookRequestDTO.getConteudoCompleto());
        book.setAutor(autor);

        bookRepository.save(book);
    }
}
