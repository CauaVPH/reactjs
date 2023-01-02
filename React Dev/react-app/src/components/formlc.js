import styles from './form.module.css'
import faceImg from '../facebook.png'
import twiterImg from '../twitter.png'

function Form() {

    return (
        <form className={styles.form}>
            <div className={styles.textLogin}>
             <h2>Login</h2>
             <h5>Don't have a account? <b>Create your here!</b></h5>
            </div>
            <div>
              <input type="email" max-length="30" required placeholder="Username"></input>
              <input type="password" max-length="40" required placeholder="Password"></input>
              <input type="checkbox"></input>
              <label className={styles.label1}>Remember me</label> 
              <label className={styles.label2}>Forgot password</label>
              <button type="submit">LOGIN</button>
            </div>
            <footer>
                <h4>Or login with</h4> <img src={faceImg}></img>
                <img src={twiterImg}></img>
            </footer>
        </form>
    )
}

export default Form