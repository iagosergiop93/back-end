fun main(args: Array<String>) {
    testaCondicoes(2.0)
    println("Bem vindo ao Bytebank")
    val titular = "Iago"
    var saldo = 1000.50

    val a: Int

    saldo -= 300
    println("Titular: $titular")
    println("Saldo: $saldo")
}

fun testaCondicoes(saldo: Double) {
    for (i in 1..5) {
        println(i)
    }
}