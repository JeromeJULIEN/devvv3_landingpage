import { StaticImageData } from "next/image";
import fleetMain from "../../../../public/project/fleet/fleetMain.png"
import fleet1 from "../../../../public/project/fleet/fleet1.png"
import fleet2 from "../../../../public/project/fleet/fleet2.png"
import bctMain from "../../../../public/project/blockchainteam/bctMain.png"
import bct from "../../../../public/project/blockchainteam/bct.png"
import mtcdMain from "../../../../public/project/MTCD/mtcdMain.jpg"
import mtcd1 from "../../../../public/project/MTCD/mtcd1.png"
import perfMain from "../../../../public/project/perfConnect/perfconnectMain.png"
import perf1 from "../../../../public/project/perfConnect/perfConnect1.png"
import perf2 from "../../../../public/project/perfConnect/perfConnect2.png"
import collectionChainMain from "../../../../public/project/collectorChain/collectorChainMain.png"
import collectionChain1 from "../../../../public/project/collectorChain/collectorChain1.png"
import collectionChain2 from "../../../../public/project/collectorChain/collectorChain2.png"
import ainuMain from "../../../../public/project/ainu/ainuMain.png"
import ainu1 from "../../../../public/project/ainu/IMG_8613.jpeg"
import ainu2 from "../../../../public/project/ainu/IMG_8614.jpeg"
import cryptoBottleMain from "../../../../public/project/cryptobottle/cryptoBottleMain.png"
import cryptoBottle1 from "../../../../public/project/cryptobottle/cryptoBottle1.png"
import cryptoBottle2 from "../../../../public/project/cryptobottle/cryptoBottle2.png"



interface Project {
    slug: string;
    name: string;
    description: string;
    imageMain:StaticImageData;
    image: StaticImageData;
    secondImage? : StaticImageData;
    detail1: string;
    detail2? : string;
    detail3? : string;
    stack: string[],
    link? :string
  }

const projects : Project[] = [
  { slug: 'ainu', 
    name: 'Aïnu', 
    description: 'App iOS : La voie des sportifs', 
    imageMain: ainuMain,
    image: ainu1,
    secondImage:ainu2, 
    detail1:"Aïnu est une application iOS communautaire sportive. Elle permet à des sporti􏰀s pratiquant une activité en extérieur de poster des in􏰀ormations sur les conditions de pratique de leur sport sur un site à un instant donné.",
    detail2:"The application is based on geolocalized information, organized by sport and created solely by users. Its aim is to enable users to enjoy outdoor sports in the safest possible conditions.",
    stack:["swift","swift UI","X Code"],
    link:"https://testflight.apple.com/join/CBz9u3Nz"
    },
    { slug: 'crypto-bottle', 
    name: 'Crypto Bottle', 
    description: 'marketing and investment NFTs wine inspired ', 
    imageMain: cryptoBottleMain,
    image: cryptoBottle1,
    secondImage:cryptoBottle2, 
    detail1:"Crypto Bottle est une plateforme permettant de concevoir un NFT unique, un “super NFT” combinant l’aspect artistique, l’aspect financier et des avantages dans la vie de tout les jours.",
    detail2:'Chaque personne ou institution pourra devenir un "domaine" et proposer des "cuvées", en incorporant à chaque "bottle" des crypto monnaie ainsi que des avantages réservés aux détenteurs ',
    detail3:"Developpement fullstack de l'application. Beta fermée en cours. Lancement mainnet courant T4 2024",
    stack:["nextjs","react","typescript","tailwind","firebase","thirdweb"],
    link:"https://app.cryptobottle.fr/"
    },
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
    { slug: 'collector-chain', 
    name: 'Collector chain', 
    description: 'Tokenisation and fractionalisation of physical collectibles', 
    imageMain: collectionChainMain,
    image: collectionChain1,
    secondImage : collectionChain2, 
    detail1:"With Collector Chain, create, buy and sell digitalized and fractionated physical collectibles. Collector Chain is a platform which ease your collector hobby thanks to shares fractionalization",
    detail2:"Anyone can ask for fractionalisation of any object. The curation and valuation are done by experts. Moreover, by acquiring real ownership shares of the object instead of the real object, collect is becoming more sustainable by avoiding new object production pressure",
    stack:["create react app","react","typescript","solidity","hardhat"],
    link:"https://collector-chain-alpha.vercel.app//"
    },
    { slug: 'confidential-customer', 
    name: 'client confidentiel', 
    description: 'Smart contract NFT', 
    imageMain: mtcdMain,
    image: mtcd1, 
    detail1:"Développement d'une bibliothèqye de smart contract type. Chaque smart contract sert de modèle paramètrable pour le lancement d'une nouvelle collection avec des paramètre spécifique : type de NFT, prix, supply, partage des revenues,...",
    detail2:"Chaque contrat prends en charge la gestion de rôles, le partage de revenu automatisé et la possibilité de payer les NFTs en actif numérique stable (stable coin) ",
    stack:["solidity","hardhat","open zeppelin"],
    }
    
  ];

export default projects