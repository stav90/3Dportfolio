import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {
        currentCameraAngle: 'default',
        resetCameraAngle: () => {
            set((state) => {
                return {currentCameraAngle: 'default'}    
            })
        },
        aboutMeCameraAngle: () => {
            set((state) => {
                return {currentCameraAngle: 'about me angle'}    
            })
        },
        projectsCameraAngle: () => {
            set((state) => {
                return {currentCameraAngle: 'projects angle'} 
            })
        },
        skillsCameraAngle: () => {
            set((state) => {
                return {currentCameraAngle: 'skills angle'} 
            })
        }
    }
}))