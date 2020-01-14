let event1t=$('.btev1t');
let event2t=$('.btev2t');
let event3t=$('.btev3t');

let event1c=$('.btev1c');
let event2c=$('.btev2c');
let event3c=$('.btev3c');

let evcontent1t=$('.event1tw');
let evcontent2t=$('.event2t');
let evcontent3t=$('.event3t');


let evcontent1c=$('.event1c');
let evcontent2c=$('.event2c');
let evcontent3c=$('.event3c');


event2t.click(()=>{
    evcontent3t.attr('hidden','');
    evcontent2t.removeAttr("hidden");
    evcontent1t.attr('hidden','');
})

event3t.click(()=>{
    evcontent3t.removeAttr("hidden");
    evcontent1t.attr('hidden','');
    evcontent2t.attr('hidden','');

})

event1t.click(()=>{
    evcontent1t.removeAttr("hidden");
    evcontent2t.attr('hidden','');
    evcontent3t.attr('hidden','');
})


// CUltural

event2c.click(()=>{
    evcontent3c.attr('hidden','');
    evcontent2c.removeAttr("hidden");
    evcontent1c.attr('hidden','');
})

event3c.click(()=>{
    evcontent3c.removeAttr("hidden");
    evcontent1c.attr('hidden','');
    evcontent2c.attr('hidden','');

})

event1c.click(()=>{
    evcontent1c.removeAttr("hidden");
    evcontent2c.attr('hidden','');
    evcontent3c.attr('hidden','');
})

var $li = $('.choice li').click(function() {
    $li.removeClass('selected');
    $(this).addClass('selected');

});