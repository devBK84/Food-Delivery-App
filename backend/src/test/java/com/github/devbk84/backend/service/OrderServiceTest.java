package com.github.devbk84.backend.service;

import com.github.devbk84.backend.models.Order;
import com.github.devbk84.backend.models.OrderDTO;
import com.github.devbk84.backend.models.Product;
import com.github.devbk84.backend.models.ProductDTO;
import com.github.devbk84.backend.repo.OrderRepo;
import org.junit.jupiter.api.Test;
import org.springframework.test.annotation.DirtiesContext;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;


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

    @Test
    void getOrderById() {
        // GIVEN
        Order expected = new Order(
                "65",
                "PayPal",
                Collections.emptyList(),
                "Peter"
        );
        orderRepo.save(expected);

        // WHEN
        when(orderRepo.findById("65")).thenReturn(Optional.of(expected));
        Order actual = orderService.getOrderById(expected.id());

        // THEN
        assertEquals(expected, actual);
        verify(orderRepo).findById("65");

    }

    @Test
    void saveOrder() {
        // GIVEN
        String id = "84";
        Order expectedOrder = new Order(
                id,
                "PayPal",
                Collections.emptyList(),
                "Peter"
        );

        OrderDTO OrderToSave = new OrderDTO(
                "PayPal",
                Collections.emptyList(),
                "Peter"
        );

        // WHEN
        when(orderRepo.save(expectedOrder)).thenReturn(expectedOrder);
        when(idService.generateID()).thenReturn(id);
        Order actualProduct = orderService.saveOrder(OrderToSave);

        // THEN
        assertEquals(expectedOrder, actualProduct);
        verify(orderRepo).save(expectedOrder);
    }

    @Test
    void addProductToAnOrder() {

        // GIVEN
        String id = "85";
        Order givenOrder = new Order(
                id,
                "PayPal",
                List.of(new Product(
                        "85",
                        "Haferdrink",
                        "xxxxxy",
                        "test",
                        new BigDecimal("1.50"),
                        "Haferdrink"
                )), "Hanswurst");

        Order expectedOrder = new Order(
                id,
                "PayPal",
                List.of(new Product(
                        "85",
                        "Haferdrink",
                        "xxxxxy",
                        "test",
                        new BigDecimal("1.50"),
                        "Haferdrink"

                ), new Product("85",
                        "Test",
                        "test",
                        "Geilo",
                        new BigDecimal("1.50"),
                        "Haferdrink")),
                "Hanswurst");

        // WHEN
        when(orderRepo.findById(id)).thenReturn(Optional.of(givenOrder));
        when(orderRepo.save(expectedOrder)).thenReturn(expectedOrder);
        when(idService.generateID()).thenReturn(id);
        Order actualProduct = orderService.addProductToAnOrder(id, new ProductDTO(
                "Test",
                "test",
                "Geilo",
                new BigDecimal("1.50"),
                "Haferdrink"));
        // THEN
        verify(orderRepo).save(expectedOrder);
        assertEquals(expectedOrder, actualProduct);

    }
}