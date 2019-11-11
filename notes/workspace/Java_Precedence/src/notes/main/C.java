package notes.main;

public class C {
	private A aa;
	C() {
		System.out.println("C: In constructor");
		A a = new A();
		this.aa = a;
	}
	
	{
		System.out.println("C: In instance initialization");
	}
	
	static {
		System.out.println("C: In static block");
	}
	
}
