package com.example.longpoolingpoc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;

import java.time.Duration;

@RestController
public class Subscriber {

    @Autowired
    RestTemplateBuilder restTemplateBuilder;

    @GetMapping("/subscriber")
    public String callBakeWithRestTemplate() {
        RestTemplate restTemplate = restTemplateBuilder
                .setConnectTimeout(Duration.ofSeconds(10))
                .setReadTimeout(Duration.ofSeconds(10))
                .build();

        try {
            return restTemplate.getForObject("http://localhost:8080/bake/cookie?bakeTime=1000", String.class);
        } catch (ResourceAccessException e) {
            // handle timeout
            return "Didn't respond in time";
        }
    }
}
