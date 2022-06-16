import {GET_PROJECT} from '../queries/projectQueries';
import {Link, useParams} from 'react-router-dom';
import Spinner from '../components/Spinner';
import ClientInfo from '../components/ClientInfo';
import DeleteProjectButton from '../components/DeleteProjectButton';
import EditProjectForm from '../components/EditProjectForm';

import { useQuery } from '@apollo/client';
import React from 'react';


export default function Project() {
    const {id} = useParams();
    const {loading , error, data} = useQuery(GET_PROJECT,{
        variables: {id}
    });

    if(loading) return <Spinner/>;
    if(error) return <p>Something went wrong in Project</p>;

    return (
       <React.Fragment>
       {!loading && !error && (
           <div className="mx-auto w-75 card p-5 mt-10">
           <Link to="/" className="btn btn-blue p-2 btn-sm w-25 d-inline ms-auto">Go Back</Link>
           <h1>{data.project.name}</h1>
           <p>{data.project.description}</p>
           <p>{id}</p>
           <h5 className="mt-5">Status</h5><p className='lead'>{data.project.status}</p>
           
           <ClientInfo client={data.project.client}/>
           <EditProjectForm project={data.project}/>
           <DeleteProjectButton projectId={id}/>
           </div>
       )}
       </React.Fragment>
    )
}
