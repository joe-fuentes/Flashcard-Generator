// Constructor function for the 'Cloze Card'.
function ClozeCard(fullText, cloze, partial) {
	if (!(this instanceof ClozeCard)) {
		return new ClozeCard(fullText, cloze, partial);
	}
    this.fullText = fullText;
    this.cloze = cloze;
    this.partial = fullText.split(cloze);
};

// Constructor that creates a prototype of ClozeCard to return the question missing cloze
function ClozeCardPrototype() {
    this.clozeDeleted = function () {
        return `${this.partial[0]} ____ ${this.partial[1]}`;  //Template literal enclosed by the back-tick ` allows embedded expressions wrapped with ${}
    };											
};

ClozeCard.prototype = new ClozeCardPrototype();

module.exports = ClozeCard; 