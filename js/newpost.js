const fail_alert = (input_fail) => {
    $('#alert_fail').removeClass('d-none')
    $(input_fail).focus() 
    setTimeout(() => {
        $('#alert_fail').addClass('d-none')
    }, 3000);
}

const showSelectTagsSelect = (response) => {
    let text = ''
    for (item in response){
        text +=` <option>${response[item].title}</option>`
    }
    $('#tag_post').html(text)
    
}

const goGetTags = () =>{
    // GET
    $.ajax({
        url: "https://retofrontend-d1659-default-rtdb.firebaseio.com/tags/.json",  //"https://koders1gpython-default-rtdb.firebaseio.com/oscar/users/.json",
        method: 'GET'
    }).done(function(response) {
        showSelectTagsSelect(response);
    }).fail(function(err){
        console.error(err.statusText)
    })
}

$(document).ready(function()  {
    $('#author_post').focus() 
    goGetTags();
    $('.btn_crear').click(function(){
        let dataPost = {}
        let author_post = $('#author_post').val()
        let author_urlPhoto = $('#author_urlPhoto').val()
        let title_post = $('#title_post').val()
        let urlPhoto_post = $('#urlPhoto_post').val()
        let tag_post = $('#tag_post').val()
        let minsToRead_post = $('#minsToRead_post').val()
        let dateCreated_post = new Date();
        let content_post = $('#content_post').val()
        
        if( $('#author_post').val() === ""){fail_alert('#author_post');}else 
        if( $('#author_urlPhoto').val() === ""){fail_alert('#author_urlPhoto');}else 
        if( $('#title_post').val() === ""){fail_alert('#title_post');}else 
        if( $('#urlPhoto_post').val() === ""){fail_alert('#urlPhoto_post');}else 
        if( $('#tag_post').val() === ""){fail_alert('#tag_post');}else 
        if( $('#minsToRead_post').val() === ""){fail_alert('#minsToRead_post');}else 
        if( $('#content_post').val() === ""){fail_alert('#content_post');}else{

            dataPost = {
                "author_post":author_post,
                "author_urlPhoto":author_urlPhoto,
                "title_post":title_post,
                "urlPhoto_post":urlPhoto_post,
                "tag_post":tag_post,
                "minsToRead_post":minsToRead_post,
                "dateCreated":dateCreated_post.toDateString(),
                "content_post":content_post
            }
            
            $.ajax({
                url: "https://retofrontend-d1659-default-rtdb.firebaseio.com/posts/.json",
                method: 'POST',
                data: JSON.stringify(dataPost)
            }).done(function(response) {
                console.log(response)
                $('#alert_success').removeClass('d-none')
                setTimeout(() => {
                    $('#alert_success').addClass('d-none')
                    $('#author_post').val("").focus()
                    $('#author_urlPhoto').val("")
                    $('#title_post').val("") 
                    $('#urlPhoto_post').val("")
                    $('#tag_post').val("")
                    $('#minsToRead_post').val("")
                    $('#content_post').val("")
                }, 4000);
            }).fail(function(err){
                console.error(err)
            })
        }
    })
})