package com.github.devbk84.backend.service;

import com.github.devbk84.backend.models.Product;
import com.github.devbk84.backend.repo.ShopRepo;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ShopService  {

    private final ShopRepo shopRepo;

    public ShopService(ShopRepo shopRepo) {
        this.shopRepo = shopRepo;
    }

    public List<Product> getAllProducts() {
        return shopRepo.findAll();
    }

}
