/**
 * exercise 2alert btn
 */

import { useState } from "react";
import Button from "./components/Button";
import Exercise2 from "./components/Exercise2";

const App = () => {
  const [alertVisible, setAlertVisiblity] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Exercise2
          onClose={() => setAlertVisiblity(false)}
          color="warning"
          content="this is main content"
          strongContent="heading"
        ></Exercise2>
      )}
      <Button color="primary" onClick={() => setAlertVisiblity(true)}>
        Success btn
      </Button>
    </div>
  );
};

/**
 * Exercise 1 button
 */

// import { Button } from "./components/Button";

// export const App = () => {
//   return (
//     <div>
//       {/* <Button onClick={() => console.log("success btn")}> */}
//       <Button color="secondary" onClick={() => console.log("success btn")}>
//         Success btn
//       </Button>
//     </div>
//   );
// };

/**self */
// import Exercise1 from "./components/Exercise1";

// function App() {
//   return (
//     <div>
//       <Exercise1 classname="btn btn-primary" content="success"></Exercise1>
//       <Exercise1 classname="btn btn-danger" content="danger"></Exercise1>
//       <Exercise1 classname="btn btn-warning" content="warning"></Exercise1>
//     </div>
//   );
// }
// import Alert from "./components/Alert";

// /**
//  * passing child
//  */
// function App() {
//   return (
//     <div>
//       {/* passing html */}
//       <Alert>
//         <h1>Vijay</h1>
//       </Alert>
//       {/* psasing string */}
//       {/* <Alert>Children</Alert> */}
//     </div>
//   );
// }

// import Message from "./Message";
// import ListGroup from "./components/ListGroup";
// function App() {
//   let items = ["Delhi", "Mumbai", "Ahm", "Agra", "Udaipur", "Puna"];

//   // seperate event handler
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//       {/* <ListGroup items={items} heading="Cities" /> */}

//       {/* independent list groups */}
//       {/* <ListGroup /> */}
//       {/* <ListGroup /> */}
//     </div>
//   );
//   // return <div><Message></Message></div>
// }

export default App;
