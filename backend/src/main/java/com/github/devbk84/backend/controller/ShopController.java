package com.github.devbk84.backend.controller;

import com.github.devbk84.backend.models.Product;
import com.github.devbk84.backend.service.ShopService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
