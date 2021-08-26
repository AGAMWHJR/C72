 Name_of_the_students = [];

 function Switch() {
     document.getElementById("Btn_submit").style.display="none";
     document.getElementById("Btn_sort").style.display="inline-block";

     name1 = document.getElementById("Name1").value;
     name2 = document.getElementById("Name2").value;
     name3 = document.getElementById("Name3").value;
     name4 = document.getElementById("Name4").value;
     name5 = document.getElementById("Name5").value;

     Name_of_the_students.push(name1);
     Name_of_the_students.push(name2);
     Name_of_the_students.push(name3);
     Name_of_the_students.push(name4);
     Name_of_the_students.push(name5);

     document.getElementById("all_names").innerHTML=Name_of_the_students;
     console.log(Name_of_the_students);
 }
 
 function sorting() {
     Name_of_the_students.sort();
     document.getElementById("all_names").innerHTML=Name_of_the_students;
     console.log(Name_of_the_students);
 }
