import "./App.css";
import Dishes from "./Dishes";
import {Route, Routes} from 'react-router-dom'
import PageWrapper from "./PageWrapper";
import Home from "./Home";
import ThingsDemo1 from "./ThingsDemo1/ThingsDemo1";
import ThingsForm from "./ThingsDemo1/ThingForm";
import Things from "./ThingsDemo1/Things";
import ThingShow from "./ThingsDemo1/ThingShow";
import Users from "./Users/Users";


function App() {
  return (
     <Routes>
       <Route element={<PageWrapper />}>
         <Route index element={<Home />} />
         <Route path='/dishes' element={<Dishes />} />
         <Route path='/users' element={<Users />} />
         <Route path='/things_demo1' element={<ThingsDemo1 />}>
           <Route  index element={<Things />}/>
           <Route  path='/things_demo1/new' element={<ThingsForm />}/>
           <Route  path='/things_demo1/:id' element={<ThingShow />}/>
           <Route  path='/things_demo1/edit/:id' element={<ThingsForm />}/>
         </Route>
       </Route>
     </Routes>
  );
}

export default App;

// stuff I do want to keep
// when pulling if gem was add
   //bundle
// js packacge
   // cd client
   // yarn
// model create
  // rails db:migrate
  // rails db:seed (if seeds.rb was changed)      