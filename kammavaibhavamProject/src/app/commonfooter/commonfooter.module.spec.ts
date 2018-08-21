import { CommonfooterModule } from './commonfooter.module';

describe('CommonfooterModule', () => {
  let commonfooterModule: CommonfooterModule;

  beforeEach(() => {
    commonfooterModule = new CommonfooterModule();
  });

  it('should create an instance', () => {
    expect(commonfooterModule).toBeTruthy();
  });
});
