import useGetWindowSize from "@/hooks/useGetWindowSize"

export const getMobileTabletSize = () => {
  const size = useGetWindowSize()
  const mobileSize = size === 'SM' || size === 'MD'
  
  return mobileSize
}