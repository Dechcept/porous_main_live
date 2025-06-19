"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Fade as Hamburger } from 'hamburger-react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, Divider } from '@mui/material'
import { AiOutlineMenu } from 'react-icons/ai'




function Header() {
    const [isOpen, setOpen] = useState(false)
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            console.log('hERRERERE')
            return;
        }
        console.log('hERRERERE')
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, position: 'relative' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}


        >
            <List >
                {['Home', 'About Us', 'Industry', 'Projects', 'Blogs', 'Contact', 'Inquiry'].map((text) => {
                    if (text === 'Home') {
                        return <ListItem key={text} disablePadding>
                            <Link className='bg-[#1e293b] py-[0.5rem] text-white tracking-wider text-[1.2rem] font-[600] w-[100%] flex justify-center items-center border-b shadow-xl border-[#64748b]' href={`/`}>
                                <ListItemButton component="a">
                                    <ListItemText c sx={{ textAlign: "center" }} primary={text} />
                                </ListItemButton>
                            </Link>

                        </ListItem>
                    } else if (text === 'About Us') {
                        return <ListItem key={text} disablePadding>
                            <Link className='bg-[#1e293b] py-[0.5rem] text-white tracking-wider text-[1.2rem] font-[600] w-[100%] flex justify-center items-center border-b shadow-xl border-[#64748b]' href={`/about`}>
                                <ListItemButton component="a">
                                    <ListItemText c sx={{ textAlign: "center" }} primary={text} />
                                </ListItemButton>
                            </Link>

                        </ListItem>
                    } else if (text === 'Industry') {
                        return <ListItem key={text} disablePadding>
                            <Link className='bg-[#1e293b] py-[0.5rem] text-white tracking-wider text-[1.2rem] font-[600] w-[100%] flex justify-center items-center border-b shadow-xl border-[#64748b]' href={`/industry`}>
                                <ListItemButton className=' w-[100%] flex justify-center items-center textAlign-center' component="a">
                                    <ListItemText sx={{ textAlign: "center" }} primary={text} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    } else if (text === 'Projects') {
                        return <ListItem key={text} disablePadding>
                            <Link className='bg-[#1e293b] py-[0.5rem] text-white tracking-wider text-[1.2rem] font-[600] w-[100%] flex justify-center items-center border-b shadow-xl border-[#64748b]' href={`/products`}>
                                <ListItemButton component="a">
                                    <ListItemText sx={{ textAlign: "center" }} primary={text} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    } else if (text === 'Blogs') {
                        return <ListItem key={text} disablePadding>
                            <Link className='bg-[#1e293b] py-[0.5rem] text-white tracking-wider text-[1.2rem] font-[600] w-[100%] flex justify-center items-center border-b shadow-xl border-[#64748b]' href={`/blogs`}>
                                <ListItemButton component="a">
                                    <ListItemText sx={{ textAlign: "center" }} primary={text} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    } else if (text === 'Contact') {
                        return <ListItem key={text} disablePadding>
                            <Link className='bg-[#1e293b] py-[0.5rem] text-white tracking-wider text-[1.2rem] font-[600] w-[100%] flex justify-center items-center border-b shadow-xl border-[#64748b]' href={`/contact`}>
                                <ListItemButton component="a">
                                    <ListItemText sx={{ textAlign: "center" }} primary={text} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    } else {
                        return <ListItem key={text} disablePadding>
                            <Link className='bg-[#1e293b] py-[0.5rem] text-white tracking-wider text-[1.2rem] font-[600] w-[100%] flex justify-center items-center border-b shadow-xl border-[#64748b]' href={`/inquiry`}>
                                <ListItemButton component="a">
                                    <ListItemText sx={{ textAlign: "center" }} primary={text} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    }
                }

                )}
            </List>

        </Box>
    );





    return (

        <div className='flex justify-between lg:justify-around items-center py-[1rem] px-[2rem] lg:px-0 relative'>
            <Link href="/" className='relative lg:block hidden'>
                <Image src={'/logo.svg'} width={70} height={50} priority={true} alt="" />
            </Link>
            <Link href="/" className='relative lg:hidden '>
                <Image src={'/logo.svg'} width={50} height={40} priority={true} alt="" />
            </Link>
            <div className='lg:flex justify-between space-x-16 font-Poppins500 hidden'>

                <Link href="/about" className='hover:scale-110 transition duration-[0.4s] hover:border-b hover:border-black'>About us</Link>
                <Link href="/industry" className='hover:scale-110 transition duration-[0.4s] hover:border-b hover:border-black'>Industry</Link>
                <Link href="/products" className='hover:scale-110 transition duration-[0.4s] hover:border-b hover:border-black'>Products</Link>
                <Link href="/projects" className='hover:scale-110 transition duration-[0.4s] hover:border-b hover:border-black'>Projects</Link>
                <Link href="/blogs" className='hover:scale-110 transition duration-[0.4s] hover:border-b hover:border-black'>Blog</Link>
                <Link href="/inquiry" className='hover:scale-110 transition duration-[0.4s] hover:border-b hover:border-black'>Inquiry</Link>
            </div>
            <div className='lg:block hidden'>
                <Link href="/contact" className='font-Poppins500 border px-10 py-2 rounded-lg border-[#969696] hover:bg-black hover:text-white hover:scale-110 transition duration-[0.4s]'>
                    Contact
                </Link>
            </div>
            <div onClick={toggleDrawer("right", true)} className='text-[1.5rem] lg:hidden'>
                <AiOutlineMenu />
            </div>

            <Drawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer("right", false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        backgroundColor: "#0f172a", // Set the desired background color here
                    },
                }}
            >
                {list("right")}
            </Drawer>

        </div>


    )
}

export default Header