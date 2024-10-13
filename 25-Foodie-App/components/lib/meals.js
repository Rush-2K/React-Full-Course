import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('meals.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

export async function getMeals() {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 4000));
  throw new Error('Loading meals failed');
  // Use a Promise to handle the database query asynchronously
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM meals', [], (err, rows) => {
      if (err) {
        reject(err); // Reject the Promise if there's an error
      } else {
        resolve(rows); // Resolve the Promise with the result
      }
    });
  });
}

// Don't forget to close the database connection when done
process.on('exit', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing the database:', err.message);
    } else {
      console.log('Database connection closed.');
    }
  });
});
