const PORT = process.env.PORT ?? 8001
const express = require('express')
const app = express()
const pool = require('./db')
const cors = require("cors")

app.use(cors())
app.use(express.json())

//post all todos
app.post('/todos',async(req, res)=>{
    const {Description,title,progress}=req.body; 
    try{
       const todos =  await pool.query("INSERT INTO todoo(Description, title, progress) VALUES ($1, $2,$3) RETURNING *",
       [Description, title, progress])
       res.json(todos.rows)
    }catch(err){
        console.error(err);
    }
})

app.get('/todoss', async (req, res)=>{
    // const {userEmail,title,description,progress} = req.params
    // console.log(userEmail,title,description,progress)
    try{
        const todos = await pool.query('SELECT * FROM todoo')

        res.json(todos.rows)
    }catch(err){
        console.error(err)
    }
})

app.put('/todoss/:id',async (req, res)=>{
    try{
        const {id} = req.params;
        const {title} = req.body;
        const {progress} = req.body;
        const updateTodo = await pool.query("UPDATE todoo SET title = $1, progress=$2 WHERE id=$3 RETURNING *",[title, progress,id]);
        res.json(updateTodo.rows[0]);
    }catch(err){
        console.log(err);
    }
})  
app.delete('/todoss/:id', async (req, res) => {
    const todoId = req.params.id;
  
    try {
      const del = await pool.query('DELETE FROM todoo WHERE id = $1', [todoId]);
      res.json(del.rows[0]);
    } catch (error) {
      console.error('Error deleting todo:', error);
      res.status(500).json({ error: 'An error occurred while deleting the todo' },error);
    }
  });

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))