
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import config from '../../config'
import '../Form.css'

const EditDevice = () => {
    const { id } = useParams<{ id: string }>();
    const [name, setName] = useState('');
    const [model, setModel] = useState('');
    const [storage, setStorage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDevice = async () => {
            try {
                const response = await axios.get(`${config.apiBaseUrl}/devices/${id}`);
                setName(response.data.name);
                setModel(response.data.model);
                setStorage(response.data.storage);
            } catch (error) {
                console.error('Error fetching device', error);
            }
        };

        fetchDevice();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const updatedDevice = { name, model, storage };

        try {
            await axios.put(`${config.apiBaseUrl}/devices/${id}`, updatedDevice);
            navigate('/');
        } catch (error) {
            console.error('Error updating device', error);
        }
    };

    return (
        <div className="form-container">
    <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-title">Edit Device</h2>
        <div>
            <label className="form-label">Name:</label>
            <input 
                className="form-input"
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
        </div>
        <div>
            <label className="form-label">Model:</label>
            <input 
                className="form-input"
                type="text" 
                value={model} 
                onChange={(e) => setModel(e.target.value)} 
            />
        </div>
        <div>
            <label className="form-label">Storage:</label>
            <input 
                className="form-input"
                type="text" 
                value={storage} 
                onChange={(e) => setStorage(e.target.value)} 
            />
        </div>
        <div className='form-buttons'>

        <button className="form-button" type="submit">Update Device</button>
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

export default EditDevice;