int pinoSensor = 7;

// Função Setup: configurações necessarias antes de começar
void setup() {
  pinMode(pinoSensor, INPUT);
  Serial.begin(9600);
}

// Função Loop: recebe e exibe os dados do sensor
void loop() {
  if(digitalRead(pinoSensor) == LOW){
  Serial.println("Detectado");
  }
  else {
  Serial.println("Ausente");
  }
  delay(1000);
}