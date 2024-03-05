
/**
 * This functions sends an AJAX call to the server to check whether 
 * the otp is correct or not.
 * 
 * @param phoneNumber - stores the phone number of the user.
 * @param otp - contains the otp entered bu the user
 */
const validateUser = async (phoneNumber:string,otp:string) => {
  console.log(otp);
  
  const data = await fetch(
    `${process.env.SERVER_ADDRESS}validateOtp?phoneNumber=${phoneNumber}&otp=${otp}`
  )
    return data.json()
};

export default validateUser