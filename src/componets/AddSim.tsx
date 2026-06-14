import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { BASE_URL } from "../services/ApiResponse";
import { GeneralResponse, saveSimRequest } from "./InterFace/Models";

function AddSim() {
    const location = useLocation();
    const navigate = useNavigate();

    const [simNo, setSimNo] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    const staffId = localStorage.getItem("staffId") ?? "";
    const storeId = localStorage.getItem("storeId") ?? "";
    // const user = JSON.parse(
    //     localStorage.getItem("user") || "{}"
    // );

    const request: saveSimRequest = {
        simNo: simNo,
        accountNumber: accountNumber,
        mobileNumber: mobileNumber,
        staffId: staffId,
        storeId: storeId
    };
    async function saveSim() {
        
        debugger;
        if (!simNo) {
            toast.error("Please Enter SIM Number");
            return;
        }

        if (!accountNumber) {
            toast.error("Please Enter Account Number");
            return;
        }

        if (!mobileNumber) {
            toast.error("Please Enter Mobile Number");
            return;
        }


        try {

            const response = await axios.post<GeneralResponse>(
                `${BASE_URL}users/addSim`,
                request
            );
            if (response.data.code === 1) {
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }

            toast.success("SIM Added Successfully");


        } catch (error) {
            toast.error("Unable To Save SIM");
        }
    }
    return (
        <div
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px"
            }}
        >
            <div
                style={{
                    width: "500px",
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(15px)",
                    borderRadius: "25px",
                    padding: "30px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.25)"
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        color: "white",
                        fontWeight: "300",
                        fontSize: "40px",
                        marginBottom: "40px"
                    }}
                >
                    Add New SIM
                </h2>

                <div
                    style={{
                        width: "100%",
                        maxWidth: "600px",
                        margin: "0 auto"
                    }}
                >
                    <div style={{ marginBottom: "25px" }}>
                        <label
                            style={{
                                color: "white",
                                fontWeight: "600",
                                fontSize: "18px",
                                display: "block",
                                marginBottom: "8px"
                            }}
                        >
                            SIM Number
                        </label>

                        <input
                            type="text"
                            placeholder="Enter SIM Number"
                            value={simNo}
                            onChange={(e) => setSimNo(e.target.value)}
                            style={{
                                width: "100%",
                                height: "55px",
                                borderRadius: "12px",
                                border: "none",
                                outline: "none",
                                padding: "0 15px",
                                fontSize: "16px",
                                boxSizing: "border-box"
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "25px" }}>
                        <label
                            style={{
                                color: "white",
                                fontWeight: "600",
                                fontSize: "18px",
                                display: "block",
                                marginBottom: "8px"
                            }}
                        >
                            Account Number
                        </label>

                        <input
                            type="text"
                            placeholder="Enter Account Number"
                            value={accountNumber}
                            onChange={(e) =>
                                setAccountNumber(e.target.value)
                            }
                            style={{
                                width: "100%",
                                height: "55px",
                                borderRadius: "12px",
                                border: "none",
                                outline: "none",
                                padding: "0 15px",
                                fontSize: "16px",
                                boxSizing: "border-box"
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "25px" }}>
                        <label
                            style={{
                                color: "white",
                                fontWeight: "600",
                                fontSize: "18px",
                                display: "block",
                                marginBottom: "8px"
                            }}
                        >
                            Mobile Number
                        </label>

                        <input
                            type="text"
                            placeholder="Enter Mobile Number"
                            value={mobileNumber}
                            onChange={(e) =>
                                setMobileNumber(e.target.value)
                            }
                            style={{
                                width: "100%",
                                height: "55px",
                                borderRadius: "12px",
                                border: "none",
                                outline: "none",
                                padding: "0 15px",
                                fontSize: "16px",
                                boxSizing: "border-box"
                            }}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "20px",
                            marginTop: "40px"
                        }}
                    >
                        <button
                            style={{
                                background: "#107134",
                                color: "white",
                                border: "none",
                                borderRadius: "12px",
                                padding: "14px 35px",
                                fontWeight: "600",
                                fontSize: "16px",
                                cursor: "pointer",
                                boxShadow:
                                    "0 4px 12px rgba(22,163,74,0.4)"
                            }}
                            onClick={saveSim}
                        >
                            Save SIM
                        </button>

                        <button
                            style={{
                                background: "#ffffff",
                                color: "#000",
                                border: "none",
                                borderRadius: "12px",
                                padding: "14px 35px",
                                fontWeight: "600",
                                fontSize: "16px",
                                cursor: "pointer"
                            }}
                            onClick={() => navigate(-1)}
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={2000}
            />
        </div>
    );
}

export default AddSim;