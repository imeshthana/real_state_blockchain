import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

// ABIs
import RealEstate from "../abis/RealEstate.json";
import Escrow from "../abis/Escrow.json";

// Config
import config from "../config.json";
import Home from "./Home";

function Content({account}) {
  const [provider, setProvider] = useState(null);
  const [escrow, setEscrow] = useState(null);
  const [homes, setHomes] = useState([]);
  const [home, setHome] = useState({});
  const [toggle, setToggle] = useState(false);

  const loadBlockChainData = async () => {
    //load provider(metamask) to connect to the blockchain
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);

    //load blockchain network
    const network = await provider.getNetwork();

    //load real state contract
    const realEstate = new ethers.Contract(
      config[network.chainId].realEstate.address,
      RealEstate,
      provider
    );

    //load homes/properties (NFTs) list
    const totalSupply = await realEstate.totalSupply();
    const homes = [];
    for (var i = 1; i <= totalSupply; i++) {
      const uri = await realEstate.tokenURI(i);
      const response = await fetch(uri);
      const metadata = await response.json();
      homes.push(metadata);
    }
    setHomes(homes);

    //load escrow contract
    const escrow = new ethers.Contract(
      config[network.chainId].escrow.address,
      Escrow,
      provider
    );
    setEscrow(escrow);
  };

  useEffect(() => {
    loadBlockChainData();
  }, []);

  const togglePop = (home) => {
    setHome(home);
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className="cards__section">
      <h3>Homes for you</h3>
      <hr />
      <div className="cards">
        {homes.map((home, index) => (
          <div className="card" key={index} onClick={() => togglePop(home)}>
            <div className="card__image">
              <img src={home.image} alt="home"></img>
            </div>
            <div className="card__info">
              <h4>{home.attributes[0].value}</h4>
              <p>
                <strong>{home.attributes[2].value}</strong>bds |
                <strong>{home.attributes[3].value}</strong> ba |
                <strong>{home.attributes[4].value}</strong>
                sqft
              </p>
              <p>{home.address}</p>
            </div>
          </div>
        ))}
      </div>

      {toggle && (
        <Home
          home={home}
          provider={provider}
          account={account}
          escrow={escrow}
          togglePop={togglePop}
        />
      )}
    </div>
  );
}

export default Content;
