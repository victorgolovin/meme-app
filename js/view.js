class View {
    constructor() {
        this.memeSelectNode = document.getElementById('settings-meme-select');
        this.aboveInputNode = document.getElementById('settings-text-above-input');
        this.belowInputNode = document.getElementById('settings-text-below-input');
        this.outpuAbovetNode = document.getElementById('preview-output-above');
        this.outpuBelowtNode = document.getElementById('preview-output-below');


        this.aboveInputNode.addEventListener('input', this.renderAboveInput);
        this.belowInputNode.addEventListener('input', this.renderBelowInput );
    }

    renderAboveInput = () => {
        this.outpuAbovetNode.textContent = this.aboveInputNode.value;
    }

    renderBelowInput = () => {
        this.outpuBelowtNode.textContent = this.belowInputNode.value;
    }
}

// const aboveInputNode = document.getElementById('settings-text-above-input');
// const outputNode = document.getElementById('preview-output');

// aboveInputNode.oninput = function () {
//     outputNode.innerText = this.value;
// }



