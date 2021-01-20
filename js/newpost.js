if (window.location.pathname === '/newpost.html'){
    $('.btn_crear').click(function(){
        let dataPost = {}
        let author_post = $('#author_post').val()
        let author_urlPhoto = $('#author_urlPhoto').val()
        let title_post = $('#title_post').val()
        let urlPhoto_post = $('#urlPhoto_post').val()
        let tag_post = $('#tag_post').val()
        let content_post = $('#content_post').val()
        
        dataPost = {
            "author_post":author_post,
            "author_urlPhoto":author_urlPhoto,
            "title_post":title_post,
            "urlPhoto_post":urlPhoto_post,
            "tag_post":tag_post,
            "content_post":content_post
        }

        $.ajax({
            url: "https://retofrontend-d1659-default-rtdb.firebaseio.com/posts/.json",
            method: 'POST',
            data: JSON.stringify(dataPost)
        }).done(function(response) {
            console.log(response)
        }).fail(function(err){
            console.error(err)
        })
    })
}