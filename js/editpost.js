let urlParams = new URLSearchParams(window.location.search);
let idPost = urlParams.get('id')

const printPostsToEdit = (response) => {
     $('#author_post').val(response.author_post)
     $('#author_urlPhoto').val(response.author_urlPhoto)
     $('#title_post').val(response.title_post)
    $('#urlPhoto_post').val(response.urlPhoto_post)
    $('#tag_post').val(response.tag_post)
    $('#content_post').val(response.content_post)
    $('#mintoread_post').val(response.minsToRead_post)
}

// Get post by IdPost
const getPostById = (idPost) => {

    $.ajax({
        url: `https://retofrontend-d1659-default-rtdb.firebaseio.com/posts/${idPost}.json`,
        method: 'GET'
    }).done(function(response) {
        printPostsToEdit(response)
        let tagSelected = response.tag_post
        $.ajax({
            url: `https://retofrontend-d1659-default-rtdb.firebaseio.com/tags/.json`,
            method: 'GET'
        }).done(function(responsetags) {
            console.log(responsetags)
            for(item in responsetags) {
                if(tagSelected === responsetags[item].title) {
                    $('#tag_post').append(`<option value="${responsetags[item].title}" selected>${responsetags[item].title}</option>`)
                } else {
                    $('#tag_post').append(`<option value="${responsetags[item].title}">${responsetags[item].title}</option>`)
                }
            }
            
        }).fail(function(err){
            console.error(err)
        })
    }).fail(function(err){
        console.error(err)
        console.error(err.status)
        console.error(err.statusText)
        console.log('todo mal')
    })
}

// Update post
$('.button_update').click(function(){
    let dataPost = {}
    let author_post =  $('#author_post').val()
    let author_urlPhoto = $('#author_urlPhoto').val()
    let title_post = $('#title_post').val()
    let urlPhoto_post = $('#urlPhoto_post').val()
    let tag_post = $('#tag_post').val()
    let content_post = $('#content_post').val()
    let minsToRead_post = $('#mintoread_post').val()

    dataPost = {
        "author_post":author_post,
        "author_urlPhoto":author_urlPhoto,
        "title_post":title_post,
        "urlPhoto_post":urlPhoto_post,
        "tag_post":tag_post,
        "content_post":content_post,
        "minsToRead_post":minsToRead_post
    }

    $.ajax({
        url: `https://retofrontend-d1659-default-rtdb.firebaseio.com/posts/${idPost}.json`,
        method: 'PATCH',
        data: JSON.stringify(dataPost)
    }).done(function(response) {
        // console.log(response)
        console.log('Post Actualizado')
        $('#alert_success_update').removeClass('d-none')
                setTimeout(() => {
                    $('#alert_success').addClass('d-none')
                }, 3000);
    }).fail(function(err){
        console.error(err)
    })
})


// updatePost('-MRSdjvNlKHK0IwlYFsW')

getPostById(idPost)