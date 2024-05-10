import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import DeviceName from "../components/DeviceName";
import DeviceBattery from "../components/DeviceBattery";
import DeviceStatus from "../components/DeviceStatus";
import LastActivity from "../components/LastActivity";
import './StyleHome.css';

const Home = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    axios
      .get("https://dashboard-api-lac.vercel.app/robots")
      .then((response) => {
        setOptions(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching dropdown options:", error);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    const selectedOptionId = event.target.value;
    const selectedOptionObject = options.find(
      (option) => option._id === selectedOptionId
    );
    console.log(selectedOptionId);
    if (selectedOptionId) {
      axios
        .get(`http://localhost:5555/robots/${selectedOptionId}`)
        .then((response) => {
          setInfo(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching info:", error);
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="select-container">
          <select
            value={selectedOption}
            onChange={handleChange}
            className="block w-full bg-gradient-to-r from-green-400 to-blue-500 border border-transparent px-4 py-2 pr-8 rounded-md shadow-lg text-white hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-red-400 focus:outline-none focus:shadow-outline"
            style={{
              backgroundImage: "linear-gradient(to bottom, #68d391, #63b3ed)",
              color: "#000",
            }}
          >
            <option value="" disabled hidden>
              Select an option
            </option>
            {options.map((option) => (
              <option
                key={option._id}
                value={option._id}
                className="bg-white text-black"
              >
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className="components">
          <DeviceName name={info.name} />
          <DeviceBattery batteryLevel={info.batteryLevel} />
          <DeviceStatus status={info.status} />
        </div>
        <LastActivity activityData={info.updated_at ? new Date(info.updated_at).toLocaleString() : ''} />
      </div>
    </>
  );
};

export default Home;
