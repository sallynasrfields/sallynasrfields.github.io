# Overview

Flashcard Generator is a API that allows the end user to build two different flashcards, a Cloze flashchard and a Basic flashcard.

## #To install this API
1) Clone folder and add it to your project's repository
2) On your main html page, externally link to the JSON file, app.js

### About Cloze Deleted Flashcards.
A Clozed flashcard is like a fill in the blank concept.  ____ _____ was the first president of the United States.
To create a Cloze Flashcard it requires three inputs:
1) The full sentence - i.e. "George Washington was the first president of the United States."
2) The Partial - i.e. "was the first president of the United States"
3) The Deleted part - i.e. "George Washington"

### Creating a Cloze Deleted Flashcard
* To create a Clozed Flashcard the following constructor function should be called:
  *  **var [aVariable] = new ClozeCard ([full], [partial], [dele])**
  * i.e var georgeWashing = new ClozeCard ( "George Washington was the first president of the United States", " was the first president of the United States", "George Washington");

### Cloze Deleted Flashcard Functions
There are Three console.log functions that can be used with Clozed Flashcards:
1) **variableName.returnDeletion();** 
    * ie. georgeWashing.returnDeletion(); 
    * this would console.log "George Washington" to your terminal.
2) **variableName.returnPartial();** 
   * ie. georgeWashing.returnPartial(); 
    * this would consol.log " was the first president of the United States" to your terminal
3) **variableName.returnFull();** 
    * ie. georgeWashing.returnFull(); 
    * This would console.log "George Washington was the first president of the United States" to your terminal

### About Basic Flash cards
A Basic flash card consists of to parts, the front and the back.
1) On the front, you would simply as "Who was the first president of the United States" 
2) and on the back "George Washington".

### Creating a Basic Flashcard
* To create a basic flashcard the following constuctor function should be called:
  * **var [aVariable] = new BasicCard ([front], [back]);**
  * i.e. var georgeWashington = new BasicCard ("Who was the first president of the United States?", "George Washington");

## Basic Flashcard Functions
There are two console.log functions that can be used with Basic Flashcards:
1. **variableName.returnFront();**
   * i.e. georgeWashing.returnFront(); 
   * This would return a console.log "Who was the first president of the United States" to your terminal
2. **variableName.returnBack();** 
    * i.e. georgeWashing.returnBack();
    * This would return a console.log "George Washington" to your terminal




