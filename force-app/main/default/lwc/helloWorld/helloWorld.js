import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    name // undefined
    age=30;
    fullname = "Salesforce India"
    showData = false
    details={
        
    }

    useList=[34,56,78];
}