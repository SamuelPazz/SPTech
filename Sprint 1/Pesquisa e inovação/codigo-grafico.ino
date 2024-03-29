// Declaração de Variáveis
int pinoSensor = 7;
int contador = 0; 

// Função Setup: configurações necessárias antes de começar
void setup() {
  pinMode(pinoSensor, INPUT);
  Serial.begin(9600);
}

// Função Loop: recebe e exibe os dados do sensor
void loop() {
  if (digitalRead(pinoSensor) == LOW){
    contador ++;
    Serial.println(contador);
  } else {
    Serial.println(contador);
  }
  delay(500);
}