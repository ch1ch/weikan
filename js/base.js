

$(document).ready(function(){

	AnimateAdmin();
  MShare();
  EndShop();
  PopMovie();

});

function AnimateAdmin(){
	ImgBack();
}

function ImgBack(){
  //$("#imgback").fadeIn(400,fontdis);
  $("#imgback").fadeIn(1000,Img10);
  
}


function Img10(){

	var position = $("#img10").position();
	$("#img10").css({position:'absolute',top:position.top,
                    left:position.left})
              .animate(
                {
                  //opacity: 'hide',
                  width: $("#img10").width() * 1.5,
                  height: $("#img10").height() * 1.5,
                  top: position.top - ($("#img10").height() * 0.8 / 2),
                  left: position.left - ($("#img10").width() * 0.6 / 2)
                },
                1500);
              	//400);

    	$("#img10").css({position:'absolute',top:position.top,
                    left:position.left})
              .animate(
                {
                  //opacity: 'hide',
                  width: $("#img10").width() *1.07,
                  height: $("#img10").height() * 1.05,
                  top: position.top - ($("#img10").height() * 0.3 / 2),
                  left: position.left - ($("#img10").width() * 0.1 / 2)
                },
                200,TiaoFu);

  $(".otherpage").css({opacity:'1'});



}

function TiaoFu(){

      
	$("#imgheng").fadeIn(1,function()
		{
			$("#imgheng").animate({marginLeft:'0px',width:'640px'},1500,ImgTitle);
			//$("#imgheng").animate({marginLeft:'0px',width:'832px'},200,imgtitle);
		}
	);
}

function ImgTitle(){

	$("#imgtitle1div").fadeIn(1,function()
		{
			var position = $("#imgtitle1").position();
			$("#imgtitle1").css({position:'absolute',top:position.top,
                    left:position.left})
              .animate(
                {
                  //opacity: 'show',
                  width: $("#imgtitle1").width() * 10,
                  height: $("#imgtitle1").height() * 10,
                  top: position.top - ($("#imgtitle1").height() * 10 / 2),
                  left: position.left - ($("#imgtitle1").width() * 10 / 2)
                },
                1000,ImgSwiper);
          }
		);
}

function ImgSwiper(){
	$("#imgswiper").fadeIn(1,function()
		{
			$("#imgswiper").fadeOut(700);
      $("#imgswiper").fadeIn(700,ImgSwiper);

		}
	);
}





function MShare(){
    var shareButton = $('.share-button');

   
    shareButton.click(function(){
    $("#overlay").css({'opacity':1}).fadeIn(1);
     
      
    
    }); 
    $("#overlay").click(function(){
         $("#overlay").css({'opacity':0}).fadeOut(0);
    }); 
  
  }



function PopMovie(){
   
     $('#popvideo').click(function(){
        $(".popup-detail").fadeIn(1);
        $('#popvideo').fadeOut(1);
        $('#page2font').fadeOut(1);
    }); 
     CloseMovie();
  }


function CloseMovie(){
   
     $('.videoclose').click(function(){
        $(".popup-detail").fadeOut(1);
        $('#popvideo').fadeIn(1);
        $('#page2font').fadeIn(1);
        
    }); 
  }



function EndShop(){

   
     $('.end-button').click(function(){
      
        window.location.href='http://detail.tmall.com/item.htm?spm=0.0.0.0.6reGGP&id=41742658772'; // 跳转
    }); 

  }