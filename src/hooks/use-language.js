import { dictionaryList } from './App.helpers';
import { useState, useEffect } from 'react';

const storedLanguage = window.localStorage.getItem('user-lang');

export const useLanguage = (selectedLanguage = 'en') => {

    const [dictionary, setDictionary] = useState();
    const [userLanguage, setUserLanguage] = useState(storedLanguage || 'en');

    
    useEffect(() => {

        setUserLanguage(selectedLanguage);
        window.localStorage.setItem('user-lang', selectedLanguage);

        
        const languageDictionary = dictionaryList[userLanguage];
        setDictionary(languageDictionary);

    }, [selectedLanguage, userLanguage]);

    
    return dictionary;
}