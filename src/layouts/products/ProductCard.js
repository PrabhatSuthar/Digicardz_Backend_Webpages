// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { useState } from "react";
import MDInput from "components/MDInput";
import MDImage from "components/MDImage";

function ProductCard({ image, productName, i, description, fnEdit, fnDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  const sampleObj = { id: "", image: "", productName: "", description: "" };
  const [newData, setNewData] = useState(sampleObj);

  const handleEdit = () => {
    setIsEdit(true);
    setNewData((prev) => ({ ...prev, id: i }));
    // fnEdit(newData);
  };

  const handleSave = () => {
    fnEdit(newData);
    setIsEdit(false);
  };

  const getImage = (data) => {
    setNewData((prev) => ({ ...prev, image: data }));
    // console.log("data =>", data);
  };

  const handleOnChange = (e, key) => {
    setNewData((prev) => ({ ...prev, [key]: e.target.value }));
    // console.log("newData =>", newData);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <MDBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
        <CardMedia
          src={image}
          component="img"
          title={productName}
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
      <MDBox mt={1} mx={0.5}>
        <MDBox mb={1}>
          {isEdit ? (
            <MDInput
              variant="outlined"
              onKeyUp={(event) => handleOnChange(event, "productName")}
              defaultValue={productName}
              sx={{ width: "100%" }}
            />
          ) : (
            <MDTypography variant="h5" textTransform="capitalize">
              {productName}
            </MDTypography>
          )}
        </MDBox>
        <MDBox mb={3} lineHeight={0}>
          {isEdit ? (
            <MDInput
              onKeyUp={(event) => handleOnChange(event, "description")}
              defaultValue={description}
              multiline
              rows={5}
              sx={{ width: "100%" }}
            />
          ) : (
            <MDTypography variant="button" fontWeight="light" color="text">
              {description}
            </MDTypography>
          )}
        </MDBox>
        <MDBox display="flex" justifyContent="space-between" alignItems="center">
          {isEdit ? (
            <>
              <MDButton variant="gradient" onClick={() => handleSave()} color="primary">
                Save
              </MDButton>
              <MDImage fnData={(data) => getImage(data)} color="info" />
              <MDButton variant="outlined" onClick={() => setIsEdit(false)} color="error">
                Cancel
              </MDButton>
            </>
          ) : (
            <>
              <MDButton variant="outlined" onClick={() => handleEdit()} color="secondary">
                Edit
              </MDButton>
              <MDButton variant="outlined" onClick={() => fnDelete()} color="error">
                Delete
              </MDButton>
            </>
          )}
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Typechecking props for the ProductCard
ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductCard;
