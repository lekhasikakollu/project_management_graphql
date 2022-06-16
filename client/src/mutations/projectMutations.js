import { gql } from '@apollo/client';

const ADD_PROJECT = gql`
    mutation AddProject($name: String!,
    $description: String!,
    $clientId: ID!,
    $status: ProjectStatus!
    ){
        addProject(name: $name, description: $description, status: $status, clientId: $clientId){
            id
            name
            description
            status
            client{
                id
                name
                email
                phone
            }
        }
    }
`

const DELETE_PROJECT = gql`
    mutation DeleteProject($id: ID!){
        deleteProject(id: $id){
            id
        }
    }


`
export {ADD_PROJECT,DELETE_PROJECT};