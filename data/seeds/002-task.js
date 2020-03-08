exports.seed = async function(knex) {
	await knex("task").insert([   
		{ description: "manage a database", project_id: 1 },
		{ description: "Make sure you do the self study questions", notes: "good luck!", project_id:2 },
	])
}
