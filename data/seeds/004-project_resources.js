exports.seed = async function(knex) {
	await knex("project_resources").insert([   
    { project_id: 1, resources_id: 1 },
    { project_id: 1, resources_id: 3 },
    { project_id: 2, resources_id: 1 },
    { project_id: 2, resources_id: 2 },
    { project_id: 2, resources_id: 3 },
	])
}
