import React from 'react';
import Button from './Button';
const CONTENT = 'Visual Regression Tested button';

percySnapshot('Button', () => {
  return <Button>{CONTENT}</Button>
});

percySnapshot('Button', () => {
  return <Button color="hotpink" size="large">{CONTENT}</Button>
});
