const registerButton = $("#registerButton");

$("#usernameInput").change(() => {
    let username = $("#usernameInput");

    if($(username).val().length < 4 || $(username).val().length > 30){
        $(username).addClass("is-invalid");
    }else{
        if($(username).hasClass("is-invalid")){
            $(username).removeClass("is-invalid");
        }

        $(username).addClass("is-valid");
    }
});

$("#passwordInput").change(() => {
    let password = $("#passwordInput");

    if($(password).val().length < 8){
        $(password).addClass("is-invalid");
    }else{
        if($(password).hasClass("is-invalid")){
            $(password).removeClass("is-invalid");
        }

        $(password).addClass("is-valid");
    }
})

$("#repeatedPswInput").change(() => {
    let password = $("#passwordInput");
    let rptPassword = $("#repeatedPswInput");

    if($(rptPassword).val().length < 8 || $(password).val() != $(rptPassword).val()){
        $(rptPassword).addClass("is-invalid");
    }else{
        if($(rptPassword).hasClass("is-invalid")){
            $(rptPassword).removeClass("is-invalid");
        }

        $(rptPassword).addClass("is-valid");
    }
})

$(registerButton).click( () => { 
    let username = $("#usernameInput");
    let password = $("#passwordInput");
    let rptPassword = $("#repeatedPswInput");

    if(!$(username).hasClass("is-invalid") && !$(password).hasClass("is-invalid") && !$(rptPassword).hasClass("is-invalid")){
        $.ajax({
            type: "POST",
            url: "http://dvct.us.to:3232/api/v1/register/",
            async: true,
            contentType: "application/json; charset=utf-8",
            data: '{"username": "' + $(username).val() + '", "password":"' + $(password).val() + '"}',
            success: function (response) {
                console.log(response);
            }, error: function(){
                console.log("error");
            }
        });  
    } 
});