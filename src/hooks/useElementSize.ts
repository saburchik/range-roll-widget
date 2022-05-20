import { useCallback, useState } from 'react'
// See: https://usehooks-ts.com/react-hook/use-event-listener
import useEventListener from './useEventListener'
// See: https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'

interface Size {
    height: number
}

function useElementSize<T extends HTMLElement = HTMLDivElement>(): [
    (node: T | null) => void,
    Size,
] {
    // Mutable values like 'ref.current' aren't valid dependencies
    // because mutating them doesn't re-render the component.
    // Instead, we use a state as a ref to be reactive.
    const [ref, setRef] = useState<T | null>(null)
    const [sizeHeight, setSizeHeight] = useState<Size>({
        height: 0,
    })

    // Prevent too many rendering using useCallback
    const handleSize = useCallback(() => {
        setSizeHeight({
            height: ref?.clientHeight || 0,
        })

    }, [ref?.clientHeight])

    useEventListener('resize', handleSize)

    useIsomorphicLayoutEffect(() => {
        handleSize()
    }, [ref?.clientHeight])

    return [setRef, sizeHeight]
}

export default useElementSize