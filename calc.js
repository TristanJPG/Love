
$("#Submit").submit(function (event) {
    event.preventDefault();
    var loversName1 =  $("#fname").val();
    var loversName2 = $("#sname").val();
    var n = Math.random() 
    n = n * 100 
    n = Math.floor(n)
    $("#love-title").text(loversName1 + " and " + loversName2 + " are " + n + "%" + " compatible for love.");
});

