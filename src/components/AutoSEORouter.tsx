import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DynamicSEOGenerator from './DynamicSEOGenerator';
import { dutchCities, eventTypes } from '../data/dutchCities';

const AutoSEORouter = () => {
  return (
    <Routes>
      {/* Generate routes for all Dutch cities */}
      {dutchCities.map(city => {
        const citySlug = city.name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
        
        return (
          <React.Fragment key={citySlug}>
            {/* Basic city DJ page */}
            <Route 
              path={`/dj-${citySlug}`} 
              element={<DynamicSEOGenerator city={citySlug} />} 
            />
            
            {/* City + event type combinations */}
            {eventTypes.map(event => (
              <React.Fragment key={`${citySlug}-${event.name}`}>
                <Route 
                  path={`/dj-${event.name}-${citySlug}`} 
                  element={<DynamicSEOGenerator city={citySlug} eventType={event.name} />} 
                />
                <Route 
                  path={`/${event.name}-dj-${citySlug}`} 
                  element={<DynamicSEOGenerator city={citySlug} eventType={event.name} />} 
                />
              </React.Fragment>
            ))}
          </React.Fragment>
        );
      })}
    </Routes>
  );
};

export default AutoSEORouter;