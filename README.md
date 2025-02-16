# Real Estate NFT DApp

## Technology Stack & Tools

- Solidity (Writing Smart Contracts & Tests)
- Javascript (React & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [React.js](https://reactjs.org/) (Frontend Framework)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`

### 3. Run tests
`$ npx hardhat test`

### 4. Start Hardhat node
`$ npx hardhat node`

### 5. Run deployment script
In a separate terminal execute:
`$ npx hardhat run ./scripts/deploy.js --network localhost`

### 7. Start frontend
`$ npm run start`


### Scenario

# 1. Seller:
The seller is the current owner of the property who is looking to transfer ownership to the buyer. The seller’s responsibilities include:

Listing the property for sale.
Negotiating the sale price with the buyer.
Providing disclosures about the property’s condition.
Signing the necessary documents to transfer ownership.

# 2. Buyer:
The buyer is the person or entity purchasing the property. The buyer’s responsibilities include:

Making an offer on the property.
Securing financing (if necessary) from a lender.
Scheduling a home inspection and reviewing the results.
Signing the necessary documents for the purchase and closing.

# 3. Lender:
A lender is typically a bank or financial institution that provides the buyer with a loan (such as a mortgage) to help them purchase the property. The lender’s responsibilities include:

Approving the buyer’s loan application.
Providing the loan amount to the buyer, typically in exchange for interest.
Ensuring the property is properly appraised to confirm its value.


# 4. Inspector:
The inspector is a third-party professional hired by the buyer to examine the property for potential issues or defects. The inspector’s responsibilities include:

Conducting a detailed inspection of the home’s structure, plumbing, electrical systems, HVAC, and more.
Reporting any findings to the buyer, who can decide whether to negotiate repairs or walk away from the deal.


# 5. Escrow Contract:
An escrow contract is an agreement where a neutral third party (the escrow agent) holds the buyer’s deposit and other necessary funds until all conditions of the contract are met. The escrow agent's responsibilities include:

Holding the buyer’s earnest money deposit securely.
Ensuring all documents are properly signed and executed before the property transfer.
Distributing funds to the seller once the transaction terms are met (e.g., buyer’s financing is approved, inspection is passed, etc.).


## How They Work Together in the Transaction:
1. The Buyer and Seller agree on the price and terms of the sale. The buyer might make an offer, and the seller may accept or negotiate.
2. The Buyer secures a loan from a lender (if necessary), which involves approval and appraisal of the property to ensure the loan amount is reasonable.
3. The buyer hires an inspector to check the property for potential issues. If the inspection uncovers problems, the buyer and seller may negotiate repairs or a price reduction.
4. The escrow agent holds the buyer’s deposit in escrow and ensures that the necessary paperwork and financial transfers are completed.
5. Once all conditions are met (loan approval, inspection passed, etc.), the escrow agent releases the funds to the seller, and the ownership of the property is transferred to the buyer.