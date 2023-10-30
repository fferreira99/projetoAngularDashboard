import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicesDeDesempenhoComponent } from './indices-de-desempenho.component';

describe('IndicesDeDesempenhoComponent', () => {
  let component: IndicesDeDesempenhoComponent;
  let fixture: ComponentFixture<IndicesDeDesempenhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndicesDeDesempenhoComponent]
    });
    fixture = TestBed.createComponent(IndicesDeDesempenhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
