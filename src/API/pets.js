import instance from ".";
const getAllPets = async () => {
  const response = await instance.get("/pets/");
  return response.data;
};
const getPetById = async (id) => {
  const response = await instance.get(`/pets/${id}`);
  return response.data;
};
const addNewPet = async (name, type, image, available) => {
  const response = await instance.post("/pets/", {
    name: name,
    type: type,
    image: image,
    adopted: available, //available is named adopted, all on left is on backEnd.
  });
  return response.data;
};
export { getAllPets, getPetById, addNewPet };
// const [name, setName] = useState("");
//   const [type, setType] = useState("");
//   const [image, setImage] = useState("");
