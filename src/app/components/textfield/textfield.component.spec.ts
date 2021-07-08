import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TextfieldComponent } from './textfield.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TextfieldComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TextfieldComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'peachtree'`, () => {
    const fixture = TestBed.createComponent(TextfieldComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('peachtree');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TextfieldComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'peachtree app is running!'
    );
  });
});
