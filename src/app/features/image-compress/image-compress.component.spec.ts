import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCompressComponent } from './image-compress.component';

describe('ImageCompressComponent', () => {
  let component: ImageCompressComponent;
  let fixture: ComponentFixture<ImageCompressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageCompressComponent]
    });
    fixture = TestBed.createComponent(ImageCompressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
