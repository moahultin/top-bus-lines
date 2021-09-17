import React from "react";
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";
import Acc from "./Acc";

const PageLayout = React.memo(({ data }) => (
    <Paper
        elevation={0}
        style={{ padding: 0, margin: 0, backgroundColor: "#FFF2C2" }}
    >
        <AppBar color="primary" position="static" style={{ height: 64, backgroundColor: "#FFC300", color:"#28272A" }}>
            <Toolbar style={{ height: 64 }}>
                <Typography color="inherit" variant="h6">Top 10 Bus Lines!</Typography>
            </Toolbar>
        </AppBar>
        <div className="AccDiv">
            {data.map((p, i) => (
                <Acc {...p} key={i} />
            ))}
        </div>
    </Paper>
));

export default PageLayout;