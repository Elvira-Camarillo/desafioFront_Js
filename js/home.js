//SHOW POST LIST
const showSelectTagsIndex = (response) => {
    let text = ''
    for (item in response){
        text +=` <li class="list-item">
        <a href="#" class="text-decoration-none">#${response[item].title}</a>
        </li>`
    }
    $('.showTags').html(text)
}

const showSelectTags = (response) => {
    let text = ''
    for (item in response){
        text +=` <p>${response[item].title}</p>`
    }
    $('.showTags').html(text)
}

const getTagsIndex = () =>{
    // GET
    $.ajax({
        url: "https://retofrontend-d1659-default-rtdb.firebaseio.com/tags/.json",  //"https://koders1gpython-default-rtdb.firebaseio.com/oscar/users/.json",
        method: 'GET'
    }).done(function(response) {
        showSelectTagsIndex(response);
    }).fail(function(err){
        console.error(err.statusText)
    })
}

const getTags = () =>{
    // GET
    $.ajax({
        url: "https://retofrontend-d1659-default-rtdb.firebaseio.com/tags/.json",  //"https://koders1gpython-default-rtdb.firebaseio.com/oscar/users/.json",
        method: 'GET'
    }).done(function(response) {
        showSelectTags(response);
    }).fail(function(err){
        console.error(err.statusText)
    })
}

$("#imgTags").click(function() {
    window.location.href = "/addtag.html";
});

$(function () {
    const paintPosts = (response) => {
        // console.log(response)
        let postHtml = ''
        let counter = 1
        let len = Object.keys(response).length
        // console.log(len)
        let imagePost = ''
        for (item in response) {
            if (counter === len) {
                imagePost = `<img src="${response[item].urlPhoto_post}" class="card-img-top" alt="...">`
            }
            postHtml = `<div class="card_main mb-2 bg-white rounded postShow">
                ${imagePost}
                <div class="card-body">
                <div class="d-flex flex-wrap author align-items-center mb-2">
                    <div class="img-author"><img src="${response[item].author_urlPhoto}" class="card-img-top border border-secondary rounded-circle bg-primary img-author" alt="..."></div>
                    <div class="author_data">
                        <a href="" class="text-reset">${response[item].author_post}</a>
                        <p class="mb-0 data-created">${response[item].dateCreated}</p>
                    </div>
                </div>
                <div class="card-resume">
                    <a href="./post.html?id=${item}" class="text-reset title-article">${response[item].title_post}</a>
                    <div class="hashtags ml-n1 mb-2">#${response[item].tag_post}</div>
                    <div class="icon-card d-flex justify-content-between">
                        <div class="icon-card_left d-flex justify-content-start align-items-center">
                            <div class="icon-card-item d-flex align-items-center mr-3">
                                <svg class="" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                                <span class="d-md-none">3</span>
                                <span class="d-none d-md-block">3 reactions</span>
                            </div>
                            <div class="icon-card-item d-flex align-items-center">
                                <svg class="" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                                <span class="d-md-none">0</span>
                                <span class="d-none d-md-block">Add comment</span>
                            </div>
                        </div>
                        <div class="icon-card-rigth ">
                            <small class="mins-to-read mr-1">${response[item].minsToRead_post} min read</small>
                            <div class="btn btn-light btn-save">Save</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>` + postHtml
            counter++
            imagePost = ''
        }

        $('.container-post').append(postHtml)
    }
    $.ajax({
        url: "https://retofrontend-d1659-default-rtdb.firebaseio.com/posts/.json",
        method: 'GET'
    }).done(function (response) {
        paintPosts(response)
    }).fail(function (err) {
        console.log(err)
        console.log(err.status)
        console.log(err.statusText)
        console.log('Error')
    })
})
getTagsIndex();

// $(document).ready(function()  {
// }