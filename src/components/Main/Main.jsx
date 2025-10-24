import {
  SMain,
  SMainHeader,
  STableHeader,
  STableSection,
  SSectionTitle,
  STables,
  STableBodyWrapper,
} from "./Main.styled";
import { TableRow, TableFirstRow } from "../TableRows/TableRows";
import ExpenseForm from "../ExpenseForm/ExpenseForm ";
import { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";
import { categoryTranslations } from "../../const";
import { useState } from "react";
import { formatedDate } from "../../utils/utils";
import { useEffect } from "react";
import Filters from "../Fiters/Fiters";

function Main() {
  const { expenses, deleteExpenseByID } = useContext(ExpenseContext);
  const [selectedCategory, setSelectedCategory] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState(false);
  const [filteredData, setFilteredData] = useState(expenses);
  const [selectedExpense, setSelectedExpense] = useState(null);

  useEffect(() => {
    // Обновлять только если ничего не выбрано
    if (!selectedCategory && !selectedSorting) {
      setFilteredData(expenses);
    }
  }, [expenses, selectedCategory, selectedSorting]);

  const handleEditClick = (expenseId) => {
    setSelectedExpense(expenseId);
  };

  const handleEditComplete = () => {
    setSelectedExpense(null);
  };

  const handleDelete = async (expenseId) => {
    await deleteExpenseByID({ id: expenseId });
  };

  return (
    <>
      <SMain>
        <SMainHeader>Мои расходы</SMainHeader>
        <STables>
          <STableSection>
            <STableHeader>
              <SSectionTitle>Таблица расходов</SSectionTitle>
              <Filters
                expenses={expenses}
                setFilteredData={setFilteredData}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedSorting={selectedSorting}
                setSelectedSorting={setSelectedSorting}
              />
            </STableHeader>
            <TableFirstRow />
            <STableBodyWrapper>
              {filteredData.map((expense) => (
                <TableRow
                  key={expense._id}
                  description={expense.description}
                  category={
                    categoryTranslations[expense.category] || expense.category
                  }
                  date={formatedDate(expense.date)}
                  amount={`${expense.sum.toLocaleString("ru-RU")} ₽`}
                  onEdit={() => handleEditClick(expense._id)}
                  onDelete={() => handleDelete(expense._id)}
                  isSelected={selectedExpense === expense._id}
                />
              ))}
            </STableBodyWrapper>
          </STableSection>
          <ExpenseForm
            selectedExpense={selectedExpense}
            onEditComplete={handleEditComplete}
          />
        </STables>
      </SMain>
    </>
  );
}

export default Main;
