import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"
      )
      .then((res) => setData(res.data[date]))
      .catch((err) => console.log(err));
  }, [data, date]);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto mt-4">
            <h2
              classname="text-center text-white display-3"
              style={{ color: "white" }}
            >
              Turkey Covid-19 Search Engine
            </h2>
            <input
              placeholder="MM/DD/YY"
              className="form-control"
              onChange={(e) => setDate(e.target.value)}
            />
            <table class="table table-striped text-white">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Number of tests </th>
                  <th scope="col">Number of patients</th>
                  <th scope="col">Number of deaths</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-white">
                  <th scope="row">1</th>
                  <td
                    className={data === undefined ? "bg-danger" : "bg-success"}
                  >
                    {data === undefined ? "Data is loading" : data.totalTests}
                  </td>
                  <td
                    className={data === undefined ? "bg-danger" : "bg-success"}
                  >
                    {data === undefined
                      ? "Data is loading"
                      : data.totalPatients}
                  </td>
                  <td
                    className={data === undefined ? "bg-danger" : "bg-success"}
                  >
                    {data === undefined ? "Data is loading" : data.totalDeaths}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
