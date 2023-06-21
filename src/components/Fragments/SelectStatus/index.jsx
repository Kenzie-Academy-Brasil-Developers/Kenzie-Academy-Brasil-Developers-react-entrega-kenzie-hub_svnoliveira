import { StyledSelectContainer } from "./style"

export const SelectStatus = ({register, errors}) => {
    return (
        <StyledSelectContainer>
            <label htmlFor="tech-register-status">Status</label>
            <select id="tech-register-status" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
            {errors.status ? <p>{errors.status.message}</p> : null}
        </StyledSelectContainer>
    )
}