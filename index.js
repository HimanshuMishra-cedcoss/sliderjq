$( document ).ready(function() {
    var width=1400;
    var animationSpeed=1000;
    var pause=3000;
    var currentSlide=1;
    var $slider=$('#slider');
    var $slideContainer=$slider.find('.slides');
    var $slides=$slideContainer.find('.slide');
    var interval;
    var count=1
    function startSlider(){
    	 interval=setInterval(function(){
    		$slideContainer.animate({'margin-left': '-='+width},animationSpeed,function(){
    			currentSlide++;
    			if(currentSlide===$slides.length){
    				currentSlide=1;
    				$slideContainer.css('margin-left',0);
    			}
    		});
    		},pause);
    	
    }
    function stopSlider(){
	clearInterval(interval);
}
$slider.on('mouseenter',stopSlider).on('mouseleave',startSlider);



$(".next").click(function(){
	stopSlider();
	$slideContainer.css('float','left')
  $slideContainer.animate({'margin-left': '-='+width},function(){
  	  count++
  console.log(count);
  if(count==4)
  {
  	$slideContainer.css('margin-left',0);
  	count=1;
  }
  });

});

$(".prev").click(function(){
  stopSlider();
  $slideContainer.css('float','right')
  $slideContainer.animate({'margin-right': '-='+width},function(){
  count++
  console.log(count);
  if(count==4)
  {
  	$slideContainer.css('margin-right',0);
  	count=1;
  }
  });

});

});
