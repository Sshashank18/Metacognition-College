
let event1t=$('.btev1t');
let event2t=$('.btev2t');
let event3t=$('.btev3t');
let event4t=$('.btev4t');


let event1c=$('.btev1c');
let event2c=$('.btev2c');

let event1g=$('.btev1g');
let event2g=$('.btev2g');

let event1f=$('.btev1f');
let event2f=$('.btev2f');
let event3f=$('.btev3f');
let event4f=$('.btev4f');

let event1e=$('.btev1e');
let event2e=$('.btev2e');
let event3e=$('.btev3e');
let event4e=$('.btev4e');

let evcontent1t=$('.event1t');
let evcontent2t=$('.event2t');
let evcontent3t=$('.event3t');
let evcontent4t=$('.event4t');

let evcontent1g=$('.event1g');
let evcontent2g=$('.event2g');

let evcontent1e=$('.event1e');
let evcontent2e=$('.event2e');
let evcontent3e=$('.event3e');
let evcontent4e=$('.event4e');

let evcontent1f=$('.event1f');
let evcontent2f=$('.event2f');
let evcontent3f=$('.event3f');
let evcontent4f=$('.event4f');

let evcontent1c=$('.event1c');
let evcontent2c=$('.event2c');


// Coding

event2t.click(()=>{
    evcontent3t.attr('hidden','');
    evcontent4t.attr('hidden','');
    evcontent2t.removeAttr("hidden");
    evcontent1t.attr('hidden','');
})

event4t.click(()=>{
    evcontent3t.attr('hidden','');
    evcontent4t.removeAttr("hidden");
    evcontent1t.attr('hidden','');
    evcontent2t.attr('hidden','');
})

event3t.click(()=>{
    evcontent4t.attr('hidden','');
    evcontent3t.removeAttr("hidden");
    evcontent1t.attr('hidden','');
    evcontent2t.attr('hidden','');

})

event1t.click(()=>{
    evcontent4t.attr('hidden','');
    evcontent1t.removeAttr("hidden");
    evcontent2t.attr('hidden','');
    evcontent3t.attr('hidden','');
})


// Creative

event2c.click(()=>{
    evcontent2c.removeAttr("hidden");
    evcontent1c.attr('hidden','');
})

event1c.click(()=>{
    evcontent1c.removeAttr("hidden");
    evcontent2c.attr('hidden','');
})


// Gaming

event2g.click(()=>{
    evcontent2g.removeAttr("hidden");
    evcontent1g.attr('hidden','');
})


event1g.click(()=>{
    evcontent1g.removeAttr("hidden");
    evcontent2g.attr('hidden','');
})

// Fun Events

event2f.click(()=>{
    evcontent3f.attr('hidden','');
    evcontent2f.removeAttr("hidden");
    evcontent1f.attr('hidden','');
    evcontent4f.attr('hidden','');
})

event3f.click(()=>{
    evcontent3f.removeAttr("hidden");
    evcontent1f.attr('hidden','');
    evcontent2f.attr('hidden','');
    evcontent4f.attr('hidden','');
})

event4f.click(()=>{
    evcontent4f.removeAttr("hidden");
    evcontent1f.attr('hidden','');
    evcontent2f.attr('hidden','');
    evcontent3f.attr('hidden','');
})

event1f.click(()=>{
    evcontent1f.removeAttr("hidden");
    evcontent2f.attr('hidden','');
    evcontent3f.attr('hidden','');
    evcontent4f.attr('hidden','');
})


// Electronics

event2e.click(()=>{
    evcontent3e.attr('hidden','');
    evcontent2e.removeAttr("hidden");
    evcontent1e.attr('hidden','');
    evcontent4e.attr('hidden','');
})

event3e.click(()=>{
    evcontent3e.removeAttr("hidden");
    evcontent1e.attr('hidden','');
    evcontent2e.attr('hidden','');
    evcontent4e.attr('hidden','');
})

event1e.click(()=>{
    evcontent1e.removeAttr("hidden");
    evcontent2e.attr('hidden','');
    evcontent3e.attr('hidden','');
    evcontent4e.attr('hidden','');
})

event4e.click(()=>{
    evcontent4e.removeAttr("hidden");
    evcontent2e.attr('hidden','');
    evcontent1e.attr('hidden','');
    evcontent3e.attr('hidden','');
})





// BUTTON TOGGLE 

var $li = $('.list li').click(function() {
    $li.removeClass('selected');
    $(this).addClass('selected');
});

var $span = $('.nav span').click(function() {
    $span.removeClass('selected');
    $(this).addClass('selected');
});


let rgbtn=$('.rgbtn');

rgbtn.click((event)=>{
    window.location="https://metacognition-registration.herokuapp.com/";
});