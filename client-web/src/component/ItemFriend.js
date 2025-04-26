import React from "react";
import {
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    ListItemButton,
    Typography,
} from "@mui/material";

function ItemFriend({ friend, onClick, selected }) {
    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClick} selected={selected}>
                <ListItemAvatar>
                    <Avatar src={friend.urlAvatar}>
                        {!friend.urlAvatar && friend.name.charAt(0)}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography fontWeight="bold">
                            {friend.name}
                        </Typography>
                    }
                    secondary={
                        <Typography color="text.secondary" fontSize={13}>
                            {friend.phone}
                        </Typography>
                    }
                />
            </ListItemButton>
        </ListItem>
    );
}

export default ItemFriend;
