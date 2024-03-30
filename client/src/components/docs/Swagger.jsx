import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import apiSpec from '../../data/openapi.json';
import './docs.css'

const Documentation = () => {
  return (
    <div id='docsContainer'>
        <div id='SwaggerContainer'>
            <SwaggerUI spec={apiSpec} />
        </div>
    </div>
  );
};

export default Documentation;