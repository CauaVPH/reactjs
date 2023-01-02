import styles from './list.module.css'

const dados = {
    salario:2000,
    beneficio:'férias toda sexta'
}

const salario_user = dados['salario'];

function Lista_users() {
    return(
        <>
          <p className={styles.p}>Salario do dev é: {dados['salario']}</p>
          <p>Seu benefício é {dados['beneficio']}</p>
        </>
    )
}

export default Lista_users