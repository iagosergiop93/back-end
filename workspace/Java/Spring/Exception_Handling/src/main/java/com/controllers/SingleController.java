package com.controllers;

import com.exceptions.CustomException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class SingleController {

    @GetMapping
    @RequestMapping("/hello")
    public String helloWorld() {
        return "Hello World. I am alive!";
    }

    @GetMapping
    @RequestMapping("/exception")
    public String willThrowException() {
        throw new CustomException("Custom exception", HttpStatus.BAD_REQUEST);
    }

    @GetMapping
    @RequestMapping("/exception2")
    public String willThrowException2() {
        throw new CustomException("Second exception", HttpStatus.CONFLICT);
    }

}
