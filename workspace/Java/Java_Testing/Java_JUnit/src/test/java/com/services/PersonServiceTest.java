package com.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Stream;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import com.entities.Account;
import com.entities.Person;

public class PersonServiceTest {
	
	PersonService personServ = new PersonService();
	
	@ParameterizedTest
	@MethodSource("isPersonValidTestFactory")
	@DisplayName("isPersonValidTest")
	public void isPersonValidTest(Person person, boolean isValid) {
		if(isValid) assertTrue(personServ.isPersonValid(person));
		else assertFalse(personServ.isPersonValid(person));
	}
	
	static Stream<Arguments> isPersonValidTestFactory() {
		return Stream.of(
				Arguments.arguments(new Person("Iago", 26, "some@gmail.com", "1234"), true),
				Arguments.arguments(new Person("Iago", 26, "some@gmail.com", "1"), false),
				Arguments.arguments(new Person("Iago", 26, "", "1234"), false),
				Arguments.arguments(new Person("Iago", 8, "some@gmail.com", "1234"), false),
				Arguments.arguments(new Person("", 8, "some@gmail.com", "1234"), false)
		);
	}
	
}
