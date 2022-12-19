package com.github.devbk84.backend.models;

import java.math.BigDecimal;

public record Product(
        String name,
        String id,
        String description,
        String orderfavorites,
        BigDecimal price) {


}

