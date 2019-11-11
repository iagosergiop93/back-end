package notes.main;

public class B {
	
	{
		System.out.println("B: In instance initialization.");
	}
	
	B() {
		System.out.println("B: In constructor");
	}
	
	static {
		System.out.println("B: In static block");
	}
	
}
