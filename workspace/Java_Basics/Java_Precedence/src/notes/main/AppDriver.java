package notes.main;

public class AppDriver {
	
	static {
		System.out.println("Static block in the driver class.");
	}
	
	public static void main(String[] args) {
//		example1();
//		
//		System.out.println("After example1: \n");
//		
//		example1();
//		
//		System.out.println("After example1 second time: \n");
		
		example2();
		
	}
	
	static void example1() {
		A a = new A();
	}
	
	static void example2() {
		C b = new C();
	}
	
	static {
		System.out.println("Second static block in the driver class.");
	}

}
