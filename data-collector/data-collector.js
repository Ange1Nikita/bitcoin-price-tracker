const axios = require('axios');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../backend/bitcoin.db');

async function fetchPrice() {
  try {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    const price = response.data.bpi.USD.rate_float;
    const date = new Date().toISOString();

    db.run('INSERT INTO prices (date, price) VALUES (?, ?)', [date, price], (err) => {
      if (err) {
        console.error('Ошибка при сохранении данных:', err);
      } else {
        console.log(`Сохранено: ${date}, Цена: ${price}`);
      }
    });
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
}

setInterval(fetchPrice, 5 * 60 * 1000); // Каждые 5 минут
fetchPrice(); // Первый вызов