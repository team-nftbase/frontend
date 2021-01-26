import { user } from "./store/common.store";

const walletCheck = () => {
  if (!window.ethereum) {
    window.location.href = "/getwallet";
    return false
  }
  return true
}

export const login = async () => {
  if (!walletCheck()) return;
  try {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    user.update((user) => {
      user.wallet = accounts[0];
      return user;
    });
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