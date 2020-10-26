package com.example.demo.people.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.people.entity.Person;

@Repository
public interface PeopleRepo extends JpaRepository<Person, Integer> {

}
