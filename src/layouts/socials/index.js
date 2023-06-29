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
  { Header: "Account Name", accessor: "social", width: "25%", align: "left" },
  { Header: "url", accessor: "url", align: "left", width: "50%" },
  { Header: "action", accessor: "action", align: "center" },
];

const rowData = [
  {
    social: "Prabhat",
    url: "Manager",
  },
  {
    social: "Prabhat1",
    url: "Manager",
  },
  {
    social: "Prabhat2",
    url: "Manager",
  },
  {
    social: "Prabhat3",
    url: "Manager",
  },
];

function Tables() {
  const [initData, setInitData] = useState(rowData);
  const tempObj = { social: "", url: "" };
  const [rows, setRows] = useState([]);
  let initTableState = new Array(initData.length).fill(false);
  const [tableState, setTableState] = useState(initTableState);

  const getRows = (data) => {
    return data.map((i, index) => ({
      social: tableState[index] ? (
        <MDInput
          label="User Name"
          onKeyUp={(event) => detailsContent(index, event, "social")}
          defaultValue={i.social}
        />
      ) : (
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {i.social}
        </MDTypography>
      ),
      url: tableState[index] ? (
        <MDInput
          label="Designation"
          onKeyUp={(event) => detailsContent(index, event, "url")}
          defaultValue={i.url}
        />
      ) : (
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {i.url}
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
  }, [rows, initData]);

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
                    Social Accounts
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
