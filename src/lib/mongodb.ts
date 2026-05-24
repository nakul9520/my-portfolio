import 'server-only';

// MongoDB connection stub — scaffolded for future use
// Uncomment and configure when ready to add database features

// import { MongoClient, MongoClientOptions } from 'mongodb';
//
// const uri = process.env.MONGODB_URI;
// const options: MongoClientOptions = {};
//
// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;
//
// if (!uri) {
//   throw new Error('Add MONGODB_URI to .env.local');
// }
//
// if (process.env.NODE_ENV === 'development') {
//   // Reuse client across hot reloads in development
//   const globalWithMongo = global as typeof globalThis & {
//     _mongoClientPromise?: Promise<MongoClient>;
//   };
//   if (!globalWithMongo._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     globalWithMongo._mongoClientPromise = client.connect();
//   }
//   clientPromise = globalWithMongo._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }
//
// export default clientPromise;

// Placeholder export — replace with real client when MongoDB is added
export const mongodbStub = {
  ready: false,
  message: 'MongoDB connection stub — uncomment the code above and install mongodb package to enable',
};
