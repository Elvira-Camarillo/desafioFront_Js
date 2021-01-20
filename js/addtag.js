let tagObject = {
    title: 'mytag'
}
$.ajax({
    url: "https://retofrontend-d1659-default-rtdb.firebaseio.com/tags/.json",
    method: 'POST',
    data: JSON.stringify(tagObject)
}).done(function(response) {
    console.log(response)
}).fail(function(err){
    console.log(err)
})