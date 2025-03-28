$('#btnRun').click(function() {

    $.ajax({
        url: "php/info.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#selLat').val(),
            lng: $('#selLng').val()
        },
        
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                $('#txtLanguages').html(result['data']['languages']);
                $('#txtDistance').html(result['data']['distance']);
			    $('#txtCountryCode').html(result['data']['countryCode']);    
                $('#txtCountryName').html(result['data']['countryName']); 
                $('#txtPostalCode').html(result['data']['postalcode']); 
                
                                }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
            console.log(jqXHR);
        }
    }); 


});

