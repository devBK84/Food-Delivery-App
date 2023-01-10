package com.github.devbk84.backend.service;

import com.github.devbk84.backend.models.Product;
import com.github.devbk84.backend.repo.ProductRepo;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

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

    @Test
    void getProductById(){
        // GIVEN
        Product expected = new Product(
                "69",
                "Milk",
                "Test",
                "orderFav",
                new BigDecimal("1.50")
        );
        productRepo.save(expected);

        // WHEN
        when(productRepo.findById("69")).thenReturn(Optional.of(expected));
        Product actual = productService.getProductById("69");

        // THEN
        assertEquals(expected, actual);
        verify(productRepo).findById("69");
    }

    @Test
    void deleteEntryByID(){
        Product expectedProduct = new Product(
                "8",
                "Haferdrink",
                "Test",
                "orderFav",
                new BigDecimal("1.50")
        );

        doNothing().when(productRepo).deleteById(isA(String.class));
        productRepo.deleteById(expectedProduct.id());
        verify(productRepo,times(1)).deleteById(expectedProduct.id());
    }

}