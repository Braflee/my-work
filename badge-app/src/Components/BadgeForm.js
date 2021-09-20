import React, {Component} from 'react'
import BadgeBuilder from './BadgeBuilder'

class BadgeForm extends Component {
    state = {
        fName: '',
        lName: '',
        email: '',
        birthPlace: '',
        phone: '',
        favFood: '',
        bio: '',
        badges: []
}
    
    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('test');
        this.setState(prevState => ({
            fName: '',
            lName: '',
            email: '',
            birthPlace: '',
            phone: '',
            favFood: '',
            bio: '',
            badges: [...prevState.badges, this.state]
        }))
    }

    render() {
        const badgeCompiler = this.state.badges.map(item => <BadgeBuilder key={item.fName} badge={item} />)
        return(
            <div className='theForm'>
                <div className='inputs'>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type='text'
                            placeholder='First Name'
                            name='fName'
                            value={this.state.fName}
                            onChange={this.handleChange}
                            minLength='3'
                            required
                        />
                        <input 
                            type='text'
                            placeholder='Last Name'
                            name='lName'
                            value={this.state.lName}
                            onChange={this.handleChange}
                            minLength='3'
                            required
                        />
                        <input 
                            type='text'
                            placeholder='email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                            minLength='3'
                            required
                        />
                        <input 
                            type='text'
                            placeholder='Place of Birth'
                            name='birthPlace'
                            value={this.state.birthPlace}
                            onChange={this.handleChange}
                            minLength='3'
                            required
                        />
                        <input 
                            type='tel'
                            placeholder='Phone'
                            name='phone'
                            value={this.state.phone}
                            onChange={this.handleChange}
                            minLength='3'
                            required
                        />
                        <input 
                            type='text'
                            placeholder='Favorite Food'
                            name='favFood'
                            value={this.state.favFood}
                            onChange={this.handleChange}
                            minLength='3'
                            required
                        />
                        <textarea 
                            type='text'
                            placeholder='Tell us about you.'
                            name='bio'
                            value={this.state.bio}
                            onChange={this.handleChange}
                            minLength='3'
                        />
                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
                <div className='badge'>
                    {badgeCompiler}
                </div>
            </div>
        )
    }
}
export default BadgeForm