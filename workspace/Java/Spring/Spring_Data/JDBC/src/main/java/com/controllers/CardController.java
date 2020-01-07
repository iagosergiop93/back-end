package com.controllers;

import com.entities.Card;
import com.repos.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cards")
public class CardController {

    CardRepository cr;

    @Autowired
    CardController(CardRepository cr) {
        this.cr = cr;
    }

    @GetMapping
    public List<Card> getCards() {
        return cr.getAll();
    }

//    @GetMapping
//    @RequestMapping("/{id}")
//    public Card getCardsById(@PathVariable String id) {
//
//    }
//
//    @PostMapping
//    public Card postCard(Card card) {
//
//    }

}
