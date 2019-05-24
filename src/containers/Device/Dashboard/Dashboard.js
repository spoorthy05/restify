import React, { Component } from 'react';
import DeviceDetails from '../../../components/Device/Dashboard/DeviceDetails';
import axios from '../../../axios-device';
import SearchBar from '../../../components/Device/Dashboard/SearchBar';
import Readings from '../../../components/Device/Dashboard/Readings';
import Modal from '../../../components/UI/Modal/Modal';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deviceData: {},
            filterText: '',
            loading: false,
            modalMessage: 'Updating the status',
            error: false
        };
      }

    initDeviceData = () => {
        
        axios.get('/device')
        .then(response => {
            console.log('response ', response.data);
            this.setState({deviceData: response.data, loading:false});
        })
        .catch(error => {
           this.props.history.push({
               pathname: '/error',
               state: {
                errorMessage: 'Something is not right. Please try after sometime'
              }});
        });
    }

    onStatusChange = (status, device) => {
        this.setState((prevState) => {return {loading: !prevState.loading, modalMessage: 'Updating the status'}});
        const path = '/device/' + device + '?active=' + status;
        axios.patch(path)
            .then(response => {
               this.initDeviceData();
            })
            .catch(error => {
               console.log(error.response.status);
               this.setState({modalMessage: 'An unexpected error occurred! Try after sometime', error: true});
            });
    }
    
    onChangeOfFilter = (filterText) => {
        this.setState({filterText: filterText});
    }

    closeModal = () => {
        this.setState({ loading:false, error:false });
    }

    componentDidMount(){
        this.initDeviceData();
    }

    render(){
        return(
            <React.Fragment>
                <Readings data={this.state.deviceData}/>
                <SearchBar placeHolderText="Search for Device Reading Names" filterText={this.state.filterText} 
                        filterOnchange={(filterInputValue) => this.onChangeOfFilter(filterInputValue)}/>
                <div className="Device-Dashboard">
                    <DeviceDetails data={this.state.deviceData} filterText={this.state.filterText} 
                        onStatusChange={(event, device) => this.onStatusChange(event, device)}/>
                </div>
                <Modal show={this.state.loading} error={this.state.error}
                        modalClosed={this.closeModal}>{this.state.modalMessage}</Modal>
            </React.Fragment>
            )      
    }

}

export default Dashboard;