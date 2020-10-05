import React from 'react';
import ReactDOM from 'react-dom';
import AppTS from './AppTS';
import NavBar from './components/NavBar/NavBar.componentTS';
import renderer from 'react-test-renderer';
import { Link, Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import { render, screen } from "@testing-library/react";

describe('AppTS', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppTS />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders NavBar correctly', () => {
    render(<AppTS />);
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    , div);
    expect(div).toBeInTheDocument();
  });

  it('should redirect invalid paths to 404', () => {
    render(<AppTS />);
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter initialEntries={['/invalid']}>
        <NavBar />
      </MemoryRouter>
    , div);
    expect(screen.getByText("Oops, wrong page!")).toBeInTheDocument();
  });

  it('should NOT redirect valid paths to 404', () => {
    render(<AppTS />);
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter initialEntries={['/']}>
        <NavBar />
      </MemoryRouter>
    , div);
    expect(div).toBeInTheDocument()
  });

  it('renders the right component with the valid /about path', () => {
    render(<AppTS />);
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter initialEntries={['/about']}>
        <NavBar />
      </MemoryRouter>
    , div);
    expect(div).toBeInTheDocument()
  });

})

