const db = require('../config/database');

const Guest = {
  tableName: 'guests',

  async findAll() {
    const [rows] = await db.query(`SELECT * FROM ${this.tableName}`);
    return rows;
  },

  async findById(id) {
    const [rows] = await db.query(`SELECT * FROM ${this.tableName} WHERE id = ?`, [id]);
    return rows[0];
  },

  async create(guestData) {
    const [result] = await db.query(`INSERT INTO ${this.tableName} SET ?`, guestData);
    return { id: result.insertId, ...guestData };
  },

  async update(id, guestData) {
    await db.query(`UPDATE ${this.tableName} SET ? WHERE id = ?`, [guestData, id]);
    return this.findById(id);
  },

  async delete(id) {
    const [result] = await db.query(`DELETE FROM ${this.tableName} WHERE id = ?`, [id]);
    return result.affectedRows > 0;
  }
};

module.exports = Guest;
