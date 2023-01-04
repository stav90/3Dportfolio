import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {
        currentAnimation: 'default',
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
        },
        danceAnimation: () => {
            set((state) => {
                return {currentAnimation: 'dance'} 
            })
        },
        waveAnimation: () => {
            set((state) => {
                return {currentAnimation: 'default'} 
            })
        }
        
    }
}))