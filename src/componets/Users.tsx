import axios from 'axios';
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { deleteUserRequest, GeneralResponse, UserResponse } from '../componets/InterFace/Models';
import { BASE_URL } from '../services/ApiResponse';
function Users() {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state;

    const [users, setUsers] = useState<any[]>(
        Array.isArray(location.state)
            ? location.state
            : [location.state]
    );

    // function editUser(user: UserResponse) {
    //     // Implement edit user functionality here
    //     toast.info(`Edit user with ID: ${user.id}`);
    // }
    // async function deleteUser(id: number) {
    //     try {
    //         const request: deleteUserRequest = { id };

    //         const response = await axios.post<GeneralResponse>(
    //             `${BASE_URL}users/deleteUser`,
    //             request
    //         );

    //         if (response.data.code === 1) {
    //             toast.success(response.data.message);
    //             // remove deleted user from local state
    //             setUsers(prev => prev.filter(u => u.id !== id));
    //         } else {
    //             toast.error(response.data.message);
    //         }
    //     } catch (error: any) {
    //         toast.error(error?.message || 'An error occurred while deleting the user.');
    //     }
    // };

    //debugger;
    //console.log(user.getUserName());
    // if (!user) {
    //     return (
    //         <h3 className="text-center mt-5">
    //             No Data Found
    //         </h3>
    //     );
    // }

    return (
        <div
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                padding: "40px 20px"
            }}
        >
            <div
                style={{
                    maxWidth: "1000px",
                    margin: "0 auto",
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(15px)",
                    borderRadius: "25px",
                    padding: "40px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.25)"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "30px"
                    }}
                >
                    <h2
                        style={{
                            color: "#fff",
                            fontSize: "42px",
                            fontWeight: "700",
                            margin: 0
                        }}
                    >
                        SIM Store Details
                    </h2>

                    <button
                        className="btn"
                        style={{
                            background: "#16a34a",
                            color: "white",
                            border: "none",
                            borderRadius: "12px",
                            padding: "12px 25px",
                            fontWeight: "600",
                            fontSize: "16px",
                            boxShadow: "0 4px 12px rgba(22,163,74,0.4)"
                        }}
                        onClick={() =>
                            navigate("/addSim", {
                                state: {
                                    staffId: location.state.staffId,
                                    storeId: location.state.storeId
                                }
                            })
                        }
                    >
                        + Add SIM
                    </button>
                </div>

                <div className="table-responsive">
                    <table
                        className="table table-hover table-bordered align-middle text-center"
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: "15px",
                            overflow: "hidden",
                            minWidth: "100%"
                        }}
                    >
                        <thead
                            style={{
                                backgroundColor: "#1f2937",
                                color: "#fff"
                            }}
                        >
                            <tr>
                                <th style={{ padding: "15px" }}>ID</th>
                                <th style={{ padding: "15px" }}>
                                    SIM Card Number
                                </th>
                                <th style={{ padding: "15px" }}>
                                    Account Number
                                </th>
                                <th style={{ padding: "15px" }}>
                                    Mobile Number
                                </th>
                                <th style={{ padding: "15px" }}>
                                    Created By
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {users && users.length > 0 ? (
                                users.map((user: any) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.simNo}</td>
                                        <td>{user.accountNumber}</td>
                                        <td>{user.mobileNumber}</td>

                                        <td>
                                            {user.created_by}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={5}
                                        style={{
                                            padding: "25px",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        No Records Found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "25px"
                    }}
                >
                    <button
                        className="btn btn-light"
                        style={{
                            borderRadius: "12px",
                            padding: "10px 35px",
                            fontWeight: "600",
                            fontSize: "16px",
                            boxShadow:
                                "0 4px 10px rgba(0,0,0,0.2)"
                        }}
                        onClick={() => window.history.back()}
                    >
                        ← Back
                    </button>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={2000}
            />
        </div>
    );
}

export default Users;


