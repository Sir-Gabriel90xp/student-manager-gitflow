module.exports=(app,db)=>app.put('/api/students/:id',(req,res)=>{
const {name,enrollment,email,status}=req.body||{};
if(![name,enrollment,email].every(x=>typeof x==='string'&&x.trim())||!/^\S+@\S+\.\S+$/.test(email)||!['Activo','Inactivo'].includes(status))return res.status(400).json({error:'Datos invalidos'});
if(!db.prepare('SELECT id FROM students WHERE id=?').get(req.params.id))return res.status(404).json({error:'Registro no encontrado'});
if(db.prepare('SELECT id FROM students WHERE enrollment=? AND id<>?').get(enrollment.trim(),req.params.id))return res.status(409).json({error:'Matricula duplicada'});
db.prepare('UPDATE students SET name=?,enrollment=?,email=?,status=? WHERE id=?').run(name.trim(),enrollment.trim(),email.trim(),status,req.params.id);res.json({ok:true});
});