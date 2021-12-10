import React from "react";
import ForgetPage from "../ForgetPasswrod/Forgotpass"
import {Link,useParams,  useRouteMatch,Route, Switch, BrowserRouter} from 'react-router-dom';

class Forget extends React.Component{

render(){
  //  let  match = useRouteMatch();
    return(
        <div>

        <BrowserRouter>
        {" "} <Link to="/forgetPassword"  className="forget">Forgot password?</Link>
        <Switch>
          <Route  path="/forgetPassword" exact strict component={(ForgetPage)} />
        </Switch>
        </BrowserRouter>


        </div>);

}

}

export default Forget;