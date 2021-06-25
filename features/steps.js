import { Given, When, Then } from '@cucumber/cucumber'
import { browserC1, browserC2, browserF1, browserF2 } from './page'
var roomNameC
var roomNameF

Given("I am on the Landing page", function() {
    browserC1.openPage()
    browserF1.openPage()
    browserC2.openPage()
    browserF2.openPage()
    
})

When("I see that browser1 enters the room", function() {
    roomNameC = browserC1.getRoomNameInput().getValue()
    roomNameF = browserF1.getRoomNameInput().getValue()
    browserC1.getJoinButton().click()
    browserF1.getJoinButton().click()
})

When("I see that browser2 enters the same room", function() {
    browserC2.getRoomNameInput().setValue(roomNameC)
    browserF2.getRoomNameInput().setValue(roomNameF)
    browserC2.getJoinButton().click()
    browserF2.getJoinButton().click()
})

Then("I see that both browsers see self-view window", function() {
    browser.pause(10000)
})

/*firstbrowserEnterRoom() {
    roomName = pages.browser1.landingPage.getRoomNameInput().getValue()
    pages.browser1.landingPage.getJoinButton().click()
}

secondbrowserEnterRoom() {
    pages.browser2.landingPage.getRoomNameInput().setValue(roomName)
    pages.browser2.landingPage.getJoinButton().click()
}


validateSelfViewWindowForbrowsers() {
    pages.browser1.callPage.getSmallVideo().waitForDisplayed()
    pages.browser1.callPage.getRemoteVideo().waitForDisplayed()

    pages.browser2.callPage.getSmallVideo().waitForDisplayed()
    pages.browser2.callPage.getRemoteVideo().waitForDisplayed()
}*/