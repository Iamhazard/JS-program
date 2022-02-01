
    function Add()
    {
        var a,b,Add;
        var a=Number(document.getElementById("txtv1").value);
        var b=Number(document.getElementById("txtv2"). value);
         Add=a+b;
        document.getElementById("txtResult").value=Add;
        console.log(Add)
    }