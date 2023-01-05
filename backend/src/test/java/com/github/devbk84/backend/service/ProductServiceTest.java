package com.github.devbk84.backend.service;

import com.github.devbk84.backend.models.Product;
import com.github.devbk84.backend.repo.ProductRepo;
import org.junit.jupiter.api.Test;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;


class ProductServiceTest {

    ProductRepo productRepo = mock(ProductRepo.class);
    ProductService productService = new ProductService(productRepo);

    @Test
    void getAllProducts() {

        // GIVEN
        List<Product> expected = Collections.emptyList();

        // WHEN
        when(productRepo.findAll()).thenReturn(expected);
        List<Product> result = productService.getAllProducts();

        // THEN
        assertEquals(expected, result);
        verify(productRepo).findAll();
    }
}