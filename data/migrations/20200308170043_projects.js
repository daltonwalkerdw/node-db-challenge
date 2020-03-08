
exports.up = async function (knex) {
    await knex.schema.createTable("projects", (table) => {
        table.increments()
        table.text("name").notNull()
        table.text("description")
        table.bool("completed").default(0)
    })

    await knex.schema.createTable("task", (table) => {
        table.increments()
        table.text("description").notNull()
        table.text("notes")
        table.integer("project_id")
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
    })

    await knex.schema.createTable("resources", (table) => {
        table.increments()
        table.text("name").notNull()
        table.text("description")
    })

    await knex.schema.createTable("project_resources", (table) => {
        table.integer("project_id")
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
            table.integer("resources_id")
            .references("id")
            .inTable("resources")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")

            table.primary(["project_id", "resources_id"])
    })
};

exports.down = function (knex) {

};
