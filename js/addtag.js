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