import { StaticImageData } from "next/image";
import react from "../../../public/stack/react.png"
import ts from "../../../public/stack/ts.png"
import tailwind from "../../../public/stack/tailwind.png"
import nextjs from "../../../public/stack/nextjs.png"
import nodejs from "../../../public/stack/nodejs.png"
import solidity from "../../../public/stack/solidity.png"
import hardhat from "../../../public/stack/hardhat.png"
import oz from "../../../public/stack/oz.png"
import thirdweb from "../../../public/stack/thirdweb.png"
import swift from "../../../public/stack/swift.png"
import xcode from "../../../public/stack/xcode.png"

interface Stack {
    name : string,
    logo : StaticImageData
}

const web3Stack : Stack[] = [
    {name : "react", logo: react},
    {name: "typescript", logo : ts},
    {name: "tailwind", logo : tailwind},
    {name: "nextjs", logo : nextjs},
    {name: "nodejs", logo : nodejs},
]

const blockchainStack : Stack[] = [
    {name : "solidity", logo: solidity},
    {name : "hardhat", logo: hardhat},
    {name : "openzeppelin", logo: oz},
    {name : "thirdweb", logo: thirdweb},
]

const iosStack : Stack[] = [
    {name : "swift / swift UI", logo: swift},
    {name : "xcode", logo: xcode},
]

export {web3Stack,blockchainStack, iosStack}
