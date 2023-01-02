import styles from './User.module.css'

function User({nome, nome2}) {

    return (
        <div>
            <p className={styles.pNomes}>User 1: {nome}<br/> User 2: {nome2}</p>
        </div>
    )
}

export default User