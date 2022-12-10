import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export const AdminContext = createContext();

export function AdminProvider({ children }) {


    const [prevData, setPrevData] = useState([])
    useEffect(() => {
        axios.get("/api/admin/info").then((res) => {
            if (res.status === 200) {
                console.log(res);
                setPrevData(res.data);
            } else {
                console.log(res);
            }
        });
    }, [])

    return (
        <>
            <AdminContext.Provider
                value={{
                    prevData

                }}
            >
                {children}
            </AdminContext.Provider>
        </>
    );
}
