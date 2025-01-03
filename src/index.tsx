import React from 'react'
import reactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Global } from '@emotion/react'
import globalStyle from '@/styles/globalStyle'
import { client } from './store/server/queryClient'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import * as Sentry from '@sentry/react'
import QueryClientBoundary from './context/QueryClientBoundary'
import ErrorCatcher from './context/ErrorCatcher'
import { ErrorBoundary } from 'react-error-boundary'
import Fallback from './components/errorHandling/Fallback'
import { GlobalErrorBoundary } from './components/errorHandling/GlobalErrorBoundary'

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()]
})
const reactRoot = document.querySelector('div#root')

const prepare = async (): Promise<void> => {
  const { worker } = await import('./mocks/browser')
}

prepare().then(() => {
  reactDOM.createRoot(reactRoot as HTMLElement).render(
    // <GlobalErrorBoundary>
    <QueryClientBoundary>
      {/* <ErrorCatcher /> */}
      <HelmetProvider>
        {/* globalstyle 적용  */}
        <Global styles={globalStyle} />
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </HelmetProvider>
    </QueryClientBoundary>
    // </GlobalErrorBoundary>
  )
})
