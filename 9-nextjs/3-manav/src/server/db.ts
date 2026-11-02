import mongoose from "mongoose";

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// Geliştirme sırasında hot reload'da birden fazla bağlantı açılmasını önlemek için global'de tutulur
const globalForMongoose = globalThis as typeof globalThis & { mongooseCache?: MongooseCache };
const cached: MongooseCache = globalForMongoose.mongooseCache ?? { conn: null, promise: null };
globalForMongoose.mongooseCache = cached;

// Bağlantıyı istek anında kurar; ortam değişkeni import anında değil, kullanıldığında kontrol edilir
export default async function connectMongo() {
  if (cached.conn) return cached.conn;

  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("MONGO_URI ortam değişkeni tanımlı değil (.env)");

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, { bufferCommands: false });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    // Başarısız bağlantı denemesi cache'lenmesin, bir sonraki istek yeniden denesin
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}
