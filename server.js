const express = require('express');
const { DatabaseSync } = require('node:sqlite');
const fs = require('node:fs');
const path = require('node:path');
function createApp(dbPath = path.join(__dirname,'data','students.db')) {
  if(dbPath !== ':memory:') fs.mkdirSync(path.dirname(dbPath),{recursive:true});
  const db = new DatabaseSync(dbPath);
  db.exec('CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT NOT NULL, enrollment TEXT NOT NULL UNIQUE, email TEXT NOT NULL, status TEXT NOT NULL DEFAULT \'Activo\')');
  const app = express();
  app.use(express.json({limit:'32kb'}));
  app.use(express.static(path.join(__dirname,'public')));
  for(const file of fs.readdirSync(path.join(__dirname,'routes')).filter(f=>f.endsWith('.js')).sort()) require('./routes/'+file)(app,db);
  app.use((err,req,res,next)=>{
    if(err.type==='entity.parse.failed') return res.status(400).json({error:'JSON invalido'});
    console.error(err); res.status(500).json({error:'Error interno'});
  });
  return {app,db};
}
if(require.main===module) createApp().app.listen(3000,'127.0.0.1',()=>console.log('http://localhost:3000'));
module.exports={createApp};
