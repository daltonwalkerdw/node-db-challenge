exports.seed = async function(knex) {
	await knex("projects").insert([   
		{ name: "node-db1", completed: 1 },
		{ name: "node-challenge", description: "test of the skills you gained" },
	])
}
