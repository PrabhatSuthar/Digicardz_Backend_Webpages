// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { Icon } from "@mui/material";

function GalleryCard({ image, alt, Delete }) {
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
          title={alt}
          sx={{
            maxWidth: "100%",
            height: "200px",
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <MDButton
          variant="gradient"
          sx={{ position: "absolute", top: "5px", right: "5px" }}
          color="error"
          iconOnly
          onClick={() => Delete()}
        >
          <Icon color="inherit">delete</Icon>
        </MDButton>
      </MDBox>
      <MDBox mt={1} mx={0.5}>
        <MDBox mt={2} lineHeight={0}>
          <MDTypography variant="button" fontWeight="medium" color="text">
            {alt}
          </MDTypography>
        </MDBox>
        {/* <MDBox sx={{ display: "flex", justifyContent: "space-between" }}>
          <MDButton variant="outlined" color="dark" fontWeight="medium">
            <Icon color="inherit">edit</Icon>
          </MDButton>
          <MDButton variant="outlined" color="error" fontWeight="medium">
            <Icon color="inherit">delete</Icon>
          </MDButton>
        </MDBox> */}
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of GalleryCard
GalleryCard.defaultProps = {
  authors: [],
};

// Typechecking props for the GalleryCard
GalleryCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default GalleryCard;
