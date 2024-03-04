var express = require('express');
var router = express.Router();
/*index es mi plantilla. Toma mi respuesta,funcion, render:respuesta */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*devuelve lista de personas*/
router.get('/personas',function (req, res, next){
    const db = req.app.get("db");
    const query = "SELECT * from persona";
    db.all(query, function(err, rows) {
        if (err) {
            console.log(err);
            return;
        }
        res.render("personas", { personas: rows });
    })
});
/* solicita informacion*/ 
router.get('/agregar', function(req, res, next) {
    res.render('agregar', { });
});
/*post envia informacion*/ 
router.post("/agregar",function(req, res, next) {
    const db = req.app.get("db");
    const nombre = req.body.nombre;
    const email = req.body.email;
    const query = "INSERT into persona (nombre, email) VALUES (?, ?)";
    db.run(query, [nombre, email], function(err) {
        if (err) {
            console.log(err);
            return;
        }
        res.redirect("/personas");
    });
});
/* cambia una persona mediante su id */
router.get('/edit/:id', function(req, res, next) {
    var db = req.app.get('db');
    var id = req.params.id;
    db.get("SELECT * FROM persona WHERE id=?", id, function(err, row) {
        if (err) {
            console.error(err);
            return;
        }
        res.render('edit', { item: row });
    });
});

router.post('/update/:id',function(req, res, next) {
    var db = req.app.get('db');
    var id = req.params.id;
    var nombre = req.body.nombre;
    var email = req.body.email; // Obtén la descripción del formulario
    db.run("UPDATE persona SET nombre=?, email=? WHERE id=?", [nombre, email, id], function(err) {
        if (err) {
            console.error(err);
            return;
        }
        res.redirect('/personas');
    });
});

router.get('/delete/:id', function(req, res, next) {
    var db = req.app.get('db');
    var id = req.params.id;
    db.run("DELETE FROM persona WHERE id=?", id, function(err) {
        if (err) {
            console.error(err);
            return;
        }
        res.redirect('/personas');
    });
});
router.get('/busqueda', function (req, res, next)  {
    res.render('busqueda', { title: "Buscar" });
});

router.post('/resultados', function (req, res, next) {
    const db = req.app.get("db");
    const keyword = req.body.keyword;
    const query = 'SELECT * FROM persona WHERE nombre LIKE ?';
    db.all(query, [`%${keyword}%`], (err, rows) => {
        if (err) throw err;
            res.render('resultados', { personas: rows, title: "Resultados" })
    });
});

/* TABLA OFICINA */

router.get('/oficina',function (req, res, next){
    const db = req.app.get("db");
    const query = "SELECT * from oficina";
    db.all(query, function(err, rows) {
        if (err) {
            console.log(err);
            return;
        }
        res.render("oficina", { oficina: rows });
    })
});

/* solicita informacion*/ 
router.get('/agregaroficina', function(req, res, next) {
    res.render('agregaroficina', { });
});

router.post("/agregaroficina",function(req, res, next) {
    const db = req.app.get("db");
    const denominacion = req.body.denominacion;
    const query = "INSERT into oficina (denominacion) VALUES (?)";
    db.run(query, [denominacion], function(err) {
        if (err) {
            console.log(err);
            return;
        }
        res.redirect("/oficina");
    });
});
/* cambia una persona mediante su id */
router.get('/editoficina/:id', function(req, res, next) {
    var db = req.app.get('db');
    var id = req.params.id;
    db.get("SELECT * FROM oficina WHERE id=?", id, function(err, row) {
        if (err) {
            console.error(err);
            return;
        }
        res.render('editoficina', { item: row });
    });
});

router.post('/updateoficina/:id',function(req, res, next) {
    var db = req.app.get('db');
    var id = req.params.id;
    var denominacion = req.body.denominacion;
    db.run("UPDATE oficina SET denominacion=? WHERE id=?", [denominacion, id], function(err) {
    
        if (err) {
            console.error(err);
            return;
        }
        res.redirect('/oficina');
    });
});


module.exports = router;
