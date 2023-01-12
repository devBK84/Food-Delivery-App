package com.github.devbk84.backend.controller;

import com.github.devbk84.backend.models.Order;
import com.github.devbk84.backend.models.OrderDTO;
import com.github.devbk84.backend.models.ProductDTO;
import com.github.devbk84.backend.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {

        this.orderService = orderService;
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping(path = "/orders/{id}")
    public Order getOrderById(@PathVariable String id) {
        return orderService.getOrderById(id);
    }

    @PostMapping
    public Order saveOrder(@RequestBody OrderDTO orderDTO) {
        return orderService.saveOrder(orderDTO);
    }

    @PutMapping(path = "/orders/{id}")
    public Order addProductToAnOrder(@PathVariable String id, @RequestBody ProductDTO entry) {
        return orderService.addProductToAnOrder(id, entry);
    }
}
