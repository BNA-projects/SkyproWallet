import React, { useState, useEffect } from 'react'
import * as S from './CalendarMonth.styled'

const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
]

const currentYear = new Date().getFullYear()
const years = [currentYear - 1, currentYear, currentYear + 1]

const CalendarMonth = ({ onRangeChange }) => {
    const [selected, setSelected] = useState([])



    const toggleMonth = (year, monthIndex) => {
        const key = `${year}-${String(monthIndex).padStart(2, '0')}`
        setSelected((prev) =>
            prev.includes(key) ? prev.filter((m) => m !== key) : [...prev, key]
        )
    }

  
    useEffect(() => {
        if (selected.length === 0) return

        const dates = selected
            .map((key) => {
                const [year, month] = key.split('-').map(Number)
                return new Date(year, month)
            })
            .sort((a, b) => a - b)

        const start = new Date(dates[0].getFullYear(), dates[0].getMonth(), 1)
        const end = new Date(
            dates[dates.length - 1].getFullYear(),
            dates[dates.length - 1].getMonth() + 1,
            0
        )

        onRangeChange?.({ start, end })
    }, [selected, onRangeChange])

    return (
        <S.Container>
            <S.Content>
                {years.map((year) => (
                    <div key={year}>
                        <S.YearLabel>{year}</S.YearLabel>
                        <S.MonthGrid>
                            {months.map((month, i) => {
                                const key = `${year}-${String(i).padStart(
                                    2,
                                    '0'
                                )}`

                                let isInRange = false

                                if (selected.length > 0) {
                                    const sorted = [...selected].sort()
                                    const start = sorted[0]
                                    const end = sorted[sorted.length - 1]
                                    isInRange = key >= start && key <= end
                                }
                                return (
                                    <S.MonthButton
                                        key={key}
                                        selected={isInRange}
                                        onClick={() => toggleMonth(year, i)}
                                    >
                                        {month}
                                    </S.MonthButton>
                                )
                            })}
                        </S.MonthGrid>
                    </div>
                ))}
            </S.Content>
        </S.Container>
    )
}

export default CalendarMonth

