import { Inter, Lora,  Poppins, Urbanist } from 'next/font/google'

// define your variable fonts
const inter = Inter({subsets:['latin']})
const lora = Lora({subsets:['latin']})
const poppins = Poppins({weight:"400", subsets:['latin']})
const urbanist = Urbanist({subsets:['latin']})
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder

export { inter, lora, poppins, urbanist }