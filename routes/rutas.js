import express  from "express";
import cors from 'cors';
export const router = express.Router();
//app.use(router);

router.get('/', (req,res) => {
    res.send('bienvenidos a node js desde la raiz');

})

router.get('/login',(req,res)=>{
    res.send('Bienvenidos carevergas');

})

router.post('/agregar',(req,res)=>{
    res.send('archivo grabado con exito');
})

router.delete('/delete',(req,res)=>{
    res.send('archivo eliminado con exito');
})

export default router