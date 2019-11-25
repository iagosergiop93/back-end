package com.notes;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

public class AppDriver {

	public static void main(String[] args) {
		
		List<Double> list = new LinkedList<>();
		for(int i=0;i<10;i++) list.add(Math.random()*100);
		
		loop(list);
		
		list = (LinkedList<Double>) list;
		
		loop(list);
		
		list.sort((Double c1, Double c2) -> {
			return (int) Math.floor(c1-c2);
		});
		
		loop(list);
		
	}
	
	
	public static void loop(List<Double> list) {
		Iterator<Double> it = list.iterator();
		while(it.hasNext()) {
			System.out.println(it.next() + " ");
		}
		System.out.println("\n");
	}

}
