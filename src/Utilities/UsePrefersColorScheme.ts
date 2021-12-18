import { useEffect, useState } from 'react'

const query = (mode: string): string => `(prefers-color-scheme: ${mode})`

const usePrefersColorScheme = () => {
    const [preferredColorSchema, setPreferredColorSchema] = useState(
        'no-preference',
    )

    const check = (q: string): boolean => {
        if (typeof window.matchMedia !== 'function') {
            return false
        }
        switch (q) {
            case 'isDark': return window.matchMedia(query(`dark`)).matches
            case 'isLight': return window.matchMedia(query(`light`)).matches
            default: return false
        }
    }


    const isDark = check('isDark')
    const isLight = check('isLight')

    useEffect(() => {
        if (isDark) setPreferredColorSchema('dark')
        else if (isLight) setPreferredColorSchema('light')
        else setPreferredColorSchema('no-preference')
    }, [isDark, isLight])

    useEffect(() => {
        if (typeof window.matchMedia !== 'function') {
            return () => {}
        }
        try {
            window
                .matchMedia(query(`dark`))
                .addEventListener(
                    'change',
                    ({ matches }) => matches && setPreferredColorSchema('dark'),
                )

            window
                .matchMedia(query(`light`))
                .addEventListener(
                    'change',
                    ({ matches }) => matches && setPreferredColorSchema('light'),
                )
        } catch (error) {
            window
                .matchMedia(query(`dark`))
                .addListener(() => setPreferredColorSchema(isDark ? 'light' : 'dark'))
        }

        return () => {
            window.matchMedia(query(`dark`)).removeEventListener('change', () => setPreferredColorSchema(isDark ? 'light' : 'dark'))
            window.matchMedia(query(`light`)).removeEventListener('change', ({ matches }) => matches && setPreferredColorSchema('light'))
        }
    }, [])

    return preferredColorSchema
}

export default usePrefersColorScheme