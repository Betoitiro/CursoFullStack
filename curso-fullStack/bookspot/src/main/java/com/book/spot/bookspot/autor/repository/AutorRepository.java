package com.book.spot.bookspot.autor.repository;

import com.book.spot.bookspot.autor.jpa.Autor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AutorRepository extends JpaRepository<Autor, Long> {
}
