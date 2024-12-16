package com.book.spot.bookspot.Book.dto;

import com.book.spot.bookspot.Book.jpa.Book;
import com.book.spot.bookspot.autor.jpa.Autor;
import lombok.Getter;

public class GetAllBookResponseDTO {
    private String titulo;
    private Autor autor;
    private String resumo;

    public GetAllBookResponseDTO(String titulo, Autor autor, String resumo) {
        this.titulo = titulo;
        this.autor = autor;
        this.resumo = resumo;
    }

    public static GetAllBookResponseDTO from(Book book) {
        return new GetAllBookResponseDTO(
                book.getTituloLivro(),
                book.getAutor(),
                book.getResumo()
        );
    }

    public String getTitulo() {
        return titulo;
    }

    public Autor getAutor() {
        return autor;
    }

    public String getResumo() {
        return resumo;
    }
}
