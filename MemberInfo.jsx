const formattedData = (id, data) => {
  switch (id) {
    case "First_name":
      return data.Name_and_dob?.First_name || "-";

    case "Middle_name":
      return data.Name_and_dob?.Middle_name || "-";

    case "Last_name":
      return data.Name_and_dob?.Last_name || "-";

    case "Dob":
      return data.Name_and_dob?.Dob || "-";

    case "Subscriber_id":
      return data.Identifiers?.Subscriber_id || "-";

    case "Medicaid_id":
      return data.Identifiers?.Medicaid_id || "-";

    case "Jiva_id":
      return data.Identifiers?.Jiva_id || "-";

    case "Address":
      return data.Address || "-";

    case "Contact_phone_number":
      const phoneNumber = data.Contact_details?.Contact_phone_number || "-";

      return formatPhoneNumber(phoneNumber);

    default:
      return "-";
  }
};

// Helper function to format phone numbers

const formatPhoneNumber = (phoneNumber) => {
  const cleaned = ("" + phoneNumber).replace(/\D/g, "");

  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    const intlCode = match[1] ? "+1 " : "";

    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }

  return phoneNumber;
};

// Inside the useEffect

useEffect(() => {
  console.log("MemberInfoData::", MemberInfoData);

  // Set memberData

  setMemberData(
    MemberInfoDetails.map((item) => ({
      ...item,

      value: formattedData(item.id, MemberInfoData),
    }))
  );

  // Set memberIdentify

  setMemberIdentify(
    MemberIdentifier.map((item) => ({
      ...item,

      value: formattedData(item.id, MemberInfoData),
    }))
  );

  // Set memberAddress

  setMemberAddress(
    MemberAddress.map((item) => ({
      ...item,

      value: formattedData(item.id, MemberInfoData),
    }))
  );

  // Set memberContact

  setMemberContact(
    MemberContact.map((item) => ({
      ...item,

      value: formattedData(item.id, MemberInfoData),
    }))
  );
}, []);
