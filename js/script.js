function countdown(callback) {
    let count = 10;
    const interval = setInterval(function() {
      document.getElementById('countdown').innerText = count;
      count--;
      if (count < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerText = ""; 
        document.getElementById('indian-flag').style.display = "inline"; 
        fadeOutColorBars(); 
        document.getElementById('happy-independence-day').style.display = "block";
        callback();
      }
    }, 1000);
  }
  
  function fadeOutColorBars() {
    const colorBars = document.querySelectorAll('.color-bar');
    colorBars.forEach(bar => {
      bar.style.opacity = '0'; 
    });
  }
  
  function displayMessage() {
  }
  
  countdown(displayMessage);