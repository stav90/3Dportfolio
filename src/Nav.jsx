import Button from './Button'
export default function ProjectNavButtons(){

return (

    <div className="navButtonWrapper">
        <Button size="large" variant="fill" direction="prev">
            Prev
        </Button>
        <Button size="large" variant="fill" direction="next">
            Next
        </Button>
    </div>

   
)
}
