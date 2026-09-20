fetch('../data/poses.json').then(r=>r.json()).then(data=>{
 const el=document.getElementById('poses');
 data.poses.forEach(p=>{
  const c=document.createElement('div'); c.className='card';
  c.innerHTML=`<h3>${p.name}</h3><p>${p.category}</p>`;
  c.onclick=()=>showPose(p);
  el.appendChild(c);
 });
});
function showPose(p){
 const svg=window.SVGRenderer.render(p);
 document.getElementById('viewer').innerHTML=svg;
 document.getElementById('download').onclick=()=>{
  const b=new Blob([svg],{type:'image/svg+xml'});
  const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=p.id+'.svg';a.click();
 };
}
