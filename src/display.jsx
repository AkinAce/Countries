import React, { Component } from 'react';
import axios from "axios";
import './index.css';
import Icons from './images/icons.png'


class Display extends Component {
    state = {
        allCountries:"",
        currentCountry:[{"flags":{"svg":"https://flagcdn.com/ng.svg"},"coatOfArms":{"svg":"https://mainfacts.com/media/images/coats_of_arms/ng.svg"},"name":{"common":"Nigeria","official":"Federal Republic of Nigeria"},"tld":[".ng"],"currencies":{"NGN":{"name":"Nigerian naira","symbol":"₦"}},"idd":{"root":"+2","suffixes":["34"]},"capital":["Abuja"],"region":"Africa","subregion":"Western Africa","languages":{"eng":"English"},"area":923768.0,"demonyms":{"eng":{"f":"Nigerian","m":"Nigerian"}},"population":206139587}],
        search:""    
      }; 
//currentCountry:"",     

async componentDidMount() {
    const { data: allCountries } = await axios.get("data.json"); 
    this.setState({ allCountries});
}
//const randomCountry = this.getRandomCountry()
//this.setState({ allCountries, currentCountry:randomCountry });

handleRandom = () => {
    const randomCountry = this.getRandomCountry()
    if(randomCountry){
        this.setState({ currentCountry: randomCountry});
    }
}; 
    
getRandomCountry(){
    let randomCountry =[];
    randomCountry.push (this.state.allCountries[Math.floor(Math.random() * this.state.allCountries.length)])
    return randomCountry
}

handleSearch = (e) =>{
     this.setState({ search: e.target.value });
     let searchedCountry =[];
     let searchIndex = this.state.allCountries.findIndex(x =>x?.name?.common.toLowerCase().startsWith(this.state.search.toLowerCase()));     
     if (searchIndex >= 0){
         searchedCountry.push(this.state.allCountries[searchIndex]);
         this.setState({ currentCountry: searchedCountry});
     }    
}

render() { 
    let all= this.state.currentCountry[0];
    let countryCommonName = all?.name.common;
    let countryOfficialName = all?.name.official;
    let continent = all?.region;
    let subContinent = all?.subregion;
    let nationality = all?.demonyms.eng.m;
    let internet = all?.tld[0];
    
    let area_km = all?.area;
    let population_ = all?.population;
    let area = all?.area.toLocaleString();
    let population = all?.population.toLocaleString();
    let area_mile = (Math.floor(area_km/2.59)).toLocaleString();
    let density = Math.floor(population_/area_km);
    
    let flag = all?.flags.svg;
    let coatOfArms = all?.coatOfArms.svg;
    
    let capitalOne = [];
    let capitalTwo = [];
    let capitalThree = [];
    let countryCapital = all?.capital;
    if (countryCapital){
        capitalOne.push(Object.values(countryCapital)[0])
        capitalTwo.push(Object.values(countryCapital)[1])
        capitalThree.push(Object.values(countryCapital)[2])
    }

    let languagesOne = [];
    let languagesTwo = [];
    let languagesThree = [];
    let myLanguages = all?.languages;
    if (myLanguages){
        languagesOne.push(Object.values(myLanguages)[0])
        languagesTwo.push(Object.values(myLanguages)[1])
        languagesThree.push(Object.values(myLanguages)[2])
    }

    let callingCodePrefix = all?.idd.root;
    let callingCodeSuffix = all?.idd.suffixes;
    let callingCodeSuffixOne = [];
    if (callingCodeSuffix){
        callingCodeSuffixOne.push(callingCodeSuffix[0])
    }

    let currency = all?.currencies;
    let currencyCode = [];
    let currencyName = [];
    if (currency){              
        currencyCode.push(Object.keys(currency)[0])
        currencyName.push(Object.values(currency)[0].name);
    }

    
    {/*
        <button onClick={this.handleRandom}>Random</button> <br />

           <input type="text" onChange={this.handleSearch} />
        
        

            {countryCommonName} <br />
            {countryOfficialName} <br />
            {countryCapital} <br />
            {currencyCode} <br />
            <div className='currency'>
                {currencyName} <br />
                </div>
            {continent} <br />
            {subContinent} <br />
            {nationality} <br />
            {callingCodePrefix}{callingCodeSuffixOne} <br />
            {internet} <br />
            {population} <br />
            {area} km<sup>2</sup> ({area_mile} mi<sup>2</sup>) <br />
            {density} People per km<sup>2</sup> <br />
            <h1>
                Language(s): 
            </h1>                   
            <div>

                {languagesOne}{languagesTwo.toString() ? ',' :'.' } {languagesTwo}{(!languagesThree.toString() && languagesTwo.toString()) ? '.' :'' }{languagesThree.toString() ? ',' :'' } {languagesThree}{languagesThree.toString() ? '.' :'' }
            </div>
            
                
            <img src={flag} alt='Flag' />
            <img src={coatOfArms} alt="Coat of Arms" />*/}
    

return (    
        <div className='landing'>
            <div className="top"><a href="."><h1>NordEstSudOuest</h1></a></div>
            <div className="content-flex">
                <div className='content-image'>
                    <img src={Icons} alt="" id='content-avi'/>
                    </div>  
                <div className="content-box">
                    <div className="country-left">
                        <div className="country-control">
                            <button onClick={this.handleRandom} className="random-button" >Random Country</button>
                            <input type="text" onChange={this.handleSearch} className="search-bar" placeholder='Look up your Country!' />
                        </div>
                        <div className="country-info">
                            <h3 className="country-heading">
                                {countryCommonName}
                            </h3>
                            <div className="main-text">
                                <div className="country-keys">
                                    <div className="key"id='one'>
                                        <h4>Official Name:</h4>
                                    </div>
                                    <div className="key">
                                        <h4>Capital:</h4>
                                    </div>
                                    <div className="key">
                                        <h4>Nationality:</h4>
                                    </div>
                                    <div className="key">
                                        <h4>Currency:</h4>
                                    </div>
                                    <div className="key">
                                        <h4>Continent:</h4>
                                    </div>
                                    <div className="key">
                                        <h4>Region:</h4>
                                    </div>
                                    <div className="key">
                                        <h4>Population:</h4>
                                    </div>
                                    <div className="key">
                                        <h4>Area:</h4>
                                    </div>
                                    <div className="key">
                                        <h4>Density:</h4>
                                    </div>
                                    <div className="key">
                                        <h4>Language(s):</h4>
                                    </div>
                                    <div className="key">     
                                        <h4>Dialing Code:</h4>
                                    </div>
                                    <div className="key">
                                        <h4>Internet Domain:</h4>                                   
                                    </div>
                                </div>
                                <div className="country-values">
                                    <div className="value" id='two'>                                                                        
                                        <h4>{countryOfficialName}</h4>
                                    </div>
                                    <div className="value">                                                                        
                                        <h4>{capitalOne.toString() ? capitalOne:"."}{capitalTwo.toString() ? ',' :'' } {capitalTwo}{(!capitalThree.toString() && capitalTwo.toString()) ? '.' :'' }{capitalThree.toString() ? ',' :'' } {capitalThree}{capitalThree.toString() ? '.' :'' }</h4>
                                    </div>
                                    <div className="value">                                                                        
                                        <h4>{nationality}</h4>
                                    </div>
                                    <div className="value currency">                                                                        
                                        <h4>{currencyName} ({currencyCode})</h4>
                                    </div>
                                    <div className="value">                                                                        
                                        <h4>{continent}</h4>
                                    </div>
                                    <div className="value">                                                                        
                                        <h4>{subContinent ? subContinent :"."} </h4>
                                    </div>
                                    <div className="value">                                                                        
                                        <h4>{population}</h4>
                                    </div>
                                    <div className="value">                                                                        
                                        <h4>{area} km<sup>2</sup> ({area_mile} mi<sup>2</sup>)</h4>
                                    </div>
                                    <div className="value">                                                                        
                                        <h4>{density <=0 ? "Less than 0" : density} People per km<sup>2</sup></h4>
                                    </div>
                                    <div className="value">                                                                        
                                        <h4>{languagesOne}{languagesTwo.toString() ? ',' :'' } {languagesTwo}{(!languagesThree.toString() && languagesTwo.toString()) ? '.' :'' }{languagesThree.toString() ? ',' :'' } {languagesThree}{languagesThree.toString() ? '.' :'' }</h4>           
                                    </div>
                                    <div className="value">                                                                        
                                        <h4>{callingCodePrefix}{callingCodeSuffixOne}</h4>
                                    </div>
                                    <div className="value">                                                                        
                                        <h4>{internet}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="country-images">
                        <div className="flag">
                            <img src={flag} alt='Flag' className='country-flag' />
                        </div>
                        <div className="coat">
                        <img src={coatOfArms} alt="Coat of Arms"className='country-coat' /> 
                        </div>
                    </div>    
                </div>
            </div>      
        </div>           
        );
    }
}
 
export default Display;