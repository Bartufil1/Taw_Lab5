const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://bartekfil1:QjU6nutZHGkttDwc@cluster0.rgqmios.mongodb.net/?retryWrites=true&w=majority',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
