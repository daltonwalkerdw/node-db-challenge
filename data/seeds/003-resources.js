exports.seed = async function(knex) {
	await knex("resources").insert([   
		{ name: "computer" },
    { name: "coffee", description: "stay awake!" },
    { name: "lambda learning kit" },
	])
}
