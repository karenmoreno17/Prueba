import React from 'react';

export default function FlightsList({ flights, onSelectFlight }) {
    return (
        <table className="flights-table">
            <thead>
                <tr>
                    <th>Aerolínea</th>
                    <th>Origen</th>
                    <th>Destino</th>
                    <th>Salida</th>
                    <th>Llegada</th>
                    <th>Precio</th>
                    <th>Seleccionar</th>
                </tr>
            </thead>
            <tbody>
                {flights.map((flight) => (
                    <tr key={flight.id}>
                        <td>{flight.Airline?.name || 'No disponible'}</td>
                        <td>{flight.origin}</td>
                        <td>{flight.destination}</td>
                        <td>{flight.departureDate}</td>
                        <td>{flight.arrivalDate}</td>
                        <td>${flight.price}</td>
                        <td>
                            <button className="button2" onClick={() => onSelectFlight(flight)}>
                                Seleccionar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
