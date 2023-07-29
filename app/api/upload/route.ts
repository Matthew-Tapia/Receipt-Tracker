import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import fs from 'fs';
import util from 'util';
import path from 'path';

interface NextApiRequestWithFormData extends NextApiRequest {
  file: any;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({ dest: 'uploads/' });

const readFile = util.promisify(fs.readFile);

export const POST = async (req: NextApiRequestWithFormData, res: NextApiResponse) => {
  await new Promise((resolve, reject) => {
    upload.single('file')(req, res, (err) => {
      if (err) {
        reject(err);
      }
      resolve(null);
    });
  });

  if (req.file) {
    const buffer = await readFile(path.join(process.cwd(), req.file.path));
    const base64 = buffer.toString('base64');
    res.status(200).json({ file: base64 });
  } else {
    res.status(400).json({ error: 'No file uploaded' });
  }
};
