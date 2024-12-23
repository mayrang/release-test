import * as Sentry from '@sentry/react'
import { SeverityLevel } from '@sentry/types'

const Severity = {
  fatal: 'fatal',
  error: 'error',
  warning: 'warning',
  log: 'log',
  info: 'info',
  debug: 'debug'
}

export function sendLogToSentry(error: Error) {
  Sentry.withScope(scope => {
    scope.setLevel(Severity.error as SeverityLevel)
    Sentry.captureException(error)
  })
}
