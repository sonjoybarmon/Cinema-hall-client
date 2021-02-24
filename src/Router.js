import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import ChangePassword from "./Components/Auth/ChangePassword";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import NavMenu from "./Components/Share/NavMenu/NavMenu";
  
  export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={NavMenu} />


            {/* auth pages route*/}
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/forgotPassword' component={ForgotPassword}/>
                <Route path='/changePassword' component={ChangePassword}/>




                <Route path='*'>
                    <div 
                        style={{
                            display : 'flex' , 
                            justifyContent: 'center' , 
                            alignItems: 'center',
                            width : '100%',
                            height: '100vh',
                        }}
                    >
                        <h1 style={{color: 'red'}}>
                            page is not found
                        </h1>
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}