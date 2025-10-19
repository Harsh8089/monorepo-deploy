import express from "express";
import cors from "cors";
import client from "@repo/db"; 

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hey there");
})

app.post("/register", async (req, res) => { 
  const { username, password } = req.body;

  await client.user.create({
    data: {
      username,
      password
    }
  });

  res.status(200).json({
    message: "User registered successfully"
  });

})

const PORT = 3002;

app.listen(PORT, "0.0.0.0", () => {
  console.log("HTTP server listening on port ", PORT);
});
