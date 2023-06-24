import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDDialog from "components/MDDialog";

function Basic({ otp }) {
  const [isError, setIsError] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [inputOtp, setInputOtp] = useState("");

  const validateOtp = () => {
    if (otp === inputOtp) {
      console.log("varified");
      setShowDialog(true);
    } else {
      setIsError(true);
      //   setErrorMessage("Invalid OTP");
    }
  };

  const handleOtp = (e) => {
    if (e.target.value.length === 6) {
      setIsDisable(false);
      setInputOtp(Number(e.target.value));
    } else {
      setIsDisable(true);
    }
  };
  return (
    <Card>
      <MDBox
        variant="gradient"
        bgColor="primary"
        borderRadius="lg"
        coloredShadow="primary"
        mx={2}
        mt={-3}
        p={2}
        mb={1}
        textAlign="center"
      >
        <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
          OTP Verification
        </MDTypography>
      </MDBox>
      <MDBox pt={4} pb={3} px={3}>
        <MDBox component="form" role="form">
          <MDBox mb={2}>
            <MDInput
              type="text"
              onKeyUp={(event) => handleOtp(event)}
              label="Enter OTP"
              fullWidth
              error={isError}
            />
            <MDTypography variant="button" color="text">
              Please check your whatsapp Message for OTP
            </MDTypography>
          </MDBox>

          <MDBox mt={4} mb={1}>
            <MDButton
              variant="gradient"
              disabled={isDisable}
              onClick={() => validateOtp()}
              color="primary"
              fullWidth
            >
              Sign In
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
      <MDDialog
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        title="Do you Want to Register?"
        message=" Your business is not registered with us."
        yes="/dashboard"
        no="/register"
      />
    </Card>
  );
}

export default Basic;
