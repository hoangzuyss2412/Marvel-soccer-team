# Marvel Soccer Team Project Guide

### Getting Started

1. **Launch the App**:
   - Clone the project and navigate to the correct directory.
   - Run the command `npm start` to initiate the app in development mode.
   - Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Interacting with Hero Cards

2. **Assigning Soccer Positions**:
   - Hover your mouse over a hero card and right-click to see a list of soccer positions.
   - Select a position to assign to the hero. For instance, assigning the A.I.M hero as a Striker (ST). 
   - ![Assigning Position](https://github.com/hoangzuyss2412/Marvel-soccer-team/assets/100951023/26fd030a-149a-4c71-8011-5b063cfca8a1)
   - Once selected, the hero will now be designated with the chosen position.
   - ![Hero with Assigned Position](https://github.com/hoangzuyss2412/Marvel-soccer-team/assets/100951023/0f87e0dd-c136-4efa-94f2-87b99156f166)

3. **Discarding Assigned Positions**:
   - To change a hero's position, right-click the hero and select `Discard current selection`.
   - ![Discarding Selection](https://github.com/hoangzuyss2412/Marvel-soccer-team/assets/100951023/69de0608-21eb-4fe2-a775-33ed83371e06)

### Creating Your Soccer Squad

4. **Forming the Squad**:
   - Continue assigning positions until you have a minimum of 6 players, including at least 1 Goalkeeper (GK), 1 Striker (ST), 1 Midfielder (MD), and 1 Defender (DF).
   - Click `Create a soccer squad` at the top of the page to finalize your team.
   - If your squad doesn't meet the criteria, an error message will display.
   - ![Error Message](https://github.com/hoangzuyss2412/Marvel-soccer-team/assets/100951023/94757ecf-a20c-4c39-85fb-c25986843593)

5. **Viewing the Soccer Squad**:
   - Once the squad is successfully created, you'll be directed to a new page showcasing your heroes and their assigned positions.
   - Click `Back to home page` to return to the main screen.
   - ![Squad List](https://github.com/hoangzuyss2412/Marvel-soccer-team/assets/100951023/a95e60fc-c698-43f1-a8b4-5e34b5456f0c)
   - ![Squad List](https://github.com/hoangzuyss2412/Marvel-soccer-team/assets/100951023/a94f8c91-16aa-46dc-b012-e4e520cc2a0e)

The "Approach Discussion" section you've added is a great idea, as it provides insight into the technical aspects of your project. Here's a slightly revised version for clarity and flow:

---

### Approach Discussion:

This project is implemented using React.js. The Marvel API, accessible at `https://developer.marvel.com/docs`, serves as the backbone for fetching character data. In this project, I used only the `/v1/public/characters` endpoint to retrieve detailed information about 20 Marvel heroes.

Key aspects of the project include:

- **State Management**: The application employs React's `useState` hook to maintain a dictionary that tracks each hero's assigned soccer position and their details. This approach ensures that the state is updated efficiently and accurately as users interact with the app.

- **Propagating Changes**: Changes in the state are propagated to child components using the `useEffect` hook.
  
- **Interactive UI**: To enhance user interaction, the right-click functionality is implemented using the `onContextMenu` event. This allows users to assign positions to heroes in an intuitive and interactive manner.


  
