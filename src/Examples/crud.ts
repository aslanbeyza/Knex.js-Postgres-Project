import knex from "../config/knex";

/* Knex kullanarak authors adlı veritabanı tablosuna bir sorgu gönderir. Bu satır, tabloda bulunan tüm satırları getirmek için basit bir sorgu yapar. */
export const getAllAuthors = async (limit: number, offset: number) => {
  /*    const authors = await knex('authors').select("id");
   */ /*   const authors = await knex('authors').orderBy("created_at","asc"); */

  const authors = await knex("authors")
    .limit(limit)
    .offset(offset)
    .orderBy("id", "asc");
  return authors;
};

export const getBooks = async(limit: number, offset:number) =>{
    const books = await knex("books").limit(limit).offset(offset).orderBy("price","desc");
    return books;
}

export const getAuthorById = async(id: number) =>{
   const author =await knex('authors').where({id}).first();
   return author;
}

export const getBookrById = async(id: number) =>{
    const book =await knex('books').where('id','=', id).first();
    return book;
}
