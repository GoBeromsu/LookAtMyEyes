/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import myimage from "./data/myimage.jpg";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";

import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import { Avatar, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";


function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} xl={12} justifyContent="center" alignItems="center">
            <Card >
      <CardActionArea>
{/*      
        <CardMedia
          component="img"
          height="140"
          image="myimage.jpg"
          alt="Choo"
        /> */}
        <CardContent style={{justifyContent: 'center'}}>
          <div style={{
					display:"flex",
          alignItems:'center',
          justifyContent:'center',
				}}>
        <Avatar
          variant="round"
          alt="Choo"
          src={myimage}
          sx={{ width: 200, height: 200 }}
          style= {{ justifyContent: "center", display: "flex" }}
      />    
      </div>
          <Typography align="center" gutterBottom variant="h3" component="div">
            아이
          </Typography>
          <Typography align="center" variant="body2" color="text.secondary">
            응애
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid>
            <Grid item xs={12} sm={12} xl={6}>
              <MiniStatisticsCard
                title={{ text: "오늘 아이의 집중도" }}
                count="$53,000"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: "paid" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} xl={6}>
              <MiniStatisticsCard
                title={{ text: "아이의 머시기" }}
                count="2,300"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
          </Grid>
        </SoftBox>

        <SoftBox mb={3}>
          <Grid container spacing={3}>

            <Grid item xs={12} lg={12}>
              <GradientLineChart
                title="아이의 집중도 변화 그래프"
                description={
                  <SoftBox display="flex" alignItems="center">
                    <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SoftBox>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      4% more{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        in 2022
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                }
                height="20.25rem"
                chart={gradientLineChartData}
              />
            </Grid>
          </Grid>
        </SoftBox>
        {/* { <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid> } */}
      </SoftBox>

    </DashboardLayout>
  );
}

export default Dashboard;
