import { motion } from 'framer-motion'
import { lazy, Suspense } from 'core-js/library/fn/reflect/es7/metadata'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme, mediaQueries } from './Themes'
import astronaut from "../assets/Images/spaceman.png";
import Loding from '../subComponents/Loading';

///////components
const SocialIcons = lazy(() =>
    import ('../subComponents/SocialIcons'))
const PowerButton = lazy(() =>
    import ('../subComponents/PowerButton'))
const LogoComponent = lazy(() =>
    import ('../subComponents/LogoComponent'))
const ParticlesComponent = lazy(() =>
    import ('../subComponents/BigTitle'))

const Box = styled(motion.div)
`
background-color: ${(props)=>props.theme.body};
width: 100vw;
height:100vh;
positon: relative;
overflow:hidden;
`
const float = keyframes `
0% {transform: translateY(-10px)  }
50% {transform: translate(15px) translateX(15px)  }
100%{transform: translateY(-10px)   }
`