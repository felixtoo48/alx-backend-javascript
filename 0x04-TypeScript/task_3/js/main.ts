/// <reference path="./interface.ts" />
/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface'; // Corrected import path
import * as CRUD from './crud'; // Corrected import path

const obj: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(obj);
console.log(`CRUD.insertRow(obj)`);
console.log(`// Insert row ${newRowID}`, obj);

const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
console.log(`CRUD.updateRow(newRowID, updatedRow)`);
console.log(`// Update row ${newRowID}`, updatedRow);

CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID})`);

