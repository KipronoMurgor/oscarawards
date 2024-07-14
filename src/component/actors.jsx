import React from 'react';

const Actors = () => {
  const actorList = [
    { name: 'Leonardo DiCaprio', imageUrl: '/public/Di caprio.jpg' },
    { name: 'Robert De Niro', imageUrl: '/public/Deniro.jpg' },
    { name: 'Tom Hanks', imageUrl: '/public/Hanks.jpg' },
    { name: 'Denzel Washington', imageUrl: '/public/Denzel.jpg' },
    { name: 'Anthony Hopkins', imageUrl: '/public/Hopkins.jpg' },
    { name: 'Morgan Freeman', imageUrl: '/public/Morgan.jpg' },
    { name: 'Brad Pitt', imageUrl: '/public/Brad.jpg' },
    { name: 'Johnny Depp', imageUrl: '/public/Depp.jpg' },
    { name: 'Angelina Jolie', imageUrl: '/public/Jolie.jpg' },
    { name: 'Robert Downey Jr.', imageUrl: '/public/Robert.jpg' },
  ];

  const styles = {
    mainContent: {
      padding: '20px',
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      boxSizing: 'border-box',
      
    },
    
    actorList: {
      listStyleType: 'none',
      padding: '0',
    },
    actorItem: {
      marginBottom: '20px',
    },
    actorContainer: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #ddd',
      padding: '10px',
      borderRadius: '8px',
      //backgroundimage: URL("/public/Nakia.jpg")
       
    },
  
    actorImage: {
      width: '100px',
      height: 'auto',
      marginRight: '15px',
      borderRadius: '50%',
    },
    actorName: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.mainContent}>
      <div style={styles.container}>
        <h2>Actors Page</h2>
        <div>
          <h3>List of Actors</h3>
          <ul style={styles.actorList}>
            {actorList.map((actor) => (
              <li key={actor.name} style={styles.actorItem}>
                <div style={styles.actorContainer}>
                  <img
                    src={actor.imageUrl}
                    alt={actor.name}
                    style={styles.actorImage}
                  />
                  <p style={styles.actorName}>{actor.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Actors;