import React from "react";
import {
    Typography,
    Grid,
    Box,
    Avatar,
    IconButton,
    Stack,
} from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";

function ItemContent({ selected }) {
    if (!selected) return null;

    return (
        <Grid item xs={10} sx={{ height: "100%" }}>
            <Box
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderLeft: "1px solid #ddd",
                }}
            >
                {/* Thanh trên cùng */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        p: 2,
                        borderBottom: "1px solid #ddd",
                        flexShrink: 0,
                    }}
                >
                    <Stack direction="row" spacing={2} alignItems="center">
                        {/*<Avatar>{selected.name.charAt(0)}</Avatar>*/}
                        <Avatar src={selected.urlAvatar} />
                        <Typography variant="h6" fontWeight="bold">
                            {selected.name}
                        </Typography>
                    </Stack>
                    <IconButton color="primary">
                        <VideoCallIcon />
                    </IconButton>
                </Box>

                {/* Nội dung cuộn */}
                <Box sx={{ p: 4, flexGrow: 1, overflowY: "auto" }}>
                    <Typography variant="body1">{selected.content}</Typography>
                </Box>
            </Box>
        </Grid>
    );
}

export default ItemContent;
