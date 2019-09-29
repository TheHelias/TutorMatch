import React from 'react';

const URL = 'https://jsonplaceholder.typicode.com/users';
const filterURL = URL + '?address.city='

export default class Tutors extends React.Component { 
    constructor (props) {
    super(props)
    this.state = {
        tutors: [],
      } 
    }

    componentDidMount () {
        fetch(URL)
        .then(res => res.json())
        .then(data => this.setState({ tutors: data }))
    }

    sortName = () => {
      const {tutors} = this.state
      this.setState(tutors.sort((a, b) => (a.name > b.name)? 1 : -1))
    }
    
    sortCity = () => {
      const {tutors} = this.state
      this.setState(tutors.sort((a, b) => (a.address.city > b.address.city)? 1 : -1))
    }

    filterLocation = (city) => {
      fetch(filterURL + city)
        .then(res => res.json())
        .then(data => this.setState({ tutors: data }))
    }

    render() {
        const { tutors } = this.state;

        return (
          <div className='tutors'>
            <div className='tutors_div_1'>
              <span>Filter by:</span>
              <button onClick={() => this.filterLocation('Gwenborough')}>G'borough</button>
              <button onClick={() => this.filterLocation('South Elvis')}>S.Elvis</button>
              <button onClick={() => this.filterLocation('McKenziehaven')}>McKenzie</button>
              <span>Sort by:</span>
              <button onClick={this.sortName}>Name</button>
              <button onClick={this.sortCity}>City</button>
            </div>

            <div className='tutors_div_2'>
              {tutors.map(tutor => <div className="child_div">
                <img src={process.env.PUBLIC_URL + '/user-photo.jpg'} alt="tutor_photo"/>
                <p className='tutor_name'>{tutor.name}</p>
                <p>City</p>
                <span>{tutor.address.city}</span>
                <h4>Students so far</h4>
                <img className='student_photo' src={process.env.PUBLIC_URL + '/student-photo.jpg'} alt="student_photo"/>
                <img className='student_photo' src={process.env.PUBLIC_URL + '/student-photo.jpg'} alt="student_photo"/>
                <img className='student_photo' src={process.env.PUBLIC_URL + '/student-photo.jpg'} alt="student_photo"/>
                <img className='student_photo' src={process.env.PUBLIC_URL + '/student-photo.jpg'} alt="student_photo"/>
              </div>)}
            </div>
          </div>
        );
      }
}