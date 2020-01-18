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

submit.click((event)=>{

    event.preventDefault();

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
        success: res => {
            console.log(res);
            if (res.message === "Send to register") {
                window.location=`/paytm?name=${Name.val()}&email=${Email.val()}&mobile=${Mobile.val()}&branch=${branch}&year=${year}&event=${eventName}&amount=${eventAmount}`;
            } else {
                alert(res.message);
            }
        }
    });
});


