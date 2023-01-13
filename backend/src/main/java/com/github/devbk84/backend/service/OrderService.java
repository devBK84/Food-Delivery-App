package com.github.devbk84.backend.service;

import com.github.devbk84.backend.models.Order;
import com.github.devbk84.backend.models.OrderDTO;
import com.github.devbk84.backend.models.Product;
import com.github.devbk84.backend.models.ProductDTO;
import com.github.devbk84.backend.repo.OrderRepo;
import org.springframework.stereotype.Service;

import java.util.List;


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

    public Order addProductToAnOrder(String Id, ProductDTO entryUpdate) {
        Order orderToEdit = orderRepo.findById(Id).orElseThrow();
        List<Product> productList = new java.util.ArrayList<>(List.copyOf(orderToEdit.products()));
        productList.add(new Product(
                idService.generateID(),
                entryUpdate.name(),
                entryUpdate.description(),
                entryUpdate.orderFavorites(),
                entryUpdate.price())
        );
        Order newOrder = new Order(orderToEdit.id(), orderToEdit.payment(), productList, orderToEdit.ordertBy());
        return orderRepo.save(newOrder);
    }

}
