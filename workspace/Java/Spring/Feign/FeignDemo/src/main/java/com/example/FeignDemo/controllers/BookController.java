package com.example.FeignDemo.controllers;

import com.example.FeignDemo.feign.clients.GoogleBooksClient;
import com.example.FeignDemo.feign.clients.domain.VolumeQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {

    @Autowired
    private GoogleBooksClient client;

    @GetMapping("/test")
    public VolumeQuery volumeQuery(@RequestParam String query) {
        return client.queryBooks(query);
    }

}
