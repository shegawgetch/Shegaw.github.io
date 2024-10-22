import { Outlet } from 'react-router-dom'
import Head from '../layout/Head'


export const PrivateRout = () => {



  return(
    <div>
              <Head/>   
            <Outlet/>
        </div>

  )
}
