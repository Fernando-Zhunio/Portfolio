import './Switch.css';
import {IoLanguageOutline} from 'react-icons/io5'
import { useTranslation } from 'react-i18next';
const Switch = () => {
    const { i18n } = useTranslation();
    function handleChange(e: any) {
        const value = e.target.checked;
        // console.log(e)
        i18n.changeLanguage(value ? 'en' : 'es');
    }
    return (
        <label className="switch">
            <input onChange={handleChange} type="checkbox" />
            <span className="slider round">
                <span className='road center'><IoLanguageOutline/></span>
                <span className="item-lang on">Es</span>
                <span className="item-lang off">En</span>
            </span>
        </label>
    )
}

export default Switch;