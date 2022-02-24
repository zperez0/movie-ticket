//business logic
function Ticket(movieArgument, timeArgument, ageArgument) {
  this.movie = movieArgument;
  this.time = timeArgument;
  this.age = ageArgument;
  this.theater = "Hollywood Theatre";
  this.price = 0;
}

Ticket.prototype.ticketPrice = function() {
  // let age = 0;
  // let senior = 60;
  if (this.age === "child") {
    this.price = 5;
  } else if (this.age === "adult") {
    this.price =15;
  } else {
    this.price = 10;
  }
}

Ticket.prototype.discountForTimeOfDay = function() {
  if (this.time === "morning"){
    this.price -= 3;
  }
}




$(document).ready(function(){
  let ticketArray = [];
  
  $("form#ticket").submit(function(event){
    event.preventDefault();
    let movie = $("#movie").val();
    let time = $("#time").val();
    let age = $("#age").val();
    let ticket = new Ticket(movie, time, age);
    ticket.ticketPrice();
    ticket.discountForTimeOfDay();
    ticketArray.push(ticket);
    console.log(ticketArray);
  });
  //display ticket 
  
})