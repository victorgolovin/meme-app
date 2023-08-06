class View {
    constructor({ textAbove }) {
        this.memeSelectNode = document.getElementById('settings-meme-select');
        this.aboveInputNode = document.getElementById('settings-text-above-input');
        this.belowInputNode = document.getElementById('settings-text-below-input');
        this.outputNode = document.getElementById('preview-output');

        this.textAbove = textAbove;
    }
}

renderAboveInputText = () => {
    this.aboveInputNode.innerHTML = '';

    this.aboveInputNode.innerHTML += `
    <div class="preview-output">
        <p>${this.aboveInputNode.value}</p>
    </div>`
}