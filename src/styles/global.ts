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
                color: ${props => props.theme.colors.text};
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
    border: 2px solid ${props => props.theme.colors.text};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
        i{
            color: ${props => props.theme.colors.text};
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
                    color: ${props=>props.theme.colors.inputText};
                }
                .tooltip
                {
                    color: ${props=>props.theme.colors.primary};
                    display: flex;
                    justify-content: flex-end;
                    font-size: 14px;
                    padding-top: 10px;
                    width: var(--full);
                }
        }
`;

export const WeatherHubWrapper = styled.section`
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
                                    color: ${props => props.theme.colors.text};
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
                                            background: ${props=>props.theme.colors.forecastMiniBox};
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
    background: ${props=>props.theme.colors.forecastBoxBg};
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
                img{
                    width: 79px;
                    height: 79px;
                }
        }

        .weather-balance
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

export const LoadingSVG = styled.div`
    width: var(--full);
    display: flex;
    justify-content: center;
    min-height: 250px;
    transition: all 0.3s ease-in-out;
    align-items: center;
        span{
            display: flex;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin:auto;display:block;' width='200px' height='200px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3E%3Cdefs%3E%3Cpath id='ldio-1ihw19kzrea-p1' d='M0 0v100h100V0H0z M62.9 44.4c-1.7 3.4-5.3 5.8-9.4 5.8H17c-5.8 0-10.5-4.7-10.5-10.5 c0-5.2 3.8-9.6 8.9-10.4c-0.1-0.6-0.2-1.3-0.2-2c0-5.5 4.4-9.9 9.9-9.9c1 0 2 0.2 3 0.5c2.5-4.7 7.4-7.9 13.1-7.9 c6.9 0 12.8 4.8 14.4 11.2c0.3 1.2 0.4 2.4 0.4 3.6c0 1.6-0.2 3.1-0.7 4.5c5 0.8 8.7 5.2 8.7 10.3C64 41.3 63.6 43 62.9 44.4z'%3E%3CanimateTransform attributeName='transform' type='translate' values='-3 0;3 0;-3 0' keyTimes='0;0.5;1' dur='2' repeatCount='indefinite' calcMode='spline' keySplines='0.5 0 0.5 1;0.5 0 0.5 1'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath id='ldio-1ihw19kzrea-p2' d='M0 52L58 52L64 47L100 47L100 90L0 90Z'%3E%3C/path%3E%3CclipPath id='ldio-1ihw19kzrea-cp1'%3E%3Cuse xlink:href='%23ldio-1ihw19kzrea-p1'%3E%3C/use%3E%3C/clipPath%3E%3CclipPath id='ldio-1ihw19kzrea-cp2'%3E%3Cuse xlink:href='%23ldio-1ihw19kzrea-p2'%3E%3C/use%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23ldio-1ihw19kzrea-cp2)'%3E%3Cpath fill='%2377a4bd' d='M26.1 61.7l1.6-4.3c0.4-1.1-0.1-2.3-1.2-2.8c-1.1-0.4-2.3 0.1-2.8 1.2l-1.6 4.3 c-0.4 1.1 0.1 2.3 1.2 2.8c0.3 0.1 0.5 0.1 0.8 0.1C24.9 63.1 25.8 62.6 26.1 61.7z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='0s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M34.4 68.6l4.2-11.1c0.4-1.1-0.1-2.3-1.2-2.8c-1.1-0.4-2.3 0.1-2.8 1.2L30.4 67 c-0.4 1.1 0.1 2.3 1.2 2.8c0.2 0.1 0.5 0.1 0.8 0.1C33.3 70 34.1 69.4 34.4 68.6z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-0.1s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M42.7 75.4l6.8-18c0.4-1.1-0.1-2.3-1.2-2.8c-1.1-0.4-2.3 0.1-2.8 1.2l-6.8 18 c-0.4 1.1 0.1 2.3 1.2 2.8c0.2 0.1 0.5 0.1 0.8 0.1C41.6 76.8 42.4 76.3 42.7 75.4z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-0.2s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M58.3 63.1l2.1-5.5c0.4-1.1-0.1-2.3-1.2-2.8c-1.1-0.4-2.3 0.1-2.8 1.2l-2.1 5.5 c-0.4 1.1 0.1 2.3 1.2 2.8c0.3 0.1 0.5 0.1 0.8 0.1C57.1 64.5 57.9 63.9 58.3 63.1z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-0.30000000000000004s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M65.1 74.2l7.3-20.3c0.4-1.1-0.2-2.3-1.3-2.7c-1.1-0.4-2.3 0.2-2.7 1.3l-7.3 20.3 c-0.4 1.1 0.2 2.3 1.3 2.7c0.2 0.1 0.5 0.1 0.7 0.1C64 75.6 64.8 75.1 65.1 74.2z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-0.4s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M77.4 66.8l4.3-13.1c0.4-1.1-0.2-2.3-1.4-2.7c-1.1-0.4-2.3 0.2-2.7 1.4l-4.3 13.1 c-0.4 1.1 0.2 2.3 1.4 2.7c0.2 0.1 0.4 0.1 0.7 0.1C76.3 68.3 77.1 67.7 77.4 66.8z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-0.5s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M16.9 86.4l6.4-17.3c0.4-1.1-0.2-2.3-1.3-2.8c-1.1-0.4-2.3 0.2-2.8 1.3l-6.4 17.3 c-0.4 1.1 0.2 2.3 1.3 2.8c0.2 0.1 0.5 0.1 0.7 0.1C15.7 87.8 16.6 87.2 16.9 86.4z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-0.6000000000000001s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M27.6 86.4l3.8-9.8c0.4-1.1-0.1-2.3-1.2-2.8c-1.1-0.4-2.3 0.1-2.8 1.2l-3.8 9.8 c-0.4 1.1 0.1 2.3 1.2 2.8c0.3 0.1 0.5 0.1 0.8 0.1C26.5 87.8 27.3 87.3 27.6 86.4z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-0.7000000000000001s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M38.5 86.4l1-2.7c0.4-1.1-0.1-2.3-1.2-2.8c-1.1-0.4-2.3 0.1-2.8 1.2l-1 2.7 c-0.4 1.1 0.1 2.3 1.2 2.8c0.3 0.1 0.5 0.1 0.8 0.1C37.4 87.8 38.2 87.3 38.5 86.4z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-0.8s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M49.3 86.4l5.9-15.2c0.4-1.1-0.1-2.3-1.2-2.8c-1.1-0.4-2.3 0.1-2.8 1.2l-5.9 15.2 c-0.4 1.1 0.1 2.3 1.2 2.8c0.3 0.1 0.5 0.1 0.8 0.1C48.1 87.8 48.9 87.3 49.3 86.4z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-0.9s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M72.2 81.9l2.9-7.7c0.4-1.1-0.1-2.3-1.2-2.8c-1.1-0.4-2.3 0.1-2.8 1.2l-2.9 7.7 c-0.4 1.1 0.1 2.3 1.2 2.8c0.3 0.1 0.5 0.1 0.8 0.1C71.1 83.3 71.9 82.8 72.2 81.9z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-1s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M26.1 61.7l1.6-4.3c0.4-1.1-0.1-2.3-1.2-2.8c-1.1-0.4-2.3 0.1-2.8 1.2l-1.6 4.3 c-0.4 1.1 0.1 2.3 1.2 2.8c0.3 0.1 0.5 0.1 0.8 0.1C24.9 63.1 25.8 62.6 26.1 61.7z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-0.5s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M34.4 68.6l4.2-11.1c0.4-1.1-0.1-2.3-1.2-2.8c-1.1-0.4-2.3 0.1-2.8 1.2L30.4 67 c-0.4 1.1 0.1 2.3 1.2 2.8c0.2 0.1 0.5 0.1 0.8 0.1C33.3 70 34.1 69.4 34.4 68.6z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-0.6s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M42.7 75.4l6.8-18c0.4-1.1-0.1-2.3-1.2-2.8c-1.1-0.4-2.3 0.1-2.8 1.2l-6.8 18 c-0.4 1.1 0.1 2.3 1.2 2.8c0.2 0.1 0.5 0.1 0.8 0.1C41.6 76.8 42.4 76.3 42.7 75.4z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-0.7s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M58.3 63.1l2.1-5.5c0.4-1.1-0.1-2.3-1.2-2.8c-1.1-0.4-2.3 0.1-2.8 1.2l-2.1 5.5 c-0.4 1.1 0.1 2.3 1.2 2.8c0.3 0.1 0.5 0.1 0.8 0.1C57.1 64.5 57.9 63.9 58.3 63.1z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-0.8s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M65.1 74.2l7.3-20.3c0.4-1.1-0.2-2.3-1.3-2.7c-1.1-0.4-2.3 0.2-2.7 1.3l-7.3 20.3 c-0.4 1.1 0.2 2.3 1.3 2.7c0.2 0.1 0.5 0.1 0.7 0.1C64 75.6 64.8 75.1 65.1 74.2z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-0.9s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M77.4 66.8l4.3-13.1c0.4-1.1-0.2-2.3-1.4-2.7c-1.1-0.4-2.3 0.2-2.7 1.4l-4.3 13.1 c-0.4 1.1 0.2 2.3 1.4 2.7c0.2 0.1 0.4 0.1 0.7 0.1C76.3 68.3 77.1 67.7 77.4 66.8z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-1s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M16.9 86.4l6.4-17.3c0.4-1.1-0.2-2.3-1.3-2.8c-1.1-0.4-2.3 0.2-2.8 1.3l-6.4 17.3 c-0.4 1.1 0.2 2.3 1.3 2.8c0.2 0.1 0.5 0.1 0.7 0.1C15.7 87.8 16.6 87.2 16.9 86.4z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-1.1s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M27.6 86.4l3.8-9.8c0.4-1.1-0.1-2.3-1.2-2.8c-1.1-0.4-2.3 0.1-2.8 1.2l-3.8 9.8 c-0.4 1.1 0.1 2.3 1.2 2.8c0.3 0.1 0.5 0.1 0.8 0.1C26.5 87.8 27.3 87.3 27.6 86.4z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-1.2000000000000002s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M38.5 86.4l1-2.7c0.4-1.1-0.1-2.3-1.2-2.8c-1.1-0.4-2.3 0.1-2.8 1.2l-1 2.7 c-0.4 1.1 0.1 2.3 1.2 2.8c0.3 0.1 0.5 0.1 0.8 0.1C37.4 87.8 38.2 87.3 38.5 86.4z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-1.3s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M49.3 86.4l5.9-15.2c0.4-1.1-0.1-2.3-1.2-2.8c-1.1-0.4-2.3 0.1-2.8 1.2l-5.9 15.2 c-0.4 1.1 0.1 2.3 1.2 2.8c0.3 0.1 0.5 0.1 0.8 0.1C48.1 87.8 48.9 87.3 49.3 86.4z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-1.4s'%3E%3C/animateTransform%3E%3C/path%3E%3Cpath fill='%2377a4bd' d='M72.2 81.9l2.9-7.7c0.4-1.1-0.1-2.3-1.2-2.8c-1.1-0.4-2.3 0.1-2.8 1.2l-2.9 7.7 c-0.4 1.1 0.1 2.3 1.2 2.8c0.3 0.1 0.5 0.1 0.8 0.1C71.1 83.3 71.9 82.8 72.2 81.9z'%3E%3CanimateTransform attributeName='transform' type='translate' values='15 -40;-30 80' keyTimes='0;1' dur='1' repeatCount='indefinite' begin='-1.5s'%3E%3C/animateTransform%3E%3C/path%3E%3C/g%3E%3Cpath fill='%23999999' d='M53.2 30.3c0.4-1.3 0.6-2.7 0.6-4.2c0-1.2-0.1-2.3-0.4-3.4c-1.5-6-7-10.5-13.5-10.5 c-5.3 0-9.9 3-12.3 7.4c-0.9-0.3-1.8-0.4-2.8-0.4c-5.1 0-9.3 4.1-9.3 9.3c0 0.6 0.1 1.3 0.2 1.9c-4.7 0.7-8.3 4.8-8.3 9.7 c0 5.4 4.4 9.8 9.8 9.8h34.2c3.8 0 7.1-2.2 8.8-5.4c0.7-1.3 1.1-2.9 1.1-4.5C61.4 35.2 57.8 31.1 53.2 30.3z'%3E%3CanimateTransform attributeName='transform' type='translate' values='-3 0;3 0;-3 0' keyTimes='0;0.5;1' dur='2' repeatCount='indefinite' calcMode='spline' keySplines='0.5 0 0.5 1;0.5 0 0.5 1'%3E%3C/animateTransform%3E%3C/path%3E%3Cg clip-path='url(%23ldio-1ihw19kzrea-cp1)'%3E%3Cpath fill='%23bbbbbb' d='M84.9 28.9c0.4-1.1 0.6-2.3 0.6-3.5c0-1-0.1-1.9-0.4-2.8 c-1.3-5-6.1-8.7-11.8-8.7c-4.6 0-8.7 2.5-10.7 6.1c-0.8-0.2-1.6-0.4-2.4-0.4c-4.5 0-8.1 3.4-8.1 7.6c0 0.5 0.1 1 0.2 1.5 c-4.1 0.6-7.2 4-7.2 8c0 4.5 3.8 8.1 8.6 8.1h29.8c3.3 0 6.2-1.8 7.7-4.4c0.6-1.1 0.9-2.3 0.9-3.7C92 32.9 88.9 29.6 84.9 28.9z'%3E%3CanimateTransform attributeName='transform' type='translate' values='-3 0;3 0;-3 0' keyTimes='0;0.5;1' dur='1.32' repeatCount='indefinite' calcMode='spline' keySplines='0.5 0 0.5 1;0.5 0 0.5 1'%3E%3C/animateTransform%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
            background-position: center;
            background-size: cover;
            height: 60px;
            width: 60px;
        }
`;

export const MessageArea = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: var(--full);
    height: 100vh;
    background-color: rgba(0,0,0,0.2);
    z-index: 9999;
    padding: 0 25px;
    display: flex;
    justify-content: center;
    align-items: center;
        .message-wrapper{
            width: var(--full);
            max-width: 660px;
            min-height: 380px;
            background-color: ${props=>props.theme.modal.background};
            border: 2px solid ${props=>props.theme.modal.text};
            border-radius: 10px;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 35px;
                h1{
                    color: ${props=>props.theme.modal.text};
                    font-size: 36px;
                    text-transform: uppercase;
                    text-align: center;
                }

                span{
                    color: ${props=>props.theme.modal.text};
                    text-align: center;
                    display: flex;
                }
                .btn-area{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                        button{
                            padding: 15px 20px;
                            border-radius: 10px;
                            background-color: ${props=>props.theme.modal.btnColor};
                            font-weight: bold;
                            border-style: none;
                            cursor: pointer;
                            color: ${props=>props.theme.modal.text};
                        }
                }
        }
`;

export const GraphArea = styled.section`
    width: var(--full);
    background-color: ${props=>props.theme.colors.bgDark};
        .graph-wrapper{
            width: var(--full);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 640px;
                .grap-item
                {
                    max-width: 952px;
                    width: var(--full);
                }
        }
`;