
import { TbLetterP } from "react-icons/tb";
import { TbLetterR } from "react-icons/tb";
import { TbLetterS } from "react-icons/tb";
const Logo = ({ size = 30 }) => {
    return (
        <div className='flex'>
            {/* <img src={Logo} alt="My-Logo" /> */}
            <TbLetterP size={size} />
            <TbLetterR size={size} />
            <TbLetterS size={size} />
        </div>
    )
}

export default Logo