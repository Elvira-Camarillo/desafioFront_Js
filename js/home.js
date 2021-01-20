const printTags = (response) => {
    let text = ''
    for (item in response){
        text += `<div class="card-body">
                <p class="card-detail name">${response[item].title}</p>
            </div>`
    }
    $('.showTags').html(text)
}

const printPosts = (response) => {
    let text = ''
    for (item in response){
        text += `<div class="card-body">
                <p class="card-detail name">${response[item].author}</p>
                <p class="card-detail name">${response[item].content}</p>
                <p class="card-detail name">${response[item].dataCreated}</p>
                <p class="card-detail name">${response[item].minsToRead}</p>
                <p class="card-detail name">${response[item].organization}</p>
                <p class="card-detail name">${response[item].tag}</p>
                <p class="card-detail name">${response[item].title}</p>
                <p class="card-detail name">${response[item].urlAuthor}</p>
                <p class="card-detail name">${response[item].urlPhoto}</p>
            </div>`
    }
    $('.showPosts').html(text)
}

$(function(){
    // GET
    $.ajax({
        url: "https://retofrontend-d1659-default-rtdb.firebaseio.com/tags/.json",  //"https://koders1gpython-default-rtdb.firebaseio.com/oscar/users/.json",
        method: 'GET'
    }).done(function(response) {
        printTags(response);
    }).fail(function(err){
        console.error(err)
        console.error(err.status)
        console.error(err.statusText)
        console.log('todo mal')
    })
})

$(function(){
    // GET
    $.ajax({
        url: "https://retofrontend-d1659-default-rtdb.firebaseio.com/posts/.json",  //"https://koders1gpython-default-rtdb.firebaseio.com/oscar/users/.json",
        method: 'GET'
    }).done(function(response) {
        printPosts(response);
    }).fail(function(err){
        console.error(err)
        console.error(err.status)
        console.error(err.statusText)
        console.log('todo mal')
    })
})

if (window.location.pathname === '/addtag.html'){
    $('.tag_name_send').click(function(){
        let dataTag = {}
        let tagName = $('#name_tag').val()
        dataTag = {
            "title":tagName
        }
        $.ajax({
            url: "https://retofrontend-d1659-default-rtdb.firebaseio.com/tags/.json",
            method: 'POST',
            data: JSON.stringify(dataTag)
        }).done(function(response) {
            console.log(response)
        }).fail(function(err){
            console.error(err)
        })
    })
}

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