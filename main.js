document.querySelectorAll(".cards").forEach(function(cards){
    //for each item in the array run this function--
  cards.addEventListener("click", cardClick)
  //"click" is the action, cardClick is the function name
  console.log(cards)
})
//cardClick- the function to explain what happens when a card is clicked
  function cardClick(){
  //.classList- is a property used to return the class name(s) of an element, as a DOM object
    //.classList- is useful to add, remove and toggle CSS classes on an element.
    //.add- Adds one or more class names to an element
    this.classList.add("selected")
    const selected = document.querySelectorAll(".selected")
    //created a variable which holds the array .selected
    const totalSelected = selected.length
    //created a variable to hold the length of array which should be counted when clicked only

    // for every second click
    if(totalSelected === 2){
      //checking the class name indices to determine a match
      if(selected[0].className === selected[1].className){

        selected.forEach(function(sel){
          sel.classList.add("matched")
          //creates a class of matched if the two selected are the same
          sel.classList.remove("selected")//Removes the selected if the previous 2 equal the same (won't be able to keep clicking)
        })
      }else{
        selected.forEach(function(sel){//go through array again and if fthey dont match, remove selected class
        sel.classList.remove("selected")
        })
        //
        //
      }
    }//else (this.classList.remove("matched")){}
    if(document.querySelectorAll(".matched").length === 12){alert("YOU WIN")
  }

}
