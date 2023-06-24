import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

import validator from "validator";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Basic({ setShow, setOtp, setInfoSB }) {
  // const [otp, setOtp] = useState(0);
  const navigation = useNavigate();
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  const handleOTP = () => {
    const OTP = Math.floor(100000 + Math.random() * 900000);
    console.log("OTP =>", OTP);
    setOtp(OTP);
    setShow(false);
    setInfoSB(true);
  };

  // const renderInfoSB = (
  //   <MDSnackbar
  //   color="primary"
  //     icon="notifications"
  //     title={"OTP "+otp + " Generated"}
  //     content="check your whatsapp for OTP"
  //     // dateTime="11 mins ago"
  //     open={infoSB}
  //     onClose={closeInfoSB}
  //     close={closeInfoSB}
  //   />
  // );

  const handleMobileNumber = (e) => {
    if (e.target.value.length === 10) {
      if (validator.isMobilePhone(e.target.value)) {
        setIsError(false);
        setIsSuccess(true);
        setIsDisable(false);
      } else {
        setIsDisable(true);
        setIsError(true);
        setIsSuccess(false);
      }
    } else if (e.target.value.length === 0) {
      setIsDisable(true);
      setIsError(false);
      setIsSuccess(false);
    } else {
      setIsDisable(true);
      setIsError(true);
      setIsSuccess(false);
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
          Sign In
        </MDTypography>
      </MDBox>
      <MDBox pt={4} pb={3} px={3}>
        <MDBox component="form" role="form">
          <MDBox mb={2}>
            <MDInput
              type="tel"
              onKeyUp={(event) => handleMobileNumber(event)}
              error={isError}
              success={isSuccess}
              label="Whtsapp Number"
              fullWidth
            />
            <MDTypography variant="button" color="text">
              OTP will be sent to your whtsapp
            </MDTypography>
          </MDBox>

          <MDBox mt={4} mb={1}>
            <MDButton
              variant="gradient"
              onClick={() => handleOTP()}
              disabled={isDisable}
              color="primary"
              fullWidth
            >
              Generate OTP
            </MDButton>
          </MDBox>
          {/* <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="primary"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox> */}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Basic;
