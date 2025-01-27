import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admin.css';

export default function AdminPanel() {
    const [formData, setFormData] = useState({
        origin: '',
        destination: '',
        departureDate: '',
        arrivalDate: '',
        price: '',
        departureHour: '',
        arrivalHour: '',
        idAirline: '',
    });
    const [airlines, setAirlines] = useState([]);
    const [stats, setStats] = useState({ totalAirlines: 0, topAirlines: [] });

    useEffect(() => {
        axios.get('http://localhost:3000/api/airlines')
            .then(response => setAirlines(response.data))
            .catch(error => console.error('Error al obtener las aerolíneas:', error));

        axios.get('http://localhost:3000/api/statistics')
            .then(response => setStats(response.data))
            .catch(error => console.error('Error al obtener estadísticas:', error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3000/api/flights', formData);
            alert('Vuelo creado exitosamente');
            setFormData({ ...formData, price: '', departureHour: '', arrivalHour: '', idAirline: '' });
        } catch (error) {
            console.error('Error al crear vuelo:', error.response ? error.response.data : error.message);
            alert('Error al crear vuelo');
        }
    };

    return (
        <div className="admin-container">
            <div className="admin-box">
                <h2>Panel de administración</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="origin" placeholder="Origen" value={formData.origin} onChange={handleChange} required />
                    <input type="text" name="destination" placeholder="Destino" value={formData.destination} onChange={handleChange} required />
                    <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} required />
                    <input type="date" name="arrivalDate" value={formData.arrivalDate} onChange={handleChange} required />
                    <input type="number" name="price" placeholder="Precio" value={formData.price} onChange={handleChange} required />
                    <input type="time" name="departureHour" value={formData.departureHour} onChange={handleChange} required />
                    <input type="time" name="arrivalHour" value={formData.arrivalHour} onChange={handleChange} required />
                    <select name="idAirline" value={formData.idAirline} onChange={handleChange} required>
                        <option value="">Seleccione una aerolínea</option>
                        {airlines.map((airline) => <option key={airline.id} value={airline.id}>{airline.name}</option>)}
                    </select>
                    <button type="submit">Añadir vuelo</button>
                </form>

                <div className="stats">
                    <h3>Estadísticas</h3>
                    <p>Aerolíneas registradas: {stats.totalAirlines}</p>
                    <h4>Aerolíneas con más reservas:</h4>
                    <ul>
                        {stats.topAirlines.map((airline, index) => (
                            <li key={index}>{airline.name}: {airline.reservations} reservas</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
