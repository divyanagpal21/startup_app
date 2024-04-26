import React from 'react';
import { Data } from '../assets/Data';

const Results = () => {
  return (
    <div>
      <div>
        <h1>Overview</h1>
        <h2>{Data.overview}</h2>
      </div>
      <div>
        <h1>Avatar</h1>
        <h2>{Data.avatar}</h2>
      </div>
      <div>
        <h1>targetAudience</h1>
        <ul>
            {Data.targetAudience.map(
                ((audience, index) => (
                    <li key={index}>{audience}</li>
                ))
            )}
        </ul>
      </div>

      <div>
        <h1>painPoints</h1>
        <ul>
            {Data.painPoints.map(
                ((audience, index) => (
                    <li key={index}>{audience}</li>
                ))
            )}
        </ul>
      </div>

      <div>
        <h1>Suggested Names</h1>
        <ul>
            {Data.suggestedNames.map(
                ((audience, index) => (
                    <li key={index}>{audience}</li>
                ))
            )}
        </ul>
      </div>

      <div>
        <h1>Color Pallete</h1>
        <ul>
            {Data.website_ui.color_palette.map(
                ((audience, index) => (
                    <li key={index}>{audience}</li>
                ))
            )}
        </ul>
      </div>

      <div>
        <h1>typography</h1>
        <ul>
            {Data.website_ui.typography.map(
                ((audience, index) => (
                    <li key={index}>{audience}</li>
                ))
            )}
        </ul>
      </div>

    </div>




  )
}

export default Results
