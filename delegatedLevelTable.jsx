import { forwardRef } from "react";
import React, { useEffect, useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MaterialTable, { MTableToolbar } from "material-table";
import SimpleSnackbar from "../../../common/AlertMessage";
import "jspdf-autotable";
import { TablePagination } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import GetAppIcon from "@material-ui/icons/GetApp";
import { CsvBuilder } from "filefy";
import jsPDF from "jspdf";
import { commonFontSizes } from "../../../css/FontSizes";
import { DelegatedLevelTabletData, AdDelegateLevelData } from "../../../../constants/memberData";
import { MemberInformation } from "../MemberInformation/MemberInformation";
import { searchButtonStyles } from "../../../css/SearchButtonStyles";
import Grid from "@material-ui/core/Grid";
import AddNewCareDialog from "../../../common/AddNewCareDialog";

export const DelegatedLevelTable = () => {
    const [tableData, setData] = useState(DelegatedLevelTabletData);
    //const [delegateLoading, setLoading] = useState(loading);
    const [data2, setData2] = useState([]);
    const [snackOpen, setSnackOpen] = useState(false);
    const [snackSev, setSnackSev] = useState("");
    const [snackMsg, setSnackMsg] = useState("");
    const tableRef = React.createRef();
    const [count, setCount] = useState(tableData && tableData.length > 0 ? tableData.length : 0);
    const [memberInfo, setMemberInfo] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [rowId, setRowId] = useState("");
    const [rowColors, setRowColors] = useState("");
    const [isDatePickerDisabled, setDatePickerDisabled] = useState(false);
    const [addHeader, setAddHeader] = useState("");
    const [addData, setAddData] = useState("");
    const classes = useStyles();
    const classes1 = searchButtonStyles();

    const handleDateChange1 = (date, rowData) => {
        const updatedData = tableData.map((item) =>
            item.tableData.id === rowData.tableData.id ? { ...item, CC_Level_End: date } : item
        );
        setData(updatedData);
    };

    const AddNewLevel = () => {
        const updateMemberData = AdDelegateLevelData.map((inputData) => {
            return {
                ...inputData,
                value: ""//res[inputData.id - 1]
            };
        })
        setAddData(updateMemberData);
        setAddHeader("Add New Level of Care");
        setDialogOpen(true);
    }

    const handleCloseDialog = (memberFormData) => {
        if (memberFormData) {
            setData([...tableData, memberFormData]);
            setDialogOpen(false);
        } else {
            setDialogOpen(false);
        }
    }
    useEffect(() => {
        setCount(tableData && tableData.length > 0 ? tableData.length : 0);
    }, []);

    return (
        <div class="deleTable">
            <MuiThemeProvider theme={theme}>
                <div class="input">
                    <MaterialTable
                        key={count}
                        title="Delegate"
                        class="input"
                        onRowClick={(event, rowData, togglePanel) =>
                            handleClick(rowData)
                        }
                        autoHeight={true}
                        icons={tableIcons}
                         data={tableData}
                        tableRef={tableRef}
                        options={{
                            actionsColumnIndex: -1,
                            paging: false,
                            search: false,
                            toolbar: true,
                            sorting: false,
                            detailPanelType: "single",
                            selection: false,
                            maxBodyHeight: "40vh",
                            overflowY: "hidden !important",
                            padding: "dense",
                            filtering: false,
                            searchFieldStyle: {
                                padding: "0px 0px 0px 10px",
                                margin: "0px 0 0 0 ",
                                disableUnderline: true,
                                border: "0.5px solid #A19D9D",
                                height: "100%",
                                width: "18rem",
                                borderRadius: "4px"
                            },
                            showTitle: false,
                            doubleHorizontalScroll: false,
                        }}
                        columns={[
                            {
                                title: "Entity",
                                field: "Entity",
                                cellStyle: {
                                    fontSize: commonFontSizes.bodyTwo + "rem",
                                    minWidth: 150,
                                    maxWidth: 150,
                                },
                                render: (rowData) => (
                                    <RenderValue value={rowData.Entity} />
                                ),
                            },
                            {
                                title: "CC Level",
                                field: "CC_Level",
                                cellStyle: {
                                    fontSize: commonFontSizes.bodyTwo + "rem",
                                    minWidth: 150,
                                    maxWidth: 150,
                                },
                                render: (rowData) => (
                                    <RenderValue value={rowData.CC_Level} />
                                ),
                            },
                            {
                                title: "CC Level Start",
                                field: "CC_Level_Start",
                                cellStyle: {
                                    // color: "#555151",
                                    fontSize: commonFontSizes.bodyTwo + "rem",
                                    fontWeight: 400,
                                },
                                render: (rowData) => (
                                    <RenderValue value={rowData.CC_Level_Start} />
                                ),
                            },
                            {
                                title: "CC Level End",
                                field: "CC_Level_End",
                                cellStyle: {
                                    // color: "#555151",
                                    fontSize: commonFontSizes.bodyTwo + "rem",
                                    fontWeight: 400,
                                    minWidth: 150,
                                    maxWidth: 150,
                                },
                                render: (rowData) => (
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                className={rowData.enableDatePicker == false ? classes.datePicker : classes.dataPickerE}
                                                value={rowData.CC_Level_End}
                                                onChange={(date) => handleDateChange1(date, rowData)}
                                                onAccept={handleDateClose1}
                                                format="dd-MM-yyyy"
                                                disabled={rowData.enableDatePicker}
                                                helperText=""
                                                openTo="date"
                                                clearable
                                                InputProps={{
                                                    readOnly: true,
                                                    style: { width: 155, paddingLeft: "2rem" },
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </div>
                                ),
                            },
                            {
                                title: "Reason For End",
                                field: "Reason_For_End",
                                cellStyle: {
                                    fontSize: commonFontSizes.bodyTwo + "rem",
                                    fontWeight: 400,
                                    minWidth: 150,
                                    maxWidth: 150,
                                },
                                render: (rowData) => (
                                    <RenderValue value={rowData.Reason_For_End} />
                                ),
                            },
                            {
                                title: "Action",
                                render: rowData => {
                                    return (
                                        <div tyle={{ marginRight: "-1rem" }}>
                                            <IconButton
                                                style={{ padding: "0px 6px 0px 2px" }}
                                                aria-label="edit"
                                                onClick={() => {
                                                    handleBlockRow(rowData)
                                                }}
                                            >
                                                <BlockIcon style={{ color: '#861426', width: "1.2rem", height: "1.2rem" }} />
                                            </IconButton>
                                        </div>
                                    );
                                }
                            }
                        ]}

                        components={{
                            Toolbar: (props) => (
                                <Grid container style={{ height: "3.2rem" }}>
                                    <Grid item xs={12} style={{ textAlign: "end", padding: "0.5rem" }}>
                                        <Button className={classes1.searchbuttonEnable} style={{ textTransform: "none", width: "12rem" }} onClick={AddNewLevel}
                                            variant="contained"
                                        >
                                            Add New Level of Care
                                        </Button>
                                        <div style={{ width: "13rem" }}>
                                            <MTableToolbar {...props} />
                                        </div>
                                    </Grid>
                                </Grid>
                            ),
                        }}
                    />
                </div>
                {dialogOpen && (
                    <AddNewCareDialog handleCloseDialog={handleCloseDialog} tableDataId={tableData.length - 1} addData={addData} addHeader={addHeader} />
                )}
            </MuiThemeProvider>
        </div>
    );
};
export default DelegatedLevelTable;
