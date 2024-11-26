import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Detail: React.FC = () => {
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Proyectito</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonLabel>HI IM DETAIL!</IonLabel>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Detail;
  