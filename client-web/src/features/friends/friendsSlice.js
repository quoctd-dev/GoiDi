// src/features/friends/friendsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        { id: 1, name: "Trần Đặng Quốc", content: "Xin chào! Tôi là A.", urlAvatar: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/490264874_1163901201869035_2043443503265075648_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGkVXvwgLS_kTr9RJSPuh9sSiLzRORxlBpKIvNE5HGUGn0_6F6JAlBFAI7GMykofMavUh-zTIF09fH7rL-OdEq2&_nc_ohc=R3KJ7y1sFxAQ7kNvwEYKASe&_nc_oc=AdkQHoBAZQkSr96qzwHLs0zWMHz61OczXcQtpyB1Fh7yEZiyiXZ6HMmD4_cRbaBxJPo&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=kwbrFbAgTmyUZs_i4sw3UA&oh=00_AfFXAIZVm6bBQiRv8ZYQ8HZXKaq0rnoRDkW9ufZdrkx7nA&oe=6812489D" },
        { id: 2, name: "LostBoys", content: "Chào bạn, mình là B nhé!", urlAvatar: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-1/419576246_1368369570532308_8676074077106249475_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeFdbq9nn_gybMFj0pOIHqt3i8MXpR4OT5uLwxelHg5Pm2a7JWz4p5uy5VfnYelkF5UaBrIepgTZhcM6kdI7aPJ0&_nc_ohc=r8PljH6SPBQQ7kNvwE-afzs&_nc_oc=Admq6QhTwWNHovowyt45lknRvkVQBveu7jMyZ4eTpZCoapxblfZqnFWEgdffJPITiq4&_nc_zt=24&_nc_ht=scontent.fdad1-4.fna&_nc_gid=R2A17gi3wiuW7kC8kCQ3BQ&oh=00_AfFKuaxL29bvTir4ci_lY8cBrAywOIRNSjuSzBi1sO3mSQ&oe=68126088" },
        { id: 3, name: "Tích Chi Toys", content: "Hey, mình là C 😄", urlAvatar: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/278016530_110227431649395_6361905300034648244_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE1f0MfKa5tQhbeRf4ewesXZvwqGnSw2CZm_CoadLDYJkVW_fNOeFzoKCJJ5ex5jcWiyzd42TBz6yE4lxqukd9Y&_nc_ohc=JLKtW87CA1UQ7kNvwFN19kQ&_nc_oc=AdmRWdmU7IOuvDUJsAPnc30hDQsR5SLCju2he4YZcAoktRwqicYvH1TE6jDucoZUSrY&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=jZ_tpjHJElZ332cRNMZNXw&oh=00_AfEmCfh0jHkNCvMGqZSAZUOgWBDltwzJqoy7-rJDDRBmKA&oe=68126213" },

    ],
    selected: null,
};

const friendsSlice = createSlice({
    name: "friends",
    initialState,
    reducers: {
        selectFriend: (state, action) => {
            state.selected = action.payload;
        },
    },
});

export const { selectFriend } = friendsSlice.actions;
export default friendsSlice.reducer;
