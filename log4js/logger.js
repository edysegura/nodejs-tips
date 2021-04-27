import log4js from 'log4js'

log4js.configure({
  appenders: {
    file: { type: 'file', filename: 'events.log' },
    console: { type: 'console' }
  },
  categories: {
    default: { appenders: [ 'file', 'console' ], level: 'info' }
  }
})

export const logger = log4js.getLogger()
