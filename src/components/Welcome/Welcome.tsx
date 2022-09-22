import './Welcome.css';
import { useTranslation } from 'react-i18next';
import ImgFz from '../../assets/img/my-fz.png';

const Welcome = () => {
    const { t } = useTranslation();
    return (
        <div className="center welcome">
            <div className='row w-100 container'>
                <div className='col-md-6 center'>
                    <div>
                        <h3>{t('Welcome')}</h3>
                        <div className=''>
                            <h1 className='d-inline-block title'>{t('Name')}</h1>
                        </div>
                        <h4>{t('profession')}</h4>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className='w-100' src={ImgFz} alt="undraw-Online-research-re-9nt7" />
                </div>
            </div>
        </div>
    );
}

export default Welcome