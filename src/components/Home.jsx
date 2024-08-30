
import Heading from './Heading'
import Counter from './counter'
import Notify from './Notify'


const Home = ({setLive}) => {
    return (
        <>
            <Heading />
            <Counter setLive={setLive}/>
            <Notify />
        </>
    )
}

export default Home