package com.github.devbk84.backend.repo;

import com.github.devbk84.backend.models.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShopRepo extends MongoRepository<Product, String> {

    List<Product> getAllproducts();
}
