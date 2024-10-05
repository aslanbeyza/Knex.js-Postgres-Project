import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema
    /* -------------------------------------------------------------------------------------------- */
    .createTable('authors',(table)=>{
        table.increments("id").primary();
        table.string('name').notNullable(); 
        table.text('bio').notNullable(); 
        table.date('created_at').defaultTo(knex.fn.now()); /* bunu her zaman şu ana ayarlamalıyız */
        table.date('updated_at').defaultTo(null); /* bunu her zaman şu ana ayarlamalıyız */
    })
    /* -------------------------------------------------------------------------------------------- */
    .createTable("genres",(table)=>{
        table.increments("id").primary();
        table.string('name').notNullable().unique().index(); 
        /* Bu, name sütunu üzerinde bir index oluşturur. İndeksleme, bu sütuna dayalı sorguların (örn. WHERE name = 'John' gibi) daha hızlı çalışmasını sağlar.
       Veritabanındaki indeksler, veri arama işlemlerini hızlandırmak için kullanılır. İndeks, arama sırasında sütunları hızlıca taramak için oluşturulan bir veri yapısıdır. */
    })
     /* -------------------------------------------------------------------------------------------- */
     .createTable("books",(table)=>{
        table.increments("id").primary();
        table.text('title').notNullable().unique().index();
        table.text('description').notNullable();
        table.integer('price').notNullable();
        table.integer('author_id').references('id').inTable('authors').notNullable();
        table.integer('genre_id').references('id').inTable('genres').notNullable();
        table.date('created_at').defaultTo(knex.fn.now()); /* bunu her zaman şu ana ayarlamalıyız */
        table.date('updated_at').defaultTo(null); /* bunu her zaman şu ana ayarlamalıyız */
    })
}


export async function down(knex: Knex): Promise<void> {
    /* yaptığımız tüm değişiklikleri geri alacağımız yerdeyiz yani down*/
    await knex.schema
    /* -------------------------------------------------------------------------------------------- */
    .dropTable('books')
    .dropTable('genres')
    .dropTable('authors');
}

