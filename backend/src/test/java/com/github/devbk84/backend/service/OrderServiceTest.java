package com.github.devbk84.backend.service;

import com.github.devbk84.backend.models.Order;
import com.github.devbk84.backend.models.Product;
import com.github.devbk84.backend.models.ProductDTO;
import com.github.devbk84.backend.repo.OrderRepo;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;



import java.util.Collections;
import java.util.List;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class OrderServiceTest {

    OrderRepo orderRepo = mock(OrderRepo.class);
    IDService idService = mock(IDService.class);



    OrderService orderService = new OrderService(orderRepo, idService);


    @Test
    @DirtiesContext
    void getAllOrders() {
        // GIVEN

        List<Order> expected = Collections.emptyList();

        // WHEN
        when(orderRepo.findAll()).thenReturn(expected);
        List<Order> result = orderService.getAllOrders();

        // THEN
        assertEquals(expected, result);
        verify(orderRepo).findAll();
    }
}