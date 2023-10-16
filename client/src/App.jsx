import {routes} from './routes'
import {RouterProvider} from 'react-router-dom'
import { useEffect } from 'react'
import { Carousel, initTE } from "tw-elements";


const App = () => {
  useEffect(() => {
    initTE({ Carousel });
  }, []);
  
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
