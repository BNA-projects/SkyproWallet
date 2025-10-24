import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-height: 480px;
    overflow-y: auto;
    padding-right: 29px; 

   
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

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 600;
`

export const ModeSwitch = styled.div`
    display: flex;
    gap: 12px;
`

export const ModeButton = styled.button`
    background: none;
    border: none;
    font-size: 16px;
    font-weight: ${(props) => (props.active ? 600 : 400)};
    color: ${(props) => (props.active ? '#27ae60' : '#000')};
    text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
    text-underline-offset: 4px;
    cursor: pointer;

    &:hover {
        color: #27ae60;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const YearLabel = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
`

export const MonthGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    margin-bottom: 16px;
`

export const MonthButton = styled.button`
    width: 103px;
    height: 34px;
    padding: 8px 12px 8px 12px;
    border-radius: 30px;
    border: none;
    background: ${(props) => (props.selected ? '#dbffe9' : '#F4F5F6')};
    color: ${(props) => (props.selected ? '#1fa46c' : '#000')};
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: #dbffe9;
       
    }
`
