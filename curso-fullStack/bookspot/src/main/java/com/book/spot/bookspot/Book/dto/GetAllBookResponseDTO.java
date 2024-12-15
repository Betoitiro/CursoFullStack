package com.book.spot.bookspot.Book.dto;

import com.book.spot.bookspot.Book.jpa.Book;
import com.book.spot.bookspot.autor.jpa.Autor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class GetAllBookResponseDTO {
    private String titulo;
    private Autor autor;
    private String resumo;

    public static GetAllBookResponseDTO from(Book book) {
        return GetAllBookResponseDTO.builder()
                .titulo(book.getTituloLivro())
                .resumo(book.getResumo())
                .autor(book.getAutor())
                .build();
    }
}
