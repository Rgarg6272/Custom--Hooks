 const formattedData = (item, MemberInfoData) => {
        if (MemberInfoData.Name_and_dob) {
            if (item.id === 'First_name') {
                return MemberInfoData.Name_and_dob['First_name'];
            } else if (item.id === 'Middle_name') {
                return MemberInfoData.Name_and_dob['Middle_name'];
            } else if (item.id === 'Last_name') {
                return MemberInfoData.Name_and_dob['Last_name'];
            } else if (item.id === 'Dob') {
                return MemberInfoData.Name_and_dob['Dob'];
            }
        } else if (MemberInfoData.Identifiers) {
            if (item.id === 'Subscriber_id') {
                return MemberInfoData.Name_and_dob['First_name'];
            } else if (item.id === 'Jiva_id') {
                return MemberInfoData.Name_and_dob['Middle_name'];
            } else if (item.id === 'Last_name') {
                return MemberInfoData.Name_and_dob['Last_name'];
            } 
        } else if (MemberInfoData.Address) {
            if (item.id === 'First_name') {
                return MemberInfoData.Name_and_dob['First_name'];
            } else if (item.id === 'Middle_name') {
                return MemberInfoData.Name_and_dob['Middle_name'];
            } else if (item.id === 'Last_name') {
                return MemberInfoData.Name_and_dob['Last_name'];
            } else if (item.id === 'Dob') {
                return MemberInfoData.Name_and_dob['Dob'];
            }
        } else if (MemberInfoData.Contact_details) {
            if (item.id === 'First_name') {
                return MemberInfoData.Name_and_dob['First_name'];
            } else if (item.id === 'Middle_name') {
                return MemberInfoData.Name_and_dob['Middle_name'];
            } else if (item.id === 'Last_name') {
                return MemberInfoData.Name_and_dob['Last_name'];
            } else if (item.id === 'Dob') {
                return MemberInfoData.Name_and_dob['Dob'];
            }
        }
    }
