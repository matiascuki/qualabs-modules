import React, { useState, useEffect } from 'react'

import { getModules, getSubModules, getUsers } from '../../hooks/useUsers';
import { getNum, sort } from '../../helpers/helpers';
import MyButton from '../MyButton/MyButton';
import ModuleFooter from '../ModuleFooter/ModuleFooter';
import './ModuleView.css'

export const ModuleView = () => {

    // gets modules
    const useModules = getModules()
    const [activeModule, setActiveModule] = useState(useModules[0])

    //gets sorted submodules
    const sortedSubModules = sort(getSubModules(activeModule))
    const [activeSubModule, setActiveSubModule] = useState(sortedSubModules[0])

    //gets users
    const useUsers = sort(getUsers(activeModule, activeSubModule))

    const [users, setUsers] = useState(useUsers)

    const changeModule = e => {
        setActiveModule(e)
    }

    const changeSubModule = e => {
        setActiveSubModule(e)
    }

    useEffect(() => {
        setUsers(useUsers)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeModule, activeSubModule])

    return (
        <div className='module--container'>
            <div className='module--header'>
                {useModules && useModules.map(module => (
                    <MyButton key={module} buttonColor="btn--violet" buttonSize="btn--medium" type="button" onClick={() => changeModule(module)}>
                        {module}
                    </MyButton>
                ))}
            </div>
            <div className="module--subcontainer">
                <div className='module--header'>
                    {sortedSubModules && sortedSubModules.map(module => (
                        <MyButton key={module} buttonColor="btn--violet" size="btn--medium" type="button" onClick={() => changeSubModule(module)}>
                            {`Module ${getNum(module)}`}
                        </MyButton>
                    ))}
                </div>
                <h3 className='module--users--text' >Numbers of users in {`Module ${getNum(activeSubModule)}`} </h3>
                <div className='module--users'>
                    {users && users.map(module => (
                        <MyButton key={module} buttonColor="btn--violet" size="btn--medium" type="button"  >
                            {`User ${(getNum(module))}`}
                        </MyButton>
                    ))}
                </div>
                <div className='module--actions'>
                    <ModuleFooter />
                </div>
            </div>
        </div>
    )
}
