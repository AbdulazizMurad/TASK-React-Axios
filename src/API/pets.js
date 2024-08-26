import instance from ".";
const getAllPets = async () => {
  const response = await instance.get("/pets");
  return response.data;
};
const getPetById = async (id) => {
  const response = await instance.get(`pets/${id}`);
  return response.data;
};
// const addNewPet = ()=>{
//     const response = instance.post(`https://pets-react-query-backend.eapi.joincoded.com/pets/${name}/${image}`)
// }
export { getAllPets, getPetById };
