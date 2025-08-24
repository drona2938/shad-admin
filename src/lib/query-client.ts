'use client'

import { AxiosError } from 'axios'
import { QueryClient } from '@tanstack/react-query'

let queryClient: QueryClient | undefined = undefined

export function getQueryClient() {
  if (!queryClient) {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: (failureCount, error) => {
            if (process.env.NODE_ENV === 'development') return false
            if (failureCount > 3) return false
            return !(
              error instanceof AxiosError &&
              [401, 403].includes(error.response?.status ?? 0)
            )
          },
          refetchOnWindowFocus: process.env.NODE_ENV === 'production',
          staleTime: 10 * 1000, // 10s
        },
      },
    })
  }
  return queryClient
}

// For backward compatibility
export const QueryClient = getQueryClient()
