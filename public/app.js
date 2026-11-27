const $=id=>document.getElementById(id);
const actions=[];
function notify(message,error=false){$('message').textContent=message;$('message').classList.toggle('error',error);}
async function api(url='/api/students',options={}){const r=await fetch(url,{...options,headers:{'Content-Type':'application/json',...options.headers}});const data=await r.json();if(!r.ok)throw Error(data.error||'Error de solicitud');return data;}
function cell(row,value){const td=document.createElement('td');td.textContent=value;row.append(td);return td;}
