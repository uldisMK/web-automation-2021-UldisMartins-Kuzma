const baseConfig = require('./wdio.base.conf')
const merge = require('deepmerge')

const chromeOptions = {
    args: [
        '--use-fake-ui-for-media-stream',
        '--use-fake-device-for-media-stream'
    ]
}

const firefoxOptions = {
    'prefs': {
        'media.navigator.streams.fake': true,
        'media.navigator.permission.disabled': true
    }
}

exports.config = merge(baseConfig.config, {
    maxInstances: 1,
    capabilities: {
        user1: {
            capabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': chromeOptions
            }
        },
        user2: {
            capabilities: {
                browserName: 'firefox',
                "moz:firefoxOptions": firefoxOptions
            }
        }
    }
})
