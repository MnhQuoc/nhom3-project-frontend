import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";

function Copyright() {
    return (
        <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Nhóm 3 - C1024lm1-wf101
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}

export default Copyright;