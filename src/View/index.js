import AppLogout from "../utilities/AppLogout"
import Home from "./Home"

const MainDashboardEntry = () => {
    return (
        <AppLogout>
            <Home />
        </AppLogout>
    )
}

export default MainDashboardEntry