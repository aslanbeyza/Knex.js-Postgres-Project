import type { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

// Çevresel değişkenleri al
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql", // Kullanılacak veritabanı yönetim sistemi
    connection: {
      host: DB_HOST,
      port: Number(DB_PORT), // Port numarasını sayıya dönüştür
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_DATABASE,
    },
    pool: {
      min: 2, // Minimum bağlantı sayısı
      max: 10, // Maksimum bağlantı sayısı
    },
    migrations: {
      tableName: "knex_migrations", // Migration tabloları için isim
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db", // Staging için varsayılan veritabanı
      user: "username", // Staging için varsayılan kullanıcı adı
      password: "password", // Staging için varsayılan şifre
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql", // Kullanılacak veritabanı yönetim sistemi
    connection: {
      host: DB_HOST,
      port: Number(DB_PORT),
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_DATABASE,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations", // Migration tabloları için isim
    },
  },
};

export default config; // ES modül kullanarak yapılandırmayı dışa aktar
