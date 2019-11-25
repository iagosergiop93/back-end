# Java Basics

In Java programs, classes are the basic building blocks. When defining a class, you describe its fields and methods. Fields are used to define the state of the program, and methods operate on that state.

Most of the time, each Java class is defined in its own java file, and it is usually public, which means any code can call it. The file that holds a public class take the name of that class followed by '.java'. If you do not follow this name convention, an error will be thrown during compilation. After a successful compilation, the compiler produces a file that takes the same name of the '.java' file but with the extension '.class'. This last file can be executed by the JVM.

To compile a file, invoke the compiler using 'javac'. For example: `javac HelloWorld.java`.
To run the executable file produced by the compiler, use 'java' and the name of the executable file without the '.class' extension. For example: `java HelloWorld`

## Package Declarations and Imports

Java comes with thousands of built-in classes, and with all those classes Java needs a way to organize them. Java organizes its classes inside of packages. The purpose of using packages is helping Java to find specific classes more efficiently and also avoid naming conflicts between classes. This way we can have classes using the same name but defined in different packages. By default, Java automatically import the package 'java.lang'. You can still type this package in an import statement, but you don't have to.

If a java class makes use of other classes, the first needs to import those classes if those are not defined in the same file. In order to import a specific class, you need to use the keyword 'import' followed by the specification of the package this class belongs to, and the name of the class. It is also possible to import all the classes in a package using the wildcard '*'.

Example:

```
package hellopackage;

import java.util.*;
import hellopackage.Hello;

public class World {
	public static void main(String[] args) {
		Hello hello = new Hello();
	}
}

```

## Legal and Illegal declarations and initialization

Multiple variables can be declared and initialized in the same statement when they share the same type. Local variables require an explicit initialization; others use a default value for that type. Identifiers may contain numbers, letters, $, or _. Identifiers should not begin with numbers.

Package and import statements are optional, if they exist, both come before the class declaration and package comes before imports.

A constructor has the same name of its class and is declared as a method without a return type. The constructor can be defined with any of the access modifiers.

