
let { industry, designPref, startupDescription, usp, Avatar } = require('./Export');

console.log('Industry:', industry);
console.log('Design Preference:', designPref);
console.log('Startup Description:', startupDescription);
console.log('USP:', usp);
console.log('Avatar:', Avatar);

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyBAOAHW2VCxTeq6urcf-ea98Gx69vD_XaA");

async function run() {
  // For text-only input, use the gemini-pro model
//   const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI("AIzaSyBAOAHW2VCxTeq6urcf-ea98Gx69vD_XaA");
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

 /* const prompt = ""*/


 const parts = [
  {
    text: `prompt - You are a Product Manager at a MNC and you are given a task to make a full blown project structure for a given idea which is a bakery company

    Develop a plan which consist of  - 
    
    NOTE : before suggesting answer for each of these requirements think what is the audience for the product, what should be the tone of the company while marketing it's product, should the business be more creative or professional in it's approach to attract customers. 
    
    - overview of the business idea, what is the business idea, what is the problem it is solving, what is the USP of the business
    - target audience ( make a list of target audience, seperated by commas, atleat 4)
    -suggested names for the business (total number of suggestions should be in mutliples of 4)
    - current industry trends in India and in US/Europe
    - primary pain points of users in this domain, atleast 4 pain points in an array
    - the database schema structure for the business in this domain, create this schema in seperate tables for each property. 
    - suggested typography [ suggest 2-4 typographies for each business idea, pertaining to the fact how much professional / goofy / kinky the idea is ] , and color scheme [ recommend atleast 2 color palletes with 5 colors each and in each color pallete should be of only one color with subsequent colors in pallete having an opacity of -20% each ] for application/website
    - a list of required features in the prototype [ atleast recommend 4 features which a business should offer to its users ]
    - competitor analysis suggest some real big brands who are already key players in this domain, and help entrepreneur understand the competitive landscape of the industry in which they want to venture, for example Airbnb, Trivago, makemytrip is for hotel booking, Zomato, Swiggy, Uber eats for food delivery, Hindustan Unilever for FMCG products, and think of all other huge MNCs who can help us in understanding the industry.  atleast 3 competition brands Include their competitor analysis [ list the unique selling points of the big brand competitors, compare their pricing, promotion,product, their shortcomings, user complaints and praises ]   
    -SWOT analysis [ suggest 4-5 points for each strengths, weaknesses, opportunities and threats separately to analyze the business in terms of customer experience, sales strategy, pricing strategy, brand positioning, product viability, search engine requests for similar demand ] 
    -According to the current financial capital of the user that is 500000 capital in hand , map out a trajectory for the user so that he/she can set up the startup along with presenting distribution of resources to different departments and the need for the user to attract VC investment and other capital raising techniques.
    -List out all the VC Firms that can be approached with this particular idea looking for funding and mentorship over both resources and plans along with their description(atleast 4)
	  -List out all the financial aids in India , along with bank schemes that offer loans at low rates of interest with other financial benefits (atleast 5)
	  -List out all the ways that the company can employ so that they become bootstrapped.
    - Carbon_footprints_from_different_operations [ suggest integral values with unit in kg or tonnes of CO2 equivalent per unit each for different operations of the business venture like energy, fuel , resource consumption, transportation and industrial and commercial processes . suggest potential reasons for generating carbon footprint in this business] 
    - a list of points suggesting measures to reduce carbon footprints and suggest sustainable measures that can be adopted by the user for business idea.
    - a list of points suggesting measures to incorporate corporate social responsibility that a company be socially accountable to itself, its stakeholders and public.
    
    
    
    develop all of this in Tabular form. Add any other information which you think any entrepreneur or business owner should keep in mind while starting to work on an idea.
    
    Generate response in JSON format, like below: 
    
    output : {
    overview : "", 
    target_audience : "" , 
    // target audience is an array of strings of minimum 4 strings. all strings are target audience.
    trajectory:"",
    VC_Firms:"",
    //VC_Firms is an array of strings of minimum 4 strings. All strings are distinguished VC Firms with a good history of investing.
    Financial_Aids:"",
    //Financial_Aids is an array of strings of minimum 5 strings . All strings are financial aid schemes provided by the government along with plans defined by the bank to alleviate financial burden over customers.
    Bootstrap_Methods:"",
    //Bootstrap_Methods is an array of strings of minimum 3 strings. All strings are methods by which a company can make themselves bootstrap and self-funded
    industry_trends : {
    india: "", 
    // this will be a string of minimum 26 characters
    us_europe: "", 
    // this will be a string of minimum 26 characters
    },  
    
    pain_points_of_user: "", 
    // pain_points is an array of strings of minimum 70 characters each. ensure it is an array of strings.
    database _schema: [
    // this is a array of objects of category and its properties  for which we require db table

    // and so on ........
    ], 
    website_ui : [
    typography : [
    // object array with different typographies as strings, 
    ], 
    color_pallete : [
    // object array with different color codes as strings, 
    ],
    ], 
    suggested_names : array of strings
    
    required_features : [
     " ", 
     " ",
     " ",
    
    // required_features is an object array of strings with minimum 50 characters
    ], 
    competitor_analysis : [{},{},{}] // competitor_analysis is an array of objects with each object about a real competitor brand and their complete analysis. mention atleast 2 similar brands.
    
    carbon_fp_reasons : "",
    //carbon footprints is an array of strings of minimum 4 points each
    
        sustainable _measures_to_reduce_carbon_footprints:””,
    //sustainable _measures_to_reduce_carbon_footprints is an array of strings of minimum 70 characters each
    
        measures_for_corporate _social_responsibility:””,
    // measures_for_corporate _social_responsibility is an array of strings of minimum 70 characters each
       SWOT_analysis : {
        // object array with different strengths, weaknesses, opportunities and threats as strings, 
        }
    
    

    give the output in JSON format strictly. your output should be strictly of the following type : 
   {
      overview: string,
      database_schema : {
          category : string,
          properties : string[]
      }[],
      industry_trends : {
          india : string,
          us_europe : string
      },
      pain_points_of_user : string[],
      trajectory:string,
      VC_Firms:string[],
      Financial_Aids:string[],
      Methods_To_Bootstrap:string[],
      required_features : string[],
      target_audience : string[],
      website_ui : {
          color_pallete : string[][],
          typography : string[]
      }
      suggested_names : string[],
    
      swot_analysis : {
      strengths : string[],
      weaknesses: string[],
      opportunities: string[],
      threats : string[],   
      },
  
    measures_for_corporate_social_responsibility : string[],
      carbon_fp_reasons : string[],
      sustainable_measures_to_reduce_carbon_footprints: string[],
    competitor_analysis : {name : string,
      "USP": string,
          "pricing_strategy": string,
          "promotion_strategy": string,
          "product_strategy": string,
          "user_complaints" : string,
          "shortcomings": string,
          "user_praises": string
    }[]
  }
    the json should not contain any non json parsable character.  it should strictly follow the given type Project. name the properties exactly the same. no spelling mistake should be there. check 2 times`,
  },
];





const result = await model.generateContent({
  contents: [{ role: "user", parts}],
  
});

//   const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  
  console.log(text);
}



run();