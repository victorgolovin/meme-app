class Controller {
    constructor() {
        this.model = new Model({

        });

        this.view = new View({
            textAbove: this.handleModelChange
        });

        this.api = new Api({

        });
    }

    handleModelChange = (textAbove) => {
        this.view.renderAboveInputText(textAbove);
    }
}


            

