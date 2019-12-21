package com;

public class ThreadRunnable implements Runnable {
	
	/*
	 * The Runnable interface is a functional interface. This means
	 * that all the other methods used with threads (start(), wait(), etc) must be implemented
	 * if they are required.
	 * */
	@Override
	public void run() {
		Thread thread = Thread.currentThread();
		System.out.println("Thread " + thread.getId() + " is running");
		System.out.println("Thread " + thread.getId() + " priority: " + thread.getPriority());
		
		try {
			Thread.sleep(2000);
			System.out.println("Thread " + thread.getId() + " woke up.");
		} catch(Exception e) {
			e.printStackTrace();
			System.out.println("Thread " + thread.getId() + " was interrupted");
		}
		
		System.out.println("Thread " + thread.getId() + " is finishing its execution");
	}
	

}
