# Difference between mock and spy

Often you heard developers how to spy and mock in Mockito in unit test but what are the difference between spy and mock in Mockito API? Both can be used to mock methods or fields. The difference is that in mock, you are creating a complete mock or fake object while in spy, there is the real object and you just spying or stubbing specific methods of it.

When using mock objects, the default behavior of the method when not stub is do nothing. Simple means, if its a void method, then it will do nothing when you call the method or if its a method with a return then it may return null, empty or the default value.

While in spy objects, of course, since it is a real method, when you are not stubbing the method, then it will call the real method behavior. If you want to change and mock the method, then you need to stub it.
