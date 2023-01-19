package com.github.devbk84.backend.models;

import java.math.BigDecimal;

public record ProductDTO(
        String name,
        String description,
        String orderFavorites,
        BigDecimal price,
        String shortname
) {
}
