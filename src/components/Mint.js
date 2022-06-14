import React, { Fragment } from 'react';
import Header from './layout/Header';
import { Navigate } from 'react-router-dom';
import { toast } from "react-toastify";
//hook
import { useSelector } from 'react-redux';
//web3
import { mintNFT } from '../web3lib/battle';

const Mint = () => {

     const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
     const address = useSelector(state => state.auth.address);

     const onMintBtn = async () => {
          if (address === null) {
               toast.warning("Please connect metamask!", {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
               });
               return;
          }
          await mintNFT(0, address);
     }

     if (isAuthenticated !== null) {
          if (isAuthenticated === false) {
               return <Navigate to="/login" />
          }
     }

     return (
          <Fragment>
               <Header /> 
               <div className="md:container md:mx-auto pt-10 text-[#FFFFFF] h-[calc(100vh-66px)]">
                    <div className="grid grid-cols-12 gap-4 flex">
                         <label htmlFor="my-modal-6" className="btn btn-primary col-start-12 mb-4" onClick={onMintBtn}>Mint</label>
                    </div>
               </div>
          </Fragment>
     )
}

export default Mint; 