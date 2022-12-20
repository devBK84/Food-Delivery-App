package com.github.devbk84.backend.models;

import java.util.List;

public record Order(
        String id,
        String payment,
        List <Product> products,
        String ordertBy
)
{

}
