import React, { useState, useEffect } from 'react'
import Target from './components/Target'
import TargetForm from './components/TargetForm'
import axios from 'axios'

function App(props) {
    const [targets, setTargets] = useState([])

    function getTargets() {
        axios.get('/targets')
            .then(res => setTargets(res.data))
            .catch(err => console.log(err))
    }

    function addTarget(newTarget) {
        axios.post('/targets', newTarget)
            .then(res => {
                setTargets(prevTarget => [...prevTarget, res.data])
            })
            .catch(err => console.log(err))
    }

    function deleteTarget(targetID) {
        axios.delete(`/targets/${targetID}`)
            .then(res => {
                setTargets(prevTarget => prevTarget.filter(target => target._id !== targetID))
            })
            .catch(err => console.log(err))
    }

    function editTarget(updates, targetID) {
        axios.put(`/targets/${targetID}`, updates)
            .then(res => {
                setTargets(prevTarget => prevTarget.map(target => target._id !== targetID ? target : res.data))
            })
            .catch(err => console.log(err))
    }

    function handleFilter(e) {
        if(e.target.value === 'all'){
            getTargets()
        }else{
            axios.get(`/targets/type?type=${e.target.value}`)
                .then(res => setTargets(res.data))
                .catch(err => console.log(err))
            }
    }

    useEffect(() => {
        getTargets()
    }, [])

    return (
        <div>
            <div className='target-cont'>
                <TargetForm
                    submit={addTarget}
                    btnText='Add Movie' />
                <h4>Filter by Type</h4>
                <select onChange={handleFilter} className='filter-form'>
                    <option value='all'>All Targets</option>
                    <option value="Jedi">Jedi</option>
                    <option value="Sith">Sith</option>
                </select>
                {targets.map(target =>
                    <Target
                        {...target}
                        key={target._id}
                        deleteTarget={deleteTarget}
                        editTarget={editTarget} />)}
            </div>
        </div>
    )
}

export default App