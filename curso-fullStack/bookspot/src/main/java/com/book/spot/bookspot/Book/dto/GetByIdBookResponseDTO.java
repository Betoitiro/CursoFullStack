package com.book.spot.bookspot.Book.dto;

import com.book.spot.bookspot.Book.jpa.Book;
import com.book.spot.bookspot.autor.jpa.Autor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class GetByIdBookResponseDTO {

    private String titulo;

    private String conteudo;

    private Autor autor;

    public static GetByIdBookResponseDTO from(Book book) {
        return GetByIdBookResponseDTO.builder()
                .titulo(book.getTituloLivro())
                .conteudo(book.getConteudoCompleto())
                .autor(book.getAutor())
                .build();
    }
}
