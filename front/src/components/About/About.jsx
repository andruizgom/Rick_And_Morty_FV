import style from './About.module.css';
import Tools from '../About/Images/Tools.png'
import Jerry from '../About/Images/Jerry.gif';
const About = () => {

    return(
        <div className={style.container}>
            <h2>Created by Anderson Ruiz Gómez</h2>
            <p>Bogotá, Colombia</p>
            <p>Full stack developer student and dog lover</p>
            <img className={style.Tools} src={Tools}/>
            <img className={style.Jerry} src={Jerry}/>
            
        </div>
    )

}

export default About;