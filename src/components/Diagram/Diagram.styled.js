import styled from 'styled-components'
import { textSizes } from '../../const'


export const Wrapper = styled.div`
    height: 100%;
    background: #fff;
    border-radius: 24px;
    width: 100%;
    padding: 32px;
    @media (max-width: 600px) {
        padding: 0px;
        background: linear-gradient(to bottom, #ffffff 80%, #F4F5F6 100%);
       
    }
`

export const Total = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
`

export const TotalAmount = styled.h2`
    font-size: ${textSizes.largeH2.fontSize};
    font-weight: ${textSizes.largeH2.fontWeight};
    @media (max-width: 600px) {
        font-size: ${textSizes.mobileH2.fontSize};
        line-height: 100%;
    }
`

export const Subtext = styled.p`
    display: flex;
    gap: 3px;
    color: #999999;
    font-size: ${textSizes.small.fontSize};
    font-weight: ${textSizes.small.fontWeight};
`
export const SubtextSpan = styled.span`
    font-weight: ${textSizes.medium.fontWeight};
    color: #999999;
    font-size: ${textSizes.small.fontSize};
`
export const Chart = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 32px;
    height: 465px;
    @media (max-width: 800px) {
        gap: 12px;
    }
    @media (max-width: 600px) {
        gap: 6px;
    }
`

export const BarBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
    width: 100px;
    height: 100%;
`

export const ValueText = styled.span`
    font-size: 14px;
    font-weight: 600;
    @media (max-width: 600px) {
        font-size: ${textSizes.mobileText.fontSize};
        line-height: 100%;
    }
`

export const Bar = styled.div`
    width: 100%;
    border-radius: 10px;
    transition: height 0.3s ease;
    height: ${({ height }) => height}%;
    min-height: 4px;
`

export const Label = styled.span`
    font-size: ${textSizes.small.fontSize};
    font-weight: ${textSizes.small.fontWeight};
    text-align: center;
    @media (max-width: 600px) {
        font-size: ${textSizes.mobileText.fontSize};
        line-height: 100%;
    }
`


