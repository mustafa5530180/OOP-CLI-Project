#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const programStart = async (persons) => {
    while (true) {
        console.log("Welcome!");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["Staff", "Student", "Exit"]
        });
        if (ans.select === "Staff") {
            console.log("You approach the staff room. Please feel free to ask any question.");
        }
        else if (ans.select === "Student") {
            const ansStudent = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you wish to engage with: "
            });
            let student = persons.students.find(val => val.name === ansStudent.student);
            if (!student) {
                student = new Student(ansStudent.student);
                persons.addStudent(student);
                console.log(`Hello, I am ${student.name}. Nice to meet you!`);
                console.log("New student added.");
            }
            else {
                console.log(`Hello, I am ${student.name}. Nice to meet you!`);
            }
            console.log("Current student list:");
            console.log(persons.students.map(s => s.name).join(", "));
        }
        else if (ans.select === "Exit") {
            console.log("Exiting program...");
            break;
        }
    }
};
const persons = new Person();
programStart(persons);
// import inquirer from "inquirer";
// class Student{
//     name:string
//     constructor(n:string){
//         this.name=n
//     }
// }
// class Person {
//     students:Student[]=[]
//     addStudent(obj:Student){
//         this.students.push(obj)
//     }
// }
// const programStart= async(persons:Person)=>{
//     do{
//     console.log("Welcome!");
//     const ans=await inquirer.prompt({
//         name:"select",
//         type:"list",
//         message:"Whom Would you like  to interact with?",
//         choices:["Staff","Student","Exit"]
//     })
//     if (ans.select=="Staff"){
//         console.log("You approach the staff room . Please feel free to ask any Question");
//     }else if (ans.select=="Student"){
//         const ans= await inquirer.prompt({
//             name:"Student",
//             type:"input",
//             message:"Enter the Student's  name  you wish to engage with: "
//         })
//         const student=persons.students.find(val=>val.name==ans.student)
//         if(!Student){
//             const name= new Student(ans.Student)
//             persons.addStudent(name)
//             console.log(`Hello i am ${name.name}.Nice to Meet You!`);
//             console.log("New Student Added");
//             console.log("Current Student List ");
//             console.log(persons.students);  
//         }
//     }else{
//         console.log(`Hello i am ${Student.name} Nice to Meet You !`);
//         console.log("Exit Student List: ");
//         console.log(persons.students);
//     }else if(ans.select=="Exit"){
//         console.log("Exiting Program............");
//         process.exit()
//     }
//     }while(true)
// }
// programStart(Person)
