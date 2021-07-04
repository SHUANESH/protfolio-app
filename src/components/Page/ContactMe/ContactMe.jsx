import InputComponent , {InputComponentHe} from "../../Features/Input/Input";
import { GlobalSetTheme } from '../../Features/ConText/ConText';

export default function ContactMe() {
    const getContext = GlobalSetTheme();
    return (
        <div>
           {getContext.language ==="en"? <InputComponent/> :<InputComponentHe/>}
        </div>
    )
}
