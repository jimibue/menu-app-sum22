import "./App.css";
import Dishes from "./Dishes";
import {Route, Routes} from 'react-router-dom'
import PageWrapper from "./PageWrapper";
import Home from "./Home";


function App() {
  return (
     <Routes>
       <Route element={<PageWrapper />}>
         <Route index element={<Home />} />
         <Route path='/dishes' element={<Dishes />} />
       </Route>
     </Routes>
  );
}

export default App;

// stuff I do want to keep
