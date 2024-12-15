CREATE TABLE t_book (
    id BIGSERIAL PRIMARY KEY,
    titulo_livro VARCHAR(255) NOT NULL,
    autor_id BIGINT NOT NULL,
    resumo TEXT,
    conteudo_completo TEXT,
    CONSTRAINT fk_autor FOREIGN KEY (autor_id) REFERENCES t_autor (id) ON DELETE CASCADE
);
