
int uy=A1;
int uyValue;
int IN1=11;
int IN2=10;
int ENA=9;
int speedPWMmotor=LOW;

void setup() {
  // put your setup code here, to run once:

pinMode(uy,INPUT);
pinMode(IN1,OUTPUT);
pinMode(IN2,OUTPUT);
pinMode(ENA,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  
   uyValue=analogRead(A1);
    speedPWMmotor=uyValue;
   
   
 if (uyValue>=530){
  uyValue=map(speedPWMmotor, 530, 1023, 0, 255);
  digitalWrite(IN1,HIGH);
  digitalWrite(IN1,LOW);
  analogWrite(ENA,speedPWMmotor);
 }
 else if (uyValue<=490){
  uyValue=map(speedPWMmotor, 490, 0, 0, 255);
  digitalWrite(IN1,LOW);
  digitalWrite(IN1,HIGH);
  analogWrite(ENA,speedPWMmotor);
 }
else{
 digitalWrite(IN1,LOW);
  digitalWrite(IN1,LOW);

}

}
