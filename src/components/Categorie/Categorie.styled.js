import styled from 'styled-components'
import { textSizes } from '../../const'

export const Categorie = styled.div`
    width: auto;
    height: 30px;
    background-color: #f4f5f6;
    display: inline-block;
    padding: 8px 20px;
    border-radius: 30px;
`
export const CategorieInt = styled.div`
    display: flex;
    gap: 12px;
    p {
        font-size: ${textSizes.small.fontSize};
        font-weight: ${textSizes.small.fontWeight};
        white-space: nowrap;
    }
`
export const CategotyImg = styled.img`
    width: 14px;
    height: 14px;
`
