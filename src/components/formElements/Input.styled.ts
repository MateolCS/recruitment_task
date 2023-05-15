import styled from "styled-components";

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    gap: .5rem;
`

export const StyledLabel = styled.label`
    font-size: 1.2rem;
    font-weight: 700;
    color: #146C94;
`

export const StyledInput = styled.input`
    padding: .3rem;
    border: 1px solid #146C94;
    border-radius: 5px;
    font-size: 1rem;

    &:invalid{
        border: 1px solid #B04759;
    }
`

export const StyledSelect = styled.select`
    padding: .3rem;
    border: 1px solid #146C94;
    border-radius: 5px;
    font-size: 1rem;
    background-color: #fff;
    `

export const ErrorMessage = styled.span`
    color: #B04759;
`