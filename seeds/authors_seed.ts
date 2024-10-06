import { Knex } from "knex";
import { faker } from '@faker-js/faker';
import { Author } from '../src/types/index';


const SEED_COUNT = 100;

const createAuthor = (): Partial <Author>=>({
    name:faker.person.fullName(),
    bio:faker.lorem.paragraph(),
});

export async function seed(knex: Knex): Promise<void> {
   const authors = Array(SEED_COUNT).fill(null).map(createAuthor);
   await knex("authors").insert(authors);
};
