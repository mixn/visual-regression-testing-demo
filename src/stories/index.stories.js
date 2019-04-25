/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import BaseButton from '../components/BaseButton.vue';

storiesOf('Button', module)
  .add('default', () => ({
    components: { BaseButton },
    template: '<base-button>Default button</base-button>'
  }))
  .add('primary', () => ({
    components: { BaseButton },
    template: '<base-button type="primary">Primary button</base-button>'
  }))
  .add('warning', () => ({
    components: { BaseButton },
    template: '<base-button type="warning">Warning button</base-button>'
  }))
  .add('error', () => ({
    components: { BaseButton },
    template: '<base-button type="error">Error button</base-button>'
  }));
