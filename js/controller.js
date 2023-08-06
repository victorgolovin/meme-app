class Controller {
    constructor() {
        this.model = new Model({
            textChanged: this.handleModelChanged
        });

        this.view = new View({
            textAbove: this.handleViewChange
        });

        this.api = new Api({

        });
    }

    handleModelChanged = (text) => {
        this.view.renderAboveInputText(text);
    }
    
    handleViewChange = (textAbove, textBelow) => {
        this.model.addText(textAbove, textBelow);
    }
}

