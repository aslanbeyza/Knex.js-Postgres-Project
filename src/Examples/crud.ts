import knex from "../config/knex";
import { Author, Book } from "../types";

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

export const getBooks = async (limit: number, offset: number) => {
  const books = await knex("books")
    .limit(limit)
    .offset(offset)
    .orderBy("price", "desc");
  return books;
};

export const getAuthorById = async (id: number) => {
  const author = await knex("authors").where({ id }).first();
  return author;
};

export const getBookById = async (id: number) => {
  const book = await knex("books").where("id", "=", id).first();
  return book;
};

export const getGenreById = async (id:number)=>{
  const genre= await knex('genres').where({id}).first();
  return genre;
}

export const createAuthor = async(body:Partial<Author>) =>{
/*   const author = await knex("authors").insert(body,"*"); */ 
const author = await knex("authors").insert(body,"*");
/*  const author = await knex("authors").insert(body,["id","name"]); */
  return author[0];  /* object ormatında getiricek bu da  */
}

export const  checkIfAuthorExists = async ( id?:number)=>{
  if(!id)throw new Error("Yazar id si zorunlu alan!!!!!!!!");
  const author =await getAuthorById(id);
  if(!author){
    throw new Error("gecersiz yazar id kardes!!!!!!!")
  }
}
export const  checkIfGenreExists = async ( id?:number)=>{
  if(!id)throw new Error("Tür id si zorunlu alan!!!!!!!!");
  const genre =await getGenreById(id);
  if(!genre){
    throw new Error("gecersiz tür id kardes!!!!!!!")
  }
}
export const createBook = async(body:Partial<Book>) =>{
  await checkIfAuthorExists(body.author_id);
  await checkIfGenreExists(body.genre_id);
   const book = await knex("books").insert(body,"*")
   return book[0];
}
export const updateAuthor = async(body:Partial<Author> ,id:number) =>{
  await checkIfAuthorExists(id);
   const author = await knex("authors").where({id}).update(body,'*');
   return author[0];
}

export const updateBook = async (id: number, body: Partial<Book>) => {
  try {
    if (body.author_id) {
      await checkIfAuthorExists(body.author_id);
    }
    if (body.genre_id) {
      await checkIfGenreExists(body.genre_id);
    }

    const updatedBooks = await knex("books").where({ id }).update(body, '*');

    if (updatedBooks.length === 0) {
      throw new Error(`Kitap bulunamadı: ID ${id}`);
    }

    return updatedBooks[0];
  } catch (error) {
    console.error("Kitap güncellenirken bir hata oluştu:", error);
    throw error;
  }
}
