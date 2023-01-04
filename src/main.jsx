
import './style.scss'
import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import BackButton from './BackButton'
// import Button from './Button'
// import ProjectNavButtons from './Nav'
import Spinner from './Spinner'
import Header from './Header'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
    <Suspense fallback={<Spinner/>}>
        <Canvas
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ -11, 3, 12 ]
            } }
        >
            <Experience fallback={<Spinner/>}/>     
        </Canvas>
        <Header />
        <BackButton />
    </Suspense>
        {/* <ProjectNavButtons /> */}
    </>
   
)
