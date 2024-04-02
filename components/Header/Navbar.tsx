import Link from "next/link";
import React from "react";
import { Button, Icons } from "@/components";
import './_navbar.scss';

const Navbar = () => {
  const nav = {
    menu: [
      {
        name: "About",
        path: "/about",
        type: "link",
      },
      {
        name: "Works",
        path: "/works",
        type: "link",
      },
      {
        name: "Resume",
        path: "/resume",
        type: "link",
      },
      {
        name: "Connect",
        path: "/connect",
        type: "link",
      },
      {
        name: "Hire",
        path: "/hire-me",
        type: "button",
      },
      {
        name: "Email",
        path: "info@maharjansujan.com.np",
        type: "other",
        is: "email",
      },
    ],
    social: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/mesujan28",
        icon: <Icons.IconFacebook />,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/sujan_mhrzn",
        icon: <Icons.IconInstagram />,
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/sujan-maharjan",
        icon: <Icons.IconLinkedin />,
      },
    ],
  };
  const linksNav = nav.menu.filter((item) => item.type === "link");
  const buttonsNav = nav.menu.filter((item) => item.type === "button");
  const otherLinksNav = nav.menu.filter((item) => item.type === "other");
  return (
    <>
        <div className="navbar-collapse lg:ml-auto">
            <div className="navbar-top hidden lg:flex lg:items-center lg:justify-end leading-none">
            <ul className="nav-list nav-list--other">
                {otherLinksNav.map((item, i) => {
                return (
                    <li key={i}>
                    {item.is === "email" && (
                        <a
                        href={"mailto:" + item.path}
                        className="text-sm text-red-100 hover:text-red-200"
                        >
                        {item.path}
                        </a>
                    )}
                    {item.is !== "email" && (
                        <Link
                        href={item.path}
                        className="text-sm text-red-100 hover:text-red-200"
                        >
                        {item.path}
                        </Link>
                    )}
                    </li>
                );
                })}
            </ul>

            <ul className="nav-social flex items-center ">
                {nav.social.map((item, i) => {
                return (
                    <li key={i}>
                    <a
                        href={item.url}
                        title={item.name}
                        className=" ml-20 inline-block pointer"
                        target="_blank"
                    >
                        {item.icon}
                    </a>
                    </li>
                );
                })}
            </ul>
            </div>
            {/* /.navbar-top */}
            <div className="navbar-nav pl-56">
                <ul className={`nav-list`}>
                    {linksNav.map((item,i)=>{
                        return (
                            <li  key={i}>
                                <Link href={item.path} className="font-fjalla text-2xl uppercase block py-24 hover:text-red-200 lg:text-base lg:ml-40">{ item.name }</Link>
                            </li>
                        )
                    })}
                
                </ul>

                <ul className="nav-list mt-24 lg:mt-0 lg:ml-40">
                    { buttonsNav.map((item,i)=> {
                        return(
                        <li key={i}>
                            <Button
                                to={item.path}
                                className="btn-ghost"
                                type="link"
                                label={item.name}
                            />
                        </li>
                        )
                    }) 
                    }
                </ul>


                <ul className="nav-social flex items-center mt-32 lg:hidden">
                    {nav.social.map((item,i)=> {
                        return(
                            <li key={i}>
                                <a
                                    href={item.url}
                                    title={item.name}
                                    className=" mr-20 inline-block pointer"
                                    target="_blank"
                                    >
                                        {item.icon}
                                    </a>
                            </li>
                        )
                    })}
                    
                </ul>

                <ul className="nav-list nav-list--other mt-12 lg:hidden">
                    {otherLinksNav.map((item,i)=>{
                        return (
                            <li key={i}>
                                <Link
                                    href={item.is === 'email' ? 'mailto:' + item.path : item.path}
                                    className="text-sm hover:text-red-200">
                                        { item.path }
                                </Link>
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
        </div>
    </>
  );
};

export default Navbar;
