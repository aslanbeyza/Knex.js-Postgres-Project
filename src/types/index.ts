export interface Author {
    id:number;
    name:string;
    bio:string;
    created_at:Date;
    updated_at:Date;
}
export interface Genre {
    id:number;
    name:string;
    created_at:Date;
    updated_at:Date;
}
export interface Book {
    id:number;
    title:string;
    description:string;
    price:number;
    author_id:number;
    genre_id:number;
    created_at:Date;
    updated_at:Date;
}
/* TypeScript'te kullanılan bir "module augmentation" yani modül genişletmesidir. Bu ifade ile, Knex.js kütüphanesinde tables adında bir modülün var olduğunu ve bu modülü genişletmek istediğinizi belirtiyorsunuz. */
/* Knex.js, veritabanı sorguları için kullanılan bir SQL query builder'dır. Veritabanı tablolarının yapısını TypeScript'te daha güçlü bir şekilde tip tanımlarıyla kullanmak isteyebilirsiniz. Ancak, Knex'in kendi tablolarıyla ilgili bir tip tanımı olmadığında, siz bu tipleri kendi projenize uygun hale getirmek için modülü genişletirsiniz. Bu sayede, veritabanı tablolarınızı ve sütunlarını TypeScript'in tip sistemine entegre edersiniz. */
/* yapıyı bilmek için mantıklı bu  */
declare module "knex/types/tables"{
    interface Tables{
        authors:Author;
        genres:Genre;
        books:Book;

    }
}