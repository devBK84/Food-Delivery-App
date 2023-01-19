package com.github.devbk84.backend.models;

import java.util.List;

public record OrderDTO(
        String payment,
        List<Product> products,

        String ordertBy

) {

}
