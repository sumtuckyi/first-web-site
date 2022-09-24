var Links = {
  setColor:function(color) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i=i+1;
    // }
    $('a').css('color', color);//모든 a태그를 jQuery로 제어, jQuery의 css함수를 사용(함수를 직접 만드는 대신)
  }
}
var Body = {
  setColor:function(color) {
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function(color) {
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}//Body라는 객체의 property 생성

function nightDayHadnler(self) {
  var target = document.querySelector('body');
  if (self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    var nodelist = document.querySelectorAll('.js');
    for(let i = 0; i < nodelist.length; i++){
      nodelist[i].style.color = 'pink';
    }

    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    var nodelist = document.querySelectorAll('.js');
    for(let i = 0; i < nodelist.length; i++){
      nodelist[i].style.color = 'hotpink';
    }

    Links.setColor('blue');
    }
  }
