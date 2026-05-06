import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
	res.json({ ok: true, message: "API is running" });
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
