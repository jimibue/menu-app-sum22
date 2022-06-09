import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Thing from "./Thing";
import ThingsForm from "./ThingForm";

const ThingShow = () => {
  // how I get the :id from the url
  const { id } = useParams();
  const navigate = useNavigate()
  const [thing, setThing] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    getThing();
  });

  const getThing = async () => {
    // skipping try catch... bad idea
    let res = await axios.get(`/api/things/${id}`);
    setThing(res.data);
    setLoading(false);
  };
  const renderThing = () => {
    if (loading) {
      return <p>loading</p>;
    }
    return (
      <>
         <p>syblings elements</p>
         <div onClick={()=> navigate('/things_demo1')}> go back with useNavigate</div>
         <Link to='/things_demo1'>go back with link</Link>
         <a href="/things_demo1">go back with a tag (DONT DO)</a>
        <Thing {...thing} />
        <ThingsForm />
      </>
    );
  };

  return (
    <div>
      <h1>Thing Show</h1>
      {renderThing()}
    </div>
  );
};

export default ThingShow;

// TODOS
// setup this page/route get it rendering
// add link to Thing.js to get here
// grab the id of the thing (react router)
// getting Thing (axios on mount)
// render thing (state)
