# Object Relational Mapping

Object-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language.

# Hibernate

As an Object Relational Mapping (ORM) framework, Hibernate is concerned with data presistence as it applies to relational databases (via JDBC). In addition to its own "native API", Hibernate is also an implementation of the Java Persistence API (JPA) specification. As such, it can be easily used in any environment supporting JPA including Java SE applications, Java EE application servers, etc.

Hibernate enables you to to develop presistent classes following natural Object-oriented idioms including inheritance, polymorphism, association, composition, and the Java collections framework. Hibernate requires no interfaces or base classes for persistent classes and enables any class or data structure to be persistent.

**Features**
		
+ Supports lazy initialization, numerous fetching strategies and optimistic locking with automatic versioning and time stamping.

+ Deliver a highly scalable architecture.

+ Reliable and stable

+ Highly configurable and extensible

# Using Native Hibernate APIs and hbm.xml Mapping

The hibernate.cfg.xml file defines the Hibernate configuration information. The connection.driver_class, connection.url, connection.username and connection.password <property/> elements define JDBC connection information. The hbm2ddl.auto property enables automatic generation of database schemas directly into the database.

Add the mapping file(s) for persistent classes to the configuration. The resource attribute of the <mapping/> element causes Hibernate to attempt to locate that mapping as a classpath resource using a java.lang.ClassLoader lookup.

There are many ways and options to bootstrap a Hibernate SessionFactory.

## The Entity Java Class

It uses standard JavaBean naming conventions for property getter and setter methods, as well as private visibility for the fields. Although this is the recommended design, it is not required. The no-argument constructor, which is also a JavaBean convention, is a requirement for all persistent classes. Hibernate needs to create objects for you, using Java Reflection. The constructor can be private. However, package or public visibility is required for runtime proxy generation and efficient data retrieval without bytecode instrumentation.

## The mapping file

Hibernate uses the mapping metadata to determine how to load and store objects of the persistent class. The Hibernate mapping file is one choice for providing Hibernate with this metadata.

*Example 1. The class mapping element*

	```
	<class name="Event" table="EVENTS">
		...
	</class>
	```

*Example 2. The id mapping element*

	```
		<id name="id" column="EVENT_ID">
			...
		</id>
	```

Hibernate uses the property named by the <id/> element to uniquely identify rows in the table. It is not required for the id element to map to the table’s actual primary key column(s), but it is the normal convention. Tables mapped in Hibernate do not even need to define primary keys. However, it is strongly recommend that all schemas define proper referential integrity. Therefore id and primary key are used interchangeably throughout Hibernate documentation.

The <id/> element here names the EVENT_ID column as the primary key of the EVENTS table. It also identifies the id property of the Event class as the property containing the identifier value.


*Example 3. The property mapping element*
	
	```
		<property name="date" type="timestamp" column="EVENT_DATE"/>
		<property name="title"/>
	```

The two <property/> elements declare the remaining two persistent properties of the Event class: date and title. The date property mapping includes the column attribute, but the title does not. In the absence of a column attribute, Hibernate uses the property name as the column name. This is appropriate for title, but since date is a reserved keyword in most databases, you need to specify a non-reserved word for the column name.

The title mapping also lacks a type attribute. The types declared and used in the mapping files are neither Java data types nor SQL database types. Instead, they are Hibernate mapping types, which are converters which translate between Java and SQL data types. Hibernate attempts to determine the correct conversion and mapping type autonomously if the type attribute is not specified in the mapping, by using Java reflection to determine the Java type of the declared property and using a default mapping type for that Java type.
