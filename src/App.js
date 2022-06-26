import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "../src/components/Header";
import Auth from "../src/components/Auth";
import UserProfile from "../src/components/UserProfile";
import { useSelector} from 'react-redux/es/exports';
function App() {
  const showAuth=useSelector(state=>state.auth.isAuthenticated);
  return (
    <Fragment>
    <Header/>
    {!showAuth&&<Auth/>}
    {showAuth && <UserProfile />}
    <Counter />
    </Fragment>

  );
}

export default App;
