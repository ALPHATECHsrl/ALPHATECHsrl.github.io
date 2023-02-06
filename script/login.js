const loginButton = $("#loginButton");

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

$(loginButton).click( () => { 
    let username = $("#usernameInput");
    let password = $("#passwordInput");

    if(!$(username).hasClass("is-invalid") || !$(password).hasClass("is-invalid")){
        $.ajax({
            type: "POST",
            url: "http://dvct.us.to:3232/api/v1/login/",
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