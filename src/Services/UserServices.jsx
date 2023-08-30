import axios from "axios";

export const signin = async (user) => {
//     console.log("in services "+user.name)
  let response = await axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/user/login",
    user
  );
//   console.log("services" +response)
  return response;
};

export const signup = async (user) => {
    let response = await axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
      user
    );
    console.log("services" +response)

    return response;
  };
