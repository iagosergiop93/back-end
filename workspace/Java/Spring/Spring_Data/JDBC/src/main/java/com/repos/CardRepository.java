package com.repos;

import com.entities.Card;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
public class CardRepository {

    JdbcTemplate jdbcTemplate = new JdbcTemplate();

    public List<Card> getAll() {
         List<Map<String, Object>> list = jdbcTemplate.queryForList("SELECT * FROM cards");
         List<Card> finalList = new ArrayList<>();

         for(Map<String, Object> item : list) {
             finalList.add(new Card((int) item.get("id"), (String) item.get("subject"), (String) item.get("description")));
         }

         return finalList;
    }

}
