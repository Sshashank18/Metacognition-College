let navbar=$('#navbar');
let btncont=$('#btn-container');
let cross=$('#cross');

$('#menu').click(()=>{
    navbar.removeAttr("hidden");
    btncont.attr("hidden",true);
})

cross.click(()=>{
    navbar.attr("hidden",true);
    btncont.removeAttr("hidden");
})

