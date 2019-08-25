var hour    = document.getElementById("js--hour");
var min     = document.getElementById("js--min");
var sec     = document.getElementById("js--sec");
var bar     = document.getElementById("js--bar");
var regress = document.getElementById("js--regress-bar");
var el      = document.querySelector('section');  
 
var date     = new Date();
var month = ["January" , "February" , "March" , "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December"];

var fullDate = [month[date.getMonth()],date.getDate(),date.getFullYear()].join(' . ')
var begin    = new Date(month[date.getMonth()] + date.getDate() +','+ date.getFullYear()+' 00:00:00').getTime();
var end      = new Date(month[date.getMonth()] + date.getDate() +','+ date.getFullYear()+' 23:59:59').getTime();
el.innerText = fullDate ;

var time     = Math.round((end - begin) / 1000);

var move = function move(timeLeft) {
    var progressBarWidth = timeLeft * 100 / time;
    regress.style.width = progressBarWidth + '%';
  };
  
var timer = setInterval(function () {
  var nowDate    = new Date().getTime();
  var nowSeconds = Math.round((end - nowDate) / 1000);
  var remain     = end - nowDate;

      var h = Math.floor(remain % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var m = Math.floor(remain % (1000 * 60 * 60) / (1000 * 60));
      var s = Math.floor(remain % (1000 * 60) / 1000);
      if (h < 10) hour.textContent = "0" + h;else hour.textContent = h;
      if (m < 10) min.textContent  = "0" + m; else min.textContent = m;
      if (s < 10) sec.textContent  = "0" + s; else sec.textContent = s;
    
    move(nowSeconds);
    
  }, 1000);