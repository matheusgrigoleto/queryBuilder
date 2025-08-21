import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("courses").insert([
        { name: "CSS" },
        { name: "Javascript" },
        { name: "React" },
        { name: "Node.JS" },
        { name: "Github" },
        { name: "Typescript" },
        { name: "Express.js" },
        { name: "Banco de Dados" },
    ]);
};
