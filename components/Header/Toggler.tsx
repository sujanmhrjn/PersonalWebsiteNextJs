"use client";

import { navbarVisibleAtom } from "@/atoms/globalAtoms";
import { useAtom } from "jotai";
import React, { useEffect } from "react";

const Toggler = () => {
  const [navbarVisible, setNavbarVisible] = useAtom(navbarVisibleAtom);
  const navbarToggle = () => {
    setNavbarVisible(!navbarVisible);
  };

  useEffect(()=>{
    const pageBody = document.getElementsByTagName("body")[0];
    if(navbarVisible){
        pageBody.classList.add('overflow-hidden')
    }else{
        pageBody.classList.remove('overflow-hidden')

    }
  }, [navbarVisible])

  return (
    <div className="navbar-toggler">
      {navbarVisible.toString()}
      <button className="nav-toggle p-12" onClick={navbarToggle}>
        {navbarVisible && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.59996 0.947276L7.99996 6.34727L13.4 0.963639C13.5063 0.855458 13.6339 0.770516 13.7747 0.714183C13.9156 0.65785 14.0665 0.631353 14.2181 0.636366C14.5156 0.655617 14.7959 0.782479 15.0067 0.993264C15.2175 1.20405 15.3443 1.48435 15.3636 1.78182C15.3651 1.92808 15.3368 2.07312 15.2806 2.20814C15.2243 2.34316 15.1412 2.46534 15.0363 2.56728L9.61996 8L15.0363 13.4327C15.2491 13.6389 15.3669 13.9236 15.3636 14.2182C15.3443 14.5157 15.2175 14.796 15.0067 15.0067C14.7959 15.2175 14.5156 15.3444 14.2181 15.3636C14.0665 15.3687 13.9156 15.3422 13.7747 15.2858C13.6339 15.2295 13.5063 15.1445 13.4 15.0364L7.99996 9.65273L2.61632 15.0364C2.51 15.1445 2.38239 15.2295 2.24156 15.2858C2.10073 15.3422 1.94974 15.3687 1.79814 15.3636C1.49512 15.3479 1.20868 15.2204 0.994122 15.0058C0.779563 14.7913 0.652094 14.5048 0.636321 14.2018C0.634841 14.0556 0.663086 13.9105 0.719343 13.7755C0.7756 13.6405 0.858697 13.5183 0.963594 13.4164L6.37996 8L0.94723 2.56728C0.845287 2.46396 0.765214 2.34116 0.711795 2.20621C0.658376 2.07125 0.632707 1.92692 0.636321 1.78182C0.655572 1.48435 0.782434 1.20405 0.993219 0.993264C1.204 0.782479 1.4843 0.655617 1.78178 0.636366C1.93219 0.629222 2.08247 0.653141 2.22324 0.706633C2.36401 0.760124 2.49224 0.842041 2.59996 0.947276V0.947276Z"
              fill="black"
            />
          </svg>
        )}
        {!navbarVisible && (
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6.75415H19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1.13916H19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 12.3692H19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Toggler;
