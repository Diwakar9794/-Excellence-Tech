$(document).ready(function(){

	$(".test-form").submit(function(e){
		e.preventDefault();

		var input = document.getElementsByClassName("required");
        
        var temp=[];

        $(input).each(function(i){
                    
            if( $(this).val().trim() == ''  ||  $(this).val().trim() == null )
            {
                if(this.nextSibling.nodeName == "SMALL")
                {
                    this.nextSibling.remove();
                }
                    //////////
                    var link = $(this).parent("div").find("label");

                window.scrollTo(0,0);
                 $(this).addClass("border-danger");
                 $("<small class='text-danger required-notice'><i class='fas fa-exclamation-triangle'></i>"+link.text()+" is Required</small>").insertAfter(this);
            }
            else
            {
                temp[i] = $(this).val().trim();
                 if(this.type == "email")
                        {
                            validate_email(this);
                        }
                      captcha_chaeck();
            }


    	 });


        if(temp.length == input.length && $(".required-notice").length == 0)
            {
                $.ajax({
                    type:"POST",
                    url:"insert.php",
                    data : new FormData(this),
                    contentType:false,
                    processData:false,
                    success:function(result)
                    {
                    	if($.trim(result) == "success")
                        {
                            

                             setTimeout(function() {
                            location.reload();
                        }, 2000);
                                        

                             toastr.options.timeOut = 2500; // 1.5s
                             toastr.success('Data Add Successfully');

                        }
                        else if($.trim(result) == "Email Id is already Exist")
                        {
                                var email = document.getElementsByClassName("email-val");
                                $(email).addClass("border-danger");
                                $("<small class='text-danger required-notice'><i class='fas fa-exclamation-triangle'></i> Email is already exist !</small>").insertAfter(email);
                                 
                                toastr.options.timeOut = 2000; // 1.5s
                                toastr.error('Email is already Exist !');
                        }
                        else
                        {
                        	// $(".msg").html(result);
                            alert(result);
                        }
                    }
           
                });
            }


            // remove require message on input
          $(input).each(function(){
            $(this).on("input",function(){

                if(this.nextSibling.nodeName == "SMALL")
                {
                    $(this).removeClass("border-danger");
                    this.nextSibling.remove();
                }
                });
            });

           function validate_email(input)
            {
            var reg= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                if(!reg.test(input.value))
                {
                    if(input.nextSibling.nodeName == "SMALL")
                            {
                                input.nextSibling.remove();
                            }

                            $(input).addClass("border-danger");
                            $("<small class='text-danger required-notice'><i class='fas fa-exclamation-triangle'></i>Enter a valide email id</small>").insertAfter(input);
                }
            }
	});


    //generate captcha

           function generate_captcha()
           {
                var length = 6,
                charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                retVal = "";
                for (var i = 0, n = charset.length; i < length; ++i) {
                    retVal += charset.charAt(Math.floor(Math.random() * n));
                }
            // return retVal;


                $("#demo").val(retVal);
           }

           generate_captcha();

           $(".refresh").on("click",function(){
                
                generate_captcha();

           });



           // captcha validation

        function captcha_chaeck()
        {
                var captcha = $('#demo').val().trim();
                var captcha1 = $('#demo1').val().trim();
                var aa= document.getElementById('demo1');
                if(captcha != captcha1)
                {
                     if(aa.nextSibling.nodeName == "SMALL")
                     {
                        aa.nextSibling.remove();
                     }

                     $(aa).addClass("border-danger");
                     $("<small class='text-danger required-notice'><i class='fas fa-exclamation-triangle'></i>Invalide Captcha Code</small>").insertAfter(aa);
                }
                

        }

	$(".delete").on("click",function(e){
		e.preventDefault();
		
		var id = $(this).val();

		var result = confirm("Are you delete this record !");
		  if (result == true) {
		    
		  		$.ajax({
		  			url:"delete.php",
		  			type:"POST",
		  			data:{
		  				id:id
		  			},
		  			success:function(result)
		  			{
		  				if($.trim(result) == "delete")
                        {
                            
                             setTimeout(function() {
                            location.reload();
                       		 }, 2000);
                                        

                             toastr.options.timeOut = 2500; // 1.5s
                             toastr.success('Data delete Successfully');

                        }
                        else
                        {
                        	alert(result);
                        }
		  			}
		  		});

		  }
       
	});





});

// update form

$(document).ready(function(){

    $(".edit-form").submit(function(e){
        e.preventDefault();

        var input = document.getElementsByClassName("required");
        
        var temp=[];

        $(input).each(function(i){
                    
            if( $(this).val().trim() == ''  ||  $(this).val().trim() == null )
            {
                if(this.nextSibling.nodeName == "SMALL")
                {
                    this.nextSibling.remove();
                }
                    //////////
                    var link = $(this).parent("div").find("label");

                window.scrollTo(0,0);
                 $(this).addClass("border-danger");
                 $("<small class='text-danger required-notice'><i class='fas fa-exclamation-triangle'></i>"+link.text()+" is Required</small>").insertAfter(this);
            }
            else
            {
                temp[i] = $(this).val().trim();
                 if(this.type == "email")
                        {
                            validate_email(this);
                        }
                      captcha_chaeck();
            }


         });


        if(temp.length == input.length && $(".required-notice").length == 0)
            {
                 $.ajax({
                    type:"POST",
                    url:"finalupdate.php",
                    data : new FormData(this),
                    contentType:false,
                    processData:false,
                    success:function(result)
                    {
                       if($.trim(result) == "success")
                        {      
                                setTimeout(function() {
                                window.location.href='index.php';
                                }, 2000);

                                 toastr.options.timeOut = 2500; // 1.5s
                                 toastr.success('Data Update Successfully');
                        }
                        else
                        {
                            alert(result);
                        }
                    }
           
                });
            }


            // remove require message on input
          $(input).each(function(){
            $(this).on("input",function(){

                if(this.nextSibling.nodeName == "SMALL")
                {
                    $(this).removeClass("border-danger");
                    this.nextSibling.remove();
                }
                });
            });

           function validate_email(input)
            {
            var reg= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                if(!reg.test(input.value))
                {
                    if(input.nextSibling.nodeName == "SMALL")
                            {
                                input.nextSibling.remove();
                            }

                            $(input).addClass("border-danger");
                            $("<small class='text-danger required-notice'><i class='fas fa-exclamation-triangle'></i>Enter a valide email id</small>").insertAfter(input);
                }
            }
    });


           // captcha validation

        function captcha_chaeck()
        {
                var captcha = $('#demo').val().trim();
                var captcha1 = $('#demo1').val().trim();
                var aa= document.getElementById('demo1');
                if(captcha != captcha1)
                {
                     if(aa.nextSibling.nodeName == "SMALL")
                     {
                        aa.nextSibling.remove();
                     }

                     $(aa).addClass("border-danger");
                     $("<small class='text-danger required-notice'><i class='fas fa-exclamation-triangle'></i>Invalide Captcha Code</small>").insertAfter(aa);
                }
                

        }
         
});