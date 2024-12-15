package com.book.spot.bookspot.Book.dto;

import com.book.spot.bookspot.autor.jpa.Autor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CreateBookRequestDTO {

    private Autor autor;

    private String titulo;

    private String resumo;

    private String conteudoCompleto;
}
