// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import MDButton from "components/MDButton";
import { useEffect, useState } from "react";
import MDInput from "components/MDInput";

const columns = [
  { Header: "user", accessor: "user", width: "45%", align: "left" },
  { Header: "designation", accessor: "designation", align: "left" },
  { Header: "mobile number", accessor: "mobile", align: "center" },
  { Header: "action", accessor: "action", align: "center" },
];

const rowData = [
  {
    userName: "Prabhat",
    designation: "Manager",
    mobile: "+91 8490860632",
  },
  {
    userName: "Prabhat1",
    designation: "Manager",
    mobile: "+91 8490860632",
  },
  {
    userName: "Prabhat2",
    designation: "Manager",
    mobile: "+91 8490860632",
  },
  {
    userName: "Prabhat3",
    designation: "Manager",
    mobile: "+91 8490860632",
  },
];

function Tables() {
  const [initData, setInitData] = useState(rowData);
  const sampleObj = { userName: "", designation: "", mobile: "" };
  const [rows, setRows] = useState([]);
  const [newData, setNewData] = useState(sampleObj);
  const [add, setAdd] = useState(false);
  let initTableState = new Array(initData.length).fill(false);
  const [tableState, setTableState] = useState(initTableState);

  const getRows = (data) => {
    return data.map((i, index) => ({
      user: tableState[index] ? (
        <MDInput
          label="User Name"
          onKeyUp={(event) => handleOnChange(index, event, "userName")}
          defaultValue={i.userName}
        />
      ) : (
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {i.userName}
        </MDTypography>
      ),
      designation: tableState[index] ? (
        <MDInput
          label="Designation"
          onKeyUp={(event) => handleOnChange(index, event, "designation")}
          defaultValue={i.designation}
        />
      ) : (
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {i.designation}
        </MDTypography>
      ),
      mobile: tableState[index] ? (
        <MDInput
          label="Mobile Number"
          onKeyUp={(event) => handleOnChange(index, event, "mobile")}
          defaultValue={i.mobile}
        />
      ) : (
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {i.mobile}
        </MDTypography>
      ),
      action: (
        <>
          {tableState[index] ? (
            <MDBox>
              <MDButton
                variant="text"
                onClick={() => handleCancel(index)}
                color="warning"
                fontWeight="medium"
              >
                Cancel
              </MDButton>
              <MDButton
                ml={5}
                variant="text"
                onClick={() => handleSave(index)}
                color="dark"
                fontWeight="medium"
              >
                Save
              </MDButton>
            </MDBox>
          ) : (
            <MDBox>
              <MDButton
                variant="text"
                onClick={() => handleDelete(index)}
                color="error"
                fontWeight="medium"
              >
                Delete
              </MDButton>
              <MDButton
                ml={5}
                variant="text"
                onClick={() => handleEdit(index)}
                color="dark"
                fontWeight="medium"
              >
                Edit
              </MDButton>
            </MDBox>
          )}
        </>
      ),
    }));
  };

  useEffect(() => {
    setRows((prev) => ([...prev], getRows(initData)));
  }, [tableState, initData]);

  const handleEdit = (index) => {
    setTableState((tableState) => {
      const nextTableState = [...tableState];
      nextTableState[index] = true;
      return nextTableState;
    });
  };

  const handleSave = (index) => {
    setTableState((tableState) => {
      const nextTableState = [...tableState];
      nextTableState[index] = false;
      return nextTableState;
    });
  };

  const handleCancel = (index) => {
    setTableState((tableState) => {
      const nextTableState = [...tableState];
      nextTableState[index] = false;
      return nextTableState;
    });
  };

  const handleDelete = (index) => {
    setInitData((prev) => {
      const temp = [...prev];
      temp.splice(index, 1);
      return temp;
    });
    // console.log("rows =>", rows);

    setTableState((tableState) => {
      const nextTableState = [...tableState];
      nextTableState[index] = false;
      return nextTableState;
    });
  };

  const handleOnChange = (index, e, key) => {
    setInitData((prev) => {
      const temp = [...prev];
      temp[index][key] = e.target.value;
      return temp;
    });
  };

  const addAccount = () => {
    setInitData((prev) => {
      const temp = [...prev];
      temp.push(newData);
      return temp;
    });

    setNewData(sampleObj);
    setAdd(false);
  };

  const altHandleChange = (e, key) => {
    setNewData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pb={3}>
        <Grid container>
          <Grid item xs={12}>
            <Card>
              <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <MDBox>
                  <MDTypography variant="h6" gutterBottom>
                    Users List
                  </MDTypography>
                </MDBox>
                <MDBox>
                  {add ? (
                    <>
                      <MDInput
                        label="Account Name"
                        onKeyUp={(event) => altHandleChange(event, "userName")}
                        sx={{ marginRight: "15px", marginLeft: "15px" }}
                      />
                      <MDInput
                        label="Account Name"
                        onKeyUp={(event) => altHandleChange(event, "designation")}
                        sx={{ marginRight: "15px", marginLeft: "15px" }}
                      />
                      <MDInput
                        label="URL"
                        onKeyUp={(event) => altHandleChange(event, "mobile")}
                        sx={{ marginRight: "15px", marginLeft: "15px" }}
                      />
                      <MDButton
                        variant="gradient"
                        sx={{ marginRight: "15px" }}
                        onClick={() => addAccount()}
                        color="primary"
                      >
                        Add
                      </MDButton>
                      <MDButton variant="outlined" onClick={() => setAdd(false)} color="error">
                        cancel
                      </MDButton>
                    </>
                  ) : (
                    <MDButton variant="gradient" onClick={() => setAdd(true)} color="primary">
                      Add Account
                    </MDButton>
                  )}
                </MDBox>
              </MDBox>
              <MDBox>
                {rows === [] ? (
                  <MDTypography
                    variant="caption"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    py={3}
                  >
                    Loading ...
                  </MDTypography>
                ) : rows.length === 0 ? (
                  <MDTypography
                    variant="caption"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    py={3}
                  >
                    No Data Available
                  </MDTypography>
                ) : (
                  <DataTable
                    table={{ columns, rows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                )}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
