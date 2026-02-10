import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Home from "./components/Home";
import Content from "./components/Content";

function App() {
  const [account, setAccount] = useState(null);

  const loadBlockChainData = async () => {
    window.ethereum.on('accountsChanged', async ()=> {
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      const account = ethers.utils.getAddress(accounts[0]);
      setAccount(account);
    })
  }

  useEffect(() => {
    loadBlockChainData();
  }, []);

  return (
    <div>
      <Navigation account={account} setAccount={setAccount}/>
      <Search />
      <Content account={account}/>
    </div>
  );
}

export default App;