import { useEffect, useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import { Card, CardMedia } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDImage from "components/MDImage";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProductCard from "./ProductCard";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";

const data = [
  {
    image: homeDecor1,
    base64: "",
    productName: "home 1",
    description:
      "DIGICARDZ is a SAAS solution that enables users to create digital business cards effortlessly, facilitating the exchange of contact information and helping to expand their professional network.",
  },
  {
    image: homeDecor2,
    base64: "",
    productName: "home 2",
    description:
      "DIGICARDZ is a SAAS solution that enables users to create digital business cards effortlessly, facilitating the exchange of contact information and helping to expand their professional network.",
  },
  {
    image: homeDecor3,
    base64: "",
    productName: "home 3",
    description:
      "DIGICARDZ is a SAAS solution that enables users to create digital business cards effortlessly, facilitating the exchange of contact information and helping to expand their professional network.",
  },
  {
    image: homeDecor4,
    base64: "",
    productName: "home 4",
    description:
      "DIGICARDZ is a SAAS solution that enables users to create digital business cards effortlessly, facilitating the exchange of contact information and helping to expand their professional network.",
  },
];

function Overview() {
  const [add, setAdd] = useState(false);
  const [initData, setInitData] = useState([]);
  const sampleObj = { image: "", productName: "", description: "" };
  const [newData, setNewData] = useState(sampleObj);

  const handleDelete = (index) => {
    setInitData((prev) => {
      const temp = [...prev];
      temp.splice(index, 1);
      return temp;
    });
  };

  const getImage = (data) => {
    setNewData((prev) => ({ ...prev, base64: data }));
    // console.log("data =>", data);
  };

  useEffect(() => {
    setInitData(data);
  }, []);

  const altHandleChange = (e, key) => {
    setNewData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleEdit = (data) => {
    setInitData((prev) => {
      const temp = [...prev];
      data.productName === "" ? "" : (temp[data.id]["productName"] = data.productName);
      data.description === "" ? "" : (temp[data.id]["description"] = data.description);
      data.image === "" ? "" : (temp[data.id]["base64"] = data.image);
      return temp;
    });
  };

  const addProduct = () => {
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
                    Products
                  </MDTypography>
                </MDBox>
                <MDBox>
                  {add ? (
                    <>
                      <MDImage color="dark" fnData={(data) => getImage(data)} />
                      <MDInput
                        label="Product Name"
                        onKeyUp={(event) => altHandleChange(event, "productName")}
                        sx={{ marginRight: "15px", marginLeft: "15px" }}
                      />
                      <MDInput
                        label="Discription"
                        onKeyUp={(event) => altHandleChange(event, "description")}
                        sx={{ marginRight: "15px", marginLeft: "15px" }}
                      />
                      <MDButton
                        variant="gradient"
                        sx={{ marginRight: "15px" }}
                        onClick={() => addProduct()}
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
                      Add Product
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
                        <ProductCard
                          i={index}
                          image={i.base64 === "" ? i.image : i.base64}
                          productName={i.productName}
                          description={i.description}
                          fnDelete={() => handleDelete(index)}
                          fnEdit={(data) => handleEdit(data)}
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
