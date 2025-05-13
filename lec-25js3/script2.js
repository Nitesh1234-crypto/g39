

var a=10;
function fun(){
    console.log(a);
    var a=20;
    function foo(){
        a++;
        console.log(a);
        var a=30;
    }
    foo()
}
fun();

var a;
function fun(){
    var a;
    console.log(a);
    a=20;
    function foo(){
        var a;
        a++;
        console.log(a);
        a=30;
    }
    foo();
}
a=10;
fun();


