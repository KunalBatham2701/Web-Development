// let lecture=10;
// let section =3;
// let title='javascript';

// const course={
//     lecture: 10,
//     section :3,
//     title : 'javascript',
//     notes:{
//         introduction: "welcome to JS course"
//     },
//     enroll(){
//         console.log('you are successfully enrolled');
//     }
// }
// function enroll(){
//     console.log('you are successfully enrolled');
// }
// course.enroll()
// console.log(course);
// course.price=999;
function createcourse(){
    return{
        title : title,
        enroll(){
            console.log('you are successfully enrolled');
        }
    }
}
const course=createcourse();
course.enroll()