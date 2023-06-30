// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import QRCode from "react-qr-code";

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
import { CardMedia } from "@mui/material";

import homeDecor1 from "assets/images/home-decor-1.jpg";

const data = {
  bankName: "ICICI",
  accNumber: "2015487986321",
  ifsc: "SBIN0018159",
  upi: "7894561230@ICICI",
  scanner: homeDecor1,
};

function Tables() {
  const [initData, setInitData] = useState("");

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setInitData(data);
  }, []);

  const handleOnChange = (e, key) => {
    setInitData((prev) => ({ ...prev, [key]: e.target.value }));
    console.log("initData =>", initData);
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
                    Payment Details
                  </MDTypography>
                </MDBox>
              </MDBox>
              <MDBox>
                <Grid container p={3}>
                  <Grid item xs={6}>
                    <MDBox mb={4} lineHeight={0}>
                      <MDTypography sx={{ display: "flex" }} variant="subtitle2" color="text">
                        Bank Name:&nbsp;&nbsp;&nbsp;
                        {isEdit ? (
                          <MDInput
                            onKeyUp={(event) => handleOnChange(event, "bankName")}
                            defaultValue={initData.bankName}
                          />
                        ) : (
                          <MDTypography
                            variant="subtitle2"
                            fontWeight="medium"
                            textTransform="capitalize"
                          >
                            {initData.bankName}
                          </MDTypography>
                        )}
                      </MDTypography>
                    </MDBox>
                    <MDBox mb={4} lineHeight={0}>
                      <MDTypography sx={{ display: "flex" }} variant="subtitle2" color="text">
                        Account Number:&nbsp;&nbsp;&nbsp;
                        {isEdit ? (
                          <MDInput
                            onKeyUp={(event) => handleOnChange(event, "accNumber")}
                            defaultValue={initData.accNumber}
                          />
                        ) : (
                          <MDTypography
                            variant="subtitle2"
                            fontWeight="medium"
                            textTransform="capitalize"
                          >
                            {initData.accNumber}
                          </MDTypography>
                        )}
                      </MDTypography>
                    </MDBox>
                    <MDBox mb={4} lineHeight={0}>
                      <MDTypography sx={{ display: "flex" }} variant="subtitle2" color="text">
                        IFSC Code:&nbsp;&nbsp;&nbsp;
                        {isEdit ? (
                          <MDInput
                            onKeyUp={(event) => handleOnChange(event, "ifsc")}
                            defaultValue={initData.ifsc}
                          />
                        ) : (
                          <MDTypography
                            variant="subtitle2"
                            fontWeight="medium"
                            textTransform="capitalize"
                          >
                            {initData.ifsc}
                          </MDTypography>
                        )}
                      </MDTypography>
                    </MDBox>
                    <MDBox mb={4} lineHeight={0}>
                      <MDTypography sx={{ display: "flex" }} variant="subtitle2" color="text">
                        UPI:&nbsp;&nbsp;&nbsp;
                        {isEdit ? (
                          <MDInput
                            onKeyUp={(event) => handleOnChange(event, "upi")}
                            defaultValue={initData.upi}
                          />
                        ) : (
                          <MDTypography
                            variant="subtitle2"
                            fontWeight="medium"
                            textTransform="capitalize"
                          >
                            {initData.upi}
                          </MDTypography>
                        )}
                      </MDTypography>
                    </MDBox>
                    <MDBox mb={4} lineHeight={0}>
                      {isEdit ? (
                        <>
                          <MDButton
                            variant="gradient"
                            sx={{ marginRight: "25px" }}
                            onClick={() => setIsEdit(false)}
                            color="primary"
                          >
                            Save
                          </MDButton>
                          <MDButton
                            variant="outlined"
                            onClick={() => setIsEdit(false)}
                            color="error"
                          >
                            Cancel
                          </MDButton>
                        </>
                      ) : (
                        <>
                          <MDButton
                            variant="outlined"
                            onClick={() => setIsEdit(true)}
                            color="secondary"
                            sx={{ marginRight: "25px" }}
                          >
                            Edit
                          </MDButton>
                        </>
                      )}
                    </MDBox>
                  </Grid>
                  <Grid item xs={6}>
                    <MDBox display="flex">
                      <MDBox mr={15}>
                        <CardMedia
                          src={initData.scanner}
                          component="img"
                          title="hello"
                          sx={{
                            maxWidth: "100%",
                            height: "200px",
                            margin: 0,
                            boxShadow: ({ boxShadows: { md } }) => md,
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </MDBox>
                      <MDBox>
                        <QRCode
                          value={initData === "" ? "Nothing" : "upi://pay?pa=" + initData.upi}
                          size={200}
                        />
                      </MDBox>
                    </MDBox>
                  </Grid>
                </Grid>
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
