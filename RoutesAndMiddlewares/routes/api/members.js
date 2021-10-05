const express = require("express");
const uuid = require("uuid");
const router = express.Router();
const members = require("../../members");

// This route get all members
router.get("/", function (req, res) {
    res.json(members);
});

// Get Single Member
router.get("/:id", (req, res) => {
    const found = members.some(
        (member) => member.id == parseInt(req.params.id)
    );

    if (found) {
        res.json(
            members.filter((member) => member.id === parseInt(req.params.id))
        );
    } else {
        res.status(400).json({ msg: `Member not found` });
    }
});

//Create Member
router.post("/", (req, res) => {
    const newMember = {
        id: uuid.v4(),
        nme: req.body.name,
        email: req.body.email,
    };

    if (!req.body.name || !req.body.email) {
        return res.status(400).json({ msg: "Please include a name and email" });
    }

    members.push(newMember);
    res.json(members);
});

module.exports = router;
