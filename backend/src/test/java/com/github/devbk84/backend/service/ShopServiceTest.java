package com.github.devbk84.backend.service;

import com.github.devbk84.backend.models.Product;
import com.github.devbk84.backend.repo.ShopRepo;
import org.junit.jupiter.api.Test;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;


class ShopServiceTest {

    ShopRepo shopRepo = mock(ShopRepo.class);
    ShopService shopService = new ShopService(shopRepo);

    @Test
    void getAllProducts() {

        // GIVEN
        List<Product> expected = Collections.emptyList();

        // WHEN
        when(shopRepo.findAll()).thenReturn(expected);
        List<Product> result = shopService.getAllProducts();

        // THEN
        assertEquals(expected, result);
        verify(shopRepo).findAll();
    }
}