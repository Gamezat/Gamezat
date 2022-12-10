import React, { useEffect, useState, useContext } from 'react'
import { Menu, MenuHandler, MenuList, MenuItem, Button, AccordionBody, AccordionHeader } from "@material-tailwind/react";
import { FiMoreHorizontal, FiTrash2 } from 'react-icons/fi';
import { BsHeart } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { CgDanger } from "react-icons/cg";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { Dropdown } from 'flowbite-react';
import { Accordion } from '@material-tailwind/react';
import ReactReadMoreReadLess from "react-read-more-read-less";
import { AuthContext } from '../../../context/AuthContext'
import { Textarea } from 'flowbite-react'


import axios from 'axios';
import PostComp from './PostComp';



export default function Post({ posts }) {
  const [likes, setLikes] = useState([]);
  const { user, token } = useContext(AuthContext)
  const [open, setOpen] = useState(0);




  // console.log(posts.comment);

  return (
    <>
      {posts?.map((post) => {
        return (
          <PostComp post={post} />

        )
      })}
    </>
  )
}
