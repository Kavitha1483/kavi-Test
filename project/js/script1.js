$('#button1').click(function() {

    $.ajax({
        url: "php/infos.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lng: $('#selLangtitude').val(),
            lat: $('#selLatitude').val()
        },
        
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

              
			    $('#txtCountryName').html(result['data']['countryName']);    

                $('#txtGeonameId').html(result['data']['geonameId']); 
                
                                }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
            console.log(jqXHR);
        }
    }); 


});

