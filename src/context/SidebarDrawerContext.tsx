import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps{
  children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContex = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({children}: SidebarDrawerProviderProps){
  const disclose = useDisclosure()
  const router = useRouter()

  useEffect(()=>{
    disclose.onClose()
  }, [router.asPath])

  return(
    <SidebarDrawerContex.Provider value={disclose}>
      {children}
    </SidebarDrawerContex.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContex)