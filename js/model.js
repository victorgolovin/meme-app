class Model {
    constructor( { textChanged } ) {
        this.text = [];
        this.textChanged = textChanged;
    }
}

addText = (textAbove, textBelow) => {
    this.text.push({
        textAbove: textAbove,
        textBelow: textBelow
    });

    this.textChanged(this.text)
}

getText = () => {
    return this.text;
}