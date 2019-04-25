import React from 'react';
import Button from '../Button';
const CONTENT = 'Visual Regression Tested button';

percySnapshot('Regular Button', () => <Button>{CONTENT}</Button>);

percySnapshot('Large, pink button', () => (
  <Button color="hotpink" size="large">
    {CONTENT}
  </Button>
));
