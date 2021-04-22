export class Page {
    constructor(params) {
        this.params = params
    }

    getRoot() {
        throw new Error('777 Method "getRoot" should be implemented')
    }

    afterRender() {

    }

    destroy() {

    }
}
