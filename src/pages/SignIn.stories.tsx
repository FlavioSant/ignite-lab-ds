import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { SignIn } from './SignIn';

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {},
  argTypes: {},
} as Meta;

export const Default: StoryObj = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText('Digite seu e-mail'),
      'flavio@hotmail.com',
    );
    userEvent.type(canvas.getByPlaceholderText('******'), '12345678');

    userEvent.click(canvas.getByRole('button'));
  },
};
