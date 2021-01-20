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
                <p class="card-detail name">${response[item].author_post}</p>
                <p class="card-detail name">${response[item].content_post}</p>
                <p class="card-detail name">${response[item].dateCreated_post}</p> X
                <p class="card-detail name">${response[item].minsToRead_post}</p>  X
                <p class="card-detail name">${response[item].tag_post}</p>
                <p class="card-detail name">${response[item].title_post}</p>
                <p class="card-detail name">${response[item].author_urlPhoto}</p>
                <p class="card-detail name">${response[item].urlPhoto_post}</p>
            </div>`
    }
    $('.showPosts').html(text)
}

const getTags = () =>{
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
}

// $(function(){
const getPosts = () =>{
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
}