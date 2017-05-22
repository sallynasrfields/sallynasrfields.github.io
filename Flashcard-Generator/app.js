// Flashcard Generator
var deck = [];

//create cloze contructor function
function ClozeCard(full, partial, dele){
    //make sure that the deletion argument is passed
    if (dele == undefined){
        throw "A Cloze Flashcard requires three arguments. You are missing the deletion. Please read documentation for further explanation.";
    } 
    else {
         if (!(this instanceof ClozeCard)) {
            return new ClozeCard( full, partial, dele);
        }
        this.full = full;
        this.partial = partial;
        this.delet = dele; 
        
       // deck.push(this.ClozeCard);
    }

}
//console.log(deck[0]);
//Prototype method to return cloze-deleted portion
ClozeCard.prototype.returnDeletion = function(){
    console.log(this.delet);
}
//Prototype method to return partial text
ClozeCard.prototype.returnPartial = function(){
    console.log(this.partial);
}
//Prototype method to return the full text
ClozeCard.prototype.returnFull = function(){
    console.log(this.full);
}
//create basic constructor function
function BasicCard(front, back){

    if (!(this instanceof BasicCard)) {
        return new BasicCard( front, back);
    }
    this.front = front;
    this.back = back;
    //push into array
}
//Prototype Method to display front
BasicCard.prototype.returnFront = function(){
    console.log(this.front);
}
//prototype method to display the back
BasicCard.prototype.returnBack = function(){
    console.log(this.back);
}









