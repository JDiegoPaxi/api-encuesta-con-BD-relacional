const {dbConection} =require('../database/config');

const allencuestas=async(req,res)=>{
 
 const encuestas=await dbConection.query('select * from CUESTIONARIO');
 
 return res.json(
     {
         ok:true,
         encuestas:encuestas.rows
     }
 );
}
const getencuesta=async(req,res)=>{
  const {id}=req.params;
  
  var encuesta=await dbConection.query(`select * from PREGUNTA where (${id}=PREGUNTA.idcue)`);
  var resp;

  for (const e of encuesta.rows) {
    resp=await dbConection.query(`select * from OPCION_RESPUESTA where (${e['idp']}=OPCION_RESPUESTA.idpreg)`);
    e.opciones=resp.rows; 
  }
 

  return res.json(
      {
          ok:true,
          encuesta:encuesta.rows
      }
  );

}

module.exports={
 allencuestas,
 getencuesta
}