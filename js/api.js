// API pro design a funkcionalitu Android designu

(function($){
		$(document).delegate(document, "ready", function(){
          
          $("select").selectbox({
	onOpen: function (inst) {
		//console.log("open", inst);
	},
	onClose: function (inst) {
		//console.log("close", inst);
	},
	onChange: function (val, inst) {
	},
	effect: "slide"
});


			/* Custom scrollBar */
			$("#panel").mCustomScrollbar({
				  set_width:false, 
				  set_height:false, 
				  horizontalScroll:false,
				  autoDraggerLength: false, 
				  scrollButtons:{ 
				    enable:false 
				  },
				  advanced:{
				    updateOnBrowserResize:true, 
				    updateOnContentResize:true, 
				    autoExpandHorizontalScroll:false, 
				    autoScrollOnFocus:true 
				  }
			});

			$('#panel').hover(

				function(){

					$('._mCS_1 .mCustomScrollBox .mCSB_scrollTools').animate({left: "0px"});

				}, 


				function(){
				
					$('._mCS_1 .mCustomScrollBox .mCSB_scrollTools').animate({left: "-16px"});
				
				}
				
			);
             
             $('#content').jScrollPane({
			hijackInternalLinks: true,
                    autoReinitialise: true,
                    enableKeyboardNavigation: true,
                    verticalDragMinHeight: 40,
                    horizontalDragMinWidth: 40
		});

			/*$("#content").mCustomScrollbar({
				  set_width: false, 
				  set_height:false, 
				  horizontalScroll:  false, 
				  scrollButtons:{ 
				    enable:false 
				  },
				  advanced:{
				    updateOnBrowserResize:true, 
				    updateOnContentResize:true, 
				    autoExpandHorizontalScroll: false, 
				    autoScrollOnFocus:true 
				  }
			});

			$('#content').hover(

				function(){

					$('._mCS_2 .mCustomScrollBox .mCSB_scrollTools').animate({right: "0px"});

				}, 


				function(){
				
					$('._mCS_2 .mCustomScrollBox .mCSB_scrollTools').animate({right: "-16px"});
				
				}
				
			);*/
				
		});
  
  
  /* Ořezání řetězce na určitý počet znaku a na konec vloží '...' */
	function substrToSize(countOfChar, string){

		if(string.length > countOfChar){

			string = string.substr(0, countOfChar);
			string = string + '...';

			return string;

		}else{

			return string;

		}

	}

  /* Převedení Objemu dat na bytové veličiny */
  
	function bytesToSize(bytes) {
	    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	    if (bytes == 0) return 'n/a';
	    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
	};

  /* Funkce na kontrolu prázdných řetězců atd vrací boolean */
	function is_empty(e) {
        switch(e) {
            case "":
            case 0:
            case "0":
            case null:
            case false:
            case typeof this == "undefined":
                return true;
                    default : return false;
        }
   }

		$(document).delegate(document, 'ready change', function(){
          
          
      /* Select Element style */
      
  
      
    /*  $('select').each(function(){
    
    var apply = function(el){
    
        var text = $('option[value='+el.val()+']').html();
        
        var span;
        if (el.data('initialized'))
        {
            span = el.parent().next().html(text);
        }
        else
        {
            
            el.data('initialized', true);
            
            el.after('<span id="'+el.val()+'" class="jsselect hiddenspan">'+text+'</span>');
            el.wrap($('<span class="selwrapper"></span>'));
            
            span = el.parent().next();
            span.addClass('jsselect');
            el.addClass('jsselect');
            
        }
        el.parent().width(span.width() + 5);
        
        var two = span.width();
        
    };
    
    apply($(this));
    $(this).change(function(){ $(this).css({display: "none"}); apply($(this)); });
    
});*/

      /* Activity bar */

			$('.activityBar').each(function(){

				var widthMain		= $(this).outerWidth(false);
				var marginBars		= widthMain * 0.015;
				var widthBars		= (widthMain / 3) - marginBars;
				var widthWrapper	= (widthBars * 4) * 1.5;

				$(this).html('<div class="activityBarWrap"><div class="activityBarLine"></div><div class="activityBarLine"></div><div class="activityBarLine"></div><div class="activityBarLine"></div></div>');
				$(this).children().css({width: widthWrapper + "px"});
				$(this).children().children().css({width: widthBars + "px", marginRight: marginBars + "px", right: widthBars + "px"});
				var e = $(this);
				
				function loading(parent){

					parent.children().children().animate({right: ['0px', 'linear']}, 300, function(){parent.children().children().css("right", (widthBars + marginBars) + "px"); loading(parent); });
					//console.dir($(this));
				
				}

				loading(e);
				

			});

		});


    /* Chybové hláčky */
		function failMsg(message){

			var title = document.title;
			document.title = "Chyba !";
			
			var lengthOfMsg = (message.length) * 75;
			$('#panel').before('<p class="failMsg">' + message + '</p>');
			$('.failMsg').slideDown("slow").delay(lengthOfMsg).slideUp("slow", function(){$(this).remove();});
			document.title = title;

		}
      /* PopUp nabídka */
			$(document).delegate('*[rel^="popup-rq"]', "click", function(event){

				var targetRel = $(event.target).attr("rel");
				var popupID = targetRel.replace("popup-rq-", "");
				var showElement = $('*[rel="popup-' + popupID + '"]');				
				var width	= $(showElement).outerWidth();
				var height	= $(showElement).outerHeight();

				$(showElement).css({"position": "fixed", "top": "50%", "left": "50%","margin-left": "-" + (width / 2) + "px", "margin-top": "-" + (height / 2) + "px", "z-index": "15"});
				
				$(".background").show();
				$(showElement).show();

				$(document).delegate(".background", "click", function(){

					$(showElement).hide();
					$(".background").hide();
					
				}); 

				$(document).delegate('*[rel="popup-quit"]', "click", function(){

					$(showElement).hide();
					$(".background").hide();
					
				}); 

			});
  
  
})(jQuery);
