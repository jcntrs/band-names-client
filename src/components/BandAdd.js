import React from 'react';

const BandAdd = () => {
    return (
        <>
            <h3>Agregar Banda</h3>
            <form>
                <input
                    className="form-control"
                    placeholder="Nuevo nombre de banda"
                />
            </form>
        </>
    );
}

export default BandAdd;