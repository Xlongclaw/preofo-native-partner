/**
 * This utility function sends an api request to the server for 
 * sending otp to the given Phone Number.
 * 
 * @param phoneNumber - Phone Number of the user.
 */
const sendOtp = async (phoneNumber:string) => {
  await fetch(
    `${process.env.SERVER_ADDRESS}sendOtp?phoneNumber=${phoneNumber}&serverKey=${process.env.SERVER_KEY}`,
    {
      method: "GET",
    }
  ).catch((err) => {
    console.log(err);
  });
};

export default sendOtp