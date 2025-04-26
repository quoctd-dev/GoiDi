import React from "react";
import {
    Grid,
    List,
    ListItem,
    ListItemButton,
    TextField,
    Box,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectFriend } from "../features/friends/friendsSlice";
import ItemFriend from "../component/ItemFriend";
import ItemContent from "../component/ItemContent";

const Home = () => {
    const friends = useSelector((state) => state.friends.list);
    const selected = useSelector((state) => state.friends.selected || friends[0]);
    const dispatch = useDispatch();

    return (
        <Grid container sx={{ height: "100vh", width: "100%", m: 0 }}>
            {/* Cột trái: 20% */}
            <Grid
                item
                sx={{
                    width: "20%",
                    height: "100%",
                    borderRight: "1px solid #ccc",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Phần tìm kiếm */}
                <Box sx={{ p: 2 }}>
                    <TextField
                        label="Search"
                        type="text"
                        fullWidth
                        margin="normal"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 8,
                                height: "50px"
                            },
                        }}
                    />
                </Box>
                {/* Danh sách bạn bè */}
                <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
                    <List>
                        {friends.map((friend) => (
                            <ItemFriend
                                key={friend.id}
                                friend={friend}
                                onClick={() => dispatch(selectFriend(friend))}
                                selected={selected.id === friend.id}
                            />
                        ))}
                    </List>
                </Box>

            </Grid>

            {/* Cột phải: 80% */}
            <Grid
                item
                sx={{
                    width: "80%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <ItemContent selected={selected} />
            </Grid>
        </Grid>
    );
};

export default Home;
