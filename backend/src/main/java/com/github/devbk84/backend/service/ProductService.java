package com.github.devbk84.backend.service;

import com.github.devbk84.backend.models.Product;
import com.github.devbk84.backend.models.ProductDTO;
import com.github.devbk84.backend.repo.ProductRepo;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ProductService {

    private final ProductRepo productRepo;

    public ProductService(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    public Product getProductById(String id) {
        return productRepo.findById(id).orElseThrow(); }


    public Product updateEntry(String id, ProductDTO entryUpdate) {
        Product toEdit = new Product(
                id,
                entryUpdate.name(),
                entryUpdate.description(),
                entryUpdate.orderFavorites(),
                entryUpdate.price());

            return productRepo.save(toEdit);
    }

    public void deleteEntryByID(String id) { productRepo.deleteById(id);
    }
}
