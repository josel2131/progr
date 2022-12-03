import express  from "express";
import {URI} from '../conectarMongodb.js';
import { regusuario, showuser, showoneuser, upuser, deluser } from '../controllers/userControllers.js';
//import cors from 'cors';
export const router = express.Router();





router.get('/', (req,res) => {
    res.send('bienvenidos a node js desde la raiz');
    console.log("connected to", db.connection.name);

})

router.get('/login',(req,res)=>{
    res.send('Bienvenidos carevergas');

})

router.post('/reguser',regusuario ); 
router.get('/shuser', showuser );
router.get('/shuser/:id', showoneuser);
router.put('/upuser/:id',upuser);
router.delete('/deluser/:id' ,deluser);

/*router.post('/agregar',(req,res)=>{
    res.send('archivo grabado con exito');
})*/

router.delete('/delete',(req,res)=>{
    res.send('archivo eliminado con exito');
})

export default router;