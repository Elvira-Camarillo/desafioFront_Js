let urlParams = new URLSearchParams(window.location.search);
let idPost = urlParams.get('id')

const printPosDetail = (response) => {
    console.log(response)
    $('#img__post').attr('src',response.urlPhoto_post)
    $('.title-article').text(response.title_post)
    $('#tag_post').text('#'+response.tag_post)
    $('.urlphoto_author').attr('src',response.author_urlPhoto)
    $('.name_author').text(response.author_post)
    $('#content_post').html(response.content_post)
    $('#minroread').text(response.minsToRead_post+' min read')
    $('#date_created_post').text(response.dateCreated)
    
    let day = new Date(response.dateCreated).getDate()
    let month = new Date(response.dateCreated).getMonth() + 1
    let monthText = 'Ene'
    if(month === 2) {
        monthText = 'Feb'
    } else if(month === 3) {
        monthText = 'Mar'
    } else if(month === 4) {
        monthText = 'Abr'
    } else if(month === 5) {
        monthText = 'May'
    } else if(month === 6) {
        monthText = 'Jun'
    } else if(month === 7) {
        monthText = 'Jul'
    } else if(month === 8) {
        monthText = 'Ago'
    } else if(month === 9) {
        monthText = 'Sept'
    } else if(month === 10) {
        monthText = 'Oct'
    } else if(month === 11) {
        monthText = 'Nov'
    } else if(month === 12) {
        monthText = 'Dic'
    }

    $('#date_created_post').text(`${day}, ${monthText}`)
}


// Get post by IdPost
const getPostDetail = (idPost) => {
    $.ajax({
        url: `https://retofrontend-d1659-default-rtdb.firebaseio.com/posts/${idPost}.json`,
        method: 'GET'
    }).done(function(response) {
        printPosDetail(response)
    }).fail(function(err){
        console.error(err)
        console.log('todo mal')
    })
}

getPostDetail(idPost)