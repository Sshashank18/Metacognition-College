let amount=$('#price');
var eventAmount=$("select.events :selected").attr('data-amount');
var branch=$("select.branch :selected").attr('data-value');
var year=$("select.year :selected").attr('data-value');
var eventName=$("select.events :selected").attr('data-value');;

let Name=$('#Name');
let Email=$('#Email');
let Mobile=$('#Mobile');

let submit=$('.submit');

$("select.branch").change(function(){
    branch = $(this).children("option:selected").attr('data-value');
});



$("select.year").change(function(){
    year = $(this).children("option:selected").attr('data-value');
});


$("select.events").change(function(){
    eventName = $(this).children("option:selected").attr('data-value');
    eventAmount = $(this).children("option:selected").attr('data-amount');
    amount.text(' ');
    amount.text('₹'+eventAmount);
});

submit.click(()=>{

    $.ajax({
        url: "/register",
        type: "POST",
        data: {
            Name:Name.val(),
            Email:Email.val(),
            Mobile:Mobile.val(),
            Branch:branch,
            Year:year,
            Event:eventName,
            Amount:eventAmount
        },
        success: () => console.log("done")
        // window.location="http:127.0.0.1:3000/paytm"
    });
});


