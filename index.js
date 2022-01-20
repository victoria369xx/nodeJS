const EventEmitter = require('events');

const emitter = new EventEmitter();
let interval
let date = process.argv[2] //ввод в консоль в формате '2022-01-21 19:34:00'

emitter.on('start', (date) => {

    var countDownDate = new Date(date).getTime(); 
     interval = setInterval(function() {
    
      var now = new Date().getTime();
    
      var distance = countDownDate - now;
    
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      console.log(`${days}d : ${hours}h : ${minutes}m : ${seconds}s `);
    
    if(distance <= 0) {
      emitter.emit('end', 'Время закончилось' )
    }
    },1000)
}
);

emitter.on('end', (message)=> {
    clearInterval(interval)
    console.log(message)
})


emitter.emit('start', date );


