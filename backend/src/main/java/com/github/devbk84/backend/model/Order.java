package com.github.devbk84.backend.model;

//   - id: String
//   - payment: Payment
//   - products: Product []
//   - ordertBy: Customer

import java.util.List;

public class Order {

    private String id;

    private String payment;
    private List<Product> products;

    private String ordertBy;

    public Order() {
    }

    public Order(String id, List<Product> products) {
        this.id = id;
        this.products = products;
    }

    public String getId() {
        return id;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setPayment(String payment) {
        this.payment = payment;
    }

    public void setOrdertBy(String ordertBy) {
        this.ordertBy = ordertBy;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Order order)) return false;

        if (getId() != null ? !getId().equals(order.getId()) : order.getId() != null) return false;
        return getProducts() != null ? getProducts().equals(order.getProducts()) : order.getProducts() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getProducts() != null ? getProducts().hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id='" + id + '\'' +
                ", products=" + products +
                '}';
    }

}
