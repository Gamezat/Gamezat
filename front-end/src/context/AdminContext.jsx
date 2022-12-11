import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export const AdminContext = createContext();

export function AdminProvider({ children }) {


    const [prevData, setPrevData] = useState([])
    const [allPosts, setAllPosts] = useState([])
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
    useEffect(() => {
        axios.get("/api/posts").then((res) => {
            if (res.status === 200) {
                console.log("posts");
                console.log(res);
                setAllPosts(res.data.data);
            } else {
                console.log(res);
            }
        });
    }, [])
    useEffect(() => {
        const outputArray = allPosts?.map(obj => ({
            id: obj.id,
            content: obj.content,
            created_at: obj.created_at,
            commentsCount: obj.comments.length,
            userName: obj.user.name,
            userEmail: obj.user.email
        }));
        console.log("formated");
        console.log(outputArray);
    }, [allPosts])

    return (
        <>
            <AdminContext.Provider value={{ prevData, allPosts }} >
                {children}
            </AdminContext.Provider>
        </>
    );
}
