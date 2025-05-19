
/*Add to card and toggle info*/

function cartalert(){

    alert("Product added to Cart")

}

function toggleInfoVisiblity(element){
    var elem = document.getElementById(element)

     if (getComputedStyle(elem).visibility == "hidden") {
        elem.style.visibility = "visible";  // Show
    } else {
        elem.style.visibility = "hidden";   // Hide
    }
}



/*JQUERY Contact Form Submission*/

(function($) {
    $(function() {
        $("#togglebutton").click(function() {
            var $nav = $("#navmenu");

            if ($nav.css("visibility") === "hidden") {
                $nav.css("visibility", "visible");
                $(this).text("Hide");
            } else {
                $nav.css("visibility", "hidden");
                $(this).text("Show");
            }
        });

        $("#contactsection").submit(function(e) {
            e.preventDefault(); 

      
            var nameVal = $('#contactname').val();
            var emailVal = $('#email').val();
            var numberVal = $('#number').val();
            var commentVal = $('#comment').val();

            var valid = true;
            
            
            var nameReg = /^[A-Za-z\s]{1,20}$/;
            if (!nameReg.test(nameVal)) {
                $('#namerror').css('visibility', 'visible');
                valid = false;
            } else {
                $('#namerror').css('visibility', 'hidden');
            }

            
            var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailReg.test(emailVal)) {
                $('#emailerror').css('visibility', 'visible');
                valid = false;
            } else {
                $('#emailerror').css('visibility', 'hidden');
            }

            
            var numberReg = /^\d{8}$/;
            if (!numberReg.test(numberVal)) {
                $('#numbererror').css('visibility', 'visible');
                valid = false;
            } else {
                $('#numbererror').css('visibility', 'hidden');
            }

           
            if (commentVal.length < 1 || commentVal.length > 100) {
                $('#commenterror').css('visibility', 'visible');
                valid = false;
            } else {
                $('#commenterror').css('visibility', 'hidden');
            }

            if (valid) {
                this.submit();
            }
        
        });
        //https://www.jqueryscript.net/lightbox/lightbox2.html
       lightbox.option({
            albumLabel:'Image %1 of %2',
            resizeDuration: 200,
            wrapAround: true,
            fadeDuration: 600,
            showImageNumberLabel:true,
            maxHeight: 600,
            maxWidth: 800


            });
        

       
    });
})(jQuery);
