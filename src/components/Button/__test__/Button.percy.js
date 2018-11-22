import React from 'react';
import Button from '../Button';
const CONTENT = 'Visual Regression Tested button';

percySnapshot('Regular Button', () => {
  return <Button>{CONTENT}</Button>
});

percySnapshot('Large, pink button', () => {
  return <Button color="hotpink" size="large">{CONTENT}</Button>
});
