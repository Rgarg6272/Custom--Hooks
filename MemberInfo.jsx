useEffect(() => {
  console.log("MemberInfoData::", MemberInfoData);

  // Helper function to format data

  const formatData = (item, data) => {
    const key = item.id;

    const value = data[key];

    if (value !== undefined && value !== null) {
      return { ...item, value }; // Return both the label and the formatted value
    } else {
      return { ...item, value: "-" }; // If value is not present, return "-"
    }
  };

  // Set memberData

  setMemberData(
    MemberInfoDetails.map((item) => formatData(item, MemberInfoData))
  );

  // Set memberIdentify

  setMemberIdentify(
    MemberIdentifier.map((item) => formatData(item, MemberInfoData))
  );

  // Set memberAddress

  setMemberAddress(
    MemberAddress.map((item) => formatData(item, MemberInfoData))
  );

  // Set memberContact

  setMemberContact(
    MemberContact.map((item) => formatData(item, MemberInfoData))
  );
}, []);
