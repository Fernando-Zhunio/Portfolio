import { useTranslation } from 'react-i18next';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';
import { SiAngular, SiCplusplus, SiJava, SiJquery, SiLaravel, SiMaterialdesign, SiPostgresql, SiReact, SiTypescript, SiUnity, SiVuedotjs } from 'react-icons/si'
import { TbCSharp } from 'react-icons/tb'
import { FaBootstrap } from 'react-icons/fa';
import { DiIonic } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import ImgKnow from '../../assets/img/know.jpg';
import './Know.css';
const Know = () => {
    const { t } = useTranslation();
    return (
        <div className="know mb-5">
            <div>
                <div className="mb-5">
                    <div>
                        <h2 className="display-4">{t('knowledge')}</h2>
                        <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. aliquid ipsam sit </p>
                    </div>
                </div>
                <div className="container px-md-5">
                    <div className="row px-md-5 content-items">
                        <div className="col-md-4">
                            <div className="p-3 shadow ">
                                <div>
                                    <h4>{t('Other')}</h4>
                                    <ul>

                                        <li className="materialui-color">Angular Material <SiMaterialdesign size={40} /></li>
                                        <li className="ionic-color">Ionic <DiIonic  size={40} /></li>
                                        <li className="mysql-color">MySql <GrMysql size={40} /></li>
                                        <li className="postgresql-color">Postgresql <SiPostgresql size={40} /></li>
                                        <li className="unity-color">Unity <SiUnity size={40} /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3 shadow mt-md-5">
                                <div>
                                    <h4>{t('Programming languages')}</h4>
                                    <ul>
                                        <li className="html-color">HTML <AiFillHtml5 size={40} /></li>
                                        <li className="css-color">CSS <IoLogoCss3 size={40} /></li>
                                        <li className="js-color">JavaScript <IoLogoJavascript size={40} /></li>
                                        <li className="typescript-color">Typescript <SiTypescript size={40} /></li>
                                        <li className="csharp-color">C# <TbCSharp size={40} /></li>
                                        <li className="cplusplus-color">C++ <SiCplusplus size={40} /></li>
                                        <li className="java-color">Java<SiJava size={40} /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3 shadow ">
                                <div>
                                    <h4>Frameworks y librerías</h4>
                                    <ul>
                                        <li className="angular-color">Angular <SiAngular size={40} /></li>
                                        <li className="react-color">React <SiReact size={40} /></li>
                                        <li className="vue-color">Vue <SiVuedotjs size={40} /></li>
                                        <li className="laravel-color">Laravel <SiLaravel size={40} /></li>
                                        <li className="jquery-color">JQuery <SiJquery size={40} /></li>
                                        <li className="bootstrap-color">Bootstrap <FaBootstrap size={40} /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Know;