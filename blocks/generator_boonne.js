Blockly.JavaScript['setupboonne'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code =  `#EXTINC
  #include "MotorControl.h"
  #include "Oled.h"
  int IR = 15;
  const int Trig = 5;
  int Echo = 4; 
  const uint8_t vbatPin = 35;
  float VBAT;
  int count = 0;
  int Motor[] = {18,19,26,27};
  int status;
  void Battery() {
    VBAT = (float)(analogRead(vbatPin)) / 4095*2*3.3*1.1;
    OledBat(VBAT);
  }
  long microsecondsToCentimeters(long microseconds){
    return microseconds / 29 / 2;
  }
  long cmf() {
    long duration, cm;
    pinMode(Trig, OUTPUT);
    digitalWrite(Trig, LOW);
    delayMicroseconds(2);
    digitalWrite(Trig, HIGH);
    delayMicroseconds(5);
    digitalWrite(Trig, LOW);
    pinMode(Echo, INPUT);
    duration = pulseIn(Echo, HIGH);
    cm = microsecondsToCentimeters(duration);
    return cm;
  }
 void moveset(int a){
  if(a == 1){ //ดีใจ
    Oledeye5();
    goRight(Motor);
    delay(200);
    MotorStnding(Motor);
    delay(100);
    goLeft(Motor);
    delay(200);
    MotorStnding(Motor);
    delay(100);
    goRight(Motor);
    delay(200);
    MotorStnding(Motor);
    delay(100);
    goLeft(Motor);
    delay(200);
    MotorStnding(Motor);
    delay(100);
  }
  if(a == 2){ //เศร้า
    Oledeye6();
    goBackward(Motor);
    delay(500);
    goRight(Motor);
    delay(500);
    goForward(Motor);
    delay(300);
    MotorStnding(Motor);
    delay(200);
    goForward(Motor);
    delay(300);
    MotorStnding(Motor);
    delay(100);
  }    
  if(a == 3){ //สงสัย
    goForward(Motor);
    delay(300);
    MotorStnding(Motor);
    delay(100);
    Oledeye8();
    // goForward(Motor);
    // delay(300);
    // MotorStnding(Motor);
    // delay(200);
    // goBackward(Motor);
    // delay(500);
    // MotorStnding(Motor);
    delay(500);
  }
  if(a == 4){ // ตกใจ
    Oledeye2();
    goBackward(Motor);
    delay(700);
    MotorStnding(Motor);
    delay(100);
  }
  if(a == 5){ //โกรธ
    Oledeye2();
    goForward(Motor);
    delay(300);
    MotorStnding(Motor);
    delay(200);
    goForward(Motor);
    delay(400);
    MotorStnding(Motor);
    delay(100);
  }
 }
  void moveone(char incoming){
      if( incoming == 'U'){   
      MotorStnding(Motor);
      delay(200);
        goForward(Motor);
        delay(1000);
        MotorStnding(Motor);
      }

      if( incoming == 'D'){ 
        MotorStnding(Motor);
        delay(200);
        goBackward(Motor);
        delay(1000);
        MotorStnding(Motor);
      }

      if( incoming == 'R'){ 
        MotorStnding(Motor);
        delay(100);
        goRight(Motor);
        delay(500);
        MotorStnding(Motor);
      }
      
      if( incoming == 'L'){ 
        MotorStnding(Motor);
        delay(100);
        goLeft(Motor);
        delay(500);
        MotorStnding(Motor);
      }
    }
  #END
  #BLOCKSETUP
  for (int i = 0; i < 4; i++) {
    pinMode(Motor[i], OUTPUT);
  }
  status = 1;
  OledClear();
  Battery();
  delay(1500);
  MotorStnding(Motor);
  Oledeye1();
  #END
  
  `;
  return code;
};

Blockly.JavaScript['setupboonneblu'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code =  `#EXTINC
  #include "BluetoothSerial.h"

    // #if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
    // #error Bluetooth is not enabled! Please run 'make menuconfig' to and enable it
    // #endif

  BluetoothSerial ESP_BT;
  char incoming = 'S';
  #END
  #BLOCKSETUP
    ESP_BT.begin("boonne_Blu");
    status = 2;
  #END
  `;
  return code;
};

Blockly.JavaScript['boonne_auto'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code =  `#EXTINC
  
  #END
  #BLOCKSETUP
  
  #END
 if(status == 1) {
    count = 1;
    while (count <= 5) {
      if (cmf() < 10 && analogRead (IR) > 100){
        Oledeye3();
        MotorStnding(Motor);
        delay(200);
      }
      else if(cmf() < 50 || analogRead (IR) > 100){
        Oledeye2();
        MotorStnding(Motor);
        delay(200);
        goBackward(Motor);
        delay(700);
        MotorStnding(Motor);
        delay(200);
        goRight(Motor);
        delay(500);
        MotorStnding(Motor);
      }
      else{
        Oledeye1();
        goForward(Motor);
        delay(300);
        MotorStnding(Motor);
        delay(200);
      }
      delay(1000);   
      count++;
    }
    
    int RANDOM_NO = random(1, 9);// สุ่มตัวเลข 1 - 8
    if(RANDOM_NO <= 5){
      moveset(RANDOM_NO);
    }
    else{
      if (cmf() < 10 && analogRead (IR) > 100){
        Oledeye3();
        MotorStnding(Motor);
        delay(200);
      }
      else if(cmf() < 50 || analogRead (IR) > 100){
        Oledeye2();
        MotorStnding(Motor);
        delay(200);
        goBackward(Motor);
        delay(700);
        MotorStnding(Motor);
        delay(200);
        goRight(Motor);
        delay(500);
      }
      else{
        Oledeye1();
        goForward(Motor);
        delay(300);
        MotorStnding(Motor);
        delay(200);
      }
    }  
  }
  `;
  return code;
};

Blockly.JavaScript['boonne_blu'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code =  `#EXTINC
  #END
  
  #BLOCKSETUP
  
  #END

 if(status == 2){
  if(ESP_BT.hasClient()){
    OledCircle2();
    incoming = ESP_BT.read();
   
    if( incoming == 'U'){   
      moveone(incoming);
      }

      if( incoming == 'D'){ 
        moveone(incoming);
      }

      if( incoming == 'R'){ 
        moveone(incoming);
      }
      
      if( incoming == 'L'){ 
        moveone(incoming);
      }
     
      if( incoming == 'S'){ 
        MotorStnding(Motor);
      }

      if(incoming == 'P'){
        Battery();
        delay(1000);
      }

      if(incoming == 'a'){ //ดีใจ
        moveset(1);
      }
      if(incoming == 'b'){ //เศร้า
        moveset(2);
      }    
      if(incoming == 'c'){ //สงสัย
        moveset(3);
      }
      if(incoming == 'd'){ // ตกใจ
        moveset(4);
      }
      if(incoming == 'e'){ //โกรธ
        moveset(5);
      }
  }
  else{
    MotorStnding(Motor);
    Oledeye1();
    delay(200);
 }
 }
  `;
  return code;
};

Blockly.JavaScript['boonne_moveone'] = function(block) {
  var dropdown_moveone = block.getFieldValue('moveone');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_moveone}`;
  return code;
};

Blockly.JavaScript['boonne_moveon'] = function(block) {
  var dropdown_moveon = block.getFieldValue('moveon');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_moveon}`;
  return code;
};

Blockly.JavaScript['boonne_mood'] = function(block) {
  var dropdown_mood = block.getFieldValue('mood');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_mood}`;
  return code;
};

Blockly.JavaScript['boonne_eye'] = function(block) {
  var dropdown_eye = block.getFieldValue('eye');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_eye}`;
  return code;
};

Blockly.JavaScript['boonne_stop'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'MotorStnding(Motor);';
  return code;
};

// Blockly.JavaScript['income'] = function(block) {
//   // TODO: Assemble JavaScript into code variable.
//   var code = `incoming = ESP_BT.read();`;
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };

// Blockly.JavaScript['boonne_readblu'] = function(block) {
//   var dropdown_readblu = block.getFieldValue('readblu');
//   // TODO: Assemble JavaScript into code variable.
//   var code = `${dropdown_readblu}`;
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };

Blockly.JavaScript['ir'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'analogRead (IR)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ult'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'cmf()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};



Blockly.JavaScript['boonne_readincome'] = function(block) {
  var dropdown_readincome = block.getFieldValue('readincome');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = `if(ESP_BT.read() == ${dropdown_readincome}){
    ${statements_name}
  }`;  
  return code;
};
