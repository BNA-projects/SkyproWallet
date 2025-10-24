import { useState, useEffect, useCallback, useContext } from "react";
import Diagram from "../Diagram/Diagram";
import Calendar from "../Calendar/Calendar";
import CalendarMonth from "../CalendarMonth/CalendarMonth";
import * as S from "./Analysis.styled";
import { sortByCategorie } from "../../utils/utils";
import { ExpenseContext } from "../../context/ExpenseContext";

function Analysis() {
  const { expenses } = useContext(ExpenseContext);

  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const [filter, setMode] = useState(true);
  const [period, setPeriod] = useState("все время");
  const [diagramData, setDiagramData] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [showCalendarMobile, setShowCalendarMobile] = useState(false);
  const toggleCalendar = () => {
    setShowCalendarMobile((prev) => !prev);
  };

  const handleRangeChange = useCallback(
    (range) => {
      if (!range?.start || !range?.end) return;

      const startDate = new Date(range.start);
      const endDate = new Date(range.end);

      const filtered = expenses.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= startDate && itemDate <= endDate;
      });

      const newDiagramData = sortByCategorie(filtered);
      const formatRange = (start, end) => {
        const options = {
          day: "2-digit",
          month: "long",
          year: "numeric",
        };
        const startStr = start.toLocaleDateString("ru-RU", options);
        const endStr = end.toLocaleDateString("ru-RU", options);
        return `${startStr} – ${endStr}`;
      };

      setPeriod(formatRange(startDate, endDate));

      setDiagramData((prev) => {
        if (JSON.stringify(prev) !== JSON.stringify(newDiagramData)) {
          return newDiagramData;
        }
        return prev;
      });
    },
    [expenses]
  );

  useEffect(() => {
    if (expenses?.length > 0) {
      setDiagramData(sortByCategorie(expenses));
    }
  }, [expenses]);
  useEffect(() => {
    const handleResize = () => {
      const mobileBreakpoint = 475;
      const isNowMobile = window.innerWidth <= mobileBreakpoint;
      setIsMobile(isNowMobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <S.Analysis>
      <S.AnalysisHeader>Анализ расходов</S.AnalysisHeader>
      <S.AnalysisExspenseContainer>
        {(!isMobile || showCalendarMobile) && (
          <S.AnalysisCalendarContainer>
            <S.CalendarHeaderContainer>
              <S.CalendarHeader>
                <S.CalendarHeaderTitle>Период</S.CalendarHeaderTitle>
                <S.CalendarFilterLinks>
                  <S.CalendarNavLink
                    onClick={() => setMode(true)}
                    $active={filter}
                  >
                    Месяц
                  </S.CalendarNavLink>
                  <S.CalendarNavLink
                    onClick={() => setMode(false)}
                    $active={!filter}
                  >
                    Год
                  </S.CalendarNavLink>
                </S.CalendarFilterLinks>
              </S.CalendarHeader>
              <S.CalendarWeekDays>
                {daysOfWeek.map((day) => (
                  <S.CalendarWeekDayBlock key={day}>
                    <S.CalendarWeekDay>{day}</S.CalendarWeekDay>
                  </S.CalendarWeekDayBlock>
                ))}
              </S.CalendarWeekDays>
            </S.CalendarHeaderContainer>

            <S.CalendarBody>
              {filter ? (
                <Calendar onRangeChange={handleRangeChange} />
              ) : (
                <CalendarMonth onRangeChange={handleRangeChange} />
              )}
            </S.CalendarBody>
          </S.AnalysisCalendarContainer>
        )}

        {(!isMobile || !showCalendarMobile) && (
          <S.AnalysisTableContainer>
            <S.AnalysisTableHeaderblock>
              <Diagram diagramData={diagramData} period={period} />
              <S.AnalysisTableHeaderFilterBlock />
            </S.AnalysisTableHeaderblock>
          </S.AnalysisTableContainer>
        )}
      </S.AnalysisExspenseContainer>

      <S.PeriodButtonBlock>
        {isMobile && (
          <S.PeriodButton type="button" onClick={toggleCalendar}>
            {showCalendarMobile ? "Выбрать период" : "Выбрать другой период"}
          </S.PeriodButton>
        )}
      </S.PeriodButtonBlock>
    </S.Analysis>
  );
}

export default Analysis;
