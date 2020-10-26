package com.example.demo.config;

import java.util.HashMap;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.zaxxer.hikari.HikariDataSource;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(
		basePackages = "com.example.demo.people",
		entityManagerFactoryRef = "peopleEntityManagerFactory",
		transactionManagerRef = "peopleTransactionManager"
)
public class DataBase1Config {
	
	@Value("${app.database.db1.url}") private String url;
	@Value("${app.database.db1.username}") private String username;
	@Value("${app.database.db1.password}") private String password;
	
	@Bean(name = "datasource1")
	@Qualifier("db1")
	public DataSource datasource() {
		
		System.out.println(url);
		System.out.println(username);
		System.out.println(password);
		
		HikariDataSource ds = new HikariDataSource();
		ds.setJdbcUrl(url);
		ds.setUsername(username);
		ds.setPassword(password);
		
		return ds;
	}
	
	@Bean(name = "peopleEntityManagerFactory")
	public LocalContainerEntityManagerFactoryBean peopleEntityManagerFactory() {

	    LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
	    factory.setDataSource(datasource());
	    factory.setPackagesToScan("com.example.demo.people");
	    
	    HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
	    factory.setJpaVendorAdapter(vendorAdapter);
	    
	    HashMap<String, String> properties = new HashMap<>();
	    properties.put("hibernate.hbm2ddl.auto", "update");
	    properties.put("hibernate.dialect", "org.hibernate.dialect.MySQL57Dialect");
	    factory.setJpaPropertyMap(properties);
	    
	    return factory;
	}
	
	@Bean(name = "peopleTransactionManager")
	public PlatformTransactionManager peopleTransactionManager() {
		JpaTransactionManager txManager = new JpaTransactionManager();
		EntityManagerFactory entityManagerFactory = peopleEntityManagerFactory().getObject();
		txManager.setEntityManagerFactory(entityManagerFactory);
		
		return txManager;
	}
	
}
