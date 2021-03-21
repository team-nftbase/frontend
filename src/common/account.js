  import { base_url } from "./properties";
  import { user } from "./store/common.store";
  import axios from "axios";

const walletCheck = () => {
  if (!window.ethereum) {
    window.location.href = "/getwallet";
    return false
  }
  return true
}

const setAccountInfo = async (accounts) => {
  if (!accounts || !accounts.length) return;
  const userData = await axios.post(base_url + "api/account/login", { wallet: accounts[0] });
  user.update((user) => {
    user = { ...user, ...userData.data }
    return user;
  });
}

if (window.ethereum) {
  ethereum.on('accountsChanged', (accounts) => {
    setAccountInfo(accounts);
  });

  ethereum.on('chainChanged', (chainId) => {
    console.log(chainId);
  });

  ethereum.on('disconnect', err => {
    if (err) console.log(err);
    window.location.href = "/";
  });
}


export const login = async () => {
  if (!walletCheck()) return;
  try {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccountInfo(accounts);

  } catch (error) {
    if (error.code === -32002) {
      alert(
        "Metamask에 요청을 전달하였습니다. 메타마스크를 눌러 로그인 해주세요."
      );
    } else if (error.code === 4001) {
      alert("로그인을 위해서 요청을 수락해주세요.");
    } else {
      alert(error.message);
    }
  }
};

export const getwallet = async () => {
  if (!window.ethereum) return;
  const accounts = await ethereum.request({ method: "eth_accounts" });
  if (accounts) {
    setAccountInfo(accounts);
  }
}