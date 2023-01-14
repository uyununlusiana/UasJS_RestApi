import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
const EditKelas = () => {
  const [kelas, setKelas] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
 
  useEffect(() => {
    getKelasById();
  }, []);
 
  const updateKelas = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/kelas/${id}`, {
        kelas,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  const getKelasById = async () => {
    const response = await axios.get(`http://localhost:5000/todos/${id}`);
    setName(response.data.kelas);
  };
 
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateKelas}>
          <div className="field">
            <label className="label">Kelas</label>
            <label className="label">jam</label>
            
            <div className="control">
              <input
                type="text"
                className="input"
                value={kelas}
                onChange={(e) => setName(e.target.value)}
                placeholder="Kelas"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default EditKelas;