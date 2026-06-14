import axios from "axios";
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button } from 'reactstrap';
import { GeneralResponse, LogInResponse } from "./InterFace/Models";
import { BASE_URL } from "../services/ApiResponse";

function Login() {
    const [password, setPassword] = useState<string>("");
    const [staff_id, setStaff_id] = useState<string>("");
    const [store_id, setStore_id] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [staffError, setStaffError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [storeError, setStoreError] = useState<string>("");
    const navigate = useNavigate();
    const request: LogInResponse = {
        staffId: staff_id,
        storeId: store_id,
        password: password
    };

    const login = async () => {
        debugger
        if (staff_id === "") {
            setStaffError("Staff ID is required");
            return;
        }
        if (store_id === "") {
            setStoreError("Store ID is required");
            return;
        }
        if (password === "") {
            setPasswordError("Password is required");
            return;
        }
        if (password.length < 8) {
            setPasswordError(
                "Password must be at least 8 characters"
            );
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordError(
                "Password must contain an uppercase letter"
            );
            return;
        }
        if (!/[0-9]/.test(password)) {
            setPasswordError(
                "Password must contain a number"
            );
            return;
        }
        try {
            debugger
            const response = await axios.post<GeneralResponse>(
                `${BASE_URL}users/LogInUser`,
                request
            );

            if (response.data.code === 1) {
                localStorage.setItem(
                    "staffId",
                    staff_id
                );

                localStorage.setItem(
                    "storeId",
                    store_id
                );
                debugger;           
                // localStorage.setItem(
                //     "user",
                //     JSON.stringify(response.data.data)
                // );

                navigate("/users", {
                    state: response.data.data
                });
            } else {
                toast.error(response.data.message);
            }

        } catch (error) {
            toast.error("An error occurred during login.");
        }
    }
    return (

        <div
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg,#667eea 0%,#764ba2 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px"
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "500px",
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(15px)",
                    borderRadius: "25px",
                    padding: "40px",
                    boxShadow:
                        "0 8px 32px rgba(0,0,0,0.25)",
                    color: "#fff"
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        marginBottom: "35px",
                        fontWeight: "700",
                        lineHeight: "1.4"
                    }}
                >
                    Welcome Back <br />
                    SIM Store Management
                </h2>

                <div style={{ marginBottom: "22px" }}>
                    <label
                        style={{
                            display: "block",
                            marginBottom: "8px",
                            fontWeight: "600"
                        }}
                    >
                        Staff ID
                    </label>

                    <input
                        type="text"
                        placeholder="Enter Staff ID"
                        value={staff_id}
                        onChange={(e) => {
                            setStaff_id(e.target.value);
                            setStaffError("");
                        }}
                        style={{
                            width: "100%",
                            padding: "14px",
                            borderRadius: "12px",
                            border: "none",
                            outline: "none",
                            fontSize: "16px",
                            boxSizing: "border-box"
                        }}
                    />

                    {staffError && (
                        <small className="text-warning">
                            {staffError}
                        </small>
                    )}
                </div>

                <div style={{ marginBottom: "22px" }}>
                    <label
                        style={{
                            display: "block",
                            marginBottom: "8px",
                            fontWeight: "600"
                        }}
                    >
                        Store ID
                    </label>

                    <input
                        type="text"
                        placeholder="Enter Store ID"
                        value={store_id}
                        onChange={(e) => {
                            setStore_id(e.target.value);
                            setStoreError("");
                        }}
                        style={{
                            width: "100%",
                            padding: "14px",
                            borderRadius: "12px",
                            border: "none",
                            outline: "none",
                            fontSize: "16px",
                            boxSizing: "border-box"
                        }}
                    />

                    {storeError && (
                        <small className="text-warning">
                            {storeError}
                        </small>
                    )}
                </div>

                <div style={{ marginBottom: "22px" }}>
                    <label
                        style={{
                            display: "block",
                            marginBottom: "8px",
                            fontWeight: "600"
                        }}
                    >
                        Password
                    </label>

                    <input
                        type={
                            showPassword
                                ? "text"
                                : "password"
                        }
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordError("");
                        }}
                        style={{
                            width: "100%",
                            padding: "14px",
                            borderRadius: "12px",
                            border: "none",
                            outline: "none",
                            fontSize: "16px",
                            boxSizing: "border-box"
                        }}
                    />

                    {passwordError && (
                        <small className="text-warning">
                            {passwordError}
                        </small>
                    )}
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "25px"
                    }}
                >
                    <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={() =>
                            setShowPassword(
                                !showPassword
                            )
                        }
                    />

                    <label
                        style={{
                            marginLeft: "10px"
                        }}
                    >
                        Show Password
                    </label>
                </div>

                <div style={{ textAlign: "center" }}>
                    <Button
                        type="button"
                        onClick={login}
                        style={{
                            width: "170px",
                            padding: "12px",
                            background: "linear-gradient(135deg,#00b09b,#96c93d)",
                            border: "none",
                            borderRadius: "12px",
                            color: "#fff",
                            fontWeight: "700",
                            fontSize: "16px",
                            boxShadow: "0 6px 20px rgba(17,153,142,0.4)"
                        }}
                    >
                        Login
                    </Button>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                pauseOnHover
            />
        </div>
    );
}
export default Login;