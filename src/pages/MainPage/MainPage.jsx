import Main from "../../components/Main/Main";
import { ExpenseProvider } from "../../context/ExpenseProvider";


function MainPage() {
 
  return (
    <div>
       <ExpenseProvider>
       <Main  />
       </ExpenseProvider>
     
    </div>
  );
}

export default MainPage;
