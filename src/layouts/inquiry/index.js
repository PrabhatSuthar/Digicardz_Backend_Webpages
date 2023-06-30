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
  { Header: "user", accessor: "user", align: "left" },
  { Header: "message", accessor: "message", width: "45%", align: "left" },
  { Header: "mobile number", accessor: "mobile", align: "center" },
  { Header: "timestmap", accessor: "timestamp", align: "center" },
  { Header: "action", accessor: "action", align: "center" },
];

const rowData = [
  {
    userName: "Prabhat",
    message: "Manager",
    mobile: "+91 8490860632",
    timestamp: "23/06/2023 12:00 AM",
  },
  {
    userName: "Prabhat1",
    message: "Manager",
    mobile: "+91 8490860632",
    timestamp: "23/06/2023 12:00 AM",
  },
  {
    userName: "Prabhat2",
    message: "Manager",
    mobile: "+91 8490860632",
    timestamp: "23/06/2023 12:00 AM",
  },
  {
    userName: "Prabhat3",
    message: "Manager",
    mobile: "+91 8490860632",
    timestamp: "23/06/2023 12:00 AM",
  },
];

function Tables() {
  const [initData, setInitData] = useState(rowData);
  const [rows, setRows] = useState([]);
  let initTableState = new Array(initData.length).fill(false);
  const [tableState, setTableState] = useState(initTableState);

  const getRows = (data) => {
    return data.map((i, index) => ({
      user: (
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {i.userName}
        </MDTypography>
      ),
      message: (
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {i.message}
        </MDTypography>
      ),
      mobile: (
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {i.mobile}
        </MDTypography>
      ),
      timestamp: (
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {i.timestamp}
        </MDTypography>
      ),

      action: (
        <>
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
              variant="gradient"
              //   onClick={() => handleEdit(index)}
              color="success"
              fontWeight="medium"
            >
              Whatsapp
            </MDButton>
          </MDBox>
        </>
      ),
    }));
  };

  useEffect(() => {
    setRows((prev) => ([...prev], getRows(initData)));
  }, [initData]);

  const handleDelete = (index) => {
    setInitData((prev) => {
      const temp = [...prev];
      temp.splice(index, 1);
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
                    Inquiries
                  </MDTypography>
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
                    isSorted={true}
                    entriesPerPage={true}
                    showTotalEntries={true}
                    // noEndBorder
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
