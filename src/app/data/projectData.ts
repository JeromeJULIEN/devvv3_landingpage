import { StaticImageData } from "next/image";
import fleet from "../../../public/project/fleet/fleet.png"
import BCTmain from "../../../public/project/blockchainteam/BCT1.png"

interface Project {
    slug: string;
    name: string;
    description: string;
    image: StaticImageData;
    secondImage? : StaticImageData
  }

const projects : Project[] = [
    { slug: 'fleet-collective', name: 'fleet collective', description: 'Site de mint de NFT', image: fleet, secondImage: fleet },
    { slug: 'the-blockchain-team', name: 'the blockchain team', description: 'Site vitrine', image: BCTmain, secondImage: fleet },
    // { slug: 'project-2', name: 'Project 2', description: 'Description 2' },
    // ... autres projets
  ];

export default projects