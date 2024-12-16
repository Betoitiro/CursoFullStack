package com.book.spot.bookspot.Book;

import com.book.spot.bookspot.Book.dto.CreateBookRequestDTO;
import com.book.spot.bookspot.Book.dto.GetAllBookResponseDTO;
import com.book.spot.bookspot.Book.dto.GetByIdBookResponseDTO;
import com.book.spot.bookspot.Book.service.CreateBookService;
import com.book.spot.bookspot.Book.service.GetAllBookService;
import com.book.spot.bookspot.Book.service.GetByIdBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/v1/book")
public class BookController {

    @Autowired
    private CreateBookService createBookService;

    @Autowired
    private GetAllBookService getAllBookService;

    @Autowired
    private GetByIdBookService getByIdBookService;

    @PostMapping
    public void createBook(@RequestBody CreateBookRequestDTO createBookRequestDTO){
        createBookService.createBook(createBookRequestDTO);
    }

    @GetMapping
    public List<GetAllBookResponseDTO> findAll(){
        return  getAllBookService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<GetByIdBookResponseDTO> findById(@PathVariable Long id) {
        return getByIdBookService.findById(id);
    }
}
