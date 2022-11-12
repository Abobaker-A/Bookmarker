$(document).ready(function(){
    const siteName = $("#siteName");
    const siteURL = $("#siteURL");
    let deleteBtn = [];
    
    let webSites = [] ; 
    
    
    
    if( localStorage.getItem( "AllWeb" ) != null){
    webSites = JSON.parse( localStorage.getItem("AllWeb") )   ;
    display()
    }
    
    $("#subBtn").click( function(){
        displayAlert();
    
        if(validtion() == true && validtionUrl() == true ){
            let webSite = {
                Name : siteName.val() ,
                Url : siteURL.val()   
            }
            webSites.push( webSite ) ;
            console.log(webSites);
            localStorage.setItem("AllWeb" , JSON.stringify( webSites ));
            displayOne()
            clear ();
        }
    });
 
    function display(){       
        for (let i = 0; i < webSites.length; i++) {
            let divParent = document.createElement('div') ;
            let button = document.createElement('button') ;
            let divChild = document.createElement('div') ;
            let a = document.createElement('a') ;
            let h3 = document.createElement('h3') ;
            $(divParent).addClass('p-4 d-flex justify-content-between bg-secondary bg-gradient m-4 bg-opacity-25');
            $(divParent).attr('id','linkItem');
            $(h3).text(webSites[i].Name)
            divParent.append(h3)
            $(a).addClass('px-3 btn btn-primary text-decoration-none text-white');
            $(a).attr('href', webSites[i].Url );
            $(a).attr('target', "_blank" );
            $(a).text('Visit');
            $(divChild).append(a);
            $(button).addClass('mx-5 btndelete btn btn-danger');
            $(button).attr('data-index',`${i}`);
            $(button).text('Delete');
            $(divChild).append(button);
            divParent.append(divChild);
            $('#Sec').append(divParent);       
        }
    };
    function displayOne(){
        let divParent = document.createElement('div') ;
        let button = document.createElement('button') ;
        let divChild = document.createElement('div') ;
        let a = document.createElement('a') ;
        let h3 = document.createElement('h3') ;
        for (let i = 0; i < webSites.length; i++) {
            $(divParent).addClass('p-4 d-flex justify-content-between bg-secondary bg-gradient m-4 bg-opacity-25');
            $(divParent).attr('id','linkItem');
            $(h3).text(webSites[i].Name)
            divParent.append(h3)
            $(a).addClass('px-3 btn btn-primary text-decoration-none text-white');
            $(a).attr('href', webSites[i].Url );
            $(a).attr('target', "_blank" );
            $(a).text('Visit');
            $(divChild).append(a);
            $(button).addClass('mx-5 btndelete btn btn-danger');
            $(button).attr('data-index',`${i}`);
            $(button).text('Delete');
            $(divChild).append(button);
            divParent.append(divChild);
            $('#Sec').append(divParent);
        }
    };
    
    
    function clear (){
        siteName.val('') ;
        siteURL.val('')  ;
    };
    
    
    
    
    function displayAlert(){
        if(validtion() == true && validtionUrl() == true ){
            $('.alert').addClass('d-none')
        }
        else if ( validtion() == true && validtionUrl() == false ){
            $('.alert2').removeClass('d-none')
            $('.alert1').addClass('d-none')
    
        }
        else if ( validtion() == false && validtionUrl() == true ){
            $('.alert1').removeClass('d-none')
            $('.alert2').addClass('d-none')
    
        }
        else{
            $('.alert').removeClass('d-none')
        }
    
    };

    $(document).on("click",'.btndelete',function(){
        let index = $(this).attr('data-index') ;
    console.log(index);            
        webSites.splice( index , 1)
        $('#Sec').empty()
        display()
        localStorage.setItem("AllWeb" , JSON.stringify( webSites ))
    });
    
    function validtion(){
        let regex = /^\w+$/
        return regex.test(siteName.val())
        };
    function validtionUrl(){
            let regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
            return regex.test(siteURL.val())
            };


})
