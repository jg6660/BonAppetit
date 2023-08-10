import './App.css';
import Header from './Header';
import Ingredients from './Ingredients';
import AddPantry from './components/AddPantry';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetRecipes from './components/GetRecipes';
import { Auth } from 'aws-amplify';
import CallngIngredients from './components/CallIngredients';


function App() {
  const userId = Auth.currentSession().then((response)=>response).then((data) => {
      window.sessionStorage.setItem('token', data.accessToken.payload.sub)
      return data.accessToken.payload.sub}
  );

  return (
    <div className="App"> 
    <Header />
    <CallngIngredients />
    {/* <Ingredients /> */}
      <Router>
        <Routes>
            <Route path="/" element={<Ingredients />} />
            <Route path="/GetRecipes" element={<GetRecipes />} />
            <Route path="/AddPantry" element={<AddPantry />} />
            {/* <Route path="/" element={<AmplifySignOut />} /> */}
            </Routes>
      </Router>,
      {/* <Header />
      <Ingredients />*/}
      <AmplifySignOut /> 
    </div>
  );
}
// export default App;
export default withAuthenticator(App);
