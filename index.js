/*
Release 1. Напишите код, выполнив задание из каждого пункта отдельной строкой:
Создайте массив group
Добавьте в него студента из предыдущего задания
Добавьте в массив еще 2 случайных студентов с заполненными свойствами firstName, lastName.
*/
// Release 0
const student = {};
student.firstName = 'Petr';
student.lastName = 'Perviy';
student.firstName = 'Petya';
delete student.firstName;
console.log(student)
// Release 1
const group = [];
group.push(student)
const student1 = {firstName: 'Pasha', lastName: 'Morozov'}
const student2 = {firstname: 'Lesha', lastname: 'Pavlikov'}
group.push(student1, student2)
console.log(group)