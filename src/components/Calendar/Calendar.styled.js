import { DayPicker } from 'react-day-picker'
import styled from 'styled-components'
import { textSizes } from '../../const'
export const CalendarContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 480px;
    overflow-y: auto;
    padding-right: 28px; 

 
    scrollbar-width: thin;
    scrollbar-color: #ccc transparent;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 10px;
    }
`

export const Calendar = styled(DayPicker)`
    --rdp-day-height: 46px;
    --rdp-day-width: 46px;
    --rdp-day_button-height: 46px;
    --rdp-day_button-width: 46px;
 
    --rdp-cell-width: 46px;
    --rdp-accent-color: #dbffe9;
    --rdp-weekday-padding: 0rem 0rem;
    --rdp-day_button-border: 3px solid white;
    --rdp-weekday-opacity: 0.5;
    --rdp-range_start-color: #1fa46c;
    --rdp-months-gap: 2rem;

    .rdp-day_button {
        background-color: #f4f5f6;
    }
    .rdp-month_caption {
        padding-bottom: 12px;
    }
    .rdp-weekdays {
        display: none;
    }
    .rdp-nav {
        display: none;
    }
    .my-selected {
        color: black;
        border-radius: 50%;
        background-color: #dbffe9;
        border-radius: 30px;
        .rdp-day_button {
        background-color: #dbffe9;
    }
    }

    .my-range-middle {
        background-color: #dbffe9;
        color: #1fa46c;
        border-radius: 0;
        border-radius: 30px;
    }

    .my-today {
        font-weight: ${textSizes.medium.fontWeight};
        border-radius: 30px;
        color: #1fa46c;
    }
`
