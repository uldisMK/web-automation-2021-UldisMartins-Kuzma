import {Pages} from '../support/pages'
import {Page} from '../page-objects/base.page'
var first = true

export class NavigationTest {
    openLandingPage() {
        /*if (first) {
            first = false
            //firsty()
            browser.url('https://google.com/')
        } else {
            //secondy()
            browser.url('https://youtube.com/')
        }*/
        var browser2
        if (browser['user1']) {
            console.log("AAAAAAAAAAAAAAAAAA")
            browser2 = new Page('user1')
            browser.url('https://google.com/')
            browser2.browser.url('https://youtube.com/')
        }
        if (browser['user2']) {
            console.log("BBBBBBBBBBBBBBBBBB")
            browser2 = new Page('user2')
            browser.url('https://va.lv/')
            browser2.browser.url('https://inbox.lv/')
        }
        
        
        browser.pause(5000)
        browser2.browser.pause(5000)
        //var browser2 = new Page('user2')
        
        //browser.url('https://google.com/')
        //browser2.browser.url('https://youtube.com/')
        
        
        //browser.addMockModule('moduleA', "angular.module('moduleA', []).value('version', '3');");
        //var browser2 = browser.forkNewDriverInstance();
        
        //browser2.browser.pause(10000)
    }
    
    
    /*firsty() {
        browser.url('https://google.com/')
    }
    
    secondy() {
        browser.url('https://youtube.com/')
    }*/
    
    
        //console.log(browser.instances)
        //console.log("ggggggggggggggggggggggggg")
        //browser[0].url('https://appr.tc/')
        //console.log(browser[1])
        //browser["asg"].url('https://appr.tc/')
        //browser["bgsd"].url('https://appr.tc/')
        //browser["asg"].pause(10000)
        //browser["bgsd"].pause(10000)
        //console.log(`user${userId}`)
        //console.log(userId)
        //const pages = new Pages('user1', 'user2')
        //pages.user1.landingPage.openPage()
        //pages.user2.landingPage.openPage()
        //pages.user1.landingPage.getMainHeader().waitForDisplayed()
        //pages.user2.landingPage.getMainHeader().waitForDisplayed()
}