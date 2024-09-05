import config from '~/config'

// Layouts
import { SidebarLayout } from '~/layouts'

// Pages
import Home from '~/pages/Home'
import Login from '~/pages/Login'
import Destination from '~/pages/Destination'
import DestinationInfo from './../pages/DestinationInfo/DestinationInfo'
import News from '~/pages/News'
import Contact from '~/pages/Contact'

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login },
    { path: config.routes.destination, component: Destination, layout: SidebarLayout },
    { path: config.routes.destinationInfo, component: DestinationInfo, layout: SidebarLayout },
    { path: config.routes.news, component: News },
    { path: config.routes.contact, component: Contact },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
