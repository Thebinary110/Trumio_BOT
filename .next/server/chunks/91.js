"use strict";
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 91:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ StateContextProvider),
  "F": () => (/* binding */ useStateContext)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(982);
// EXTERNAL MODULE: external "web3modal"
var external_web3modal_ = __webpack_require__(840);
var external_web3modal_default = /*#__PURE__*/__webpack_require__.n(external_web3modal_);
;// CONCATENATED MODULE: ./Context/GPTMembership.json
const GPTMembership_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MY_CONTRACT","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_membershipId","type":"uint256"}],"name":"getMembership","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"cost","type":"uint256"},{"internalType":"string","name":"date","type":"string"}],"internalType":"struct GPTMembership.Membership","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_membershipId","type":"uint256"}],"name":"getMembershipsTaken","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getUserMembership","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"membershipId","type":"uint256"},{"internalType":"address","name":"addressUser","type":"address"},{"internalType":"uint256","name":"cost","type":"uint256"},{"internalType":"string","name":"expireDate","type":"string"}],"internalType":"struct GPTMembership.UserMembership","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"hasBought","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_cost","type":"uint256"},{"internalType":"string","name":"_date","type":"string"}],"name":"list","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"membershipTaken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"membershipTypes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_membershipId","type":"uint256"},{"internalType":"address","name":"_user","type":"address"},{"internalType":"string","name":"_expireDate","type":"string"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalMemberships","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./Context/constants.js
//0x5FbDB2315678afecb367f032d93F642f64180aa3

const GPT_MEMEBRSHIP_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const GPT_MEMEBRSHIP_ABI = GPTMembership_namespaceObject.Mt;

;// CONCATENATED MODULE: ./Utils/apiFeature.js



const ChechIfWalletConnected = async ()=>{
    try {
        if (!window.ethereum) return console.log("Install MateMask");
        const accounts = await window.ethereum.request({
            method: "eth_accounts"
        });
        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.log(error);
    }
};
const connectWallet = async ()=>{
    try {
        if (!window.ethereum) return console.log("Install MetaMask");
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        });
        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.log(error);
    }
};
const fetchContract = (signerOrProvider)=>new external_ethers_.ethers.Contract(GPT_MEMEBRSHIP_ADDRESS, GPT_MEMEBRSHIP_ABI, signerOrProvider);
const connectingWithContract = async ()=>{
    try {
        const web3modal = new (external_web3modal_default())();
        const connection = await web3modal.connect();
        const provider = new external_ethers_.ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
};

;// CONCATENATED MODULE: ./Context/index.js



//INTERNAL IMPORT

const StateContext = /*#__PURE__*/ (0,external_react_.createContext)();
const StateContextProvider = ({ children  })=>{
    //  STATE VARIABLE
    const { 0: address , 1: setAddress  } = (0,external_react_.useState)("");
    const { 0: contractMembership , 1: setContractMembership  } = (0,external_react_.useState)([]);
    const { 0: Free , 1: setFree  } = (0,external_react_.useState)();
    const { 0: userMembership , 1: setUserMembership  } = (0,external_react_.useState)({});
    //FETCH DATA TIME OF PAGE LOAD
    const fetchData = async ()=>{
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
                    memberShip_cost: external_ethers_.ethers.utils.formatUnits(oneMonth?.cost.toString(), "ether")
                },
                {
                    memberShip_name: sixMonth?.name,
                    memberShip_date: sixMonth?.date,
                    memberShip_id: sixMonth?.id.toNumber(),
                    memberShip_cost: external_ethers_.ethers.utils.formatUnits(sixMonth?.cost.toString(), "ether")
                },
                {
                    memberShip_name: oneYear?.name,
                    memberShip_date: oneYear?.date,
                    memberShip_id: oneYear?.id.toNumber(),
                    memberShip_cost: external_ethers_.ethers.utils.formatUnits(oneYear?.cost.toString(), "ether")
                }, 
            ];
            setContractMembership(contractMembership);
            //USER MEMBERSHIP
            const userMembership = await contract.getUserMembership(connectAccount);
            userMembership = {
                addressUser: userMembership.addressUser.toLowerCase(),
                expireDate: userMembership.expireDate,
                cost: external_ethers_.ethers.utils.formatUnits(userMembership.cost.toString(), "ether"),
                membershipId: userMembership.membershipId.toNumber(),
                id: userMembership.id.toNumber()
            };
            setUserMembership(userMembership);
            const proMember = JSON.stringify(userMembership);
            localStorage.setItem("UserDetail", proMember);
        } catch (error) {
            console.log(error);
        }
    };
    (0,external_react_.useEffect)(()=>{
        fetchData();
    }, []);
    const listMembership = async ()=>{
        //LISTING MEMBERSHIP
        const amount = 5;
        const MEMBERSHIP_NAME = "One Year";
        const MEMBERSHIP_COST = external_ethers_.ethers.utils.parseUnits(amount.toString(), "ether");
        const MEMBERSHIP_DATE = "July 31 2023";
        //CONTRACT
        const contract = await connectingWithContract();
        const list = await contract.list(MEMBERSHIP_NAME, MEMBERSHIP_COST, MEMBERSHIP_DATE);
        await list.wait();
        console.log(list);
    };
    const buyMembership = async (memberShip_id)=>{
        const contract = await connectingWithContract();
        const connectAccount = await connectWallet();
        setAddress(connectAccount);
        try {
            if (memberShip_id == 1) {
                const today = Date.now() + 2657228546;
                let date = new Date(today);
                const expiredDate = date.toLocaleDateString("en-US");
                const money = external_ethers_.ethers.utils.parseEther("1");
                const mintTransaction = await contract.mint(memberShip_id, connectAccount, expiredDate.toString(), {
                    value: money.toString()
                });
                await mintTransaction.wait();
                const freeTrail = JSON.stringify("Pro Member");
                localStorage.setItem("freeTrail", freeTrail);
                console.info("contract call successs", mintTransaction);
                window.location.reload();
            } else if (memberShip_id == 2) {
                const today1 = Date.now() + 2657228546 * 6;
                let date1 = new Date(today1);
                const expiredDate1 = date1.toLocaleDateString("en-US");
                console.log(expiredDate1);
                const money1 = external_ethers_.ethers.utils.parseEther("3");
                const mintTransaction1 = await contract.mint(memberShip_id, connectAccount, expiredDate1.toString(), {
                    value: money1.toString()
                });
                await mintTransaction1.wait();
                const freeTrail1 = JSON.stringify("Pro Member");
                localStorage.setItem("freeTrail", freeTrail1);
                console.info("contract call successs", mintTransaction1);
                window.location.reload();
            } else {
                const today2 = Date.now() + 31601495874;
                let date2 = new Date(today2);
                const expiredDate2 = date2.toLocaleDateString("en-US");
                console.log(expiredDate2);
                const money2 = external_ethers_.ethers.utils.parseEther("5");
                const mintTransaction2 = await contract.mint(memberShip_id, connectAccount, expiredDate2.toString(), {
                    value: money2.toString()
                });
                await mintTransaction2.wait();
                const pro_member = "Pro Member";
                const freeTrail2 = JSON.stringify(pro_member);
                localStorage.setItem("freeTrail", freeTrail2);
                console.info("contract call successs", mintTransaction2);
                window.location.reload();
            }
        } catch (error) {
            console.error("contract call failure", error);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(StateContext.Provider, {
        value: {
            listMembership,
            buyMembership,
            connectWallet: connectWallet,
            Free,
            address,
            contractMembership,
            userMembership
        },
        children: children
    });
};
const useStateContext = ()=>(0,external_react_.useContext)(StateContext);


/***/ })

};
;