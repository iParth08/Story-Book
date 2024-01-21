import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
    res.json({ message: "route : /api/user/test" });
});

export default router;