package com;

public class ThreadClass extends Thread {
	
	@Override
	public void run() {
		Thread thread = Thread.currentThread();
		System.out.println("Thread " + thread.getId() + " is running");
		System.out.println("Thread " + thread.getId() + " priority: " + thread.getPriority());
		
		try {
			Thread.sleep(3000);
			System.out.println("Thread " + thread.getId() + " woke up.");
		} catch(Exception e) {
			e.printStackTrace();
			System.out.println("Thread " + thread.getId() + " was interrupted");
		}
		System.out.println("Thread " + thread.getId() + " is finishing its execution");
	}
	
}
