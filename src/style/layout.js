import styled from 'styled-components';


export const Row = styled.div`

    width: ${({ width }) => width ?? "100%"};
    height: ${({ height }) => height ?? "auto"};

    margin: ${({ margin }) => margin ?? "0"};
    padding: ${({ padding }) => padding ?? "0"};

    display: flex;
    align-items: ${({ crossAxis }) => crossAxis ?? "center"};
    justify-content: ${({ mainAxis }) => mainAxis ?? "flex-start"};

    gap: ${({ gap }) => gap ?? "normal"};
    flex-direction: row;
`;

export const Col = styled.div`

    width: ${({ width }) => width ?? "auto"};
    height: ${({ height }) => height ?? "auto"};

    margin: ${({ margin }) => margin ?? "0"};
    padding: ${({ padding }) => padding ?? "0"};

    display: flex;
    align-items: ${({ crossAxis }) => crossAxis ?? "center"};
    justify-content: ${({ mainAxis }) => mainAxis ?? "flex-start"};

    gap: ${({ gap }) => gap ?? "normal"};
    flex-direction: column;
`;
