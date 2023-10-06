import { StaticImageData } from "next/image";
import fleetMain from "../../../public/project/fleet/fleetMain.png"
import fleet1 from "../../../public/project/fleet/fleet1.png"
import fleet2 from "../../../public/project/fleet/fleet2.png"
import bctMain from "../../../public/project/blockchainteam/bctMain.png"
import bct1 from "../../../public/project/blockchainteam/bct1.png"
import mtcdMain from "../../../public/project/MTCD/mtcdMain.jpg"
import mtcd1 from "../../../public/project/MTCD/mtcd1.png"
import perfMain from "../../../public/project/perfConnect/perfconnectMain.png"
import perf1 from "../../../public/project/perfConnect/perfConnect1.png"
import perf2 from "../../../public/project/perfConnect/perfConnect2.png"


interface Project {
    slug: string;
    name: string;
    description: string;
    imageMain:StaticImageData;
    image: StaticImageData;
    secondImage? : StaticImageData;
    detail1: string;
    detail2? : string;
    stack: string[],
    link? :string
  }

const projects : Project[] = [
    { slug: 'fleet-collective', 
    name: 'fleet collective', 
    description: 'Site de mint de NFT', 
    imageMain: fleetMain,
    image: fleet1, 
    secondImage: fleet2,
    detail1:"Site de mint de carte de membre du collectif Fleet. Le mint est conditionnel à l’appartenance au serveur discord du collectif ainsi qu’à la détention de certains rôles spécifique.",
    detail2:"L’api de discord est utilisée pour vérifier les informations nécessaires à l’accès à la fonction de mint. Le smart contract de la collection est géré via thirdweb ",
    stack:["nextjs","react","thirdweb"],
    link:"https://mint.fleetweb3.xyz/"
    },
    { slug: 'the-blockchain-team', 
    name: 'the blockchain team', 
    description: 'Site vitrine', 
    imageMain: bctMain,
    image: bct1, 
    detail1:"Site vitrine pour 'the blockchain team' qui propose aux artistes traditionnels un accompagnement complet pour le lancement de leur collection NFT.",
    detail2:"Présentation de l'équipe et du process. Possibilité de prise de rendez vous directement sur le site.",
    stack:["nextjs","react","tailwind"],
    link:"https://blockchain-team-commercial-page.vercel.app/"
    },
    { slug: 'confidential-client', 
    name: 'client confidentiel', 
    description: 'Smart contract NFT', 
    imageMain: mtcdMain,
    image: mtcd1, 
    detail1:"Développement d'une bibliothèqye de smart contract type. Chaque smart contract sert de modèle paramètrable pour le lancement d'une nouvelle collection avec des paramètre spécifique : type de NFT, prix, supply, partage des revenues,...",
    detail2:"Chaque contrat prends en charge la gestion de rôles, le partage de revenu automatisé et la possibilité de payer les NFTs en actif numérique stable (stable coin) ",
    stack:["solidity","hardhat","open zeppelin"],
    },
    { slug: 'perfconnect', 
    name: 'perf connect', 
    description: 'App IOS de coaching sportif', 
    imageMain: perfMain,
    image: perf1,
    secondImage:perf2, 
    detail1:"Application de coaching pour sportif amateur cherchant à optimiser leurs performances : endurance, vitesse, motricité, force et explosivité.",
    detail2:"Basé sur une auto évaluation de l'utilisateur ainsi qu'un délai souhaité, l'application génère un programme d'entrainenement personalisé. L'utilisateur enregitre ses performances et a accès un coach personnel pour l'accompagner dans sa progression.",
    stack:["swift","swift UI","X Code"],
    },
  ];

export default projects