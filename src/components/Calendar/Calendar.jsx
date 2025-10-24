import React, { useState, useEffect } from 'react'
import { ru } from 'react-day-picker/locale'
import 'react-day-picker/dist/style.css'
import * as S from './Calendar.styled'

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0') // месяцы с 0
    const year = date.getFullYear()
    return `${month}-${day}-${year}`
}

export default function Calendar({ onRangeChange }) {
    const [range, setRange] = useState({ from: undefined, to: undefined })

    const handleSelect = (range) => {
        if (!range.from) {
            return
        }

        if (!range.to) {
            setRange({ from: range.from, to: range.from })
        } else {
            setRange(range)
        }
    }

    useEffect(() => {
        if (range.from && range.to) {
            const formatted = {
                start: formatDate(range.from),
                end: formatDate(range.to),
            }
            onRangeChange?.(formatted)
        }
    }, [range, onRangeChange])

    return (
        <S.CalendarContainer>
            <S.Calendar
                mode="range"
                selected={range}
                onSelect={handleSelect}
                numberOfMonths={12}
                locale={ru}
                defaultMonth={new Date()}
                month={new Date(new Date().getFullYear(), 0)}
                pagedNavigation={false} // отключает разбивку на страницы (чтобы 12 месяцев были сразу)
                disabled={{
                    before: new Date(
                        new Date().getFullYear() - 1,
                        new Date().getMonth(),
                        1
                    ),
                    after: new Date(
                        new Date().getFullYear() + 1,
                        new Date().getMonth() + 1,
                        0
                    ),
                }}
                formatters={{
                    formatMonthCaption: (date) =>
                        date
                            .toLocaleDateString('ru-RU', {
                                month: 'long',
                                year: 'numeric',
                            })
                            .replace(/^./, (char) => char.toUpperCase()),
                }}
                classNames={{
                    day_selected: 'my-selected',
                    day_range_middle: 'my-range-middle',
                    day_today: 'my-today',
                }}
                modifiersClassNames={{
                    selected: 'my-selected',
                    range_middle: 'my-range-middle',
                    today: 'my-today',
                }}
            />
        </S.CalendarContainer>
    )
}
