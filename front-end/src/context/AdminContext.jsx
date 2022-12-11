import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import swal from "sweetalert";
import { useContext } from "react";
import { useCookies } from "react-cookie";
export const AdminContext = createContext();

export function AdminProvider({ children }) {

    const [cookies, setCookie, removeCookie] = useCookies(["Token"]);
    const [prevData, setPrevData] = useState([])
    const [allPosts, setAllPosts] = useState([])
    const [reports, setReports] = useState([])
    const [allPostsTemp, setAllPostsTemp] = useState([])
    const deletePost = (id) => {
        const data = {
            id: id
        }
        axios.post('/api/delete/post', data, {
            headers: {
                Authorization: ` Bearer ${cookies.Token}`,
            },
        }).then((res) => {
            if (res.data.status === 200) {
                setAllPostsTemp(res.data.posts)
                swal('u did it ')
            }
        })
    }
    useEffect(() => {
        axios.get("/api/admin/info").then((res) => {
            if (res.status === 200) {
                // console.log(res);
                setPrevData(res.data);
            } else {
                console.log(res);
            }
        });
    }, [])
    useEffect(() => {
        axios.get("/api/admin/reports").then((res) => {
            if (res.status === 200) {
                // console.log(res);
                setReports(res.data);
            } else {
                console.log(res);
            }
        });
    }, [])
    useEffect(() => {
        axios.get("/api/posts").then((res) => {
            if (res.status === 200) {
                // console.log("posts");
                // console.log(res);
                setAllPostsTemp(res.data.data);

            } else {
                console.log(res);
            }
        });
    }, [])
    useEffect(() => {
        const outputArray = allPostsTemp?.map(obj => ({
            id: obj.id,
            content: obj.content,
            created_at: obj.created_at,
            commentsCount: obj.comments?.length,
            userName: obj.user.name,
            userEmail: obj.user.email
        }));
        setAllPosts(outputArray);
        // console.log("formated");
        // console.log(outputArray);
    }, [allPostsTemp])

    const delReport = (id) => {
        swal('add the delReport function in the admin controller')
    }
    const delComment = (id) => {
        swal('add the delComment function in the admin controller')
    }


    return (
        <>
            <AdminContext.Provider value={{ prevData, allPosts, deletePost, reports, delReport, delComment }} >
                {children}
            </AdminContext.Provider>
        </>
    );
}
