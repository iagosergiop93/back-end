package notes.main;

public class A extends B {
	
	{
		System.out.println("A: In instance initialization.");
	}
	
	A() {
		System.out.println("A: In constructor");
	}
	
	static {
		System.out.println("A: In static block");
	}
	
}
