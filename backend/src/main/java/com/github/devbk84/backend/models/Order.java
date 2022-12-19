package com.github.devbk84.backend.models;

//   - id: String
//   - payment: Payment
//   - products: Product []
//   - ordertBy: Customer

import java.util.List;

public record Order(
        String id,
        String payment,
        List<Product> products,
        String ordertBy
)
{

}
