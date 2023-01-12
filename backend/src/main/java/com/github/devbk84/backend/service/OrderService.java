package com.github.devbk84.backend.service;

import com.github.devbk84.backend.models.Order;
import com.github.devbk84.backend.models.OrderDTO;
import com.github.devbk84.backend.repo.OrderRepo;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository
@Service
public class OrderService {

    private final OrderRepo orderRepo;

    private final IDService idService;

    public OrderService(OrderRepo orderRepo, IDService idService) {
        this.orderRepo = orderRepo;
        this.idService = idService;
    }

    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }

    public Order getOrderById(String id) {
        return orderRepo.findById(id).orElseThrow();
    }

    public Order saveOrder(OrderDTO order) {
        Order newOrder = new Order(idService.generateID(), order.payment(), order.products(), order.ordertBy());
        orderRepo.save(newOrder);
        return newOrder;
    }

}
