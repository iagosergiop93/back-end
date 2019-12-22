package com.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomeController {

    @GetMapping
    @RequestMapping("/home/{name}")
    public String serveHomePage(@PathVariable String name, Model model) {
        model.addAttribute("name", name);
        return "home";
    }

    @GetMapping
    @RequestMapping("/hello")
    public String serveHelloPage() {
        return "hello";
    }

}
