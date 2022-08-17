import * as SQLite from "expo-sqlite";
import { Place } from "../Models/place";

const database = SQLite.openDatabase("places.db");

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places(
          id INTEGER PRIMARY KEY NOT NULL,
            imguri TEXT NOT NULL,
            address TEXT NOT NULL,
            title TEXT NOT NULL)
            `,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}

export function insertplace(place) {
  console.log("place - ", place);
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO places (imguri,address,title) values(?,?,?)",
        [place.imguri, place.address, place.title],
        (_, result) => {
          console.log(result.rows);
          resolve(result);
        },
        (_, err) => reject(err)
      );
    });
  });
  return promise;
}

export function fetchPlaces() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM places",
        [],
        (_, result) => {
          const places = [];
          // console.log(result);
          for (const dp of result.rows._array) {
            // console.log(dp);
            places.push(new Place(dp.imguri, dp.title, dp.address, dp.id));
            // places.push(place);
          }
          resolve(places);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
}

export function fetchplace(id) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM places WHERE id=?;",
        [id],
        (_, result) => {
          resolve(result.rows._array[0]);
          // console.log(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
}
