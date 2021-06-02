/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Button from '.';

describe('Button', () => {
  let container: Element | null = null;

  beforeEach(() => {
    container = window.document.createElement('div');
    window.document.body.appendChild(container);
  });

  afterEach(() => {
    if (container !== null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('render', () => {
    act(() => {
      render(<Button onClick={() => { }} />, container);
    });

    expect(container?.innerHTML).toBeDefined();
  });

  it('render with children', () => {
    act(() => {
      render(<Button onClick={() => { }}>Button</Button>, container);
    });
    expect(container?.textContent).toBe('Button');
  });

  it('render with props color="yellow"', () => {
    act(() => {
      render(<Button onClick={() => { }} color='yellow' />, container);
    });
    expect(container?.querySelector('.yellow')).not.toBeNull();
  });
});