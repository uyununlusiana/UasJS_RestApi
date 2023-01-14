import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const Kelas = () => {
  const [kelas, setKelas] = useState([]);
 
  useEffect(() => {
    getKelas();
  }, []);
 
  const getKelas = async () => {
    const response = await axios.get("http://localhost:5000/kelas");
    setKelas(response.data);
  };
 
  const deleteKelas = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/kelas/${id}`);
      getKelas();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Kelas</th>
              <th>jam</th>
              {/* <th>id_mk</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((kelas, index) => (
              <tr key={kelas.id}>
                <td>{index + 1}</td>
                <td>{kelas.kelas}</td>
                <td>
                  <Link
                    to={`edit/${kelas.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteKelas(kelas.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default Kelas;