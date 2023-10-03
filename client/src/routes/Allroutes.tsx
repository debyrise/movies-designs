
import  {createBrowserRouter} from "react-router-dom"
import Weblayouts from "../component/Layouts/weblayouts"
import Homepages from "../Pages/Homepages"
import Detailpages from "../Pages/Detailpages"
import Genre from "../component/Commons/Genres"

const Index = createBrowserRouter ([
    {
        path: '/',
        element: < Weblayouts  />,

        children: [
            {    
                index: true,
                element: <Genre />
            }
        ]
        
    },
    {
         path: "/homepage",
         element: < Homepages  />
    },
    {
        path:"/Detailpages/:title/:id",
        element: <Detailpages  />
    }


])
  

export default Index