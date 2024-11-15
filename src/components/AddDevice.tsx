
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../../config'

const AddDevice = () => {
    const [name, setName] = useState('');
    const [storage, setStorage] = useState('');
    const [model, setModel] = useState('');
    const navigate = useNavigate();
    const apiUrl = config.apiBaseUrl;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newDevice = { name, model, storage };

        try {
            await axios.post(`${apiUrl}/devices`, newDevice);
            navigate('/'); 
        } catch (error) {
            console.error('Error adding device', error);
        }
    };

   

    return (
        <div className="form-container">
           
            <form className="form" onSubmit={handleSubmit}>
            <h2 className="form-title">Add Device</h2>
                <div>
                    <label  className="form-label">Name:</label>
                    <input 
                     className="form-input"
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div>
                    <label  className="form-label">Model:</label>
                    <input 
                     className="form-input"
                        type="text" 
                        value={model} 
                        onChange={(e) => setModel(e.target.value)} 
                    />
                </div>
                <div>
                    <label  className="form-label">Storage:</label>
                    <input 
                     className="form-input"
                        type="text" 
                        value={storage} 
                        onChange={(e) => setStorage(e.target.value)} 
                    />
                </div>
                <div className='form-buttons'>
                <button className="form-button" type="submit">Add Device</button>
                <button 
                        type="button" 
                        className="form-button form-button-back" 
                        onClick={ () => { navigate(-1)}}
                    >
                        Go Back
                    </button>
                    </div>
            </form>
        </div>
    );
};

export default AddDevice;