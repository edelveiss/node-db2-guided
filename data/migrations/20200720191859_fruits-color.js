exports.up = function (knex) {
  //here we do not created a table, we just want to add a
  //color field, so we get an instance of a table - tbl:
  return knex.schema.table("fruits", (tbl) => {
    tbl.string("color", 128);
    //here we add a column
  });
};

exports.down = function (knex) {
  return knex.schema.table("fruits", (tbl) => {
    tbl.dropColumn("color");
    //here we deleted a column
  });
};
