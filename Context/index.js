import React, { useState, useContext, createContext, useEffect } from "react";
import { ethers } from "ethers";

//INTERNAL IMPORT
import {
  ChechIfWalletConnected,
  connectWallet,
  connectingWithContract,
} from "../Utils/apiFeature";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  //  STATE VARIABLE
  const [address, setAddress] = useState("");
  const [contractMembership, setContractMembership] = useState([]);
  const [Free, setFree] = useState();
  const [userMembership, setUserMembership] = useState({});

  //FETCH DATA TIME OF PAGE LOAD
  const fetchData = async () => {
    try {
      //LOAD FREE TRAIL
      const freeTrail = localStorage.getItem("freeTrail");
      const FREE_TRAIL = JSON.parse(freeTrail);
      setFree(freeTrail);

      //GET CONTRACT
      const contract = await connectingWithContract();
      const connectAccount = await connectWallet();
      setAddress(connectAccount);

      console.log(connectAccount);

      const oneMonth = await contract.getMembership(1);
      const sixMonth = await contract.getMembership(2);
      const oneYear = await contract.getMembership(3);

      //LIST OF MEMBERSHIPS
      contractMembership = [
        {
          memberShip_name: oneMonth?.name,
          memberShip_date: oneMonth?.date,
          memberShip_id: oneMonth?.id.toNumber(),
          memberShip_cost: ethers.utils.formatUnits(
            oneMonth?.cost.toString(),
            "ether"
          ),
        },
        {
          memberShip_name: sixMonth?.name,
          memberShip_date: sixMonth?.date,
          memberShip_id: sixMonth?.id.toNumber(),
          memberShip_cost: ethers.utils.formatUnits(
            sixMonth?.cost.toString(),
            "ether"
          ),
        },
        {
          memberShip_name: oneYear?.name,
          memberShip_date: oneYear?.date,
          memberShip_id: oneYear?.id.toNumber(),
          memberShip_cost: ethers.utils.formatUnits(
            oneYear?.cost.toString(),
            "ether"
          ),
        },
      ];
      setContractMembership(contractMembership);

      //USER MEMBERSHIP
      const userMembership = await contract.getUserMembership(connectAccount);

      userMembership = {
        addressUser: userMembership.addressUser.toLowerCase(),
        expireDate: userMembership.expireDate,
        cost: ethers.utils.formatUnits(userMembership.cost.toString(), "ether"),
        membershipId: userMembership.membershipId.toNumber(),
        id: userMembership.id.toNumber(),
      };
      setUserMembership(userMembership);

      const proMember = JSON.stringify(userMembership);
      localStorage.setItem("UserDetail", proMember);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const listMembership = async () => {
    //LISTING MEMBERSHIP
    const amount = 5;
    const MEMBERSHIP_NAME = "One Year";
    const MEMBERSHIP_COST = ethers.utils.parseUnits(amount.toString(), "ether");
    const MEMBERSHIP_DATE = "July 31 2023";
    //CONTRACT
    const contract = await connectingWithContract();
    const list = await contract.list(
      MEMBERSHIP_NAME,
      MEMBERSHIP_COST,
      MEMBERSHIP_DATE
    );

    await list.wait();
    console.log(list);
  };

  const buyMembership = async (memberShip_id) => {
    const contract = await connectingWithContract();
    const connectAccount = await connectWallet();
    setAddress(connectAccount);
    try {
      if (memberShip_id == 1) {
        const today = Date.now() + 2657228546;
        let date = new Date(today);
        const expiredDate = date.toLocaleDateString("en-US");
        const money = ethers.utils.parseEther("1");

        const mintTransaction = await contract.mint(
          memberShip_id,
          connectAccount,
          expiredDate.toString(),
          {
            value: money.toString(),
          }
        );
        await mintTransaction.wait();
        const freeTrail = JSON.stringify("Pro Member");
        localStorage.setItem("freeTrail", freeTrail);
        console.info("contract call successs", mintTransaction);
        window.location.reload();
      } else if (memberShip_id == 2) {
        const today = Date.now() + 2657228546 * 6;
        let date = new Date(today);
        const expiredDate = date.toLocaleDateString("en-US");
        console.log(expiredDate);
        const money = ethers.utils.parseEther("3");
        const mintTransaction = await contract.mint(
          memberShip_id,
          connectAccount,
          expiredDate.toString(),
          {
            value: money.toString(),
          }
        );
        await mintTransaction.wait();
        const freeTrail = JSON.stringify("Pro Member");
        localStorage.setItem("freeTrail", freeTrail);
        console.info("contract call successs", mintTransaction);
        window.location.reload();
      } else {
        const today = Date.now() + 31601495874;
        let date = new Date(today);
        const expiredDate = date.toLocaleDateString("en-US");
        console.log(expiredDate);
        const money = ethers.utils.parseEther("5");
        const mintTransaction = await contract.mint(
          memberShip_id,
          connectAccount,
          expiredDate.toString(),
          {
            value: money.toString(),
          }
        );
        await mintTransaction.wait();
        const pro_member = "Pro Member";
        const freeTrail = JSON.stringify(pro_member);
        localStorage.setItem("freeTrail", freeTrail);
        console.info("contract call successs", mintTransaction);
        window.location.reload();
      }
    } catch (error) {
      console.error("contract call failure", error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        listMembership,
        buyMembership,
        connectWallet,
        Free,
        address,
        contractMembership,
        userMembership,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
