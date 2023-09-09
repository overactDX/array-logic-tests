// สร้างฟังก์ชันสำหรับแสดงรูปบันได
function drawStairs(height) {
    for (let i = 1; i <= height; i++) {
        // สร้างส่วนที่ว่างซ้าย
        let spaces = ' '.repeat(height - i);

        // สร้างบันไดด้วยตัวเลขเพิ่มขึ้น
        let staircase = spaces + '1'.repeat(i);

        // แสดงบันไดบนหน้าจอ
        console.log(staircase);
    }
}

// เรียกใช้ฟังก์ชันเพื่อแสดงรูปบันได
drawStairs(100); // ปรับความสูงตามที่ต้องการ
