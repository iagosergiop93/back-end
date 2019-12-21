package com.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.stream.Stream;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import com.entities.Account;
import com.entities.Person;

public class AccountServiceTest {
	
	static private AccountService accServ = new AccountService();
	
	@BeforeAll
	public static void setList() {
		Person person = new Person("Iago", 26, "some@gmail.com", "1234");
		accServ.list.add(new Account(1, 0, person));
		accServ.list.add(new Account(2, 50, person));
		accServ.list.add(new Account(3, 100, person));
		accServ.list.add(new Account(4, 200, person));
		accServ.list.add(new Account(5, 300, person));
	}
	
	@RepeatedTest(10)
	@DisplayName("generateAccountNumberTest")
	public void generateAccountNumberTest() {
		assertNotEquals(0, accServ.generateAccountNumber());
	}
	
	@ParameterizedTest
	@MethodSource("accountNumAlreadyExistTestFactory")
	@DisplayName("accountNumAlreadyExistTest")
	public void accountNumAlreadyExistTest(int accNum, boolean res) {
		if(res) assertTrue(accServ.accountNumAlreadyExist(accNum));
		else assertFalse(accServ.accountNumAlreadyExist(accNum));
	}
	
	static Stream<Arguments> accountNumAlreadyExistTestFactory() {
		return Stream.of(
				Arguments.arguments(0, false),
				Arguments.arguments(1, true),
				Arguments.arguments(2, true),
				Arguments.arguments(6, false)
		);
	}
	
	@ParameterizedTest
	@MethodSource("getBalanceTestFactory")
	@DisplayName("getBalanceTest")
	public void getBalanceTest(int accNumber, Double res) {
		assertEquals(res, accServ.getBalance(accNumber));
	}
	
	static Stream<Arguments> getBalanceTestFactory() {
		return Stream.of(
				Arguments.arguments(0, null),
				Arguments.arguments(1, 0.0),
				Arguments.arguments(2, 50.0),
				Arguments.arguments(3, 100.0)
		);
	}
	
}
