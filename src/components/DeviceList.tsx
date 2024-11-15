import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Device } from '../types';
import { Link } from 'react-router-dom';
import config from '../../config'


const DeviceList = () => {
    const [devices, setDevices] = useState<Device[]>([]);
   
    useEffect(() => {
        
        const fetchDevices = async () => {
            try {
                const response = await axios.get(`${config.apiBaseUrl}/devices` );
                setDevices(response.data);
            } catch (error) {
                console.error('Error fetching devices', error);
            }
        };

        fetchDevices();
    }, []);

    const deleteDevice = async (id: number) => {
        try {
            await axios.delete(`${config.apiBaseUrl}/devices/${id}`);
            setDevices(devices.filter(device => device.id !== id));
        } catch (error) {
            console.error('Error deleting device', error);
        }
    };

    
    return (
        <div className='list-device'>
            <h2 >Device List</h2>
            
            <Link className="add-link" to="/add-device">Add New Device</Link>
            
            <table className='mi-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Storage</th>
                        <th>Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {devices.map((device) => (
                        <tr key={device.id}>
                           
                            <td>{device.id}</td>
                            <td>{device.name}</td>
                            <td>{device.model}</td>
                            <td>{device.storage}</td>
                            <td className="action-cell">
                            <Link className="edit-link" to={`/edit-device/${device.id}`}>Edit</Link>
                            <button className="delete-button" onClick={() => deleteDevice(device.id)}>Delete</button>
                            </td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        
        </div>
    );
};

export default DeviceList;