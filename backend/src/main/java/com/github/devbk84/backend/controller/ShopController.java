package com.github.devbk84.backend.controller;

import com.github.devbk84.backend.models.Product;
import com.github.devbk84.backend.service.ShopService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ShopController {

    private final ShopService shopService;

    public ShopController(ShopService shopService) {

        this.shopService = shopService;
    }

    @GetMapping
    public List<Product> getAllProducts(){

        return shopService.getAllProducts();
    }

    @PutMapping("/{id}")
    public ResponseEntity <Product> updateProduct(
            @PathVariable String id,
            @RequestBody Product shopService) {
        return shopService.equals(id, updateProduct());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Product> deleteProduct(@PathVariable String id) {
        return new ResponseEntity<>(new Product(id), HttpStatus.OK);
    }
}
