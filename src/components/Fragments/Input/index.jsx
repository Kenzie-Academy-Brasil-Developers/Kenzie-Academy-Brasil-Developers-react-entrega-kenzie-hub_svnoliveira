import { StyledInputContainer } from "./style"

export const Input = ({register, errors, label, id, saveTag, ...rest}) => {

    return (
        <StyledInputContainer>
            <label htmlFor={id}>{label}</label>
            <input {...rest} {...register(saveTag)} />
            {errors[saveTag] ? <p>{errors[saveTag].message}</p> : null}
        </StyledInputContainer>
    )
}