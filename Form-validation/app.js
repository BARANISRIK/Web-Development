function formValidate(){ 
    
            let isValid = true;
            var name=document.getElementById('name').value;
            var email=document.getElementById('email').value;
            var password=document.getElementById('password').value;
            var phone=document.getElementById('phone').value;
            var country=document.getElementById('country').value;
            
           if(name){
                document.getElementById('nameerror').style="display:none";
                if(name.length>=3){
                    document.getElementById('namelenerror').style="display:none;";
                    document.getElementById('name').style="border:2px solid green;";
                }
                else{
                    document.getElementById('namelenerror').style="display:block; color:red;";
                    isValid=false;
                }
            }
            else{
                document.getElementById('nameerror').style="display:block;color:red;";
                document.getElementById('name').style="border:2px solid red;";
                isValid=false;
            }

            if(email){
                document.getElementById('emailerror').style="display:none;";
                var emailpattern=/^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/;
                if(emailpattern.test(email)==true){
                   document.getElementById('emailpatternerror').style="display:none;";  
                   document.getElementById('email').style="border:2px solid green;"
                }
                else{
                     document.getElementById('emailpatternerror').style="display:block;color:red;";
                     isValid=false;
                }
            }
            else{
                document.getElementById('emailerror').style="display:block;color:red;";
                document.getElementById('email').style="border:2px solid red;"
                isValid=false;
            }

            if(password){
                document.getElementById('passworderror').style="display:none;";
                passwordpattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                if(passwordpattern.test(password)==true){
                    document.getElementById('passwordpatternerror').style="display:none;"; 
                    document.getElementById('password').style="border:2px solid green;"
                }
                else{
                   document.getElementById('passwordpatternerror').style="display:block;color:red;";
                   isValid=false;  
                }
            }
            else{
                document.getElementById('passworderror').style="display:block;color:red;";
                document.getElementById('password').style="border:2px solid red;"
                isValid=false;
            }

            if(phone){
                document.getElementById('phoneerror').style="display:none;";
                if(phone.length==10){
                    document.getElementById('phonelenerror').style="display:none;";
                    document.getElementById('phone').style="border:2px solid green;";
                }
                else{
                  document.getElementById('phonelenerror').style="display:block;color:red;";  
                  isValid=false;
                }   
                }
            else{
                document.getElementById('phoneerror').style="display:block; color:red;";
                document.getElementById('phone').style="border:2px solid red;"
                isValid=false;
            }

            if(country!='Select Country'){
                document.getElementById('countryerror').style="display:none;";
                document.getElementById('country').style="border:2px solid green;";
            }
            else{
                document.getElementById('countryerror').style="display:block;color:red;";
                document.getElementById('country').style="border:2px solid red;"
                isValid=false;
            }

            return isValid;
        }