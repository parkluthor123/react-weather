import styled, { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    :root{
        --full: 100%;
    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto';
        font-size: 18px;
        outline: none;
    }
`;

export const NavTop = styled.nav`
    width: var(--full);
    background-color: ${props => props.theme.colors.bgDark};
    min-height: 95px;
    padding: 15px 0;
    display: flex;
    align-items: center;
        .nav-top-wrapper
        {
            display: flex;
            justify-content: space-between;
            gap: 15px;

            h1{
                font-size: 36px;
                color: #fff;
            }
        }
`;

export const Container = styled.div`
    width: var(--full);
    max-width: 1440px;
    padding: 0 45px;
    margin: 0 auto;
    font-style: normal;
`;

export const SwitchTheme = styled.button`
    display: flex;
    width: 50px;
    height: 50px;
    border-style: none;
    background-color: transparent;
    border: 2px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
        i{
            color: #fff;
        }
`;

export const SearchWrapper = styled.section`
    width: var(--full);
    background-color: ${props=>props.theme.colors.background};
        form{
            max-width: 644px;
            margin: 0 auto;
            width: var(--full);
            display: flex;
            justify-content: center;
            flex-direction: column;
            min-height: 257px;
                label{
                    color: ${props=>props.theme.colors.primary};
                    margin-bottom: 12px;
                }
                input{
                    border-style: none;
                    background-color: ${props=>props.theme.colors.bgDark};
                    width: var(--full);
                    height: 50px;
                    padding: 0 15px;
                    color: #ccc
                }
        }
`;

export const WheatherHubWrapper = styled.section`
    width: var(--full);
    background-color: ${props=>props.theme.colors.bgDark};
        .weather-scales-area
        {
            width: var(--full);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 430px;
                .weather-scales-wrapper
                {
                    width: fit-content;
                        .local-area
                        {
                            width: var(--full);
                            margin-bottom: 35px;
                                span{
                                    display: flex;
                                    font-size: 36px;
                                    color: #fff;
                                    font-weight: 900;
                                    line-height: 42px;
                                }
                        }

                        .weather-scales
                        {
                            display: flex;
                            justify-content: space-between;
                            align-items: center:
                            gap: 10px;
                            max-width: 223px;
                            width: var(--full);
                                .degrees
                                {
                                    span{
                                        display: flex;
                                        font-weight: 400;
                                        font-size: 96px;
                                        line-height: 112px;
                                        color: ${props=>props.theme.colors.primary};
                                        padding-left: 10px;
                                    }
                                }
                                .scales
                                {
                                    margin-right: 15px;
                                    display: flex;
                                    flex-direction: column;
                                    gap: 10px;
                                        button{
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            width: 50px;
                                            height: 50px;
                                            color: ${props=>props.theme.colors.primary};
                                            font-weight: 900;
                                            font-size: 36px;
                                            line-height: 42px;
                                            background: linear-gradient(180deg, rgba(196, 196, 196, 0.2) -79.96%, rgba(196, 196, 196, 0.0877044) 6.86%, rgba(196, 196, 196, 0) 78.31%);
                                            border-radius: 10px;
                                            border-style: none;
                                            cursor: pointer;
                                        }
                                }
                        }

                        .week-day
                        {
                            margin-top: 36px;
                            p{
                                font-weight: 900;
                                font-size: 24px;
                                line-height: 28px;
                                color: ${props=>props.theme.colors.text};
                            }
                        }
                }
        }
`;

export const ForecastArea = styled.section`
    width: var(--full);
    background-color: ${props=>props.theme.colors.background};
    min-height: 700px;
        .forecast-title
        {
            padding-top: 95px;
            width: var(--full);
            max-width: 981px;
            margin: 0 auto;

                h1{
                    font-weight: 700;
                    font-size: 36px;
                    line-height: 42px;
                    color: ${props=>props.theme.colors.primary};
                    text-transform: uppercase;
                }
        }

        .forecast-wrapper
        {
            margin-top: 53px;
            width: var(--full);
            display: flex;
            justify-content: center;
            gap: 23px;
            flex-wrap: wrap;
        }
`;

export const ForecastBoxWrapper = styled.div`
    width: 172px;
    min-height: 395px;
    background: linear-gradient(0deg, rgba(196, 196, 196, 0.2) -79.96%, 
                                      rgba(196, 196, 196, 0.0877044) 6.86%, 
                                      rgba(196, 196, 196, 0) 78.31%);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    padding: 37px 9px;

        .day-week
        {
            width: var(--full);
                span{
                    display: flex;
                    font-weight: 900;
                    font-size: 24px;
                    line-height: 28px;
                    color: ${props=>props.theme.colors.text};
                }
        }

        .status-icons
        {
            width: var(--full);
            margin-top: 15px;
                i{
                    color: ${props=>props.theme.colors.text};
                    font-size: 59px;
                    width: 79px;
                    height: 79px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
        }

        .wheather-balance
        {
            width: var(--full);
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            gap: 19px;
            margin-top: 15px;
                .max-degrees
                {
                    font-weight: 900;
                    font-size: 48px;
                    line-height: 56px;
                    display: flex;
                    color: ${props=>props.theme.colors.primary};
                }
                .min-degrees
                {
                    font-weight: 900;
                    font-size: 36px;
                    line-height: 42px;
                    display: flex;
                    color: ${props=>props.theme.colors.text};
                }
        }

        .status-description
        {
            width: var(--full);
            margin-top: 15px;
                p{
                    color: ${props=>props.theme.colors.text};
                    Line height: 21px;
                    Line height: 100%;
                    Align: Left;
                    Vertical align: Bottom;
                    font-weight: 900;
                }
        }
`;

