$(document).ready(function()  {
    $('#name_tag').focus() 
    $('.tag_name_send').click(function(){
        let dataTag = {}
        
        if($('#name_tag').val() === ""){
            $('#alert_fail').removeClass('d-none')
            $('#name_tag').focus() 
            setTimeout(() => {
                $('#alert_fail').addClass('d-none')
            }, 3000);
        }
        else{
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
                $('#alert_success').removeClass('d-none')
                setTimeout(() => {
                    $('#alert_success').addClass('d-none')
                    $('#name_tag').val("") 
                    $('#name_tag').focus() 
                }, 4000);
                getTags();
            }).fail(function(err){
                console.error(err)
            })
        }
    })

    // const printTags = (response) => {
    //     let text = ''
    //     for (item in response){
    //         text += `<div class="card-body">
    //                 <p class="card-detail name">${response[item].title}</p>
    //             </div>`
    //     }
    //     $('.showTags').html(text)
    // }

    // const getTags = () =>{
    //     $.ajax({
    //         url: "https://retofrontend-d1659-default-rtdb.firebaseio.com/tags/.json",  //"https://koders1gpython-default-rtdb.firebaseio.com/oscar/users/.json",
    //         method: 'GET'
    //     }).done(function(response) {
    //         printTags(response);
    //     }).fail(function(err){
    //         console.error(err)
    //         console.error(err.status)
    //         console.error(err.statusText)
    //         console.log('todo mal')
    //     })
    // }    

    getTags();
})

