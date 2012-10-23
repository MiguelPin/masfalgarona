$(document).bind('mobileinit', function(event){
	
	 $.mobile.loadingMessage = "Cargando ...";
       
       $.mobile.loadingMessageTextVisible = false; 
       $.mobile.pageLoadErrorMessage = "Error al cargar"
     
	$.mobile.page.prototype.options.backBtnText = "Atr&aacute;s";
	$.mobile.page.prototype.options.addBackBtn   = false;

   

});





        

