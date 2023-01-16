package com.github.devbk84.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.devbk84.backend.models.Order;
import com.github.devbk84.backend.models.Product;
import com.github.devbk84.backend.repo.OrderRepo;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class OrderControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private OrderRepo orderRepo;

    @Autowired
    private ObjectMapper objectMapper;


    @Test
    @DirtiesContext
    void getAllOrders_whenNoOrdersInDB_thenReturnEmptyList() throws Exception {
        mockMvc.perform(get("/api/orders/"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));

    }

    @Test
    void getOrderById() throws Exception {
        orderRepo.save(new Order(
                "69",
                "PayPal",
                new ArrayList<>(),
                "Nick"
        ));

        mockMvc.perform(get("/api/orders/69"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        {
                        "id": "69",
                        "payment": "PayPal",
                        "products": [],
                        "ordertBy": "Nick"
                        }
                        """));

    }

    @Test
    void saveOrder() throws Exception {
        String content = mockMvc.perform(post("/api/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                        {
                                        "payment": "PayPal",
                                        "products": [{
                                        "id": "8",
                                        "name": "Milk",
                                        "description": "Test",
                                        "orderFavorites": "orderFav",
                                        "price": "1.5"
                                        }       ],
                                        "ordertBy": "Nick"
                                        }
                                        """

                        ))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();
        Order actualOrder = objectMapper.readValue(content, Order.class);
        Order expected = new Order(actualOrder.id(),
                "PayPal",
                List.of(new Product("8",
                        "Milk",
                        "Test",
                        "orderFav",
                        new BigDecimal("1.5"))),
                "Nick");

        assertEquals(expected, actualOrder);

    }

    @Test
    void addProductToAnOrder() throws Exception {
        Order order = new Order(
                "455454",
                "PayPal",
                new ArrayList<>(),
                "Nick"
        );
        orderRepo.save(order);
        String content = mockMvc.perform(put("/api/orders/" + order.id())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                                                                  
                                        {
                                        "id": "8",
                                        "name": "Milk",
                                        "description": "Test",
                                        "orderFavorites": "orderFav",
                                        "price": "1.5"
                                        }                                          
                                        """
                        ))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();
        Order actualOrder = objectMapper.readValue(content, Order.class);
        Order expected = new Order("455454",
                "PayPal",
                List.of(new Product(actualOrder.products().get(0).id(),
                        "Milk",
                        "Test",
                        "orderFav",
                        new BigDecimal("1.5"))),
                "Nick");

        assertEquals(expected, actualOrder);

    }
}