package com.example.hellomicrometer.controllers;

import io.micrometer.core.instrument.Metrics;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        Metrics.counter("hello.calls").increment();
        return "hello world";
    }

    @GetMapping("/timed-hello")
    public String randomTimeHello() {
        Metrics.timer("hey.timer").record(() -> {
            double rnd = Math.ceil(Math.random() * 10);
            try {
                while (rnd > 0) {
                    Thread.sleep(Long.valueOf(200));
                    rnd = rnd - 1;
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        });

        return "long or short hello";
    }

}
