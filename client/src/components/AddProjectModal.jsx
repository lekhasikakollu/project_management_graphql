import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { FaList } from 'react-icons/fa';
import { GET_PROJECTS } from '../queries/projectQueries';
import {GET_CLIENTS} from '../queries/clientQueries';
import {ADD_PROJECT} from '../mutations/projectMutations';
import Spinner from './Spinner';

export default function AddProjectModal() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('new');
    const [clientId, setClientId] = useState('');

    const [addProject] = useMutation(ADD_PROJECT,{
        variables: {name, description,status,clientId},
        update(cache,{data: {addProject}}){
            const {projects} = cache.readQuery({query: GET_PROJECTS});
            cache.writeQuery({
                query: GET_PROJECTS,
                data: {projects: projects.concact(addProject)}
            })
        }
    })

    const {loading, error, data} = useQuery(GET_CLIENTS);

    console.log(data)

    const onSubmit = (e) => {
        e.preventDefault();

        if(name === '' || description === '' || status === ''){
            return alert('Please fill in missing details');
        }
        addProject(name,description,status,clientId);

        setName(''); 
        setDescription('');
        setStatus('new');
        setStatus('');
    }
    

    if(loading) return null;
    if(error) return "Something went wrong in modal";
    return (
        <React.Fragment>
        {!loading && !error && (
            <React.Fragment>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProjectModal">
            <div className="d-flex align-items-center">
                <FaList className="icon" /><div>Add Project</div>
            </div>

        </button>

        <div className="modal fade" id="addProjectModal" tabIndex="-1" aria-labelledby="addProjectModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addProjectModalLabel">Add a project:</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Name
                            </label>
                                <input type="text" className="form-control" 
                                id="name" value={name} 
                                onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description
                            </label>
                                <textarea className="form-control" 
                                id="description" value={description} 
                                onChange={(e) => setDescription(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Status
                            </label>
                               <select className="form-select" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                               <option value="new">Not Started</option>
                               <option value="progress">In Progress</option>
                               <option value="completed">Completed</option>

                               
                               </select>
                            <div className="mb-3">
                                <label className="form-label">Client</label>
                                <select id="clientId" className="form-select" value={clientId} onChange={(e) => setClientId(e.target.value)}>
                                    <option value="">Select client</option>
                                    {data.clients.map((client) => {
                                    return     <option key={client.id} value={client.id}>{client.name}</option>
                                    })}
                                </select>
                            </div>
                               </div>

                            <button className="btn btn-primary" type="submit" 
                            data-bs-dismiss="modal"
                            >Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
        )}
           </React.Fragment>
    )
}