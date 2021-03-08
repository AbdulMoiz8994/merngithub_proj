import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {

    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        ShowClearBtn: PropTypes.bool.isRequired,
    }

    onChangeFunc = (e) => {
        // this.setState({ text: e.target.value }) we can also write like this but this is only use for one input field which is name="text" 
        // In from we have mutiple field so we try to below method  

        //this method is used to ^ dynamically change state  
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmitFunc = (e) => {
        e.preventDefault()
        // console.log(this.state.text)
        //we are passing data via props
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' })
    }
    // clearFunction = () => {
    //     this.setState({})
    // }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmitFunc}>
                    <input type="text" name="text" value={this.state.text} placeholder="Search Github User" onChange={this.onChangeFunc} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {this.props.ShowClearBtn && (
                    <button className="btn  btn-block" onClick={this.props.clearUsers} >Clear</button>
                )}
            </div>
        )
    }
}

export default Search


// import React, { useRef, useEffect } from 'react'

// const Search = () => {

//     const inputText = useRef(null);
//     useEffect(() => {
//         inputText.current.focus()

//     }, [])
//     return (
//         <div>
//             <form method="post">
//                 <input ref={inputText} type="text" name="text" placeholder="Search GitHub Users" />
//                 <input type="button" value="search" className="btn btn-dark btn-block" />
//             </form>
//         </div>
//     )
// }

// export default Search
