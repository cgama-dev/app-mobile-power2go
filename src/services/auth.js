export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: '123456',
        user: {
          name: 'Cleyton Gama',
          email: 'cleytongama@gmail.com',
        },
      });
    }, 2000);
  });
}
