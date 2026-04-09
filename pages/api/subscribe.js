import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'subscribers.json');

function ensureDataFile() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify({ subscribers: [] }, null, 2));
  }
}

export default async function handler(req, res) {
  ensureDataFile();

  // GET - return current count
  if (req.method === 'GET') {
    try {
      const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
      return res.status(200).json({ count: data.subscribers.length });
    } catch (error) {
      return res.status(200).json({ count: 0 });
    }
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  try {
    ensureDataFile();

    const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

    // Check if email already exists
    if (data.subscribers.some(sub => sub.email === email)) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Add new subscriber
    data.subscribers.push({
      email,
      subscribedAt: new Date().toISOString()
    });

    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    return res.status(200).json({
      success: true,
      message: 'Thanks for your interest!',
      count: data.subscribers.length
    });
  } catch (error) {
    console.error('Subscribe error:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
