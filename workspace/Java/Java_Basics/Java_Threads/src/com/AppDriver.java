package com;

public class AppDriver {
	
	public static void main(String[] args) {
		// Instantiating both threads
		ThreadClass tc = new ThreadClass();
		Thread tr = new Thread(new ThreadRunnable());
		
		System.out.println("At this point, the state of both classes is New");
		
		System.out.println("The main thread has id " + Thread.currentThread().getId());
		System.out.println("The main thread priority is " + Thread.currentThread().getPriority());
		
		System.out.println("ThreadClass obj has id " + tc.getId());
		System.out.println("Thread obj has id " + tr.getId());
		
		// The Thread goes to its Runnable state (JVM will call the run() method of this thread)
		tc.start();
		tr.start();
		
		System.out.println("The main method is finished");
	}
	
}
