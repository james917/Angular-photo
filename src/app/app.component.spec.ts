import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ CommonModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have photos', () => {
    expect(component.photos.length).toBeGreaterThan(0);
  });

  it('should display the correct number of photo entries', () => {
    fixture.detectChanges(); // Trigger initial data binding
    const photoElements = element.querySelectorAll('.max-w-sm');
    expect(photoElements.length).toEqual(component.photos.length);
  });

  it('should display the correct photo titles', () => {
    fixture.detectChanges();
    const photoTitles = Array.from(element.querySelectorAll('.font-bold')).map(el => el.textContent?.trim());
    const expectedTitles = component.photos.map(photo => photo.title);
    expect(photoTitles).toEqual(expectedTitles);
  });
});
