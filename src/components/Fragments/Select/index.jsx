import { StyledSelectContainer } from "./style"

export const Select = ({register, errors}) => {
    return (
        <StyledSelectContainer>
            <label htmlFor="Register-level">Selecionar módulo</label>
            <select id="Register-level" {...register("level")}>
                <option value="blank">Módulo</option>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
            </select>
            {errors.level ? <p>{errors.level.message}</p> : null}
        </StyledSelectContainer>
    )
}