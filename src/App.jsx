import { GlobalStyles } from "./globalStyles/GlobalStyles"
import { Reset } from "./globalStyles/Reset"
import { RoutesMain } from "./routes/RoutesMain"
import { SectionEnd } from "./globalStyles/SectionEnd"
import { useContext } from "react"
import { UserContext } from "./providers/UsersContext"
import { PageLoading } from "./components/Fragments/PageLoading"


export const App =() => {

  const { loadingPage } = useContext(UserContext)
  return (
    <>
    <Reset />
    <GlobalStyles />
    {loadingPage? <PageLoading /> : <RoutesMain />}
    <SectionEnd />
    </>
  )
}
