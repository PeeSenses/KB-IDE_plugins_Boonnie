Blockly.Blocks['setupboonne'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("เบาหนี้เตรียมพร้อม");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
 this.setTooltip("ควรใส่ไว้ใน setup เพื่มเซตค่าเริ่มต้น");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setupboonneblu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("เบาหนี้เปิดบลูทูธ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
 this.setTooltip("ควรใส่ไว้ใน setup เพื่อให้เบาหนี้เปิดบลูทูธ");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['boonne_auto'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("เบาหนี้เดินอัตโนมัติ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("ควรใส่ไว้ใน loop เพื่อให้วนรอบการทำงาน");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['boonne_blu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("เบาหนี้รอรับคำสั่ง");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("ควรใส่ไว้ใน loop เพื่อให้วนรอบรับค่าจากบลูทูธ");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['boonne_moveone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["เดินหน้า","moveone('U');"], ["ถอยหลัง","moveone('D');"], ["หมุนซ้าย","moveone('L');"], ["หมุนขวา","moveone('R');"]]), "moveone")
        .appendField("หนึ่งครั้ง");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['boonne_moveon'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["เดินหน้า","goForward(Motor);"], ["ถอยหลัง","goBackward(Motor);"], ["หมุนซ้าย","goLeft(Motor);"], ["หมุนขวา","goRight(Motor);"]]), "moveon")
        .appendField("ตลอด");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['boonne_mood'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("เบาหนี้")
        .appendField(new Blockly.FieldDropdown([["ดีใจ","moveset(1);"], ["เสียใจ","moveset(2);"], ["สงสัย","moveset(3);"], ["ตกใจ","moveset(4);"], ["โกรธ","moveset(5);"]]), "mood");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['boonne_eye'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("เบาหนี้ทำตา")
        .appendField(new Blockly.FieldDropdown([["ดีใจ","Oledeye5();"], ["เสียใจ","Oledeye6();"], ["สงสัย","Oledeye8();"], ["ตกใจ","Oledeye2();"], ["โกรธ","Oledeye4();"]]), "eye");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['boonne_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("เบาหนี้หยุด");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



// Blockly.Blocks['boonne_readblu'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("กดปุ่ม")
//         .appendField(new Blockly.FieldDropdown([["ลูกศรขึ้น","\"U\""], ["ลูกศรลง","\"D\""], ["ลูกศรซ้าย","\"L\""], ["ลูกศรขวา","\"R\""], ["หยุด","\"S\""], ["หน้าดีใจ","\"a\""], ["หน้าเสียใจ","\"b\""], ["หน้าสงสัย","\"c\""], ["หน้าตกใจ","\"d\""], ["หน้าโกรธ","\"e\""]]), "readblu");
//     this.setOutput(true, null);
//     this.setColour(0);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };

Blockly.Blocks['boonne_readincome'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("อ่านค่าบลูทูธเมื่อกดปุ่ม")
        .appendField(new Blockly.FieldDropdown([["ลูกศรขึ้น","'U'"], ["ลูกศรลง","'D'"], ["ลูกศรซ้าย","'L'"], ["ลูกศรขวา","'R'"], ["หยุด","'S'"], ["หน้าดีใจ","'a'"], ["หน้าเสียใจ","'b'"], ["หน้าสงสัย","'c'"], ["หน้าตกใจ","'d'"], ["หน้าโกรธ","'e'"]]), "readincome");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("ทำ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Blockly.Blocks['income'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("อ่านค่าบลูทูธ");
//     this.setOutput(true, null);
//     this.setColour(0);
//  this.setTooltip("ควรใส่ไว้ใน set เพื่อรับค่าเก็บไว้ในตัวแปร หรือ if เพื่อรับค่ามาเปลียบเทียบ");
//  this.setHelpUrl("");
//   }
// };

Blockly.Blocks['ult'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("เซนเซอร์อัลตราโซนิก");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("หน่วยเป็นเซนติเมตร");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("เซนเซอร์ตรวจจับเส้น");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("ค่ามากกว่า 80 เท่ากับไม่เจอพื่น ค่าน้อยกว่า 80 เท่ากับเจอพื่น");
 this.setHelpUrl("");
  }
};


