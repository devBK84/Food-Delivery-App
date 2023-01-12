package com.github.devbk84.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Document("order")
public record Order(
        @Id
        String id,
        String payment,
        List<Product> products,
        String ordertBy
) {

}
