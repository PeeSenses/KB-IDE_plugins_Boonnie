//class MotorControl{
//  public : 
//    MotorControl();
//    void MotorStnding(int *Motor_); //Get motor form Array
//    void goForward(int *Motor_);
//    void goBackward(int *Motor_);
//    void goLeft(int *Motor_);
//    void goRight(int *Motor_);
//    void TestAuto(int *Motor_, int IRValue, long cm);
//};


void MotorStnding(int *Motor_) {
  for (int i = 0; i < 4; i++) {
    digitalWrite(Motor_[i], LOW);
  }
}
 
void goForward(int *Motor_) {
  for (int i = 0; i < 4; i++) {
     if (i%2 == 0) {
       digitalWrite(Motor_[i], 0);
     }
     else {
       digitalWrite(Motor_[i], 1);
     }
  }
}

void goBackward(int *Motor_) {
  for (int i = 0; i < 4; i++) {
     if (i%2 == 1) {
       digitalWrite(Motor_[i], 0);
     }
     else {
       digitalWrite(Motor_[i], 1);
     }
  }
}

//R=3, RB=4, L=1, LB=2
void goRight(int *Motor_){
  for (int i = 0; i < 4; i++) {
     if (i == 1) {
       digitalWrite(Motor_[i], 1);
     }
     else {
       digitalWrite(Motor_[i], 0);
     }
  }  
}

void goLeft(int *Motor_){
  for (int i = 0; i < 4; i++) {
     if (i == 3) {
       digitalWrite(Motor_[i], 1);
     }
     else {
       digitalWrite(Motor_[i], 0);
     }
  } 
}
//R=1 , RB=4, L=3, LB=2
void goRightb(int *Motor_){
  for (int i = 0; i < 4; i++) {
     if (i == 4) {
       digitalWrite(Motor_[i], 1);
     }
     else {
       digitalWrite(Motor_[i], 0);
     }
  }  
}

void goLeftb(int *Motor_){
  for (int i = 0; i < 4; i++) {
     if (i == 2) {
       digitalWrite(Motor_[i], 1);
     }
     else {
       digitalWrite(Motor_[i], 0);
     }
  } 
}
