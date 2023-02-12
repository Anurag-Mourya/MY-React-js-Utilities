import axios from "axios";
import React, { useEffect, useState } from "react";

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  });
  return (
    <div>
      <div className="max-w-[1240px] border p-4 mx-auto md:grid grid-cols-4 text-center">
        {data.map((val, index) => {
          return (
            <>
              <div className="">
                <div class="max-w-sm rounded overflow-hidden shadow-lg text-center m-3 h-[500px]">
                  <img class="w-full" src={val.image} className="w-50 inline-block " />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{val.title}</div>
                    <p class="text-gray-700 text-base">{val.description}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Api;
