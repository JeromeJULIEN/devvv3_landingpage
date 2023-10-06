import { StaticImageData } from "next/image";
import linkedin from "../../../public/social/linkedin.png"
import github from "../../../public/social/github.png"
import x from "../../../public/social/x.png"
import nodeguardian from "../../../public/social/nodeguardian.png"


interface Social {
    name : string,
    logo : StaticImageData,
    link : string
}

const socialData : Social[] = [
    {name : "linkedin", logo: linkedin, link:"https://www.linkedin.com/in/jerome-0x-dev/"},
    {name : "github", logo: github, link:"https://github.com/JeromeJULIEN"},
    {name : "x", logo: x, link:"https://twitter.com/jerome_0x_dev"},
    {name : "node guardian", logo: nodeguardian, link:"https://nodeguardians.io/character/ca14a3c23f77"},
]

export default socialData