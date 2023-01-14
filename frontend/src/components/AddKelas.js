import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddKelas = () => {
  const [id,  setIde] = useState("");
  const [kelas,  setKelas] = useState("");
  const [jam,  setJam] = useState("");
  const [id_mk,  setIdMatakuliah] = useState("");
  const navigate = useNavigate();
 
  const saveTodo = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/uas_js", {
        id,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveTodo}>
          <div className="field">
            <label className="label">id</label>
            <label className="label">kelas</label>
            <label className="label">jam</label>
            <label className="label">id_mk</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={id}
                onChange={(e) => setid(e.target.value)}
                placeholder="Id"
              />
            </div>
            
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default AddKelas;