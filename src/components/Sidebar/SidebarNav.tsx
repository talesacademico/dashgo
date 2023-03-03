import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav(){
  const sessions = [
    {
      name: 'GERAL', items: [
        { item: 'Dashboard', href:"/dashboard", icon: RiDashboardLine },
        { item: 'Usuários', href:"/users", icon: RiContactsLine }],
    },
    {
      name: 'AUTOMAÇÃO', items: [
        { item: 'Formulários', href:"#", icon: RiInputMethodLine },
        { item: 'Automação', href:"#", icon: RiGitMergeLine },
      ]
    },
  ]
  return(
    <Stack spacing="12" align="flex-start">
    {sessions.map((session, index) => {
      return (
        <NavSection name={session.name} key={index}>
         <NavLink items={session.items}/>
        </NavSection>
      )
    })}
  </Stack>
  )
}