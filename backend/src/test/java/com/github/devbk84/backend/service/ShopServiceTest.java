package com.github.devbk84.backend.service;

import com.github.devbk84.backend.models.Product;
import com.github.devbk84.backend.repo.ShopRepo;
import org.junit.jupiter.api.Test;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static reactor.core.publisher.Mono.when;


class ShopServiceTest {

    ShopRepo shopRepo = mock(ShopRepo.class);


    @Test
    void getAllProducts() {

        // GIVEN
        List<Product> expected = Collections.emptyList();

        // WHEN
        when(shopRepo.findAll()).thenReturn(expected);
        List<Product> result = shopRepo.getAllproducts();

        // THEN
        assertEquels(expected, result);
        verify(shopRepo).findAll();
    }
}