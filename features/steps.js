import { Given, When, Then } from '@cucumber/cucumber'
import { browserC1, browserC2, browserF1, browserF2 } from './page'
const browsers = [browserC1, browserF1, browserC2, browserF2]

Given("I see both users have opened the page and connected to server", function() {
    for (var i = 0; i < 4; i++) {
        browsers[i].openPage()
    }
    for (var i = 0; i < 4; i++) {
        while (browsers[i].connectionMsg().getText() != "Connected to the MQTT.Cool server");
    }
})

When("I see that both users enter the nickname", function() {
    for (var i = 0; i < 4; i++) {
        browsers[i].nicknameInput().setValue(browsers[i].name)
    }
})

When("I see that both users connect to broker", function() {
    for (var i = 0; i < 4; i++) {
        browsers[i].connectionBtn().click()
    }
    for (var i = 0; i < 4; i++) {
        while (!browsers[i].brokerdMsg() || browsers[i].brokerdMsg().getText()
                != "Connected to the MQTT broker at tcp://broker.mqtt.cool:1883");
    }
})

When("I see that both users see themselves and each other in the Connected Users tab", function() {
    for (var i = 0; i < 2; i++) {
        while (!browsers[i].findUser(browsers[2+i].name));
        while (!browsers[2+i].findUser(browsers[i].name));
    }
})

When("I see that user1 sends any message", function() {
    for (var i = 0; i < 2; i++) {
        browsers[i].messageInput().setValue(browsers[i].msg)
        browsers[i].replyBtn().click()
    }
})

When("I see that user2 receives the sent message", function() {
    for (var i = 0; i < 2; i++) {
        while (!browsers[2+i].recivedMsg());
        all:
        while (true) {
            for (const msg of browsers[2+i].recivedMsg()) {
                if (msg.getText() == browsers[i].name + ": " + browsers[i].msg) {
                    break all;
                }
            }
        }
    }
})

When("I see that user2 sends any message", function() {
    for (var i = 0; i < 2; i++) {
        browsers[2+i].messageInput().setValue(browsers[2+i].msg)
        browsers[2+i].replyBtn().click()
    }
})

Then("I see that user1 receives the sent message", function() {
    for (var i = 0; i < 2; i++) {
        while (!browsers[i].recivedMsg());
        all:
        while (true) {
            for (const msg of browsers[i].recivedMsg()) {
                if (msg.getText() == browsers[2+i].name + ": " + browsers[2+i].msg) {
                    break all;
                }
            }
        }
    }
})

Then("I see that both users can disconnect and lose connection", function() {
    const result = browser.execute(() => {
        document.querySelector('a > img[alt="Fork me on GitHub"]').outerHTML = ""
    });
    for (var i = 0; i < 4; i++) {
        browsers[i].disconnectBtn().click()
    }
    for (var i = 0; i < 4; i++) {
        while (!browsers[i].disconnectMsg());
        all:
        while (true) {
            for (const msg of browsers[i].disconnectMsg()) {
                if (msg.getText() == "Connection to tcp://broker.mqtt.cool:1883 lost") {
                    break all;
                }
            }
        }
    }
})