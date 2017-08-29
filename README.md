# Advanced JavaScript Assignment: Cloze Constructors

### Featuring: A Basic Flashcard Application.

The backend constitutes an API that allows users to create two types of flashcards.

1. **Basic** flashcards, have a front (_"Who was the first president of the United States?"_), and a back (_"George Washington"_).

2. **Cloze-Deleted** flashcards, present _partial_ text (_"... was the first president of the United States."_), and the full text when the user requests it (_"George Washington was the first president of the United States."_)

#### Cloze Deletions

A **cloze deletion** is simply a sentence that has had some of its text removed. For example, given the sentence:

_"George Washington was the first president of the United States."_

...We can create a "cloze deletion" by removing the words _"George Washington"_:

_"... was the first president of the United States."_

This flash card has three parts:

1. The **full text**. This is the entire sentence users need to remember:  _"George Washington was the first president of the United States."_

2. The **cloze deletion**. This is the text we've chosen to remove: _"George Washington"_.

3. The **partial text**. This is what we get if we remove the **cloze deletion** from the **full text**: _"... was the first president of the United States._

## Instructions

From the GitBash command (at the folder of your choosing) enter...<br>
$ npm init

Then add into the dependencies of the package.json file the following:<br>
    "colors": "^1.1.2",<br>
    "inquirer": "^3.2.2",<br>
    "require": "^2.4.20"

By typing these commands at the command prompt...<br>
$ npm install require --save<br>
$ npm install inquirer --save<br>
$ npm install colors --save

--> The colors package is optional.

Then the following javascript files were created:<br>
    BasicCard.js<br>
    ClozeCard.js<br>
    flashcard.js

Both the BasicCard.js and ClozeCard.js hold the constructors of our flashcard.js

So when the application is run, by typing...

$ node flashcard.js

at the command prompt, a menu will pop-up. This menu will list as such:

\> Create<br>
&nbsp;&nbsp;&nbsp;Use All<br>
&nbsp;&nbsp;&nbsp;Random<br>
&nbsp;&nbsp;&nbsp;Shuffle<br>
&nbsp;&nbsp;&nbsp;Show All<br>
&nbsp;&nbsp;&nbsp;Exit

**Create** - will allow the user to create a basic (front & back) or Cloze (text & cloze) flashcard and add it to the deck.

**Use All** - will run the user through all the flashcards in their current order, giving questions and asking for the answers, giving correct or incorrect responses.

**Random** - will randomly pick one card from the existing deck.

**Shuffle** - will randomly mix up the order of all cards in the deck.

**Show All** - will list all cards currently in the deck, in their current order, to the screen for the user to review.

**Exit** - will take the user out of the application and back to their command prompt.

All the cards that are created will be stored in a file (deck) named **"cardLibrary.json"**
