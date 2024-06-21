import express, { Request, Response } from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;
const DB_FILE = './src/db.json';

app.use(express.json());

app.get('/ping', (req: Request, res: Response) => {
  res.json({ success: true });
});

app.post('/submit', (req: Request, res: Response) => {
  try {
    const { name, email, phone, github_link, stopwatch_time } = req.body;

    console.log('Received submission:', req.body);

    // Read the current submissions
    const fileContent = fs.readFileSync(DB_FILE, 'utf-8');
    console.log('Current file content:', fileContent);
    
    const submissions = JSON.parse(fileContent);
    console.log('Parsed submissions:', submissions);

    const newSubmission = { name, email, phone, github_link, stopwatch_time };
    submissions.push(newSubmission);

    fs.writeFileSync(DB_FILE, JSON.stringify(submissions, null, 2));
    console.log('Updated file content:', JSON.stringify(submissions, null, 2));

    res.json({ success: true });
  } catch (error) {
    console.error('Error saving submission:', error);
    res.status(500).json({ success: false, error: 'Failed to save submission' });
  }
});

app.get('/read', (req: Request, res: Response) => {
  try {
    const { index } = req.query;
    const submissions = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
    const submission = submissions[parseInt(index as string, 10)];
    res.json(submission);
  } catch (error) {
    console.error('Error reading submission:', error);
    res.status(500).json({ success: false, error: 'Failed to read submission' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
