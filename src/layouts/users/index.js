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
  const tempObj = { userName: "", designation: "", mobile: "" };
  const [rows, setRows] = useState([]);
  let initTableState = new Array(initData.length).fill(false);
  const [tableState, setTableState] = useState(initTableState);

  const getRows = (data) => {
    return data.map((i, index) => ({
      user: tableState[index] ? (
        <MDInput
          label="User Name"
          onKeyUp={(event) => detailsContent(index, event, "userName")}
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
          onKeyUp={(event) => detailsContent(index, event, "designation")}
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
          onKeyUp={(event) => detailsContent(index, event, "mobile")}
          defaultValue={i.mobile}
        />
      ) : (
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {i.mobile}
        </MDTypography>
      ),
      action: (
        <MDBox>
          <MDButton
            variant="text"
            onClick={() => detailsShow(index)}
            color="error"
            fontWeight="medium"
          >
            Delete
          </MDButton>
          {tableState[index] ? (
            <MDButton
              ml={5}
              variant="text"
              onClick={() => detailsHide(index)}
              color="dark"
              fontWeight="medium"
            >
              Save
            </MDButton>
          ) : (
            <MDButton
              ml={5}
              variant="text"
              onClick={() => detailsShow(index)}
              color="dark"
              fontWeight="medium"
            >
              Edit
            </MDButton>
          )}
        </MDBox>
      ),
    }));
  };

  useEffect(() => {
    setRows(getRows(initData));
  }, [rows]);

  const detailsShow = (index) => {
    setTableState((tableState) => {
      const nextTableState = [...tableState];
      nextTableState[index] = true;
      return nextTableState;
    });
  };

  const detailsHide = (index) => {
    setTableState((tableState) => {
      const nextTableState = [...tableState];
      nextTableState[index] = false;
      return nextTableState;
    });
  };

  const detailsContent = (index, e, key) => {
    setInitData((prev) => {
      const temp = [...prev];
      temp[index][key] = e.target.value;
      return temp;
    });
  };

  const addItem = () => {
    // setAddIndex(initData.length + 1);
    setInitData((prev) => {
      const temp = [...prev];
      temp.push(tempObj);
      return temp;
    });
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
                <MDBox color="text" px={2}>
                  <MDButton variant="gradient" onClick={() => addItem()} color="primary">
                    Add User
                  </MDButton>
                </MDBox>
              </MDBox>
              <MDBox>
                {rows === [] ? (
                  <MDTypography variant="caption">Loading ...</MDTypography>
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
