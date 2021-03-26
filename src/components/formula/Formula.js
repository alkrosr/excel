import {ExcelComponent} from "@core/ExcelComponent";

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root) {
        super($root, {
            name: 'Formula 999',
            listeners: [
                'input',
                'click'
            ]
        });
    }

    toHTML() {
        return `
            <div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
        `
    }

    onInput(event) {
        console.log('onInput 888 ', event)
    }

    onClick() {
        console.log('onClick')
    }
}
