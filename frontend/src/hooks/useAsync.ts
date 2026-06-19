import { useCallback, useState } from 'react'

import { useAppContext } from '@/contexts/AppContext'

interface AsyncState<T> {
  data: T | null
  error: string | null
  isLoading: boolean
}

export function useAsync<T>() {
  const { setLoading, setError, clearError } = useAppContext()
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    error: null,
    isLoading: false,
  })

  const execute = useCallback(
    async (asyncFn: () => Promise<T>) => {
      setState({ data: null, error: null, isLoading: true })
      setLoading(true)
      clearError()

      try {
        const data = await asyncFn()
        setState({ data, error: null, isLoading: false })
        return data
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Something went wrong'
        setState({ data: null, error: message, isLoading: false })
        setError(message)
        throw err
      } finally {
        setLoading(false)
      }
    },
    [setLoading, setError, clearError],
  )

  return { ...state, execute }
}
