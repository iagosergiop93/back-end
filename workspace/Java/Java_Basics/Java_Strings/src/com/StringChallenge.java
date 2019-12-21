package com;

public class StringChallenge {
	
	public static String solveProblem(String str) {
		String res = "";
		int carryOn = 0;
		int aux = 0;
		int i = 0;
		
		for(i = str.length()-1;i>=0;i--) {
			if(!Character.isDigit(str.charAt(i))) break;
			else {
				aux = Character.getNumericValue(str.charAt(i)) + 1 + carryOn;
				if(aux > 9) {
					res = String.valueOf(aux-10) + res;
					carryOn = (int) aux/10;
				}
				else {
					res = String.valueOf(aux) + res;
					carryOn = 0;
				}
			}
			
		}
		
		return str.substring(0, i) + res;
	}
	
	public static void main(String[] args) {
		
		String str = "abkjcbakjbcajhsfg1239";
		
		System.out.println(solveProblem(str));
		
	}
	
}
