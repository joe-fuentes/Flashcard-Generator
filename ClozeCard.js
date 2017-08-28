// Constructor function for the 'Cloze Card'.
function ClozeCard(text, cloze) {
	if (!(this instanceof ClozeCard)) {
		return new ClozeCard(text, cloze);
	}
    this.fullText = text;
    this.cloze = cloze;
    this.partial = text.split(cloze);
    //Validation. However, this condition will never be met, because we validate input before creating cloze card.
    if(this.partial === text) throw new Error('This doesn\'t work, oops');
};

// Constructor that creates a prototype of ClozeCard to return the question missing cloze
function ClozeCardPrototype() {
    this.clozeDeleted = function () {
        return `${this.partial[0]}...${this.partial[1]}`;  //Template literal enclosed by the back-tick ` allows embedded expressions wrapped with ${}
    };											
};

ClozeCard.prototype = new ClozeCardPrototype();

module.exports = ClozeCard; 
