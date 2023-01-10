package com.github.devbk84.backend.controller;


import com.github.devbk84.backend.models.Product;
import com.github.devbk84.backend.repo.ProductRepo;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ProductRepo productRepo;


    @Test
    @DirtiesContext
    void getAllProducts() throws Exception {
        mockMvc.perform(get("/api/products"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

    @Test
    @DirtiesContext
    void getProductsById() throws Exception {
        productRepo.save(new Product(
                "69",
                "Milk",
                "Test",
                "orderFav",
                new BigDecimal(0)));
        mockMvc.perform(get("/api/products/69"))
                .andExpect(status().isOk());

    }

    @Test
    @DirtiesContext
    void deleteProduct() throws Exception {

        Product product = new Product(
                "8",
                "Milk",
                "Test",
                "orderFav",
                new BigDecimal(1)
        );
        productRepo.save(product);

        mockMvc.perform(delete("/api/products/" + product.id()))
                .andExpect(status().isOk());

    }

}