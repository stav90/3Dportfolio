import styled from "styled-components";
import useApp
 from "./useApp";
export default function Header() {
    const aboutMeCameraAngle = useApp((state) => state.aboutMeCameraAngle)
    const projectsCameraAngle = useApp((state) => state.projectsCameraAngle)
    const skillsCameraAngle = useApp((state) => state.skillsCameraAngle)

    const HeaderComponent = () => {
        return (
            <NavWrapper>
                <BreadcrumbList>
                    <CrumbWrapper><CrumbLink onClick={aboutMeCameraAngle}>about me</CrumbLink></CrumbWrapper>
                    <CrumbWrapper><CrumbLink onClick={projectsCameraAngle}>projects</CrumbLink></CrumbWrapper>
                    <CrumbWrapper><CrumbLink onClick={skillsCameraAngle}>skills</CrumbLink></CrumbWrapper>
                </BreadcrumbList>
               
            </NavWrapper >
        )
    }
   const NavWrapper = styled.div`
   
        position: absolute; 
        top: 0;
        right: 0;
        color: white;
        display: flex;
      
        width: 100%;
        justify-content: center;
        height: 42px;
        align-items: center;
       
        font-family:sans-serif;
        @media (min-width: 500px) {
            justify-content: flex-end;
            padding-right: 42px;
        }
   `
   const BreadcrumbList = styled.ol`
        padding: 0;
        margin: 0;
        list-style-type: none;
    `;
    const CrumbWrapper = styled.li`
        display: inline;
        --spacing: 48px;

        &:not(:first-of-type) {
        margin-left: var(--spacing);
        }
    `
    const CrumbLink = styled.a`
        color: inherit;
        text-decoration: none;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 900;
        &:hover {
        text-decoration: revert;
        color: deeppink;
        }
    `;
    return (
       <HeaderComponent>
            
       </HeaderComponent>
    )
}