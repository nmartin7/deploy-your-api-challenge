const express = require('express');
const router = express.Router();
// In memory Storage
var items = [
    {
        id: 1,
        name: 'Test 1',
        description: 'Test description 1'
    },
    {
        id: 2,
        name: 'Test 2',
        description: 'Test description 2'
    },
    {
        id: 3,
        name: 'Test 3',
        description: 'Test description 3'
    },
    {
        id: 4,
        name: 'Test 4',
        description: 'Test description 4'
    },
    {
        id: 5,
        name: 'Test 5',
        description: 'Test description 5'
    },
    {
        id: 6,
        name: 'Test 6',
        description: 'Test description 6'
    }
];

router.get('/', function(req, res) {
  res.status(200).send(items);
});

router.get('/{id}/', function(req, res) {
    var item = items.find(item => item.id == id);
    if (typeof item !== 'undefined') {
        res.status(200).send(item);
    } else {
        res.status(404).send({ error: "Item not found"});
    }
});

router.put('/', function(req, res) {
    var itemReq = req.body;
    if (itemReq) {
        var item = items.find(item => item.id == itemReq.id);
        if (item) {
           items.splice(items.indexOf(item),1);
           items.push(itemReq);
           res.status(200).send();
        } else {
            res.status(404).send({ error: "Item not found"});
        }
    } else {
        res.status(400).send({ error: "Invalid request"});
    }
});

router.post('/', function(req, res) {
    var itemReq = req.body;
    if (itemReq) {
        var item = items.find(item => item.id == itemReq.id);
        if (item) {
           res.status(400).send({ error: "Item found. Cannot post an item with an existing id."});
        } else {
           items.push(itemReq);
           res.status(201).send();
        }
    } else {
        res.status(400).send({ error: "Invalid request"});
    }
});

router.delete('/{id}/', function(req, res) {
    var item = items.find(item => item.id == id);
    if (typeof item !== 'undefined') {
        items.splice(items.indexOf(item),1);
        res.status(204).send();
    } else {
        res.status(404).send({ error: "Item not found"});
    }
});

module.exports = {
    router
}
