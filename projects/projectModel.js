const db = require("../config")

function getProjects() {
    return db("projects")
}

function addProject(project) {
    return db("projects")
        .insert(project, "id")
}

function getResources() {
    return db("resources")
}

function getTask() {
    return db("task as t")
        .join("projects as p", "p.id", "t.project_id")
        .select("p.name", "p.description", "t.*")
}



function addResource(resource) {
    return db("resources")
    .insert(resource, "id" )
 
}

function addTask(task, id) {
    return db("task")
    .insert(task, "id")
    
}


module.exports = {
    getProjects,
    addProject,
    getResources,
    getTask,
    addResource,
    addTask
}
