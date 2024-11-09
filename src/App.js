import React, { useState } from 'react';
import Form from './components/Form';
import Chart from './components/Chart';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
    const [formData, setFormData] = useState(null);

    const handleFormSubmit = (data) => {
        setFormData(data);
    };

    return (
        <div>
            <h1>Analytics Logging</h1>
            <ErrorBoundary>
                <Form onFormSubmit={handleFormSubmit} />
                {formData && <Chart formData={formData} />}
            </ErrorBoundary>
        </div>
    );
};

export default App;
