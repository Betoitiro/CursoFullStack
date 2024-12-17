package com.book.spot.bookspot.Book.dto;

import com.book.spot.bookspot.Book.jpa.Book;
import com.book.spot.bookspot.autor.jpa.Autor;
import lombok.Getter;

@Getter
public class GetByIdBookResponseDTO {

    private String titulo;
    private String conteudo;
    private Autor autor;

    public GetByIdBookResponseDTO(String titulo, String conteudo, Autor autor) {
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.autor = autor;
    }

    public static GetByIdBookResponseDTO from(Book book) {
        return new GetByIdBookResponseDTO(
                book.getTituloLivro(),
                book.getConteudoCompleto(),
                book.getAutor()
        );
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getConteudo() {
        return conteudo;
    }

    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }

    public Autor getAutor() {
        return autor;
    }

    public void setAutor(Autor autor) {
        this.autor = autor;
    }
}
