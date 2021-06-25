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
    maxSessions: 1,
    maxInstances: 1,
    maxInstancesPerCapability: 1,
    capabilities: {
        browserC1: {
            capabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': chromeOptions
            }
        },
        browserC2: {
            capabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': chromeOptions
            }
        },
        browserF1: {
            capabilities: {
                browserName: 'firefox',
                "moz:firefoxOptions": firefoxOptions
            }
        },
        browserF2: {
            capabilities: {
                browserName: 'firefox',
                "moz:firefoxOptions": firefoxOptions
            }
        }
    }
})
