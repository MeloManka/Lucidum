export default function (message) {
  if (process.env.NODE_ENV == 'development') {
    console.log('development');
  }
  console.log('message: ', message);
}