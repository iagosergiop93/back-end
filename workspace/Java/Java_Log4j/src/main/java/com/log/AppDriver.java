package com.log;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class AppDriver {
	
	private static final Logger logger = LogManager.getLogger();
	
	private static final Logger loggerTest = LogManager.getLogger("test");
	
	public static void main(String[] args) {
		logger.trace("Trace message");
		logger.debug("Debug message");
		logger.info("Info Message!");
	    logger.warn("Warn Message!");
	    logger.error("Error Message!");
	    logger.fatal("Fatal Message!");
	    
	    System.out.println("\n");
	    
	    loggerTest.debug("Debug msg");
	    loggerTest.info("Info msg");
	    
	    
	}

}
