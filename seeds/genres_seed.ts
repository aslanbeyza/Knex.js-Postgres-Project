import { Knex } from "knex";
import { faker } from '@faker-js/faker';
import { Genre } from '../src/types/index';

const SEED_COUNT = 10;

const createGenre = (): Partial<Genre>/* normalde id kısmı zorunlu ya o zorunluluga uymamak için bunu yaptık super oldu bu*/ =>({
   name:faker.lorem.words(2),
})
export async function seed(knex: Knex): Promise<void> {
   const genres = Array(SEED_COUNT).fill(null).map((createGenre))
   await knex ("genres").insert(genres);
};
