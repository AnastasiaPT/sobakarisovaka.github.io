(function ($) {
	$(document).ready(function () {


        $('.paints').click(function(){
            $(this).toggleClass('active');
            $('#material .paints-window').toggleClass('active');
            return false;
		});
		
		$(document).mouseup(function(e){
			var div = $(".paints, #material .paints-window");
			if (!div.is(e.target) && div.has(e.target).length === 0){
				div.removeClass('active');
			}
		})
    
        $('.switch .rub').click(function(){
            
            var priceElement1 = document.querySelectorAll('.rub');
            priceElement1.forEach(item => {
                item.classList.add('active');
            });
            var priceElement2 = document.querySelectorAll('.dol');
            priceElement2.forEach(item => {
                item.classList.remove('active');
            });


            return false;
		});
        $('.switch .dol').click(function(){
            var priceElement3 = document.querySelectorAll('.rub');
            priceElement3.forEach(item => {
                item.classList.remove('active');
            });
            
            var priceElement4 = document.querySelectorAll('.dol');
            priceElement4.forEach(item => {
                item.classList.add('active');
            });
            return false;
		});
    
    
         $('.ask .arrow').click(function(){
            $(this).toggleClass('active');
            $(this).closest('.ask').toggleClass('active');
            return false;
		});
		
         $('.ask.active .arrow.active').click(function(){
            $(this).removeClass('active');
            $(this).closest('.ask').removeClass('active');
            return false;
		});

    })

    document.getElementById('zayavkaForm').addEventListener('submit', function(e) {
        e.preventDefault(); 
        alert('Заявка будет рассмотрена в ближайшее время');
        this.reset();
    });

})(jQuery)