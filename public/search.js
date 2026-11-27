$('search-slot').innerHTML='<label>Buscar estudiantes<input id="search" type="search" placeholder="Nombre, matricula o correo"></label>';
function applySearch(){const q=$('search').value.trim().toLowerCase();render(students.filter(s=>[s.name,s.enrollment,s.email,s.status].some(v=>v.toLowerCase().includes(q))));}
$('search').addEventListener('input',applySearch);