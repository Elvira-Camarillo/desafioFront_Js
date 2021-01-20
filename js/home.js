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
                <p class="card-detail name">${response[item].dataCreated}</p> X
                <p class="card-detail name">${response[item].minsToRead}</p>  X
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