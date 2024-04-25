# Task_management_system

This code defines routes for a RESTful API using Express.js framework for managing tasks. Here's a brief description of each endpoint:

POST /tasks: Creates a new task by accepting a JSON object containing title, description, and status in the request body. It saves the task to the database and returns the newly created task along with a success message.
GET /tasks: Retrieves all tasks from the database and returns them as a JSON array.
GET /tasks/:id: Retrieves a single task by its ID from the database. If the task is found, it returns the task details; otherwise, it returns a 404 error indicating that the task was not found.
PUT /tasks/:id: Updates a task by its ID. It accepts a JSON object containing title, description, and/or status in the request body. If any of these fields are provided, it updates the corresponding fields of the task and returns the updated task along with a success message.
DELETE /tasks/:id: Deletes a task by its ID from the database and returns a success message if the deletion is successful.
Additionally, there's a middleware function getTask defined to retrieve a task by its ID from the database. This function is used by the endpoints that need to retrieve or update a single task to avoid code duplication and to handle error cases appropriately.









http://localhost:8000/tasks  (POST)
![Screenshot (205)](https://github.com/paulsp01/Task_management_system/assets/136374929/94a44620-0e65-4296-9246-507515d0c6a0)

http://localhost:8000/tasks (GET)
![Screenshot (207)](https://github.com/paulsp01/Task_management_system/assets/136374929/1cf9a4e0-c0b7-4b52-ae79-b360f89ba672)

http://localhost:8000/tasks/:id (GET)
![Screenshot (208)](https://github.com/paulsp01/Task_management_system/assets/136374929/5ec8fc51-4722-42cc-8dae-c3678b47a9c0)

http://localhost:8000/tasks/:id (PUT)
![Screenshot (209)](https://github.com/paulsp01/Task_management_system/assets/136374929/b68c3ac5-1711-4219-a0b3-3e5e68f023ec)

http://localhost:8000/tasks/:id (DELETE)
![Screenshot (213)](https://github.com/paulsp01/Task_management_system/assets/136374929/dee31b31-1572-4c06-8c8b-e521e22a8a1d)

mongodb
![Screenshot (206)](https://github.com/paulsp01/Task_management_system/assets/136374929/8f4ae7bc-f4f0-4f33-94ed-3f5f0d616176)
![Screenshot (210)](https://github.com/paulsp01/Task_management_system/assets/136374929/01158933-7c98-4ebf-aef0-b3d454e499af)
