function add(a,b)
{
    a=parseInt(document.getElementById("num1").value)
    b=parseInt(document.getElementById("num2").value)
    var c=a+b
    var res=document.getElementById("result")
    res.innerHTML="sum "+c
}