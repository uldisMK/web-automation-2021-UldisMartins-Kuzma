import {Page} from './base.page'

export class CallPage extends Page {
    getSmallVideo() {
        return this.browser.$('#mini-video')
    }

    getRemoteVideo() {
        return this.browser.$('#remote-video')
    }
}