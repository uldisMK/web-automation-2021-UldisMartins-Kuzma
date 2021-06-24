import {LandingPage} from '../page-objects/landing.page'
import {CallPage} from '../page-objects/call.page'

export class Pages {
    constructor(browserName, browserName2) {
        this.user1 = {
            landingPage: new LandingPage(browserName),
            callPage: new CallPage(browserName)
        }
        this.user2 = {
            landingPage: new LandingPage(browserName2),
            callPage: new CallPage(browserName2)
        }
    }
}

//const pages = new Pages('user1', 'user2')
//const pages2 = new Pages('user2')
//export {pages}
//export {pages2}