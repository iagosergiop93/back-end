package com;

public class AppDriver {
	
	
	public static void main(String[] args) {
		String str1 = "hello";
		String str2 = new String("hello");
		
		System.out.println(str1 == str2);
		
		str2.intern();
		
		System.out.println(str1 == str2);
		
	}
	
	
}
