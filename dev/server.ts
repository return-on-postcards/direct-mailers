import express, { json } from 'express';

import { createPostcard, DirectMailersError } from '../src';
import { testAddress, testBack, testFront, TestVPayload } from './utils';

const app = express();
app.use(json());

app.post('/create_postcard_test', async (_req, res) => {
  try {
    const { RenderedPdf } = await createPostcard<TestVPayload>({
      Back: testBack,
      Description: 'Test description',
      From: testAddress,
      Front: testFront,
      Size: '5.5x11',
      To: testAddress,
      DryRun: true,
      VariablePayload: { back: 'back', front: 'front' },
      WaitForRender: true,
    });

    res.send({ message: 'Successful create postcard test.', pdf: RenderedPdf });
  } catch (error) {
    if (error instanceof DirectMailersError) {
      const err = error.serializeError();
      res.status(err.statusCode).send(err);
      return;
    }

    console.log(error);
    res.end();
  }
});

const PORT = 6309;
app.listen(PORT, () => console.log('Listening on port ' + PORT));
