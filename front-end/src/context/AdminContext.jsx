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
    const [RC, setRC] = useState([])
    const [RR, setRR] = useState([])
    const [RP, setRP] = useState([])
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
                console.log(res);
                setReports(res.data);
                setRC(res.data.comments)
                setRR(res.data.reviews)
                setRP(res.data.posts)
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
        swal({
            title: "Are you sure?",
            text: "You will delete this Report!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(res => {
            if (res) {

                const data = {
                    id: id
                }
                axios.post('/api/del/reports', data).then((res) => {
                    console.log(res);
                    setReports(res.data.data)
                })
            }
        })


    }
    const delComment = (report_id, comment_id) => {
        swal({
            title: "Are you sure?",
            text: "You will delete this reported comment!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(res => {
            if (res) {

                const data = {
                    report_id: report_id,
                    comment_id: comment_id
                }
                axios.post('/api/del/rcomment', data).then((res) => {
                    console.log(res);
                    setReports(res.data.data)
                    setRC(res.data.data.comments)
                })
            }
        })
    }

    const delReview = (report_id, review_id) => {
        swal({
            title: "Are you sure?",
            text: "You will delete this reported review!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(res => {
            if (res) {

                const data = {
                    report_id: report_id,
                    review_id: review_id
                }
                axios.post('/api/del/rreview', data).then((res) => {
                    console.log("after del");
                    console.log(res);
                    setReports(res.data.data)
                    setRR(res.data.reviews)
                })
            }
        })
    }
    const delPost = (report_id, post_id) => {
        swal({
            title: "Are you sure?",
            text: "You will delete this reported review!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(res => {
            if (res) {
                const data = {
                    report_id: report_id,
                    post_id: post_id
                }
                axios.post('/api/del/rpost', data).then((res) => {
                    console.log("after del");
                    console.log(res);
                    setReports(res.data.data)
                    setRP(res.data.posts)
                })
            }
        })
    }


    return (
        <>
            <AdminContext.Provider value={{ prevData, allPosts, deletePost, reports, delReport, delComment, delReview, delPost, RC, RR, RP }} >
                {children}
            </AdminContext.Provider>
        </>
    );
}
