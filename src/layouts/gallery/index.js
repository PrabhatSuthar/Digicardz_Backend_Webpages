import { useEffect, useRef, useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import { Card, CardMedia } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import GalleryCard from "./GalleryCard";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";

const data = [
  {
    image: homeDecor1,
    alt: "home 1",
    base64: "",
  },
  {
    image: homeDecor2,
    alt: "home 2",
    base64: "",
  },
  {
    image: homeDecor3,
    alt: "home 3",
    base64: "",
  },
  {
    image: homeDecor4,
    alt: "home 4",
    base64: "",
  },
];

function Overview() {
  const [add, setAdd] = useState(false);
  const [initData, setInitData] = useState([]);
  const sampleObj = { image: "", alt: "", base64: "" };
  const [newData, setNewData] = useState(sampleObj);

  const inputRef = useRef(null);

  const handleDelete = (index) => {
    setInitData((prev) => {
      const temp = [...prev];
      temp.splice(index, 1);
      return temp;
    });
  };

  useEffect(() => {
    setInitData(data);
  }, []);

  const handleFileChange = (e) => {
    let file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setNewData((prev) => ({ ...prev, image: file.name, base64: fileReader.result }));
      // console.log("fileReader.result => ", fileReader.result);
    };
  };

  const altHandleChange = (e) => {
    setNewData((prev) => ({ ...prev, alt: e.target.value }));
  };

  const addImage = () => {
    setInitData((prev) => {
      const temp = [...prev];
      temp.push(newData);
      return temp;
    });

    setNewData(sampleObj);
    setAdd(false);
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
                    Gallery
                  </MDTypography>
                </MDBox>
                <MDBox>
                  {add ? (
                    <>
                      <input
                        style={{ display: "none" }}
                        ref={inputRef}
                        type="file"
                        onChange={handleFileChange}
                      />

                      <MDButton
                        variant="outlined"
                        onClick={() => inputRef.current.click()}
                        color="dark"
                      >
                        select file {newData.image}
                      </MDButton>

                      <MDInput
                        label="alt"
                        onKeyUp={(event) => altHandleChange(event)}
                        sx={{ marginRight: "15px", marginLeft: "15px" }}
                      />
                      <MDButton
                        variant="gradient"
                        sx={{ marginRight: "15px" }}
                        onClick={() => addImage()}
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
                      Add Post
                    </MDButton>
                  )}
                </MDBox>
              </MDBox>
              <MDBox p={3}>
                <Grid container spacing={6}>
                  {initData.length === 0 ? (
                    <Grid item xs={12} md={12} xl={12}>
                      <MDTypography
                        variant="caption"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        py={3}
                      >
                        Loading ...
                      </MDTypography>
                    </Grid>
                  ) : (
                    initData.map((i, index) => (
                      <Grid item key={index} xs={12} md={6} xl={3}>
                        <GalleryCard
                          image={i.base64 === "" ? i.image : i.base64}
                          Delete={() => handleDelete(index)}
                          alt={i.alt}
                        />
                      </Grid>
                    ))
                  )}
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

export default Overview;
