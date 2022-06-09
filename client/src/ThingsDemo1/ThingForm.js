import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ThingsForm = () => {
  const [attr1, setAttr1] = useState("");
  const [attr2, setAttr2] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getThing();
    }
  }, []);

  const getThing = async () => {
    try {
      let res = await axios.get(`/api/things/${id}`);
      setAttr1(res.data.attr1);
      setAttr2(res.data.attr2);
    } catch (error) {
      console.log("err");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`/api/things/${id}`, { attr1, attr2 });
    } else {
      await axios.post("/api/things", { attr1, attr2 });
    }
    // if successfully add go back to things page and that will
    // do an axios to grab all things, which will include this new
    // create/update thing
    navigate("/things_demo1");
  };
  return (
    <div className="component">
      <h1>{id ? "Edit" : "New"} Thing</h1>
      <form onSubmit={handleSubmit}>
        <p>attr1</p>
        <input value={attr1} onChange={(e) => setAttr1(e.target.value)} />
        <p>attr2</p>
        <input value={attr2} onChange={(e) => setAttr2(e.target.value)} />
        <button> {id ? "update" : "create"}</button>
      </form>
    </div>
  );
};

export default ThingsForm;
