import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from '../Config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        isLoggedIn();
    }, []);
    const register = (fullName,email,bio,fishingExperience, password) => {
        setIsLoading(true);

        axios
            .post(`${BASE_URL}/register`, {
                fullName,email,bio,fishingExperience, password
            })
            .then(res => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setIsLoading(false);
                console.log(userInfo);
            })
            .catch(e => {
                console.log(`register error ${e}`);
                setIsLoading(false);
            });
    };

    const login = (email, password) => {
        setIsLoading(true);

        let userInfo = AsyncStorage.getItem('userInfo');
        axios
            .post(`${BASE_URL}/login`, {
                email,
                password,
            })
            .then(res => {
                let userInfo = res.data;
                console.log(userInfo);
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setIsLoading(false);
            })
            .catch(e => {
                console.log(`login error ${e}`);
                setIsLoading(false);
            });
    };

    const logout = () => {
        setIsLoading(true);

        axios
            .post(
                `${BASE_URL}/logout`,
                {},
                {
                    headers: {Authorization: `Bearer ${userInfo.access_token}`},
                },
            )
            .then(res => {
                console.log(res.data);
                AsyncStorage.removeItem('userInfo');
                setUserInfo({});
                setIsLoading(false);
            })
            .catch(e => {
                console.log(`logout error ${e}`);
                setIsLoading(false);
            });
    };

    const isLoggedIn = async () => {
        try {

            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);
            console.log(userInfo);

            if (userInfo) {
                setUserInfo(userInfo);
            }

        } catch (e) {
            console.log(`is logged in error ${e}`);
        }
    };



    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userInfo,
                register,
                login,
                logout,
            }}>
            {children}
        </AuthContext.Provider>
    );
};