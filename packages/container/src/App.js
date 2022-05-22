import React from 'react';
// import { mount } from 'marketing/MarketingApp';
import MarketingApp from './components/MarketingApp';

// console.log(mount);
// mount here is a function that takes a reference to an html element
// because both container and marketing apps are in react it would be a lot
// easier if marketing would export a component instead of a function

export default () => {
    return (
    <MarketingApp />
    )
}