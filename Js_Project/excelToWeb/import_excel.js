const xlsx = require('xlsx');
const db = require('./db');

async function excelWeb(){
    const workbook =xlsx.readFile('de_status.xlsx');
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = xlsx.utils.sheet_to_json(sheet);

    // console.log(rows);
    for (const row of rows){

        const username = row["Username"];
        const employeeName = row['Employee Name'];
        const team = row['Team'];

        // check if employee already in DB
        const [existing] = await db.query(
            "SELECT employee_id FROM employees WHERE username = ?",
            [username]
        );

        let employeeId;

        if(existing.length === 0) {
            const [result] = await db.query(
                "INSERT INTO employees (username, employee_name, team) VALUES (?, ?, ?)",
                [username, employeeName, team]
            );
            employeeId = result.insertId;
        } else {
            employeeId = existing[0].employee_id
        }

        await db.query(
            ` INSERT INTO productivity_logs
            (employee_id, work_date, code_type, total_receipt, total_item)
            VALUES  (?, ?, ?, ?, ?)`,
            [
                employeeId, 
                row['Date'],
                row['Code_type'],
                row['Total Receipt'],
                row['Total Items']
            ]
        )

}
}