import React from "react";
import Clients from '../components/Clients';
import Projects from '../components/Projects';
import AddClientsModal from '../components/AddClientsModal';

export default function Home() {
    return (
        <React.Fragment>
        <div className="d-flex gap-3 mb-4">
        <AddClientsModal/>
        </div>
        <Projects />
            <hr/>
            <Clients />
        </React.Fragment>
    )
}
