import { addNavigationHelpers, NavigationActions, TabNavigator, StackNavigator, StackActions } from 'react-navigation';
import thunk from 'redux-thunk';
import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { debounce } from 'lodash';
import axios from 'axios';

export {
    thunk, addNavigationHelpers, NavigationActions, TabNavigator, StackNavigator, StackActions, PropTypes, connect, Provider, combineReducers,
    createStore, applyMiddleware, debounce,  axios
}

