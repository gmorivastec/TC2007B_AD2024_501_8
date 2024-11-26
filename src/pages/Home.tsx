import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from 'react';
import './Home.css';

// how to run for quick development - ionic serve
// how to deploy to device - ionic capacitor run
const Home: React.FC = () => {

  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json")
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.error("error on fetch: " + error));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Proyectito</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonInput 
          value={inputValue}
          placeholder='Write something here'
          onIonChange={(text : any) => {
            setInputValue(text.detail.value);
          }}
        />
        <IonButton onClick={() => {
          alert("HOLA!");
        }}>
          HOLA!
        </IonButton>
        <IonButton routerLink='/detail'>
          GO TO DETAIL
        </IonButton>
        <IonList>
          {data.map((actual : any) => (
            <IonItem button onClick={() => { 
              console.log("HELLO FROM THE LIST!");
            }}>
              <IonLabel>{actual.marca}</IonLabel>
              <IonLabel>{actual.modelo}</IonLabel>
              <IonLabel>{actual.anio}</IonLabel>
            </IonItem>
          ))}
        </IonList>

        <div>
          {data.map((actual : any) => (
            <div className="ejemplo">
              <h1>{actual.marca}</h1>
              <h2>{actual.modelo}</h2>
              <p>{actual.anio}</p>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
