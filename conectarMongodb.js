import mongoose from 'mongoose';
//
export const URI = 'mongodb+srv://chunpun:Mimama1985+@cluster0.jrylw3n.mongodb.net/dbEventos';
//vs'mongodb+srv://chunpun:Mimama1985+@cluster0.jrylw3n.mongodb.net/test'

//shell 'mongodb+srv://chunpun:Mimama1985+@cluster0.jrylw3n.mongodb.net/dbEventos?retryWrites=true&w=majority';

try {
    const db = await mongoose.connect(URI);
    console.log("estas conectao a:", db.connection.name);
   } catch (error) {
    console.error(error);
   }

   export default URI ;

  
   
 