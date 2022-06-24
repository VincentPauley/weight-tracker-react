import axios from 'axios';

export default {
  getRecords() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get('http://10.0.0.116:3003/records');
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
  }
};
