import {NavigationTest} from '../test-objects/navigation.test'
import {AppRTCTest} from '../test-objects/mqtt.test'
import {pages} from './pages'

export class Tests {
    constructor(pages) {
        this.navigationTest = new NavigationTest(pages)
        this.appRTCTest = new AppRTCTest(pages)
    }
}

const tests = new Tests(pages)
export {tests}