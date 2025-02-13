module.exports = function(Blockly){
  'use strict';

Blockly.JavaScript['button_1_status'] = function(block) {  
  var code = '(digitalRead(15))';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['Knob_status'] = function(block) {  
  var code = '(_Knob())';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['Read_position_TCSensor'] = function(block) {  
  var code = '(readline())';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['TCSensor_status'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var code = `(analog(${dropdown_pin}))`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['TCS_color_status'] = function(block) {
  var dropdown_pin = block.getFieldValue('_color');
  var code = `(Read_Color_TCS(${dropdown_pin}))`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['NKP_beep'] = function(block) {  
  var code = 'beep();\n';
  return code;
};
Blockly.JavaScript['NKP_beep_on'] = function(block) {  
  var code = 'beep_on();\n';
  return code;
};
Blockly.JavaScript['NKP_beep_off'] = function(block) {  
  var code = 'beep_off();\n';
  return code;
};
Blockly.JavaScript['NKP_beep_delay'] = function(block) {
  var value_delay = Blockly.JavaScript.valueToCode(block, '_delay', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = 'beep(' + value_delay + ');\n';
  return code;
};
Blockly.JavaScript['Set_pin_Tcsensor'] = function(block) {
  var value_x0 = Blockly.JavaScript.valueToCode(block, 'x0', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x3 = Blockly.JavaScript.valueToCode(block, 'x3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x4 = Blockly.JavaScript.valueToCode(block, 'x4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x5 = Blockly.JavaScript.valueToCode(block, 'x5', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = `setSensorPins((const int[]){${value_x0}, ${value_x1}, ${value_x2} , ${value_x3},${value_x4}}, 5);\n`;
  return code;
};

Blockly.JavaScript['TCSensor_pin'] = function(block) {
  var dropdown_ch1 = block.getFieldValue('ch1');
  var dropdown_ch2 = block.getFieldValue('ch2');
  var dropdown_ch3 = block.getFieldValue('ch3');
  var dropdown_ch4 = block.getFieldValue('ch4');
  var dropdown_ch5 = block.getFieldValue('ch5');
  var code = `setSensorPins((const int[]){${dropdown_ch1}, ${dropdown_ch2}, ${dropdown_ch3} , ${dropdown_ch4},${dropdown_ch5}}, 5);\n`;
  return code;
};
Blockly.JavaScript['Set_min_Tcsensor'] = function(block) {
  var value_x0 = Blockly.JavaScript.valueToCode(block, 'x0', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x3 = Blockly.JavaScript.valueToCode(block, 'x3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x4 = Blockly.JavaScript.valueToCode(block, 'x4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x5 = Blockly.JavaScript.valueToCode(block, 'x5', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = `setSensorMin((const uint16_t[]){${value_x0}, ${value_x1}, ${value_x2} , ${value_x3},${value_x4}});\n`;
  return code;
};
Blockly.JavaScript['Set_max_Tcsensor'] = function(block) {
  var value_x0 = Blockly.JavaScript.valueToCode(block, 'x0', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x3 = Blockly.JavaScript.valueToCode(block, 'x3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x4 = Blockly.JavaScript.valueToCode(block, 'x4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x5 = Blockly.JavaScript.valueToCode(block, 'x5', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = `setSensorMax((const uint16_t[]){${value_x0}, ${value_x1}, ${value_x2} , ${value_x3},${value_x4}});\n`;
  return code;
};
Blockly.JavaScript['sw1_press'] = function(block) {  
  var code = 'wait();\n';
  return code;
};
/*Blockly.JavaScript['bme280_read_temp'] = function(block) {
  var code = 'bme280.readTempC()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bme280_read_humid'] = function(block) {  
  var code = 'bme280.readFloatHumidity()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bme280_read_pressure'] = function(block) {
  var code = 'bme280.readFloatPressure()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bme280_read_altitude'] = function(block) {
  var code = 'bme280.readFloatAltitudeMeters()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bh1680_read_light_1'] = function(block) {  
  var code = 'analogRead(36)';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bh1680_read_light_2'] = function(block) {  
  var code = 'analogRead(39)';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bh1745_read_red'] = function(block) {
  var code = 'bh1745.getRedColor()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bh1745_read_green'] = function(block) {
  var code = 'bh1745.getGreenColor()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bh1745_read_blue'] = function(block) {
  var code = 'bh1745.getBlueColor()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bmx055_read_acc_x'] = function(block) {  
  var code = 'bmx055.getAccX()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bmx055_read_acc_y'] = function(block) {
  var code = 'bmx055.getAccY()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bmx055_read_acc_z'] = function(block) {
  var code = 'bmx055.getAccZ()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bmx055_read_gyro_x'] = function(block) {
  var code = 'bmx055.getGyroX()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bmx055_read_gyro_y'] = function(block) {
  var code = 'bmx055.getGyroY()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bmx055_read_gyro_z'] = function(block) {
  var code = 'bmx055.getGyroZ()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bmx055_read_mag_x'] = function(block) {
  var code = 'bmx055.getMagneticX()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bmx055_read_mag_y'] = function(block) {
  var code = 'bmx055.getMagneticY()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bmx055_read_mag_z'] = function(block) {
  var code = 'bmx055.getMagneticZ()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};*/

}