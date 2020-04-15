//Node & Express Rapid Fire

//Reference express module
let express = require('express');

//Create server using express method and save under app
let app = express();

//Create listener for server under port 7000
app.listen(7000, () => {
    console.log('Listening on port 7000')
})

//************************************************************************ */
//Route with a dynamic name
app.get('/greeting/:name',(req,res)=>{
    res.send(`Hello there ${req.params.name}!`)
})

//REST GET - Read in CRUD
app.get('/student/:id',(req,res)=>{
    let jsonStudent = {
        id: req.params.id,
        name: 'Charlie',
        email: 'charlie@gmail.com',
        status: 'DELETED'
    };
    
    //return the student record
    res.send(jsonStudent);
})

//REST DELETE - Delete in CRUD
app.delete('/student/:id',(req,res)=>{
    //we would normally actually delete it
    let jsonStudent = {
        id: req.params.id,
        name: 'Johnny',
        email: 'johnny@gmail.com',
        status: 'DELETED'
    };
    //return the student record
    res.send(jsonStudent)
}) 

//Tell express to use json middleware for requests/responses
app.use(express.json());

//REST CREATE/POST - Create in CRUD
app.post('/student/:id',(req,res)=>{
    req.body.status = 'CREATED';
    res.send(req.body);
})

//REST UPDATE/PUT - update in CRUD
app.put('/student/:id',(req,res)=>{
    req.body.status = 'UPDATED';
    res.send(req.body);
})
//****************************************************************** */


// //REST GET - Read in CRUD
// app.get('/student/:id', (req, res) => {

//     const studentArray = [
//         {
//             id: 0,
//             name: 'Charlie',
//             email: 'charlie@gmail.com'
//         },
//         {
//             id: '1',
//             name: 'Lucy',
//             email: 'lucy@gmail.com'
//         },
//         {
//             id: '2',
//             name: 'Billy',
//             email: 'billy@gmail.com'
//         }
    
//     ];
    
//     // let student='';

//     // if(params.id == '0'){
//     //     student = studentArray[0];
//     // } else if(params.id == '1'){
//     //     student = studentAray[1];
//     // } else if(params.id =='2'){
//     //     student = studentArray[2];
//     // }
   
  
//     res.send(studentArray.id==req.params.id);
// })

// //REST DELETE - Delete in CRUD
// app.delete('/student/:id', (req, res) => {
//     //we would normally actually delete it
//     let jsonStudent = {
//         id: req.params.id,
//         name: 'Johnny',
//         email: 'johnny@gmail.com',
//         status: 'DELETED'
//     };

//     //TODO: Delete the student from array based on ID passed in
//     //NOT WORKING???
//     studentArray.slice(jsonStudent);
//     res.send(studentArray);
// })

// //Tell express to use json middleware for requests/responses
// app.use(express.json());

// //REST CREATE/POST - Create in CRUD
// app.post('/student/:id', (req, res) => {
//     req.body.status = 'CREATED';
//     //TODO: Add student to an array
//     //NOT WORKING
//     studentArray.push({
//         id: 1234,
//         name: 'Bob',
//         email: 'bob@gmail.com',
//         status: 'ADDED'
//     })

//     res.send(studentArray);
// })

// //REST UPDATE/PUT - update in CRUD
// app.put('/student/:id', (req, res) => {
//     //TODO: Update student in array
//     req.body.status = 'UPDATED';
//     //NOT WORKING
//     studentArray.name = 'Alice';
//     res.send(studentArray);
// })