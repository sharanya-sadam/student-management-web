
let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

function addStudent(){

let id=document.getElementById("id").value;
let name=document.getElementById("name").value;
let marks=document.getElementById("marks").value;

students.push({id,name,marks});

localStorage.setItem("students", JSON.stringify(students));

displayStudents();
}

function displayStudents(){

let table=document.getElementById("studentTable");

table.innerHTML=
`<tr>
<th>ID</th>
<th>Name</th>
<th>Marks</th>
<th>Action</th>
</tr>`;

students.forEach((s,index)=>{

let row=table.insertRow();

row.insertCell(0).innerText=s.id;
row.insertCell(1).innerText=s.name;
row.insertCell(2).innerText=s.marks;

let btn=document.createElement("button");
btn.innerText="Delete";

btn.onclick=function(){

students.splice(index,1);

localStorage.setItem("students", JSON.stringify(students));

displayStudents();

};

row.insertCell(3).appendChild(btn);

});

}