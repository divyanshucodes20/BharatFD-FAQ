import redis from 'redis';

const client = redis.createClient();
client.on('error', (err) => console.error('Redis Error:', err));

export default client;
