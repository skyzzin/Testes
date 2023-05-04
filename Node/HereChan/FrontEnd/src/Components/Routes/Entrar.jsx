import '../../static/css/Criar.css'

const Entrar = ()=>{
    return(
        <div className='body'>
          <a href="/"><h1>Sejá Bem Vindo Ao BlogScolar</h1></a>

          <form action="" method="post" className='form'>
               
                <div>
                <label htmlFor="">Digite Seu Email</label>
                <input type="text" />
                </div>

                <div>
                    <label htmlFor="">Digite Sua Senha</label>
                    <input type="password" name="" id="" />
                </div>

                <button type="submit">Entrar</button>
                <br />
                <a href="/cadastrar">Cadastrar-se</a>
          </form>
         
        </div>
    );
}

export default Entrar