import React, { Fragment, useState } from 'react';

const newProject = () => {

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
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primary"
            >
                New Project
            </button>

            <form
                className="formNewProject"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Project Name"                    
                    className="input-text"
                    value={name}
                    onChange={handleChange}
                />

                <input
                    type="submit"
                    value="Add Project"
                    className="btn btn-block btn-primary"
                />
            </form>

        </Fragment>
    )
}

export default newProject
