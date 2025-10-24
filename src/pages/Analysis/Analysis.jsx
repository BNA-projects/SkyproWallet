import Analysis from "../../components/Analysis/Analysis";
import { ExpenseProvider } from "../../context/ExpenseProvider";

function AnalysisPage() {
  return (
    <div>
      {/* <ExpenseProvider> */}
      <ExpenseProvider>
        <Analysis />
      </ExpenseProvider>
    </div>
  );
}

export default AnalysisPage;
