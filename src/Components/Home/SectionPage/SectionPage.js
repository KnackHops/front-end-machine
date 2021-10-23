import {
    Switch,
    Route
} from 'react-router-dom';
import Contact from '../Sections/Contact';
import MenuFood from '../Sections/MenuFood';
import './SectionPage.css';

const SectionPage = () => {
    const path = "/section"

    return (
        <>
            <Switch>
                <Route path={`${path}/menu`}>
                    <MenuFood />
                </Route>
                <Route path={`${path}/contact_us`}>
                    <Contact />
                </Route>
            </Switch>
        </>
    )
}

export default SectionPage;