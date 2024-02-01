// // 초기 상태 설정


// to css op:0 -> op1 (이후값)
// form  op:0 -> CSS그대로 (원복)
gsap.from(".news .box-wrapper .item", {
    scrollTrigger: {
        trigger: ".news",
        start: "0% 50%",
        end: "100% 50%",
        // markers:true,
        // toggleActions:"play pause pause reverse"
        /**
         * 1. 도달 onEnter
         * 2. 떠났 onLeabe
         * 3. 떠났다가 돌아옴 onEnterBack
         * 4. 도달했다가 돌아옴 onLeaveBack
         * 
         */
        // scrub: true,
    },
    opacity: 0,
    yPercent:20,
    stagger: 0.2, 
});



gsap.to('.scroll-section1 .animation-wrapper .title span',{
    scrollTrigger: {
        trigger: " .scroll-section1",
        start: "0% 0%",
        end: "100% 100%",
        // markers:true,
        scrub:0,
    },
    'background-size': '100% 100%'
})



$(".scroll-section1 .img-wrapper img").each(function(i, e) {
    gsap.to(e, {
        scrollTrigger: {
            trigger: e,
            start: "0 100%", // Adjust as needed
            end: "bottom 100%", // Adjust as needed
            // markers:true,
            onEnter:function(){
                e.classList.add('show');
            }
        },
    });
});

// gsap.set(".news .box-wrapper .box1", {
//     opacity: 0,
// });

// $(".news .box-wrapper .box1").each(function(i, e) {
//     gsap.to(e, {
//         scrollTrigger: {
//             trigger: e,
//             start: "0 100%",
//             end: "bottom bottom",
//             scrub: true, // Remove the extra semicolon here
//             markers: true,
//         },
//         opacity: 1,
//         delay: i * 0.5,
//     });
// });

//
section2tl = gsap.timeline({
     scrollTrigger: {
        trigger: " .scroll-section2",
        start: "0% 0%",
        end: "100% 100%",
        markers:true,
        scrub:0,
        onUpdate:function(self){
            $('.scroll-section2').css({'--progress':self.progress})
        }
    },
})
section2tl
// .to('.scroll-section2 .sticky-wrapper .img-grid img',{
//     translate: '0 0 -100px'
// },'a')




gsap.set(".scroll-section3 .img-scroller img",{
    opacity:0,
    transform: "rotateX(0)",
    transition:"opacity 1.2s cubic-bezier(.16, 1, .3, 1),transform 1.2s cubic-bezier(.16, 1, .3, 1)"
})
$(".scroll-section3 .img-scroller img").each(function(i,e){

    gsap.to(e,{
        scrollTrigger: {
            trigger: e,
            start: "0 100%", // Adjust as needed
            end: "bottom 100%", // Adjust as needed
            scrub: true,
            // markers:true,
        },
        opacity: 1,
        transform: "rotateX(20deg)",
    })
})

gsap.set(".team .team-members .member",{
    transition:"opacity 1.2s cubic-bezier(.16, 1, .3, 1), translate 1.2s cubic-bezier(.16, 1, .3, 1)",
    opacity:0,
    y:30,
})

let teamList = $(".team .team-members .member")


teamList.each(function(i,e){
    gsap.to(e,{
        scrollTrigger:{
            trigger:e,
            start:"0 100%",
            // scrub:1,
        },
        opacity:1,
        y:0,
        stagger:1,
    })
})

// let teamScrollDown = gsap.to(teamList,{
//     scrollTrigger:{
//         trigger:".team",
//         scrub:1,
//         start:"top 80%",
//         end:"bottom bottom",
//         markers:true,
//     },
//     opacity:1,
// })

horiParent=gsap.to('.horizontal-scroll .container',{
    scrollTrigger:{
        trigger:".horizontal-scroll",
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
        invalidateOnRefresh:true
    },
    xPercent:-100,
    x:function(){
        return window.innerWidth;
    }, //윈도우창 위드
    ease:"none"
})

$('.horizontal-scroll .container .list').each(function(i,el){
    ScrollTrigger.create({
        trigger: el,
        containerAnimation: horiParent,
        // toggleClass: "active",
        start: "0% 50%",
        end:"100% 50%",
        // id: "3"
        // markers:true,
        onEnter:function(){
            $('.bg').eq(i).addClass('on');
        },
        onLeaveBack:function(){
            $('.bg').eq(i).removeClass('on');
        }
      });

})



gsap.set('.recognition .list .item img',{
    rotation:'random(-30,30)'
})


$('.event .list1').each(function(i,el){
    let scrollTween = gsap.to(el,{
        scrollTrigger:{
            trigger:".event",
            // pin:true,
            scrub:1,
            start:"top 100%",
            end:"100% 100%",
            invalidateOnRefresh: true
        },
        xPercent:100*el.dataset.num,
        x:function(){
            return -window.innerWidth*el.dataset.num;
        },
        ease:'none',
       
    })
    
})



// let list2 = gsap.utils.toArray(".event .list2 .item")

// let scrollTween2 = gsap.to(list2,{
//     // 원래 리스트의 갯수보다 1을 빼서 길이를 구한 후에 가로로 이동
//     xPercent: -100 * (list.length - 1),
//     ease:'none',
//     scrollTrigger:{
//         trigger:".event",
//         // pin:true,
//         scrub:1,
//         start:"top 80%",
//         end:"350%",
//         // markers:true,
//     }
// })


ScrollTrigger.create({
    trigger:".scroll-section3 .container .img-scroller",
    start:"0% 100%",
    end:"100% 100%",
    onEnter:function(){
        $(".scroll-section3 .main").addClass("on");
    },
    onLeaveBack:function(){
        $(".scroll-section3 .main").removeClass("on");
    }
})

// gsap.to('.scroll-section3 .container .img-scroller',{
//     ScrollTrigger:{
//         trigger:".scroll-section3 .container .img-scroller",
//         start:"0% 100%",
//         end:"100% 100%",
//         onEnter:function(){
//             $(".scroll-section3 .main").addClass("on");
//         },
//         onLeaveBack:function(){
//             $(".scroll-section3 .main").removeClass("on");
//         }
//     },
// })


// $(window).scroll(function() {
//     // Move the variable declaration to the top
//     let scroll = $(window).scrollTop();
    

//     if (scroll > 18000) {
//         // Fix the selector, and add/remove class as needed
//         $(".scroll-section3 .main").addClass("on");
//     }else{
//         $(".scroll-section3 .main").removeClass("on");
//     }
// });




// $('.nav .list a').click(function(e){
//     e.preventDfault();
//     gsap.to(window, { duration: 2, scrollTo: "#someID" });
// })



$('.section').each(function(i,el){
    ScrollTrigger.create({
        trigger:el,
        start:"0% 100%",
        end:"100% 100%",
        onEnter:function(){ //도달
            $('.nav .bar .point').css('top',`${25*i}%`)
            // $('.nav .list .item').eq(i).addClass('on')
        },
        onEnterBack:function(){ //떠났다가 돌아옴
            $('.nav .bar .point').css('top',`${25*i}%`)
        }
    })
})