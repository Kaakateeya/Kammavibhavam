import { CommonmenuModule } from './commonmenu.module';

describe('CommonmenuModule', () => {
  let commonmenuModule: CommonmenuModule;

  beforeEach(() => {
    commonmenuModule = new CommonmenuModule();
  });

  it('should create an instance', () => {
    expect(commonmenuModule).toBeTruthy();
  });
});
