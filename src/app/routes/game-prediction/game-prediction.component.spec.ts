import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePredictionComponent } from './game-prediction.component';

describe('GamePredictionComponent', () => {
  let component: GamePredictionComponent;
  let fixture: ComponentFixture<GamePredictionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamePredictionComponent]
    });
    fixture = TestBed.createComponent(GamePredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
