import dotenv from 'dotenv'
import  express from 'express'
dotenv.config()

const Pool= require('pg').Pool;
const pool = new Pool({
    host : "localhost",
    user: "postgres",
    password:"admin",
    database:"HR",
    port : 5432
})

const app = express()
app.use(express.json())

const port = process.env.PORT || 3003

app.listen(port,()=>{console.log("Server listening on Port "+port)})
/* Region */
app.get('/api/region',(req,res)=>{
    pool.query('select * from regions',
    [],
    (error,result)=>{
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/region/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from regions where region_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/region/',(req,res)=>{
    const {region_name} = req.body
    pool.query('insert into regions (region_name) values ($1)',
    [region_name],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/region/:id',(req,res)=>{
    const {id} = req.params
    const {region_name} = req.body
    pool.query("update regions set region_name=$1 where region_id=$2",
    [region_name,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/region/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from regions where region_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})


/* countries */
app.get('/api/countries',(req,res)=>{
    pool.query('select * from countries',
    [],
    (error,result)=>{
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/countries/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from countries where country_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/countries/',(req,res)=>{
    const {country_id,country_name,region_id}=req.body
    pool.query('insert into countries (country_id, country_name,region_id) values ($1,$2,$3)',
    [country_id,country_name,region_id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/countries/:id',(req,res)=>{
    const {id} = req.params
    const {country_id,country_name,region_id} = req.body
    pool.query('update countries set country_id=$1,country_name=$2, region_id=$3 where country_id=$4',
    [country_id,country_name,region_id,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/countries/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from countries where country_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

/* department */
app.get('/api/department',(req,res)=>{
    pool.query('select * from departments',
    [],
    (error,result)=>{
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/department/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from departments where department_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/department/',(req,res)=>{
    const {department_id,department_name,location_id} = req.body
    pool.query('insert into departments (department_id,department_name, location_id) values ($1,$2,$3)',
    [department_id,department_name,location_id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/department/:id',(req,res)=>{
    const {id} = req.params
    const {department_name,location_id} = req.body
    pool.query('update departments set department_name=$1, location_id=$2 where department_id=$3',
    [department_name,location_id,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/department/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from departments where department_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

/* Location */
app.get('/api/location',(req,res)=>{
    pool.query('select * from locations',
    [],
    (error,result)=>{
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/location/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from locations where location_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/location/',(req,res)=>{
    const {location_id,street_address,postal_code,city,state_province, country_id} = req.body
    pool.query('INSERT INTO locations(location_id,street_address,postal_code,city,state_province,country_id) VALUES ($1, $2, $3, $4, $5, $6)',
    [location_id,street_address,postal_code,city,state_province, country_id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/location/:id',(req,res)=>{
    const {id} = req.params
    const {location_id,street_address,postal_code,city,state_province, country_id} = req.body
    pool.query('update locations set location_id=$1,street_address=$2,postal_code=$3,city=$4,state_province=$5,country_id=$6 where location_id=$7',
    [location_id,street_address,postal_code,city,state_province, country_id,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/location/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from departments where department_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})


/* job */
app.get('/api/job',(req,res)=>{
    pool.query('select * from jobs',
    [],
    (error,result)=>{
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/job/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from jobs where location_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/location/',(req,res)=>{
    const { job_title, min_salary, max_salary } = req.body;
    pool.query("INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ($1, $2, $3)",
    [job_title, min_salary, max_salary],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/location/:id',(req,res)=>{
    const {id} = req.params
    const { job_title, min_salary, max_salary } = req.body;
    pool.query('update jobs set job_title=$1,min_salary=$2,max_salary=$3 where job_id=$4',
    [job_title, min_salary, max_salary ,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/location/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from jobs where job_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})



/* Dependents */
app.get('/api/dependent',(req,res)=>{
    pool.query('select * from dependents',
    [],
    (error,result)=>{
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/dependent/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from dependents where dependent_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/dependent/',(req,res)=>{
    const { first_name, last_name, relationship, employee_id } = req.body;
    pool.query("INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ($1, $2, $3, $4)",
    [first_name, last_name, relationship, employee_id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/dependent/:id',(req,res)=>{
    const {id} = req.params
    const { first_name, last_name, relationship, employee_id } = req.body;
    pool.query('update dependents set first_name=$1,last_name=$2,relationship=$3,employee_id=$4 where dependent_id=$5',
    [first_name, last_name, relationship, employee_id ,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/dependent/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from dependents where dependent_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})


/* projects */
app.get('/api/project',(req,res)=>{
    pool.query('select * from projects',
    [],
    (error,result)=>{
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/project/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from projects where proj_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/project/',(req,res)=>{
    const { proj_id, proj_name, proj_cratedon,proj_duedate,proj_cust_name,proj_description,proj_status,
         proj_amount,proj_account_mgr,employee_id } = req.body;
    pool.query("INSERT INTO projects(proj_id, proj_name, proj_cratedon,proj_duedate,proj_cust_name,proj_description,proj_status,proj_amount,proj_account_mgr,employee_id) VALUES ($1, $2, $3, $4,$5,$6,$7,$8,$9,$10)",
    [proj_id, proj_name, proj_cratedon,proj_duedate,proj_cust_name,proj_description,proj_status,
        proj_amount,proj_account_mgr,employee_id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/project/:id',(req,res)=>{
    const {id} = req.params
    const {proj_id, proj_name, proj_cratedon,proj_duedate,proj_cust_name,proj_description,proj_status,
        proj_amount,proj_account_mgr,employee_id  } = req.body;
    pool.query('update projects set proj_id=$1, proj_name=$2, proj_cratedon=$3,proj_duedate=$4,proj_cust_name=$5,proj_description=$6,proj_status=$7,proj_amount=$8,proj_account_mgr=$9,employee_id=$10 where proj_id=$11',
    [proj_id, proj_name, proj_cratedon,proj_duedate,proj_cust_name,proj_description,proj_status,
        proj_amount,proj_account_mgr,employee_id ,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/project/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from projects where proj_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

/* Employee */
app.get('/api/employee',(req,res)=>{
    pool.query('select * from employees',
    [],
    (error,result)=>{
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/employee/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from employees where employee_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/employee/',(req,res)=>{
    const { employee_id,first_name,last_name,email,phone_number,hire_date,salary,manager_id,
        job_id,department_id } = req.body;
    pool.query("INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
    [employee_id,first_name,last_name,email,phone_number,hire_date,salary,manager_id,
        job_id,department_id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/employee/:id',(req,res)=>{
    const {id} = req.params
    const {employee_id,first_name,last_name,email,phone_number,hire_date,salary,manager_id,
        job_id,department_id } = req.body;
    pool.query('update employees set employee_id=$1,first_name=$2,last_name=$3,email=$4,phone_number=$5,hire_date=$6,job_id=$7,salary=$8,manager_id=$9,department_id=$10 where employee_id=$11',
    [employee_id,first_name,last_name,email,phone_number,hire_date,salary,manager_id,
        job_id,department_id,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/employee/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from employees where employee_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

/* Project_Assign */
app.get('/api/project_assignment',(req,res)=>{
    pool.query('select * from project_assignment',
    [],
    (error,result)=>{
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/project_assignment/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from project_assignment where pras_proj = $1 OR pras_employee_id=$1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/project_assignment/',(req,res)=>{
    const { pras_proj,pras_employee, pras_startdate,pras_enddate,pras_status } = req.body;
    pool.query("INSERT INTO project_assignment(pras_proj,pras_employee, pras_startdate,pras_enddate,pras_status) VALUES ($1, $2, $3, $4, $5)",
    [pras_proj,pras_employee, pras_startdate,pras_enddate,pras_status],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/project_assignment/:id',(req,res)=>{
    const {id} = req.params
    const { pras_proj,pras_employee, pras_startdate,pras_enddate,pras_status } = req.body;
    pool.query('update project_assignment set pras_proj=$1,pras_employee=$2, pras_startdate=$3,pras_enddate=$4,pras_status=$5 where pras_proj = $6 OR pras_employee_id=$6',
    [pras_proj,pras_employee, pras_startdate,pras_enddate,pras_status,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/project_assignment/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from project_assignment where pras_proj = $6 OR pras_employee_id=$6',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})



