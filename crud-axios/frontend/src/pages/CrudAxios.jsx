import axios from "axios";
import { useEffect, useState } from "react";

const CrudAxios = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:3000/api/movies").then((res) => {
      setData(res.data);
      console.log(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Crud Axios</h1>
      <div className="Table-Movie">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((movie, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{movie.title_tb_movie}</td>
                  <td>{movie.year_tb_movie}</td>
                  <td>
                    <button style={{ marginRight: "5px" }}>edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CrudAxios;
