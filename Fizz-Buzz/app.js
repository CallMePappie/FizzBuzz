function fizzbuzz() {
    
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let num3 = num1 * num2;
    let str = "";
    for (let i=1; i<=100; i++)
    {
        // number divisible by num1 and num2 will
        // be divisible by the multiplication of num1 and num2, print
        // "FizzBuzz" in place of the number
        if (i%num3 == 0)   
            str += ("FizzBuzz" + " - ");
         
        // number divisible by num1? print "Fizz"
        // in place of the number
        else if ((i%num1) == 0)
            str += ("Fizz" + " - ");               
         
        // number divisible by num2, print "Buzz"
        // in place of the number
        else if ((i%num2) == 0)                   
            str += ("Buzz" + " - ");               
     
        else // print the number
            str += (i + " - ");                          
    }
    document.getElementById("display").innerHTML = str;
}