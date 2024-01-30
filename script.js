// write js code here if required
 function updateTimer() {
        var currentDate = new Date();
        
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1; // Months are zero-based
        var year = currentDate.getFullYear();
        
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds();
        
        // Add leading zeros if needed
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        var formattedDate = day + '/' + month + '/' + year + ', ' + hours + ':' + minutes + ':' + seconds;
        
        // Display the timer in the HTML
        document.getElementById('timer').innerHTML = formattedDate;
    }

    // Update the timer every second (1000 milliseconds)
    setInterval(updateTimer, 1000);

    // Initial call to set the timer immediately when the page loads
    updateTimer();