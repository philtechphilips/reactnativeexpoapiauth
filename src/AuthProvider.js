import React, {useEffect, useState} from 'react'
import * as SecureStore from 'expo-secure-store'
import api from './util/api'
import { useNavigation } from '@react-navigation/native';

export const AuthContext = React.createContext({})

export const AuthProvider = ({children}) => {
    const [user, setUser]   = useState(null)
    const [error, setError] = useState(null)
    const navigation = useNavigation();

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(null)
            }, 5000)

            return () => clearTimeout(timer)
        }
    }, [error])


    const register = (name, email, password, password_confirmation) => {
        api().post('/register', {
            name,
            email,
            password,
            password_confirmation,
            device_name: 'mobile',
        }).then(response => {
            const userResponse = {
                id: response.data.user.id,
                email: response.data.user.email,
                name: response.data.user.name,
                token: response.data.token,
            }

            setUser(userResponse)
            setError(null)

            SecureStore.setItemAsync('user', JSON.stringify(userResponse))
        }).catch(({errors}) => {
            console.log(errors)
            setError(errors[0])
        })
    }


    const logIn = (email, password) => {
        api().post('/auth/token', {
            email,
            password,
            device_name: 'mobile',
        }).then(response => {
            const userResponse = {
                id: response.data.user.id,
                email: response.data.user.email,
                name: response.data.user.name,
                token: response.data.token,
            }

            setUser(userResponse)
            setError(null)

            SecureStore.setItemAsync('user', JSON.stringify(userResponse))
        }).catch(({errors}) => {
            setError(errors[0])
        })
    }

    const passwordForgot = (email) => {
        api().post('/forgot-password', {
            email,
        }).then(response => {
            navigation.navigate('ForgotPasswordMessage');
            setError(null)
        }).catch(({errors}) => {
            setError(errors[0])
        })
    }


    const logOut = () => {
        api({token: user.token}).delete('/auth/token').then(() => {
            setUser(null)

            SecureStore.deleteItemAsync('user')
            
        }).catch(({errors}) => {
            setError(errors[0])
        })
    }

    return (
        <AuthContext.Provider value={{user, setUser, error, logIn, logOut, register, passwordForgot}}>
            {children}
        </AuthContext.Provider>
    )
}