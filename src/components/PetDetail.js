//things that were commented, replaced with useQuery.
import React from "react";
import { getPetById } from "../API/pets";
// import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import "./strap.css";
const PetDetail = () => {
  // const [petId, setpetId] = useState([]);
  const { id } = useParams();
  // const getPetId = async () => {
  //   const response = await getPetById(id); //getting the id from useparam
  //   setpetId(response);
  // };
  const { data: petById, isPending } = useQuery({
    queryKey: ["getPetById"],
    queryFn: () => getPetById(id), //we need to add arrow function before it. ()=> getById(take param), to pass info, and use function
  });
  if (isPending) {
    return <span className="loader"></span>;
  }

  const pet = petById;
  return (
    <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
      {/* <button onClick={getPetId}> get By Id</button> */}
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <img
            src={pet?.image}
            alt={pet?.name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {pet?.name}</h1>
          <h1>Type: {pet?.type}</h1>
          <h1>adopted: {pet?.adopted}</h1>

          <button className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5">
            Adobt
          </button>

          <button className="w-[70px] border border-black rounded-md  hover:bg-red-400">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
