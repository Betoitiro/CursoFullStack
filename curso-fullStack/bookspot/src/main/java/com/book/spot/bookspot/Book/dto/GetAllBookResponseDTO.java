package com.book.spot.bookspot.Book.dto;

import com.book.spot.bookspot.Book.jpa.Book;
import com.book.spot.bookspot.autor.jpa.Autor;
import lombok.Getter;

public class GetAllBookResponseDTO {
    private Long id;
    private String titulo;
    private Autor autor;
    private String resumo;

    public GetAllBookResponseDTO(Long id, String titulo, Autor autor, String resumo) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.resumo = resumo;
    }

    public static GetAllBookResponseDTO from(Book book) {
        return new GetAllBookResponseDTO(
                book.getId(),
                book.getTituloLivro(),
                book.getAutor(),
                book.getResumo()
        );
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Autor getAutor() {
        return autor;
    }

    public void setAutor(Autor autor) {
        this.autor = autor;
    }

    public String getResumo() {
        return resumo;
    }

    public void setResumo(String resumo) {
        this.resumo = resumo;
    }
}
