import React, { useEffect, useRef, useState } from 'react'

const useStateDebounce = (defaultValue: string, interval: number) : [string, string, React.Dispatch<React.SetStateAction<string>>] => {
  const [debounceValue, setDebounceValue] = useState<string>(defaultValue)
  const [tempValue, setTempValue] = useState<string>(defaultValue)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setDebounceValue(tempValue)
    }, interval)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [tempValue])

  return [debounceValue, tempValue, setTempValue]
}

export default useStateDebounce