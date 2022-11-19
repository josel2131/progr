import express  from "express";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())
/*app.use('/usuarios',blogRoutes)*/
app.use(router)
router.get('/', (req,res) => {
    res.send('bienvenidos a node js desde la raiz');

})

router.get('/login',(req,res)=>{
    res.send('Bienvenidos carevergas');

})

router.post('/agregar',(req,res)=>{
    res.send('archivo grabado con exito');
})


/*app.get('/',(req,res,)=>{ 
    res.send('hola carevergas, seguro que son cachones triplesmier erdaaa estamos en linea')
})*/

app.listen(8000, ()=> {
    console.log('Servidor Corriendo en http://localhost:8000')
})