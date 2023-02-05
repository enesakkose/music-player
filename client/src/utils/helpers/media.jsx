import useGetWindowSize from "@/utils/hooks/useGetWindowSize"

export const getBreakPoint = (breakPoint) => {
  const size = useGetWindowSize()

  if(breakPoint === 'SM'){
    const SM = size === 'SM' || size === 'MD'
  
    return SM
  }
}