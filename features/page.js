class Page {
    constructor(browserName) {
        this.browserName = browserName
        this.name = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.msg = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    get browser() {
        if (this.browserName) {
            return browser[this.browserName]
        }
        return browser
    }
    openPage() {
        this.browser.url('https://demos.mqtt.cool/chat/')
    }
    connectionMsg() {
        return this.browser.$('#messages > .text-success')
    }
    nicknameInput() {
        return this.browser.$('#user')
    }
    connectionBtn() {
        return this.browser.$('#connectBtn')
    }
    brokerdMsg() {
        return this.browser.$$('#messages > .text-success')[1]
    }
    findUser(name) {
        return this.browser.$('#usersListCard > [id^="'+name+'"]')
    }
    messageInput() {
        return this.browser.$('#sendMessage')
    }
    recivedMsg() {
        return this.browser.$$('#messages > .text-primary')
    }
    replyBtn() {
        return this.browser.$('#replyBtn')
    }
    githubImg() {
        return this.browser.$('a > img[alt="Fork me on GitHub"]')
    }
    disconnectBtn() {
        return this.browser.$('#disconnectBtn')
    }
    disconnectMsg() {
        return this.browser.$$('#messages > .text-info')
    }
}

export const browserC1 = new Page("browserC1")
export const browserC2 = new Page("browserC2")
export const browserF1 = new Page("browserF1")
export const browserF2 = new Page("browserF2")