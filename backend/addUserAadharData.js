const AadharData = require("./Models/aadharModel"); // Assuming the path is correct

const addUserAadharData = async () => {
  try {
    // Create an instance of AadharData model with data for one person
    const userAadharData = new AadharData({
      aadharNumber: "123456789103", // Aadhar number
      phoneNumber: "9876543212", // Phone number
      name: "Akash kumar",
      gender: "Male",
      dob: "10-05-1998", // Date of birth
      address:
        "C/O S/O: Ajay Kumar, Aditya towers, Miyapur, Hyderabad, Telangana",
      // Optional: set to false by default
    });

    // Save the person's data to the database
    await userAadharData.save();

    console.log("user data saved successfully");
  } catch (error) {
    console.error("Error saving person data:", error);
  }
};

module.exports = addUserAadharData;
