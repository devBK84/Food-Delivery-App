package com.github.devbk84.backend.models;

public record Address(
        String id,
        String name,
        String street,
        String houseNumber,
        String zip,
        String city

) {
}
