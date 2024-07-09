import { db } from "./db";

function getUserById(userId: string) {
  return db.query(`SELECT name, balance FROM Users WHERE id = ${userId}`);
}

async function addToBalance(userId: string, amount: number) {
  await db.query(`UPDATE Users SET balance=${amount} WHERE id=${userId}`);
}

async function pullFromBalance(userId: string, amount: number) {
  await db.query(`UPDATE Users SET balance=${amount} WHERE id=${userId}`);
}

async function transfer(userId1: string, userId2: string, amount: number) {
  await pullFromBalance(userId1, amount);
  await addToBalance(userId2, amount);
}
