import { FooterComponent } from './footer.component';

describe(FooterComponent.name, () => {
  it('exists', () => {
    // assert
    expect(FooterComponent).toBeDefined();
  });

  describe('general', () => {
    let component: FooterComponent;

    it('sets the year to current', () => {
      // arrange
      spyOn(window, 'Date').and.callThrough()

      // act
      component = new FooterComponent();

      // assert
      expect(window.Date).toHaveBeenCalled();
    });
  });
});
