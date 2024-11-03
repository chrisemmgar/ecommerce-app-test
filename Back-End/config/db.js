

db.createUser({
  user: "chrisemm",
  pwd: "cegr100496",

  roles: [{ role: "userAdminAnyDatabase", db: "admin" }],
});