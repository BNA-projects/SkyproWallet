import styled from 'styled-components'
import { textSizes, buttonStyles } from '../../const'
import Button from '../Button/Button'
export const Analysis = styled.div`
    color: ${textSizes.largeH1.color};
    width: 100%;
    @media (max-width: 600px) {
        background-color: var(--bg-color);
        padding-left: 0px;
        padding-right: 0px;
        background: linear-gradient(to bottom, #ffffff 50%, #f4f5f6 100%);
    }
`

export const AnalysisHeader = styled.h1`
    font-size: ${textSizes.largeH1.fontSize};
    font-weight: ${textSizes.largeH1.fontWeight};
    color: ${textSizes.largeH1.color};
    padding-top: 36px;
    padding-bottom: 32px;
    line-height: 150%;
    padding-left: calc(8.3%);
    @media (max-width: 600px) {
        font-size: ${textSizes.largeH2.fontSize};
        line-height: 100%;
        padding-top: 24px;
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 24px;
    }
`
export const AnalysisExspenseContainer = styled.div`
    display: flex;
    gap: 34px;
    justify-content: space-around;
    padding-left: calc(8.3%);
    padding-right: calc(8.3%);
    box-sizing: border-box;
    width: 100%;
    @media (max-width: 1300px) {
        flex-wrap: wrap;
    }
    @media (max-width: 900px) {
        flex-wrap: wrap;
        padding-left: 0px;
        padding-right: 0px;
    }
`
export const AnalysisCalendarContainer = styled.div`
    box-sizing: border-box;
    max-width: 379px;
    background-color: var(--bg-color);
    width: 100%;
    @media (max-width: 600px) {
        background: linear-gradient(to bottom, #ffffff 80%, #f4f5f6 100%);
    }
`

export const AnalysisTableContainer = styled.div`
    min-width: 789px;
    max-width: 100%;
    border-radius: 30px;
    background-color: var(--bg-color);
    @media (max-width: 800px) {
        min-width: 343px;
        max-width: 100%;
        padding-bottom: 31px;
        padding-left: 16px;
        padding-right: 16px;
    }
    @media (max-width: 600px) {
        min-width: 343px;
        max-width: 100%;
        background: linear-gradient(to bottom, #ffffff 50%, #f4f5f6 100%);
    }
`
export const AnalysisTableHeaderblock = styled.div`
    display: flex;
`

export const AnalysisTableHeader = styled.h2`
    font-size: ${textSizes.largeH2.fontSize};
    font-weight: ${textSizes.largeH2.fontWeight};
    color: ${textSizes.largeH1.color};
    padding-top: 32px;
    padding-left: 32px;
`
export const AnalysisTableHeaderFilterBlock = styled.div`
    display: flex;
`

export const AnalysisExpenseContainer = styled.div`
    box-sizing: border-box;
    max-width: 400px;
    border-radius: 30px;
    background-color: var(--bg-color);
`

export const CalendarHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: space-between;
    border-bottom: 1px solid #999999;
    @media (max-width: 600px) {
    }
`

export const CalendarHeader = styled.div`
    display: flex;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 32px;
    justify-content: space-between;
    align-items: center;
`
export const CalendarHeaderTitle = styled.h2`
    font-size: ${textSizes.largeH2.fontSize};
    font-weight: ${textSizes.largeH2.fontWeight};
`

export const CalendarFilterLinks = styled.div`
    display: flex;
    gap: 12px;
    justify-content: space-between;
`

export const CalendarNavLink = styled.button`
    background: none;
    border: none;
    font-size: ${textSizes.small.fontSize};
    font-weight: ${(props) => (props.$active ? 600 : 400)};
    color: ${(props) => (props.$active ? '#27ae60' : '#000')};
    text-decoration: ${(props) => (props.$active ? 'underline' : 'none')};
    text-underline-offset: 4px;
    cursor: pointer;

    &:hover {
        color: ${buttonStyles.active.color};
    }
`
export const CalendarWeekDays = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
`
export const CalendarWeekDayBlock = styled.div`
    align-items: center;
`
export const CalendarWeekDay = styled.p`
    font-weight: ${textSizes.small.fontWeight};
    font-size: ${textSizes.small.fontSize};
    color: #999999;
    padding: 6px 12px;
    line-height: 100%;
`
export const CalendarBody = styled.div`
    padding-top: 24px;
    padding-left: 32px;
    box-sizing: border-box;

`
export const PeriodButtonBlock = styled.div`
    display: none;
    @media (max-width: 475px) {
        display: block;
        padding: 24px 16px;
        width: 100%;
        background-color: var(--bg-color);
    }
`
export const PeriodButton = styled(Button)`
    font-size: ${textSizes.small.fontSize};
    font-weight: ${textSizes.medium.fontWeight};
    color: white;
`
