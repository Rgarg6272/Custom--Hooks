const MemberInfoData = {
  First_name: "Raj",
  Middle_name: "Kumar",
  Last_name: "Garg",

  Dob: "2001-04-20",
};

const MemberInfoDetails = [
  {
    id: "First_name",
    label: "First Name",
    value: "",
  },

  {
    id: "Middle_name",
    label: "Middle Name",
    value: "",
  },

  {
    id: "Last_name",
    label: "Last Name",
    value: "",
  },

  {
    id: "Dob",
    label: "Date of Birth",
    value: "",
  },
];

const formattedData = (item, MemberInfoData) => {
  if (MemberInfoData) {
    const key = item.id;

    if (MemberInfoData[key]) {
      return MemberInfoData[key];
    }
  }

  return ""; // Return an empty string if no match is found
};

// Test the function for each item in MemberInfoDetails

MemberInfoDetails.forEach((item) => {
  const value = formattedData(item, MemberInfoData);

  console.log(`${item.label}: ${value}`);
});
