import fetch from 'node-fetch';

function fetchDataFromAPI() {
  return fetch('https://dummyjson.com/products/1')
    .then(res => res.json());
}

fetchDataFromAPI()
  .then(data => {
    console.log(data); // แสดงข้อมูลที่ได้รับจาก API
  })
  .catch(error => {
    console.error(error); // แสดงข้อผิดพลาดถ้าเกิดข้อผิดพลาดในการโหลดข้อมูล
  });
