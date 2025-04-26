import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import axios from "axios"; // thêm thư viện axios để call API

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/user/login", {
                username,
                password,
            });

            // Nếu login thành công, response sẽ chứa user + token
            const {_id, userName, token } = response.data;

            dispatch(loginSuccess({ userName, token }));
            navigate("/home");
        } catch (err) {
            console.error(err);
            setError("Đăng nhập thất bại. Vui lòng kiểm tra lại!");
        }
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Paper elevation={3} sx={{ p: 4, width: "400px" }}>
                <Typography variant="h5" gutterBottom>Đăng nhập</Typography>
                {error && <Typography color="error">{error}</Typography>}
                <TextField
                    label="Username"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={handleLogin}
                >
                    Đăng nhập
                </Button>
            </Paper>
        </Box>
    );
};

export default Login;
