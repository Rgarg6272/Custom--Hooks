import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Tabs, Tab, Container, Divider, Grid, Typography, Breadcrumbs, Link, Paper} from "@material-ui/core";
import { useStyles } from "../../../css/MemberDetails";
import { makeStyles, withStyles } from '@material-ui/styles';
import { COMMONCSS } from "../../../css/CommonCss";
import { MemberInfoDetails, MemberIdentifier, MemberAddress, MemberContact, SettingOfCare, NFLOC, DeleLevelCare, OtherKeyInfoLeft, OtherKeyInfoRight } from '../../../../constants/memberData';
import Location from '../../../../assets/Location.png';
import Call from '../../../../assets/Call.png';
import { ROUTES } from '../../../../constants/routes';
import { Link as RouterLink } from "react-router-dom";

const useStyles1 = makeStyles((theme) => COMMONCSS(theme));
export const MemberInfo = ({ MemberInfoData }) => {
    const classes = useStyles();
    const classes1 = useStyles1();
    const [value, setValue] = useState(location.dashboardTab ? "three" : "two");
    const [tableRowData, setTableRowData] = useState([]);
    const [searchData, setSearchedData] = useState({});
    const [memberData, setMemberData] = useState(MemberInfoDetails)
    const [memberIdentify, setMemberIdentify] = useState(MemberIdentifier)
    const [memberAddress, setMemberAddress] = useState(MemberAddress)
    const [memberContact, setMemberContact] = useState(MemberContact)
    useEffect(() => {
        console.log('MemberInfoData::', MemberInfoData);
        setMemberData(MemberInfoDetails.map((item) => {
            return {
                ...item, value: formattedData1(item, MemberInfoData)
            }
        }));
        setMemberIdentify(MemberIdentifier.map((item) => {
            return {
                ...item, value: formattedData2(item, MemberInfoData)
            }
        }));
        setMemberAddress(MemberAddress.map((item) => {
            return {
                ...item, value: formattedData3(item, MemberInfoData)
            }
        }));
        setMemberContact(MemberContact.map((item) => {
            return {
                ...item, value: formattedData4(item, MemberInfoData)
            }
        }));
    }, []);

    const formattedData1 = (item, MemberInfoData) => {
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

    const formattedData2 = (item, MemberInfoData) => {
        if (item.id === 'Subscriber_id') {
            return MemberInfoData.Identifiers['Subscriber_id'];
        } else if (item.id === 'Jiva_id') {
            return MemberInfoData.Identifiers['Jiva_id'];
        } else if (item.id === 'Medicaid_id') {
            return MemberInfoData.Identifiers['Medicaid_id'];
        }
    }

    const formattedData3 = (item, MemberInfoData) => {
        if (item.id === 'Address') {
            return MemberInfoData.Address;
        }
    }

    const formattedData4 = (item, MemberInfoData) => {
        if (item.id === 'Contact_phone_number') {
            var cleaned = ("" + MemberInfoData.Contact_details['Contact_phone_number']).replace(/\D/g, "");
            var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
            if (match) {
                var intlCode = match[1] ? "+1 " : "";
                return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
            }
            return MemberInfoData.Contact_details['Contact_phone_number'];
        }
    }

    return (
        <React.Fragment>
            <Grid container className={classes.headerGrid}>
                <Grid item xs={12}>
                    <Typography variant="h5" component="h2" className={classes1.title}>
                        Member Information
                    </Typography>
                </Grid>
            </Grid>

            <div className={classes.subContainer}>
                <Paper className={classes.mainPaper}>
                    <Typography variant="h5" component="h2" className={classes1.subcontent}>
                        Name and Date Of Birth
                    </Typography>
                    <Paper className={classes.subPaper} style={{}}>
                        <Grid container>
                            {memberData && memberData.length > 0
                                ? memberData.map((data) => {
                                    return (
                                        <>
                                            <Grid item xs={4}>
                                                <Typography variant="h5" component="h2" className={classes1.contentLeft}>
                                                    {data.label}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="h5" component="h2" className={classes1.contentRight}>
                                                    :<span style={{ paddingLeft: "1rem", fontWeight: "400" }}>{data.value ? data.value : "-"}</span>
                                                </Typography>
                                            </Grid>
                                        </>
                                    )
                                }) : ""}
                        </Grid>
                    </Paper>
                </Paper>

                <Paper className={classes.mainPaper}>
                    <Typography variant="h5" component="h2" className={classes1.subcontent}>
                        Identifiers
                    </Typography>
                    <Paper className={classes.subPaper}>
                        <Grid container>
                            {memberIdentify && memberIdentify.length > 0
                                ? memberIdentify.map((data) => {
                                    return (
                                        <>
                                            <Grid item xs={4}>
                                                <Typography variant="h5" component="h2" className={classes1.contentLeft} style={{ fontWeight: "700" }}>
                                                    {data.label}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="h5" component="h2" className={classes1.contentRight}>
                                                    :<span style={{ paddingLeft: "0.8rem", fontWeight: "400" }}>{data.value ? data.value : "-"}</span>
                                                </Typography>
                                            </Grid>
                                        </>
                                    )
                                }) : ""}
                        </Grid>
                    </Paper>
                </Paper>

                <Paper className={classes.mainPaper}>
                    <Typography variant="h5" component="h2" className={classes1.subcontent}>
                        Address
                    </Typography>
                    <Paper className={classes.subPaper}>
                        <Grid container>
                            {memberAddress && memberAddress.length > 0
                                ? memberAddress.map((data) => {
                                    return (
                                        <>
                                            <Grid container>
                                                <Grid item xs={1} style={{ displau: "flex", flexDirection: "column" }}>
                                                    {data.id == 'Address' && <img src={Location} style={{ width: "2rem", height: "2rem" }} />}
                                                </Grid>
                                                <Grid item xs={11}>
                                                    <Typography variant="h5" component="h2" className={classes1.contentRight} style={{  paddingLeft: "1.5rem" }}>
                                                        <span style={{ fontWeight: "400" }}>{data.value ? data.value.split(',').splice(0,1) : "-"}</span>
                                                    </Typography>
                                                    <Typography variant="h5" component="h2" className={classes1.contentRight} style={{ marginTop: data.id == "Address" ? "-0.3rem" : "", paddingLeft: "1.5rem" }}>
                                                        <span style={{ fontWeight: "400" }}>{data.value ? data.value.split(',').splice(1,1) : "-"}</span>
                                                    </Typography>
                                                    <Typography variant="h5" component="h2" className={classes1.contentRight} style={{ marginTop: data.id == "Address" ? "-0.2rem" : "", paddingLeft: "1.5rem" }}>
                                                        <span style={{ fontWeight: "400" }}>{data.value ? data.value.split(',').splice(2,2) : "-"}</span>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </>
                                    )
                                }) : ""}
                        </Grid>
                    </Paper>
                </Paper>

                <Paper className={classes.mainPaper}>
                    <Typography variant="h5" component="h2" className={classes1.subcontent}>
                        Contact Details
                    </Typography>
                    <Paper className={classes.subPaper}>
                        <Grid container>
                            {memberContact && memberContact.length > 0
                                ? memberContact.map((data) => {
                                    return (
                                        <>
                                            <Grid item xs={1}>
                                                <img src={Call} style={{ width: "2rem", height: "2rem" }} />
                                            </Grid>
                                            <Grid item xs={11}>
                                                <Typography variant="h5" component="h2" style={{ marginTop: "-0.1rem" }} >
                                                    <span className={classes1.contentLeft} style={{ paddingLeft: "1rem" }}>{data.label}</span>
                                                    <span style={{ paddingLeft: "0.5rem", fontSize: "14px" }}>:</span>
                                                    <span className={classes1.contentRight} style={{ paddingLeft: "1rem", }}>{data.value ? data.value : "-"}</span>
                                                </Typography>
                                            </Grid>
                                        </>
                                    )
                                }) : ""}
                        </Grid>
                    </Paper>
                </Paper>
            </div>
        </React.Fragment>
    );
};
export default MemberInfo;
