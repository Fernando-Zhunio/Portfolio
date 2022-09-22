 import Switch from '../Switch/Switch';
import './Navbar.css';
import {AiOutlineLike} from 'react-icons/ai'
import { useTranslation } from 'react-i18next';
 const Navbar = () => {
    const { t } = useTranslation();

    return (
        <nav className="navbar-fz">
            <div className=''>
                <span>
                    <img className="logo" src="https://scontent.fgye1-2.fna.fbcdn.net/v/t1.18169-1/13615042_1057576934337090_4373639136855043676_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFjY-iUQcBZXlE-Nqz-prroAq34MFNUfL4CrfgwU1R8vir6irRrsHu4lHYZZezJfmmdHfdLpM8TOMwgcFSdDWpU&_nc_ohc=wymTUQB9lgsAX9yzeLM&_nc_ht=scontent.fgye1-2.fna&oh=00_AT846pm9PLS0OBUSezgaXzR5srARY8FJJjKIzVoN6FyELw&oe=634CB595" alt="logo" />
                </span>
            </div>
            <div className="buttons-navbar">
                <a href="">{t('knowledge')}</a>
                <a href="#Jobs">{t('Jobs')}</a>
                <a href="">{t('Contact')}</a>
                <a href="">{t('About me')}</a>
            </div>
            <div className='center'>
                <Switch/>
                <span className='mx-3 px-2 py-1 py-0 like'>
                    <span className='center'>
                        <AiOutlineLike size={25}/>
                        <span>300</span>
                    </span>
                </span>
            </div>
        </nav>
    )
 }

 export default Navbar