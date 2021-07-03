import InputComponent , {InputComponentHe} from "../Input/Input";
import { GlobalSetTheme } from '../ConText/ConText';

export default function ContactMe() {
    const getContext = GlobalSetTheme();
    return (
        <div>
           {getContext.language ==="en"? <InputComponent/> :<InputComponentHe/>}
        </div>
    )
}
