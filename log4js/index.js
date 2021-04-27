import log4js from 'log4js'

// TODO move the code block below to an external file
log4js.configure({
  appenders: {
    file: { type: 'file', filename: 'events.log' },
    console: { type: 'console' }
  },
  categories: {
    default: { appenders: [ 'file', 'console' ], level: 'info' }
  }
})

const logger = log4js.getLogger()

logger.info('This is a info log')
logger.debug('This is a debug log')
logger.warn('This is a warn log')
logger.error('This is an error log')
logger.fatal('This is a fatal log')