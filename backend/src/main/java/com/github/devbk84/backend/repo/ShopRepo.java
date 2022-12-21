package com.github.devbk84.backend.repo;

import com.github.devbk84.backend.models.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ShopRepo extends MongoRepository<Product, String> {

}
