package com.github.devbk84.backend.controller;

import com.github.devbk84.backend.models.Product;
import com.github.devbk84.backend.models.ProductDTO;
import com.github.devbk84.backend.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {

        this.productService = productService;
    }

    @GetMapping
    public List<Product> getAllProducts(){

        return productService.getAllProducts();
    }

    @GetMapping(path = "/{id}")
    public Product getProductById (@PathVariable String id){
        return productService.getProductById(id);
    }

    @PutMapping(path = "/{id}")
    public Product updateEntry (@PathVariable String id, @RequestBody ProductDTO entry){
        return productService.updateEntry(id, entry);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteProduct (@PathVariable String id){
        productService.deleteEntryByID(id);
    }
    @PostMapping
    public Product saveEntry (@RequestBody ProductDTO entry){
        return productService.saveEntry(entry);
    }
}


