import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDocsComponent } from './help-docs.component';

describe('HelpDocsComponent', () => {
  let component: HelpDocsComponent;
  let fixture: ComponentFixture<HelpDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
