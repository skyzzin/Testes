
import axios from "axios"

const Usuario = ()=>{
    axios.get('/usuario').then(()=>{

        return(
            <div>
                <h1>Sou Usuario</h1>
            </div>
        )
    }).catch()
}

export default Usuario