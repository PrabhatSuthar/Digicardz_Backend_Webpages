import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

import validator from "validator";

import InputMobile from "./InputMobileNumber";
import InputOtp from "./InputOtp";
import MDSnackbar from "components/MDSnackbar";
import BasicLayout from "../components/BasicLayout";
import MDDialog from "components/MDDialog";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Basic() {
  const [infoSB, setInfoSB] = useState(false);
  const [show, setShow] = useState(true);
  const [otp, setOtp] = useState("");

  // const navigation = useNavigate();

  const GenerateOTP = () => {
    const OTP = Math.floor(100000 + Math.random() * 900000);
    // setOtp(OTP);
    console.log("OTP =>", OTP);

    setInfoSB(true);
    //navigation('/otp')
  };

  const closeInfoSB = () => setInfoSB(false);
  const renderInfoSB = (
    <MDSnackbar
      color="primary"
      icon="notifications"
      title={"OTP " + otp + " Generated"}
      content="check your whatsapp for OTP"
      dateTime=""
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  return (
    <BasicLayout image={bgImage}>
      {show ? (
        <InputMobile setShow={setShow} setOtp={setOtp} setInfoSB={setInfoSB} />
      ) : (
        <InputOtp otp={otp} />
      )}
      {renderInfoSB}
    </BasicLayout>
  );
}

export default Basic;
