// FormComponent.jsx
import React, { useState } from 'react';
import '../css/NewOwner.css'; // Import CSS stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector,useDispatch } from 'react-redux';
import { changeAvatar,changeDesign,changeIndustry,changeStartUpDesc,changeUsp } from '../redux';


const FormComponent = () => {
  const startupDescription = "sex0;";
  // const [industry, setIndustry] = useState('');
  // const [designPref, setDesignPref] = useState('');
  // const [startupDescription, setStartupDescription] = useState('');
  // const [usp, setUSP] = useState('');
  // const [Avatar, setAvatar] = useState('');
  const avatar = useSelector(state => state.avatar);
  const design = useSelector(state => state.design);
  const usp = useSelector(state => state.usp);
  const startupDesc = useSelector(state => state.startupDesc);
  const industry = useSelector(state => state.industry);
  const dispatch = useDispatch();

  // changeAvatar('yes');

  const handleIndustryChange = (event) => {
  };

  const handleDesignPrefChange = (event) => {
    // setDesignPref(event.target.value);
  };

  const handleStartupDescriptionChange = (event) => {
    // setStartupDescription(event.target.value);
  };

  const handleUSPChange = (event) => {
    // setUSP(event.target.value);
  };

  const handleAvatarChange = (event) => {
    dispatch(changeAvatar(event.target.value));
    
  };

  const handleButtonClick = () => {
    if(startupDescription === ' '){
      alert("please enter description");
    } 
    // else{
    //   window.location.href = '/Results'; // Redirect to "/results" page
    // }
    console.log(startupDescription);
  };

  return (
    <form className="form">
      <h1 style = {{color:'white'}}>sex {avatar}</h1>
      <div className="form-group">
        <label className="form-label">Industry:</label>
        <div className="radio-group">
          <input type="radio" id="healthcare" name="industry" value="healthcare" onChange={handleIndustryChange} />
          <label htmlFor="healthcare">Healthcare</label>

          <input type="radio" id="education" name="industry" value="education" onChange={handleIndustryChange} />
          <label htmlFor="education">Education</label>

          <input type="radio" id="finance" name="industry" value="finance" onChange={handleIndustryChange} />
          <label htmlFor="finance">Finance</label>

          <input type="radio" id="tech" name="industry" value="tech" onChange={handleIndustryChange} />
          <label htmlFor="tech">Tech</label>

          <input type="radio" id="other" name="industry" value="other" onChange={handleIndustryChange} />
          <label htmlFor="other">Other</label>
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Design Preference:</label>
        <div className="radio-group">
          <input type="radio" id="minimalistic" name="designPref" value="minimalistic" onChange={handleDesignPrefChange} />
          <label htmlFor="minimalistic">Minimalistic</label>

          <input type="radio" id="modern" name="designPref" value="modern" onChange={handleDesignPrefChange} />
          <label htmlFor="modern">Modern</label>

          <input type="radio" id="vintage" name="designPref" value="vintage" onChange={handleDesignPrefChange} />
          <label htmlFor="vintage">Vintage</label>

          <input type="radio" id="corporate" name="designPref" value="corporate" onChange={handleDesignPrefChange} />
          <label htmlFor="corporate">Corporate</label>

          <input type="radio" id="playful" name="designPref" value="playful" onChange={handleDesignPrefChange} />
          <label htmlFor="playful">Playful</label>
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="startupDescription">Describe your startup:</label>
        <textarea id="startupDescription" className="form-textarea" value={startupDescription} onChange={handleStartupDescriptionChange} />
      </div>
      <div className="form-group">
        <label className="form-label">USP:</label>
        <div className="radio-group">
          <input type="radio" id="innovative" name="usp" value="innovative" onChange={handleUSPChange} />
          <label htmlFor="innovative">Innovative</label>

          <input type="radio" id="cost-effective" name="usp" value="cost-effective" onChange={handleUSPChange} />
          <label htmlFor="cost-effective">Cost-effective</label>

          <input type="radio" id="user-friendly" name="usp" value="user-friendly" onChange={handleUSPChange} />
          <label htmlFor="user-friendly">User-friendly</label>

          <input type="radio" id="high-quality" name="usp" value="high-quality" onChange={handleUSPChange} />
          <label htmlFor="high-quality">High-quality</label>

          <input type="radio" id="customizable" name="usp" value="customizable" onChange={handleUSPChange} />
          <label htmlFor="customizable">Customizable</label>
        </div>
        <div className="form-group">

        <label className="form-label">Avatar:</label>
        <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" value = "SnoopDOGG" onChange={handleAvatarChange}/>
        <label class="btn btn-secondary snoop avatar" for="option4"></label>

        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" value = "slapSmith" onChange={handleAvatarChange}/>
        <label class="btn btn-secondary williams avatar" for="option2"></label>

        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" value = "ye" onChange={handleAvatarChange}/>
        <label class="btn btn-secondary kanye avatar" for="option1"></label>

        <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" value = "guruji" onChange={handleAvatarChange}/>
        <label class="btn btn-secondary guruji avatar" for="option3"></label>
        </div>
        <div className="text-center">
              <div>
                <button type="button" className="btn btn-primary btn-lg" onClick={handleButtonClick}>Submit</button>
              </div>
              
              {console.log(avatar)}
            </div>
      </div>
    </form>
  );
};

export default FormComponent;
