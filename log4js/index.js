import log4js from 'log4js'

const log = log4js.getLogger()
log.level = 'debug'

log.info('This is a info log')
log.debug('This is a debug log')
log.warn('This is a warn log')
log.error('This is an error log')
log.fatal('This is a fatal log')