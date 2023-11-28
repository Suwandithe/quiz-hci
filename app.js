$(document).ready(function(){
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if (scroll>=50){
            $('.sticky').addClass('stickyadd')
        }else{
            $('.sticky').removeClass('stickyadd')
        }
    })
});

$(document).ready(function(){
    var typed;

    typed = new Typed('.element',{
        strings: [" I'm Suwandi The", 'Welcome!'],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount:Infinity,
        showCursor: true,
        cursorChar: '|',
        startDelay: 1000
     
    });

    $('.profile').hover(
        function() {
          typed.start();
        },
        function() {
          typed.stop();
        }
      );
    
      //   programming skills
      var waypoint = new Waypoint({
          element : document.getElementById('about'),
          handler: function() {
              var p = document.querySelectorAll('.progress-bar');
              p[0].setAttribute("style", "width:50%;transition:1s all");
              p[1].setAttribute("style", "width:50%;transition:1.5s all");
              p[2].setAttribute("style", "width:20%;transition:1.8s all");
              p[3].setAttribute("style", "width:20%;transition:2.2s all");
          },
          offset:"90%"
      });

      
});