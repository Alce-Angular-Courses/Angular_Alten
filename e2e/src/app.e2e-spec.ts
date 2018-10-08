import { AppPage } from './app.po';
import { TareasPage } from './tareas.po';

describe('Home App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Hola Alten!');
  });
});


describe('Tareas App', () => {
  let page: TareasPage;

  beforeEach(() => {
    page = new TareasPage();
  });

  it('should display Tareas in h4', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Tareas');
  });
});
