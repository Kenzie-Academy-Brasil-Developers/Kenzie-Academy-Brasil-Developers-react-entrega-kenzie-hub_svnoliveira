import { GlobalStyles } from "./globalStyles/GlobalStyles"
import { Reset } from "./globalStyles/Reset"
import { RoutesMain } from "./routes/RoutesMain"
import { SectionEnd } from "./globalStyles/SectionEnd"


export const App =() => {

  return (
    <>
    <Reset />
    <GlobalStyles />
    <RoutesMain />
    <SectionEnd />
    </>
  )
}
