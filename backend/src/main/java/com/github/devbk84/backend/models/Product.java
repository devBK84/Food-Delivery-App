package com.github.devbk84.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;

@Document("products")
public record Product(
        @Id
        String name,
        String id,
        String description,
        String orderfavorites,
        BigDecimal price) {

}

