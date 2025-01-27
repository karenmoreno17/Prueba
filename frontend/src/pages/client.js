import './client.css';
import React, { useState } from 'react';
import axios from 'axios';
import FlightsList from './flightsList';

export default function Client() {


    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [filteredFlights, setFilteredFlights] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [reservationMessage, setReservationMessage] = useState('');

    const handleSelectFlight = (flight) => {
        setSelectedFlight(flight);
        alert(`Has seleccionado el vuelo de ${flight.Airline?.name}`);
    };

    const handleReserveFlight = async (flightId) => {
        const userId = localStorage.getItem('userId');
        try {
            const response = await axios.post('http://localhost:3000/api/reserve', {
                flightId,
                userId,
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Error al realizar la reserva:', error);
            alert('Hubo un error al realizar la reserva.');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setReservationMessage('');

        try {
            const response = await axios.get('http://localhost:3000/api/flights/search', {
                params: {
                    origin,
                    destination,
                    departureDate,
                    arrivalDate,
                },
            });
            setFilteredFlights(response.data);
        } catch (error) {
            console.error('Error al buscar vuelos:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="customer-container">
            <div className="customer-box">
                <h2 className="title">Bienvenido a su plataforma</h2>
                <form className="search-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Origen:</label>
                        <input
                            type="text"
                            name="origin"
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Destino:</label>
                        <input
                            type="text"
                            name="destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Fecha de salida:</label>
                        <input
                            type="date"
                            name="departureDate"
                            value={departureDate}
                            onChange={(e) => setDepartureDate(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Fecha de llegada:</label>
                        <input
                            type="date"
                            name="arrivalDate"
                            value={arrivalDate}
                            onChange={(e) => setArrivalDate(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="search-button">
                        Buscar vuelos
                    </button>
                </form>
            </div>

            <div>
                {loading && <p>Cargando vuelos...</p>}
                {filteredFlights.length > 0 && !loading && (
                    <FlightsList flights={filteredFlights} onSelectFlight={handleSelectFlight} />
                )}

                {filteredFlights.length === 0 && !loading && (
                    <p>No se encontraron vuelos con esos parámetros.</p>
                )}

                {selectedFlight && (
                    <div className="reservation-summary">
                        <h3>Resumen de Reserva</h3>
                        <p><strong>Aerolínea:</strong> {selectedFlight.Airline?.name || 'No disponible'}</p>
                        <p><strong>Salida:</strong> {selectedFlight.departureDate}</p>
                        <p><strong>Llegada:</strong> {selectedFlight.arrivalDate}</p>
                        <p><strong>Precio:</strong> ${selectedFlight.price}</p>
                        <button className="button2" onClick={() => handleReserveFlight(selectedFlight.id)}>
                            Reservar vuelo
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}