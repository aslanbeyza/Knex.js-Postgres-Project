import { Knex } from "knex";
import { faker } from '@faker-js/faker';
import { Book } from '../src/types/index';

const SEED_COUNT = 100;

// Book tipini güncelleyin (eğer mümkünse):
// interface Book {
//     // ... diğer alanlar
//     author_id: number | null;
//     genre_id: number | null;
// }

const createBook = (authors_count: number, genres_count: number): Partial<Book> => ({
    title: faker.lorem.sentence(3),
    description: faker.lorem.paragraph(5),
    price: faker.number.int({ min: 1, max: 1000 }),
    author_id: authors_count > 0 ? faker.number.int({ min: 1, max: authors_count }) : null,
    genre_id: genres_count > 0 ? faker.number.int({ min: 1, max: genres_count }) : null,
});

export async function seed(knex: Knex): Promise<void> {
    const authors_count = Number((await knex("authors").count().first())?.count || 0);
    const genres_count = Number((await knex("genres").count().first())?.count || 0);

    console.log(`YAZAR SAYİSİ: ${authors_count}, TÜR SAYISI: ${genres_count}`);

    if (authors_count === 0 || genres_count === 0) {
        console.warn("YAZAR VEYA TÜR BULUNAMADI.");
        return;
    }

    const books = Array(SEED_COUNT).fill(null).map(() => createBook(authors_count, genres_count));

    try {
        await knex("books").insert(books);
        console.log(`${SEED_COUNT} ADET KİTAP BAŞARI İLE EKLENDİ.`);
    } catch (error) {
        console.error("kİTAPLARI EKLERKEN SORUN OLUŞTU:", error);
    }
}