$(document).ready( ()=> {
    
    // Enable the floating action button, for the main menu
    $('.fixed-action-btn').floatingActionButton();

    // Enable the sidenav, for the main menu
    $('.sidenav').sidenav();
    $('.navLink').sidenav();

    // Enable the collabsable, for the UI Form
    $('.collapsible').collapsible();

    // Enable the Date and Time Picker functionality
    $('.datepicker').datepicker();
    $('.timepicker').timepicker();

    // Enable Chips for Equipment Input
    $('.chips').chips();

    // Enable dropdown for formSelect
    $('select').formSelect();

    // Dynamically populate the end date and end time
    $('#startDate').change( ()=> {
        let defaultDate = $('#startDate').val();
        console.log(defaultDate);
        $('#endDate').val(defaultDate)
    })
    $('#startTime').change( ()=> {
        let defaultTime = $('#startTime').val();
        console.log(defaultTime);
        $('#endTime').val(defaultTime)
    })

    // Calculate the Air Consumption for the front end
    $('#startPressure, #endPressure').change( ()=> {
        let startPress = $('#startPressure').val();
        let endPress = $('#endPressure').val();
        let consumed = startPress - endPress
        console.log(consumed);
        $('#airConsumption').val(consumed)
    })

    // Calculate the visibility rating value for the front end
    $('#visVal').change( ()=> {
        let visVal = $('#visVal').val();
        switch(true) {
            case (visVal < 20): 
                $('#visCalc').text("Poor")
                break;
            case (visVal > 20 && visVal < 50):
                $('#visCalc').text("Moderate")
                break;
            case (visVal > 50 && visVal < 70):
                $('#visCalc').text("Good")
                break;
            case (visVal > 70):
                $('#visCalc').text("Excellent")
                break;
        }
    })

    // Calculate the current rating value for the front end
    $('#currVal').change( ()=> {
        let visVal = $('#currVal').val();
        switch(true) {
            case (visVal < 20): 
                $('#currCalc').text("Smooth")
                break;
            case (visVal > 20 && visVal < 50):
                $('#currCalc').text("Mild")
                break;
            case (visVal > 50 && visVal < 85):
                $('#currCalc').text("Strong")
                break;
            case (visVal > 85):
                $('#currCalc').text("Dangerous")
                break;
        }
    })
    















    }) //End of Document Ready Functionality



















































