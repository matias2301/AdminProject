import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/project/projectContext';

const NewProject = () => {

    const ProjectContext = useContext(projectContext);
    const { errorsForm, newProject, showForm, addProject, showErrorsForm } = ProjectContext;

    const [project, setProject] = useState({
        name: ""
    });

    const { name } = project;

    const handleChange = e => {
        setProject({
            ...project,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(name === ''){
            showErrorsForm();
            return
        };
        addProject(project);
        setProject({
            name: ""
        });
    }

    return (
        <Fragment>
            <button
                data-cy="btn-newProject"
                type="button"
                className="btn btn-block btn-primary"
                onClick={() => showForm()}
            >
                New Project
            </button>

            {
                newProject
                ?
                    <form
                        className="formNewProject"
                        onSubmit={handleSubmit}
                    >
                        <input
                            data-cy="input-newProject"
                            type="text"
                            name="name"
                            placeholder="Project Name"                    
                            className="input-text"
                            value={name}
                            onChange={handleChange}
                        />

                        <input
                            data-cy="submit-newProject"
                            type="submit"
                            value="Add Project"
                            className="btn btn-block btn-primary"
                        />
                    </form>
                :
                    null
            }
            { errorsForm ? <p data-cy="alert" className="message error">Name is required</p> : null }
        </Fragment>
    )
}

export default NewProject
