import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppFrame } from 'trini/AppFrame';
import { story } from './core/storybook';
import { appServicesMock } from './services/AppServicesMock';

export default {
  title: 'AppFrame',
  component: AppFrame,
} as ComponentMeta<typeof AppFrame>;

export const Default = story("Default", () => (
    <AppFrame {...common()} />
));


function common() {
  return { services: appServicesMock };
}