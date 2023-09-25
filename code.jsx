const formatData = (id, data) => {
  const value = data[id];
  // const value = MemberInfoData[key] || "-";
  //console.log(value);
  return { label: id, value: value || "-" };
};

useEffect(() => {
  // Set memberData
  setMemberData(
    MemberInfoDetails.map((item) => formatData(item.id, MemberInfoData))
  );

  // Set memberIdentify

  setMemberIdentify(
    MemberIdentifier.map((item) => formatData(item.id, MemberInfoData))
  );

  // Set memberAddress

  setMemberAddress(
    MemberAddress.map((item) => formatData(item.id, MemberInfoData))
  );

  // Set memberContact

  setMemberContact(
    MemberContact.map((item) => formatData(item.id, MemberInfoData))
  );
}, []);
