module.exports=(app,db)=>app.post('/api/students',(req,res)=>{
const {name,enrollment,email,status='Activo'}=req.body||{};
if(![name,enrollment,email].every(x=>typeof x==='string'&&x.trim())||!/^\S+@\S+\.\S+$/.test(email)||!['Activo','Inactivo'].includes(status))return res.status(400).json({error:'Datos invalidos'});
if(db.prepare('SELECT id FROM students WHERE enrollment=?').get(enrollment.trim()))return res.status(409).json({error:'Matricula duplicada'});
const result=db.prepare('INSERT INTO students(name,enrollment,email,status) VALUES(?,?,?,?)').run(name.trim(),enrollment.trim(),email.trim(),status);
res.status(201).json({id:Number(result.lastInsertRowid)});
});