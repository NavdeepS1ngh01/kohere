import Navbar from "@/components/Navbar";
import styles from './style.module.css'

export default function Project(){
    return(
        <>
        <Navbar></Navbar>
        <div className={`patrick-hand-regular ${styles.projectContainer}`}>
            <p>Be our first client, click the contact button and get in touch!</p>
        </div>
        </>
    )
}