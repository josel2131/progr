import mongoose from 'mongoose';
const URI= 'mongodb+srv://chunpun:Mimama1985+@cluster0.jrylw3n.mongodb.net/dbEventos?retryWrites=true&w=majority';

try {
    const db = await mongoose.connect(URI);
    console.log("estas conectao a:", db.connection.name);
   } catch (error) {
    console.error(error);
   }