class Page {
    constructor(browserName) {
        this.browserName = browserName
    }

    get browser() {
        if (this.browserName) {
            return browser[this.browserName]
        }
        return browser
    }
    
    getSmallVideo() {
        return this.browser.$('#mini-video')
    }
    getRemoteVideo() {
        return this.browser.$('#remote-video')
    }
    getMainHeader() {
        return this.browser.$('#room-selection > h1')
    }
    getRoomNameInput() {
        return this.browser.$('#room-id-input')
    }
    getJoinButton() {
        return this.browser.$('#join-button')
    }
    openPage() {
        this.browser.url('https://appr.tc/')
    }
}

export var browserC1 = new Page("browserC1")
export var browserC2 = new Page("browserC2")
export var browserF1 = new Page("browserF1")
export var browserF2 = new Page("browserF2")