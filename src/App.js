import React, { useEffect, useState } from "react";

import Nav from "./components/Nav";
import WalletModal from "./components/WalletModal";
import UserDetailsContainer from "./components/UserDetailsContainer";
import MinerContainer from "./components/MinerContainer";

import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

import { walletConnectRpc } from "./data/rpc";
import { walletOptions } from "./data/walletOptions";
import { minerCA, minerABI, stablesABI, stablesCA, mainTokenABI, mainTokenCA } from "./data/contractAbi";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [isModalToggled, setIsModalToggled] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [provider, setProvider] = useState("");
  const [signer, setSigner] = useState("");
  const [wallet, setWallet] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [minerContract, setMinerContract] = useState("");
  const [stablesContract, setStablesContract] = useState("");
  const [mainTokenContract, setMainTokenContract] = useState("");

  const connectDapp = async (optionSelected) => {
    const wcProvider = new WalletConnectProvider(walletConnectRpc);
    if (optionSelected === "WalletConnect") {
      await wcProvider
        .enable()
        .then(() => {
          setWallet(optionSelected);
          setProvider(new ethers.providers.Web3Provider(wcProvider));
        })
        .catch((err) => {
          throw new Error("Error Connecting to wallet");
        });
    } else {
      console.log("clicked");
      setWallet(optionSelected);
      setProvider(new ethers.providers.Web3Provider(window.ethereum));
    }
  };
  const walletRequest = async () => {
    if (provider !== "" && wallet !== "") {
      if (wallet === "Metamask") {
        try {
          await provider
            .send("eth_requestAccounts", [])
            .then(() => setSigner(provider.getSigner()));
        } catch (error) {
          setWallet("");
        }
      } else {
        setSigner(provider.getSigner());
      }
    }
  };
  const fetchAndSetUser = async () => {
    const user = await minerContract.user(userAddress);
    setUserInfo(user);
  };
  useEffect(() => {
    // console.log("This is the " + provider);
    if (provider != "") {
      setMinerContract(new ethers.Contract(minerCA, minerABI, provider));
      setMainTokenContract(new ethers.Contract(mainTokenCA, mainTokenABI, provider));
      setStablesContract(new ethers.Contract(stablesCA, stablesABI, provider));
    }
    walletRequest();
  }, [provider, wallet]);
  useEffect(() => {
    if (signer !== "") {
      signer.getAddress().then((res) => {
        setUserAddress(res);
        setIsModalToggled(!isModalToggled);
        setIsConnected(true);
      });
    }
  }, [signer]);
  useEffect(() => {
    if(userAddress != ""){
      fetchAndSetUser()
    }
  }, [userAddress])
  return (
    <>
      <Nav
        setIsModalToggled={setIsModalToggled}
        isModalToggled={isModalToggled}
        isConnected={isConnected}
        userAddress={userAddress}
      />
      {isModalToggled && (
        <WalletModal
          setIsModalToggled={setIsModalToggled}
          isModalToggled={isModalToggled}
          walletOptions={walletOptions}
          connectDapp={connectDapp}
        />
      )}
      <UserDetailsContainer userInfo={userInfo} />
      <MinerContainer isConnected={isConnected} stablesContract={stablesContract} />
    </>
  );
}

export default App;
