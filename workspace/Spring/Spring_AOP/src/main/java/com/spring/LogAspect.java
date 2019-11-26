package com.spring;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LogAspect {
	
	Logger logger = LogManager.getLogger();
	
	@Pointcut("within(com.spring.entities.User")
	public void userConstructor() {}
	
	@Pointcut("execution(* com.spring.entities.Account.setOwner(..))")
	public void setOwner() {}
	
	@Before("userConstructor()")
	public void logBeforeNewUserCreated(JoinPoint jp) {
		if(jp.getArgs().length > 0) logger.info("User - " + jp.getArgs()[0]);
		else logger.info("User - " + jp.getSignature());
	}
	
	@AfterReturning("setOwner()")
	public void logBeforeSettingAccountOwner(JoinPoint jp) {
		logger.info("Setting account owner - " + jp.getSignature());
		logger.info(jp.getTarget().toString());
	}
	
}
