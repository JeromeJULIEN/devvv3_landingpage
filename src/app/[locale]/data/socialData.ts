import { StaticImageData } from "next/image";
import linkedin from "../../../../public/social/linkedin.png"
import github from "../../../../public/social/github.png"
import x from "../../../../public/social/x.png"
import nodeguardian from "../../../../public/social/nodeguardian.png"
import alyra from "../../../../public/social/alyra.png"


interface Social {
    name : string,
    logo : StaticImageData,
    link : string
}

const socialData : Social[] = [
    {name : "linkedin", logo: linkedin, link:"https://www.linkedin.com/in/jerome-0x-dev/"},
    {name : "github", logo: github, link:"https://github.com/JeromeJULIEN"},
    {name : "alyra", logo: alyra, link:"https://certificate.bcdiploma.com/check/0BA255AC8C62B6401282FE36ED738E2271D46FD07EF51E2EC710C93AE2325E2CMkRscUd3S053Q2RiWUlIVzUreWl3cFdlMmE5amZtOG4xazF3YUNiRkVTUk1DVHpS"},
    {name : "x", logo: x, link:"https://twitter.com/jerome_0x_dev"},
    {name : "node guardian", logo: nodeguardian, link:"https://nodeguardians.io/character/ca14a3c23f77"},
]

export default socialData