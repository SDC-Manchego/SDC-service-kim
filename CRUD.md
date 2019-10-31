# CRUDDY RESTFUL API
------------
## CREATE  --> '/api/photos/'
    It uses req.body where the body is served up from the server-side. 
    With the content, it goes into mongoDB and saves the data.


## READ --> '/api/photos/:id'
    It uses req.query.id to identify which id you'd like to query from
    the database.

## Update --> '/api/photos/:id'
    The server has to know which id, identified by req.query.id, in order
    to query a particular data. Once it is found, the server-side takes 
    content from req.body and updates the content to that particular id.

## Delete --> '/api/photos/:id'
    Specify the id through req.query.id which will go into the database
     and delete.


| CRUD | API Endpoint | ACTION |
| --- | --- | --- |
| GET  | /api/photos/:id | Retrieves single photo by ID |
| POST | /api/photos/ | Inserts new data specified by req.body |
| PUT  | /api/photos/:id | Updates based off id with given req.body |
| DELETE | /api/photos/:id | Deletes based off given ID |
 