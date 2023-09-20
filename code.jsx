  const handleButtonSearch = () => {
        //console.log('handleButtonsearch::', event.target.innerText, ' ', memberContactData)
        if (event.target.innerText === "Clear All") {
            handleClearAll();
        } else if (
            event.target.innerText === "Add" || event.target.innerText === "Save" ||
            (event.keyCode == 13 && event.key === "Enter")
        ) {
            if (addHeader === 'Add New Level of Care') {
                const ccLevelStart = moment(memberFormData.CC_Level_Start, 'MMDDYYYY', true);
                const ccLevelEnd = moment(rowValue.CC_Level_End, 'MMDDYYYY', true);
                if(ccLevelStart.isValid() && ccLevelEnd.isValid() && ccLevelStart.isBefore(ccLevelEnd)){
                    setSearchDialogOpen(true);
                } else {
                    getMemberDetails(memberFormData);

                }
               // setSearchDialogOpen(true);
            } else {
                //console.log('memberContactData::', memberContactData, ' ', delegateData)
                getMemberDetails(memberContactData);
            }
        }
    }
