package com.example.FeignDemo.feign.clients;

import com.example.FeignDemo.feign.clients.domain.VolumeQuery;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "books", url = "https://www.googleapis.com")
public interface GoogleBooksClient {

    @RequestMapping(method = RequestMethod.GET, value = "/books/v1/volumes")
    VolumeQuery queryBooks(@RequestParam("q") String query);
}
