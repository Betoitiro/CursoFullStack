package com.book.spot.bookspot.Book.dto;

import com.book.spot.bookspot.autor.jpa.Autor;

public class CreateBookRequestDTO {

    private Autor autor;

    private String titulo;

    private String resumo;

    private String conteudoCompleto;

    public Autor getAutor() {
        return autor;
    }

    public void setAutor(Autor autor) {
        this.autor = autor;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getResumo() {
        return resumo;
    }

    public void setResumo(String resumo) {
        this.resumo = resumo;
    }

    public String getConteudoCompleto() {
        return conteudoCompleto;
    }

    public void setConteudoCompleto(String conteudoCompleto) {
        this.conteudoCompleto = conteudoCompleto;
    }
}
