import '../static/css/App.css'


const App = ()=>{

    fetch('127.0.0.1:5000/').then(Response=>console.log(Response))
    return(
        <div>
            <header className="header">
                <a href="/"><h1>BlogScolar</h1></a>
            </header>

            <main className='main'>
                <h1>Oque é o BlogScolar?</h1>
                <p>
                    o BlogScolar é Um Site De Fofocas Do Duque De Caxias <br />
                    aqui você vai ter Chat's Pra Conversar Com Todo Mundo <br />
                    mandar menssagens imagens e ver as maiores fofocas que <br />
                    estão rolando no mural da fofoca.
                </p>
                <br /> <br />
                <h1>Porque Usar o Site?</h1>
                <p>
                    Porque com o site você pode ter uma experiência melhor <br />
                    comparado a uma pagina de instagram você alem de poder <br />
                    debater sobre as fofocas você vai poder enviar as fofocas <br />
                    direto pro site para que nossos administradores coloque no ar <br />
                    e as fofocas ficam salvas no site então se você poderar ver quando quiser.

                </p>

                <br /> <br />
                <h1>Crie Sua Conta Clicando Aqui</h1>
                 <a href="/cadastrar" data='criar-uma-conta'>Criar Uma Conta</a>
              
                 <a href="/entrar" data='criar-uma-conta'>Já Tenho Uma Conta</a>
            </main>
        </div>
    );
}

export default App